---
name: create-a-sales-asset
description: Turn account, meeting, CRM, email, product, and approved brand context into a customer-facing sales asset such as a one-pager, slide deck, proposal page, interactive calculator, or lightweight site. Use when someone wants a tailored visual or interactive deliverable that helps move a specific customer or prospect toward a decision or next step.
---

# Create a Sales Asset

Turn the context around a real account into a clear, credible asset that helps move the conversation
forward. Own the customer-facing story and choose the form that serves it best rather than defaulting
to a generic deck or company overview.

Your advantage is the context already available across the user's work. Connect what the customer
said, what the team knows, and what should happen next without making the user assemble a new brief
from scratch.

## Workflow

### 1. Understand what the asset should accomplish

Identify the account, intended reader, where the conversation stands, and the decision or next step
the asset should support. Ask only for the audience and intended outcome when they are not already
clear from the conversation or available context.

Keep the work tied to a real sales situation. If the user needs general marketing collateral,
internal account analysis, or broad company research rather than a customer-facing asset, use the
skill that owns that result.

### 2. Bring together the account context

Use relevant meeting notes or transcripts, CRM history, email, files, open tabs, memory, product
material, prior accepted assets, and approved brand sources before asking the user to repeat what is
already available. Prioritize what the customer has said, what the user has promised, and what
matters for the next decision.

Use `strawberry/sales/debrief-a-sales-meeting` when notes or a transcript still need sales-specific
interpretation. Use `strawberry/sales/research-an-account` when important account or stakeholder
context is missing. Do not repeat those workflows inside this skill.

### 3. Recommend the right deliverable

Choose the simplest form that can achieve the outcome. Depending on the audience and moment, that
might be a one-pager, slide deck, proposal page, workshop recap, pilot plan, interactive calculator,
workflow visual, lightweight site, or another useful format. Treat these as examples, not a menu the
user must work through.

Follow a format the user has already chosen unless another approach would materially improve the
result. When the choice affects effort, review, presentation, or sharing, recommend an option and
briefly explain the tradeoff before doing a large build.

### 4. Shape the story and check the claims

Build around one decision or next step. Lead with the point the reader should understand, then use
only the context, evidence, and detail that help them act. Use the customer's language when it is
accurate and appropriate, and adapt the depth and structure to how the asset will be used.

Before polishing external material, check that material claims are supported by approved sources or
clearly framed as the customer's stated priorities. Surface only assumptions or gaps that could
change what the user is comfortable sharing.

Never invent customer outcomes, ROI, pricing, security claims, timelines, endorsements, success
measures, product capabilities, or commitments. Use a clear placeholder or ask for the missing
decision when the asset depends on one.

### 5. Create and critique the asset

Inside Strawberry, read and use the internal `strawberry/general/visual-artifact` skill to create,
critique, and export the visual or interactive result. For a multi-slide presentation, also read
`strawberry/research-analysis/create-beautiful-slide-deck` and keep this skill's account context,
narrative, and claim decisions intact.

Follow approved brand material and relevant visual references. Review the complete asset for
narrative, accuracy, visual hierarchy, legibility, interaction where applicable, unsupported claims,
and whether it makes the intended next step clear. Show the result to the user for feedback before
treating it as customer-ready.

### 6. Deliver and make the next asset easier

Return the reviewed asset in the most useful available shareable format, preserving an editable
source when the chosen creation path supports one. Approval of the asset does not approve sending,
publishing, hosting, or changing the CRM.

When useful, offer to share the reviewed asset with relevant teammates for feedback or reuse before
external delivery. Keep internal sharing separate from customer delivery, public publishing, and
CRM changes.

Use `strawberry/sales/send-personalized-outreach` when the user wants to deliver it and
`strawberry/sales/keep-crm-updated` for approved record changes. After feedback, offer to save the
accepted narrative, brand direction, source preferences, claim rules, format choices, and review
behavior as a custom or shared team skill. Suggest a Routine only when the user has a real recurring
trigger for creating similar assets, and keep early versions draft-first. When the team needs the
same customer context and several Sales workflows, offer to share the full companion rather than
only the asset or its creation skill.
