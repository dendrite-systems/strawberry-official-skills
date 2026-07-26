import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const metadataFilename = 'strawberry-metadata.json'
const allowedDifficulties = new Set(['straightforward', 'moderate', 'advanced'])
const allowedIcons = new Set([
  'binoculars',
  'books',
  'calendar',
  'chart',
  'code',
  'files',
  'inbox',
  'lightbulb',
  'people',
  'presentation',
  'receipt',
  'sparkles'
])
const allowedTags = new Set(['good-first-skill'])
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const errors = []

function fail(file, message) {
  errors.push(`${path.relative(root, file)}: ${message}`)
}

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch (error) {
    fail(file, `invalid JSON (${error.message})`)
    return null
  }
}

async function findFiles(directory, filename) {
  const entries = await readdir(directory, { withFileTypes: true })
  const matches = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      matches.push(...(await findFiles(entryPath, filename)))
      continue
    }

    if (entry.name === filename) {
      matches.push(entryPath)
    }
  }

  return matches
}

function requireString(file, value, field) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    fail(file, `${field} must be a non-empty string`)
    return false
  }

  return true
}

function requireSlug(file, value, field) {
  if (!requireString(file, value, field)) {
    return false
  }

  if (!slugPattern.test(value)) {
    fail(file, `${field} must be a kebab-case slug`)
    return false
  }

  return true
}

function requireUniqueStrings(file, values, field) {
  if (!Array.isArray(values)) {
    fail(file, `${field} must be an array`)
    return false
  }

  if (values.some((value) => typeof value !== 'string')) {
    fail(file, `${field} must contain only strings`)
    return false
  }

  if (new Set(values).size !== values.length) {
    fail(file, `${field} must not contain duplicates`)
    return false
  }

  return true
}

function parseSkillName(markdown) {
  const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---/)
  if (!frontmatterMatch) {
    return null
  }

  const nameMatch = frontmatterMatch[1].match(/^name:\s*(.+)$/m)
  return nameMatch?.[1]?.trim() ?? null
}

function validateUseCases(file, useCases, roleIds) {
  if (!Array.isArray(useCases) || useCases.length === 0) {
    fail(file, 'useCases must contain at least one role-specific presentation')
    return
  }

  const seenRoles = new Set()

  for (const [index, useCase] of useCases.entries()) {
    const prefix = `useCases[${index}]`
    if (typeof useCase !== 'object' || useCase === null || Array.isArray(useCase)) {
      fail(file, `${prefix} must be an object`)
      continue
    }

    if (!roleIds.has(useCase.roleId)) {
      fail(file, `${prefix}.roleId references unknown role "${useCase.roleId}"`)
    } else if (seenRoles.has(useCase.roleId)) {
      fail(file, `${prefix}.roleId duplicates role "${useCase.roleId}"`)
    } else {
      seenRoles.add(useCase.roleId)
    }

    if (!Number.isInteger(useCase.weight) || useCase.weight < 0 || useCase.weight > 1000) {
      fail(file, `${prefix}.weight must be an integer from 0 to 1000`)
    }

    requireString(file, useCase.title, `${prefix}.title`)
    requireString(file, useCase.message, `${prefix}.message`)
  }
}

async function validateAudience() {
  const rolesFile = path.join(root, 'audience/role-definitions.json')
  const organizationsFile = path.join(root, 'audience/organization-definitions.json')
  const roles = await readJson(rolesFile)
  const organizations = await readJson(organizationsFile)
  const roleIds = new Set()

  if (!Array.isArray(roles)) {
    fail(rolesFile, 'must contain an array of roles')
    return roleIds
  }

  for (const [index, role] of roles.entries()) {
    const prefix = `roles[${index}]`
    if (!requireSlug(rolesFile, role?.id, `${prefix}.id`)) {
      continue
    }

    if (roleIds.has(role.id)) {
      fail(rolesFile, `${prefix}.id duplicates "${role.id}"`)
    }
    roleIds.add(role.id)
    requireString(rolesFile, role.label, `${prefix}.label`)
    requireString(rolesFile, role.userStory, `${prefix}.userStory`)
    requireUniqueStrings(rolesFile, role.keywords, `${prefix}.keywords`)
  }

  if (
    typeof organizations !== 'object' ||
    organizations === null ||
    !Array.isArray(organizations.types) ||
    !Array.isArray(organizations.sizes)
  ) {
    fail(organizationsFile, 'must contain types and sizes arrays')
    return roleIds
  }

  const organizationIds = new Set()
  for (const [index, organization] of organizations.types.entries()) {
    const prefix = `types[${index}]`
    if (requireSlug(organizationsFile, organization?.id, `${prefix}.id`)) {
      if (organizationIds.has(organization.id)) {
        fail(organizationsFile, `${prefix}.id duplicates "${organization.id}"`)
      }
      organizationIds.add(organization.id)
    }
    requireString(organizationsFile, organization?.label, `${prefix}.label`)

    if (typeof organization?.collectsSize !== 'boolean') {
      fail(organizationsFile, `${prefix}.collectsSize must be boolean`)
    }

    if (organization?.catalogRoleId && !roleIds.has(organization.catalogRoleId)) {
      fail(
        organizationsFile,
        `${prefix}.catalogRoleId references unknown role "${organization.catalogRoleId}"`
      )
    }
  }

  return roleIds
}

