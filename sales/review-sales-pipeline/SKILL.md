---
name: review-sales-pipeline
description: Review a sales pipeline to identify priority deals, material risks, missing context, CRM hygiene issues, and the next actions most likely to matter. Use for a weekly pipeline review, pipeline meeting preparation, deciding where to focus, or finding deals that are stuck, neglected, or inaccurately represented.
---

# Review Your Sales Pipeline

Turn pipeline data and recent deal context into a clear view of where to focus next. Start with a
useful review; do not force a scoring model or recurring setup on the first run.

## Workflow

### 1. Understand the review

Clarify the pipeline or useful slice, period, and decision. It may cover the user's deals, a team,
segment, quarter, or short list. Use existing review habits and stage definitions when available
rather than importing a generic methodology.

If the request is broad, recommend a manageable first review such as the current open pipeline or
the deals most likely to need attention this week.

### 2. Bring together the real deal context

Start with the CRM or supplied pipeline view. If it is not connected, use an export, spreadsheet,
pasted list, or useful subset and explain what connecting it would unlock.

Add relevant approved context from recent email, meetings, calendar, files, tabs, memory, and
connected apps. Use it to clarify momentum, commitments, objections, stakeholders, and next steps,
but do not silently overwrite CRM-owned facts such as stage, amount, owner, or close date.

### 3. Agree on what deserves attention

Use the team's qualification bar, sales cycle, stages, and review habits when known. Otherwise,
propose a light starting approach and let the user correct it. Useful signals may include:

- an unclear or overdue next step;
- a stage or close date that no longer matches the evidence;
- recent momentum or a timely opportunity that deserves focus;
- a deal waiting on one stakeholder, decision, approval, or unanswered question;
- a relationship that has gone quiet relative to this team's normal cycle; or
- missing, conflicting, or stale information that could change the decision.

Do not treat a universal number of inactive days, a fixed weighting formula, or a health score as
truth. Explain the reasoning behind each material flag.

### 4. Review and prioritize the pipeline

Match evidence to the correct account and opportunity. Separate facts, reasonable hypotheses, and
missing context. Focus on the few deals or patterns that should change what the user does next.

Recommend a practical next action for each priority deal when the evidence supports one: who should
do what, by when or in what situation, and toward what outcome. Some deals should be monitored or
reconsidered rather than given more activity.

### 5. Make the review easy to act on

Lead with the priorities. A useful output normally includes:

- the review scope, sources, and freshness;
- the few deals to focus on now, with the evidence and recommended next action;
- material risks, blockers, or gaps that need a decision;
- deals to monitor, reconsider, or qualify out when useful; and
- proposed CRM corrections or missing fields, kept separate from the analysis.

Use a compact table when comparing several deals. Avoid false precision, padded lists, and scores
that hide the underlying judgment.

### 6. Assess whether coverage can support the goal

Use the user's targets, qualification bar, stages, timing, and known conversion patterns. Assess
volume, quality, stage balance, concentration, timing, momentum, loss risk, and missing evidence.
Do not impose universal coverage ratios or a generic health score. If targets or conversion context
are missing, say that sufficiency is not reliably assessable.

Give one pipeline-coverage conclusion and explain its evidence and uncertainty:

- **sufficient**;
- **potentially insufficient**;
- **insufficient**; or
- **not assessable**.

Coverage may be inadequate because qualified volume is low, stages are imbalanced, results depend
too heavily on a few deals, timing cannot meet the target, or the pipeline is dominated by weak or
stalled opportunities.

### 7. Review changes before updating anything

Keep the first review read-only. Show proposed changes with their source and reason, then ask for
approval of the specific records and fields before using `strawberry/sales/keep-crm-updated` to
write them back.

Do not create tasks, change records, or contact anyone without approval for that action. When a
priority deal needs deeper research, use `strawberry/sales/research-an-account`; when the next move
is outreach, use `strawberry/sales/send-personalized-outreach`.

When coverage is potentially insufficient or insufficient, recommend the best separate handoff:

- use `strawberry/research-analysis/map-a-market` when the market, segment, territory, or account
  universe needs clarification; or
- use `strawberry/sales/find-new-customers` when the target market is sufficiently understood and
  more qualified prospects are needed.

A review-only request reports the gap and offers the handoff; it does not start it. If the user
explicitly asks to diagnose and rebuild the pipeline, continue only after confirming the target
definition, scope, sources, scale, fields, and review point. Never begin broad or expensive research
merely because the review detected a weakness.

### 8. Make the next review easier

After the user corrects the priorities and signals, offer to share the approved review brief with
the relevant teammates before the pipeline meeting. Keep sensitive notes and unapproved CRM changes
separate.

Offer to save the accepted scope, definitions, output, and review behavior as a custom or shared
team skill. When teammates need the same pipeline, customer context, and several Sales workflows,
offer to share the full companion. Once trusted, suggest a weekly Routine that checks the agreed CRM
view plus recent meetings and email, prepares a brief before the pipeline meeting, and drafts
proposed updates. Keep early Routines read-only or draft-first unless the team approves more.
