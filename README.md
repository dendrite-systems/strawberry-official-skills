# Strawberry Official Skills

The public source of Strawberry's result-oriented Official Skills and Playbooks.

Each folder under `plugins/` groups workflows around a durable role or domain. This follows the
useful part of a plugin structure—clear ownership, a Playbook, and related focused skills—without
requiring any particular agent or plugin runtime.

```text
plugins/
  strawberry-sales/
    skills/
      strawberry-sales-playbook/
        SKILL.md
        strawberry.json
      source-customers/
        SKILL.md
        strawberry.json
      prepare-for-calls/
        SKILL.md
        strawberry.json
      transcribe-meetings-follow-up/
        SKILL.md
        strawberry.json
  strawberry-research-analysis/
    skills/
      research-companies-create-decks/
        SKILL.md
        strawberry.json
```

## Files

- `SKILL.md` contains the executable workflow an agent reads.
- `strawberry.json` contains Strawberry discovery data: stable identity, collection ownership,
  difficulty, constrained tags, and role-specific use cases.
- A Playbook is itself an Official Skill. Its `SKILL.md` explains how focused skills work together,
  and its `strawberry.json` references their stable ids.

Focused skills belong to the collection that most clearly owns the result. Other Playbooks may
reference them across collections. Duplicate a skill only when the workflow changes materially by
domain—for example, sales call follow-up and recruiting interview follow-up.

The Strawberry monorepo owns the metadata types, allowed role ids, tags, validation, API cache,
and browser distribution. Invalid or unknown metadata is rejected when the repository is
ingested.

## Product loop

Every public promise should resolve to a workflow Strawberry can actually execute:

```text
valuable result
  -> Official Skill
  -> article or video
  -> user asks for the result naturally
  -> Strawberry resolves and reads the Official Skill
  -> useful first run
  -> user adapts it into their own skill
```

Articles and videos live in Strawberry's Editorial CMS and reference stable Official Skill or
Playbook ids. They do not duplicate `SKILL.md`.
