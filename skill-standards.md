# Official Skill standards

Official Skills are tips for a capable companion, not rules. A good model already knows how to plan
a campaign or clean a CRM. What it doesn't know is what Strawberry makes possible, which question to
ask first, and the few mistakes that are easy to make. Write only that.

The Sales guide (`sales/getting-started-with-sales-in-strawberry`) is the worked example. Copy its
shape and length.

## Three kinds

- **Getting Started guide.** One per role. A short picture of what Strawberry makes possible, a
  **Setup** section of questions worth asking, **Things to try** bullets, and an optional **Worth
  knowing** list. Onboarding reads these for ideas, but the companion still interviews the user to
  find what actually fits.
- **Focused skill.** Only when there is Strawberry-specific know-how or a tested method that a model
  gets wrong without it, e.g. reading a site's own network requests for extraction, or showing mock
  candidates before sourcing. Otherwise the idea is a bullet in a guide.
- **Playbook.** How someone actually does it, meant to be copied closely, e.g.
  `customer-support-success/set-up-support-like-strawberry`. Only from first-hand evidence. It can be
  longer and more literal than anything else here.

## Writing

- Keep guides to about 500 words and focused skills to about 250. Playbooks are the
  exception.
- Write **Setup** as the things worth knowing before starting, and offer to learn them from the
  user's own tools rather than asking them to type it all out.
- Write **Things to try** as ideas, not procedures: a bold result, then up to two sentences. Use
  "e.g. ..., etc." for examples, and "Ask which of these matter to the user" when there are several
  directions. Don't add conditions like "before doing anything"; the companion knows to ask.
- Keep it timeless. Don't describe how the harness runs work (sub-agents, parallelism, tool names,
  pacing). That belongs in the system prompt and tool descriptions, and it goes stale.
- Don't repeat what the system prompt already covers: approvals before sending or changing records,
  memory, when to offer a custom skill or Routine. One closing line is enough.
- Link another Official Skill only when it exists and genuinely helps, using its full id, e.g.
  `strawberry/sales/find-new-customers`.
- Address the companion as "you". Use plain words: "find", "write", "check", not "operationalize"
  or "decision frame".

## Articles

An `article.json` is worth publishing only when it has something a reader couldn't get from any
chatbot: a real story (a playbook or case study), a demo, or a Strawberry capability shown in real
work. Otherwise leave it out. A thin skill with no article is better than a padded one.
