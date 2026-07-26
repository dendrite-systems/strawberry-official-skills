# Strawberry Official Skills

Practical, result-oriented workflows for AI agents.

Official Skills describe how to complete useful work—not merely how to use a feature. Each skill
explains what information to gather, how to approach the work, where human judgment matters, and
what a useful result should look like.

Playbooks connect several focused skills into a broader way of working. For example, the Strawberry
Sales Playbook brings together prospecting, research, preparation, and follow-up without duplicating
the focused instructions.

## Browse the collections

- **Founder & Executive** — customers, fundraising, hiring, and company operations
- **Sales** — prospecting, account research, outreach, and pipeline work
- **Recruiting** — sourcing, screening, interviews, and hiring operations
- **Operations** — coordination, support, administration, and recurring work
- **Marketing** — research, campaigns, content, SEO, and distribution
- **Product & Engineering** — product insight, issue investigation, and delivery
- **Research & Analysis** — evidence gathering, structured data, and clear outputs
- **Venture Capital** — company research, diligence, market maps, and investment memos

## Repository structure

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
```

- `SKILL.md` contains the workflow an agent reads.
- `strawberry.json` contains its stable identity, collection, difficulty, tags, and the
  role-specific ways the result can be presented.
- A Playbook has the same two files and references the focused Official Skills it brings together.

Focused skills belong to the collection that most clearly owns the result. A Playbook can reference
skills from other collections. A workflow is duplicated only when its steps, inputs, review points,
or expected result genuinely differ.

## Use with your agent

These skills use the portable `SKILL.md` format and can work with agent platforms that support
skills. You can copy one, adapt it, and make the process your own.

They are especially effective in Strawberry. Most agent platforms are built primarily around
files; Strawberry is built around tabs. That makes skills involving web research, signed-in tools,
browser workflows, and work across several web apps a natural fit.