async function validateSkill(file, metadata, roleIds, skillIds, pluginIds) {
  if (metadata.schemaVersion !== 1) {
    fail(file, 'schemaVersion must be 1')
  }
  requireSlug(file, metadata.id, 'id')
  requireString(file, metadata.displayName, 'displayName')
  requireString(file, metadata.summary, 'summary')

  if (!['focused', 'playbook'].includes(metadata.skillType)) {
    fail(file, 'skillType must be focused or playbook')
  }
  if (!allowedIcons.has(metadata.icon)) {
    fail(file, `icon "${metadata.icon}" is not supported`)
  }
  if (!allowedDifficulties.has(metadata.difficulty)) {
    fail(file, `difficulty "${metadata.difficulty}" is not supported`)
  }

  if (requireUniqueStrings(file, metadata.tags, 'tags')) {
    for (const tag of metadata.tags) {
      if (!allowedTags.has(tag)) {
        fail(file, `tag "${tag}" is not supported`)
      }
    }
  }

  if (metadata.pluginIds !== undefined) {
    requireUniqueStrings(file, metadata.pluginIds, 'pluginIds')
  }
  if (metadata.skillIds !== undefined) {
    requireUniqueStrings(file, metadata.skillIds, 'skillIds')
  }

  validateUseCases(file, metadata.useCases, roleIds)

  if (skillIds.has(metadata.id)) {
    fail(file, `skill id "${metadata.id}" is duplicated`)
  } else {
    skillIds.set(metadata.id, { file, metadata })
  }

  const directoryName = path.basename(path.dirname(file))
  if (directoryName !== metadata.id) {
    fail(file, `directory name "${directoryName}" must match id "${metadata.id}"`)
  }

  const skillFile = path.join(path.dirname(file), 'SKILL.md')
  let markdown
  try {
    markdown = await readFile(skillFile, 'utf8')
  } catch {
    fail(file, 'adjacent SKILL.md is missing')
    return
  }

  const frontmatterName = parseSkillName(markdown)
  if (frontmatterName !== metadata.id) {
    fail(skillFile, `frontmatter name must match metadata id "${metadata.id}"`)
  }

  for (const pluginId of metadata.pluginIds ?? []) {
    pluginIds.add(pluginId)
  }
}

function validatePlugin(file, metadata, plugins) {
  if (metadata.schemaVersion !== 1) {
    fail(file, 'schemaVersion must be 1')
  }
  requireSlug(file, metadata.id, 'id')
  requireString(file, metadata.displayName, 'displayName')
  requireString(file, metadata.summary, 'summary')
  requireSlug(file, metadata.playbookSkillId, 'playbookSkillId')

  if (requireUniqueStrings(file, metadata.skillIds, 'skillIds') && metadata.skillIds.length === 0) {
    fail(file, 'skillIds must not be empty')
  }

  if (plugins.has(metadata.id)) {
    fail(file, `plugin id "${metadata.id}" is duplicated`)
  } else {
    plugins.set(metadata.id, { file, metadata })
  }

  const directoryName = path.basename(path.dirname(file))
  if (directoryName !== metadata.id) {
    fail(file, `directory name "${directoryName}" must match id "${metadata.id}"`)
  }
}

