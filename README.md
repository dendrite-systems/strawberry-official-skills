# Strawberry Official Skills

Practical, result-oriented workflows for AI agents.

Official Skills describe how to complete useful work—not merely how to use a feature. Each skill
explains what information to gather, how to approach the work, where human judgment matters, and
what a useful result should look like.

Getting Started skills connect several focused skills into a readable way to begin and grow a
workflow. For example, Getting Started with Sales brings together prospecting, research,
preparation, and follow-up without duplicating the focused instructions.

## Browse the collections

- **Founder & Executive** — customers, fundraising, hiring, and company operations
- **Sales** — prospecting, account research, outreach, and pipeline work
- **Customer Support & Success** — customer requests, answers, escalation, onboarding, and health
- **Agency** — winning clients, turning context into strong work, and repeatable delivery
- **Consulting** — proposals, engagement setup, research, recommendations, and client follow-through
- **Recruiting** — sourcing, screening, interviews, and hiring operations
- **Operations** — coordination, support, administration, and recurring work
- **Finance** — bookkeeping preparation, performance analysis, forecasting, and follow-through
- **Marketing** — research, campaigns, content, SEO, and distribution
- **Product & Engineering** — product insight, issue investigation, and delivery
- **Research & Analysis** — evidence gathering, structured data, and clear outputs
- **Venture Capital** — company research, diligence, market maps, and investment memos

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

Focused skills belong to the collection that most clearly owns the result. A Getting Started skill
can reference skills from other collections. A workflow is duplicated only when its steps, inputs,
review points, or suggested result genuinely differ.

## Use with your agent

These skills use the portable `SKILL.md` format and can work with agent platforms that support
skills. Copy one, adapt it, and make the process your own.

They are especially effective in Strawberry. Most agent platforms are built primarily around
files; Strawberry is built around tabs. That makes skills involving web research, signed-in tools,
browser workflows, and work across several web apps a natural fit.
