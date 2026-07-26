# Strawberry Official Skills

The public source of truth for Strawberry's result-oriented Official Skills and role Playbooks.

An Official Skill is an executable workflow that helps someone produce a concrete result. A
Playbook is also an Official Skill, but it coordinates several focused skills into a useful
progression for a role such as Sales or Recruiting.

## Why this repository exists

Every public promise should resolve to something Strawberry can actually do:

```text
valuable result
  -> Official Skill
  -> article, tutorial, or video
  -> user asks for the result naturally
  -> Strawberry finds and reads the Official Skill
  -> useful first run
  -> user adapts it into their own skill
```

Public articles and videos live in Strawberry's Editorial CMS. This repository owns executable
instructions and discovery metadata. The CMS references stable skill ids rather than copying
`SKILL.md`.

## Repository structure

```text
.agents/plugins/marketplace.json       Codex-compatible plugin marketplace
audience/                              Shared role and organization vocabulary
contracts/strawberry-metadata.schema.json
plugins/strawberry-sales/              Installable domain plugin and Sales Playbook
skills/source-customers/               Focused canonical Official Skill
scripts/validate.mjs                    Repository validation
```

Every skill directory contains:

- `SKILL.md`: portable instructions read by the agent.
- `strawberry-metadata.json`: Strawberry discovery data, role-specific use cases, difficulty,
  tags, and relationships.

The metadata does not duplicate instructions. Mutable data such as downloads, ratings, and usage
is recorded by Strawberry's API, never committed here.

## Product model

- **Official Skill** — a focused, executable workflow.
- **Use case** — role-specific language for the same Official Skill.
- **Playbook** — an orchestration Official Skill that explains how focused skills work together.
- **Plugin** — an installable role or domain package containing a Playbook.
- **Editorial content** — public articles and videos linked to stable skill or Playbook ids.

`good-first-skill` marks an evergreen workflow someone can productively run at any time. It should
not require a rare lifecycle event to become useful.

## Playbooks

The initial vertical slice contains the Strawberry Sales Playbook and four focused Official Skills.
The planned Playbook set is:

- Founder & Executive
- Sales
- Recruiting
- Operations
- Marketing
- Product & Engineering
- Research & Analysis
- Venture Capital

Playbooks are added only when their workflow and referenced Official Skills contain useful
instructions. Empty placeholder plugins are not published.

## Validate

```bash
npm run validate
```

Validation checks ids, metadata shape, role references, plugin composition, marketplace entries,
and `SKILL.md` frontmatter.

## Contributing

Start from the result. A contribution should:

1. Promise a specific, useful outcome.
2. Preserve source links and distinguish facts from inference.
3. Include a review point before irreversible or high-volume actions.
4. State the expected result.
5. Keep role-specific titles in metadata rather than duplicating the skill.
6. Be strong enough that an article or video can demonstrate the same workflow honestly.

Licensed under Apache-2.0.