async function validateMetadata(roleIds) {
  const files = await findFiles(root, metadataFilename)
  const skillIds = new Map()
  const plugins = new Map()
  const referencedPluginIds = new Set()

  for (const file of files) {
    const metadata = await readJson(file)
    if (!metadata) {
      continue
    }

    if (metadata.kind === 'official-skill') {
      await validateSkill(file, metadata, roleIds, skillIds, referencedPluginIds)
      continue
    }
    if (metadata.kind === 'plugin') {
      validatePlugin(file, metadata, plugins)
      continue
    }

    fail(file, 'kind must be official-skill or plugin')
  }

  for (const pluginId of referencedPluginIds) {
    if (!plugins.has(pluginId)) {
      fail(root, `skill metadata references unknown plugin "${pluginId}"`)
    }
  }

  for (const [pluginId, plugin] of plugins) {
    const playbook = skillIds.get(plugin.metadata.playbookSkillId)
    if (!playbook) {
      fail(plugin.file, `playbookSkillId references unknown skill "${plugin.metadata.playbookSkillId}"`)
    } else if (playbook.metadata.skillType !== 'playbook') {
      fail(plugin.file, `playbookSkillId "${plugin.metadata.playbookSkillId}" is not a playbook`)
    }

    for (const skillId of plugin.metadata.skillIds) {
      const skill = skillIds.get(skillId)
      if (!skill) {
        fail(plugin.file, `skillIds references unknown skill "${skillId}"`)
        continue
      }

      if (!(skill.metadata.pluginIds ?? []).includes(pluginId)) {
        fail(skill.file, `pluginIds must include "${pluginId}"`)
      }
    }
  }

  for (const skill of skillIds.values()) {
    for (const skillId of skill.metadata.skillIds ?? []) {
      if (!skillIds.has(skillId)) {
        fail(skill.file, `skillIds references unknown skill "${skillId}"`)
      }
    }
  }

  return { skillIds, plugins }
}

async function validateMarketplace(plugins) {
  const file = path.join(root, '.agents/plugins/marketplace.json')
  const marketplace = await readJson(file)
  if (!marketplace || !Array.isArray(marketplace.plugins)) {
    fail(file, 'must contain a plugins array')
    return
  }

  const seenPlugins = new Set()
  for (const [index, entry] of marketplace.plugins.entries()) {
    const prefix = `plugins[${index}]`
    if (!plugins.has(entry?.name)) {
      fail(file, `${prefix}.name references unknown plugin "${entry?.name}"`)
    }
    if (seenPlugins.has(entry?.name)) {
      fail(file, `${prefix}.name duplicates "${entry?.name}"`)
    }
    seenPlugins.add(entry?.name)

    if (entry?.source?.source !== 'local') {
      fail(file, `${prefix}.source.source must be local`)
    }
    requireString(file, entry?.source?.path, `${prefix}.source.path`)
    requireString(file, entry?.category, `${prefix}.category`)
    requireString(file, entry?.policy?.installation, `${prefix}.policy.installation`)
    requireString(file, entry?.policy?.authentication, `${prefix}.policy.authentication`)
  }

  for (const pluginId of plugins.keys()) {
    if (!seenPlugins.has(pluginId)) {
      fail(file, `plugin "${pluginId}" is missing from the marketplace`)
    }
  }
}

async function validateSchemaRoles(roleIds) {
  const file = path.join(root, 'contracts/strawberry-metadata.schema.json')
  const schema = await readJson(file)
  const schemaRoles = schema?.$defs?.roleId?.enum
  if (!Array.isArray(schemaRoles)) {
    fail(file, '$defs.roleId.enum must be an array')
    return
  }

  const schemaRoleIds = new Set(schemaRoles)
  for (const roleId of roleIds) {
    if (!schemaRoleIds.has(roleId)) {
      fail(file, `role enum is missing "${roleId}"`)
    }
  }
  for (const roleId of schemaRoleIds) {
    if (!roleIds.has(roleId)) {
      fail(file, `role enum contains unknown role "${roleId}"`)
    }
  }
}

const roleIds = await validateAudience()
await validateSchemaRoles(roleIds)
const { skillIds, plugins } = await validateMetadata(roleIds)
await validateMarketplace(plugins)

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error${errors.length === 1 ? '' : 's'}:`)
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

const focusedSkillCount = [...skillIds.values()].filter(
  ({ metadata }) => metadata.skillType === 'focused'
).length
const playbookCount = skillIds.size - focusedSkillCount
console.log(
  `Validated ${focusedSkillCount} focused skills, ${playbookCount} playbook, ` +
    `${plugins.size} plugin, and ${roleIds.size} roles.`
)
