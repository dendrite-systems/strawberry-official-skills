# Strawberry Official Skills

Practical, result-oriented workflows for AI agents.

Official Skills are short, practical tips for AI companions: what Strawberry makes possible for a
role, which questions are worth asking before starting, and the few mistakes that are easy to make.
They leave the rest to the companion's judgment.

Getting Started guides give each role a set of ideas to try. Focused skills cover workflows where a
specific method makes a real difference. Playbooks show exactly how someone does something, for
teams that want to copy it.

## Browse the collections

- **Founder & Executive** — inbox, meetings, selling, hiring, and fundraising
- **Sales** — finding customers, research, outreach, and pipeline
- **Customer Support & Success** — triage, investigation, resolution, and how Strawberry runs Support
- **Consulting & Agency** — winning clients, proposals, delivery, and reporting
- **Recruiting** — sourcing, interviews, and keeping the pipeline moving
- **Operations** — inbox, meetings, follow-ups, bookkeeping, and travel
- **Marketing** — what performs, competitors, SEO, and content
- **Product & Engineering** — QA, debugging, websites, and web data
- **Research & Analysis** — deep research, market maps, web data, and decks

## Repository structure

```text
sales/
  getting-started-with-sales-in-strawberry/
    SKILL.md
    strawberry.json
    article.json
  find-new-customers/
    SKILL.md
    strawberry.json
```

- `SKILL.md` contains the workflow an agent reads.
- `strawberry.json` contains compact discovery metadata, tags, and the role-specific ways the
  result can be presented.
- `article.json` is optional public editorial content for the Strawberry website.
- The folder path is the skill's identity. For example, `sales/find-new-customers` becomes
  `strawberry/sales/find-new-customers` inside Strawberry.
- A Getting Started guide references focused Official Skills directly from its `SKILL.md`.
- [Official Skill standards](skill-standards.md) describes how to write each kind.

Focused skills belong to the collection that most clearly owns the result. A Getting Started skill
can reference skills from other collections. A workflow is duplicated only when its steps, inputs,
review points, or suggested result genuinely differ.

## Use with your agent

These skills use the portable `SKILL.md` format and can work with agent platforms that support
skills. Copy one, adapt it, and make the process your own.

They are especially effective in Strawberry. Most agent platforms are built primarily around
files; Strawberry is built around tabs. That makes skills involving web research, signed-in tools,
browser workflows, and work across several web apps a natural fit.
