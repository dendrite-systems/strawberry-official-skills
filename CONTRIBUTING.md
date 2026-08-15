# Contributing

Open an issue or pull request describing the concrete result the workflow should deliver.

Keep every Official Skill focused on a demonstrable outcome. Put executable instructions in
`SKILL.md` and compact discovery fields in the adjacent `strawberry.json`. Add `article.json` only
when the skill also has public editorial content. New articles may use ordered paragraph, list,
table, and skill-card blocks so educational content stays easy to scan; legacy paragraph-and-card
sections remain supported.

Use `name` and `description` as the only `SKILL.md` frontmatter fields. Make the description clear
about what the skill does and when it applies. Keep the body concise, use examples as guidance, and
leave room for the agent to adapt the process to the user. Put detailed supporting material in a
directly linked `references/`, `scripts/`, or `assets/` folder when it would otherwise overwhelm the
core workflow.

Place a skill in the collection that most clearly owns the result. Cross-reference an existing
skill from `SKILL.md` when a Getting Started guide needs the same workflow. Duplicate it only when
the actual process, inputs, review points, or output meaningfully differ. The collection and folder
name become the canonical Strawberry id, such as `strawberry/sales/find-new-customers`.

For a role-based entry point or routed bundle, also follow
[the role bundle standards](role-bundle-standards.md). The canonical Official Skill Package Builder
contains the detailed research, editorial, review, migration, and release gates.
