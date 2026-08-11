---
name: keep-crm-updated
description: Turn approved email, meeting, outreach, and connected-app context into accurate, reviewable CRM updates. Use when someone wants to log sales activity, create or update records, prepare follow-ups, clean CRM data, or build a trusted recurring CRM workflow without silent changes.
---

# Keep Your CRM Up to Date

Keep the CRM useful without making the user reconstruct work that already happened elsewhere. Adapt
to their system, pipeline, fields, and review preferences, then preserve the accepted approach for
future runs.

## Workflow

### 1. Find a useful first update

Understand which CRM the user works in, what they want to bring up to date, and what a good result
looks like. Inspect the CRM structure and relevant available context when authorized. If access is
missing, suggest connecting the CRM or work from an export without blocking a useful first result.

When the mapping is new, start with a specific source, account, or recent window rather than trying
to clean the entire CRM. Ask only for rules or field meanings that cannot be inferred safely.

Before the first write, check only the relevant required fields, allowed values, unique identifiers,
ownership rules, and source of truth rather than turning the first run into a CRM audit.

### 2. Bring together the sales activity

Use the CRM alongside the relevant email, meetings, calendar events, LinkedIn context, outreach
history, tabs, files, connected apps, and memory. Choose the sources that fit the task.

Use `strawberry/sales/debrief-a-sales-meeting` when a transcript or notes still need sales-specific
interpretation. Use `strawberry/sales/send-personalized-outreach` when outreach still needs to be
prepared or sent. Do not repeat those workflows here.

### 3. Translate activity into proposed updates

Follow the user's definitions for contacts, accounts, opportunities, stages, activities, tasks,
owners, and required fields. Decide whether the source supports a new record, field change,
activity, follow-up, or no update. One source may support several changes, but do not force every
interaction into every record type.

Keep states accurate. A draft, planned send, sequence enrollment, actual send, reply, booked meeting,
and completed meeting are different events. Do not record intended work as completed activity.

Do not create or advance an opportunity merely because an interaction happened; follow the user's
qualification rules. Keep customer-agreed commitments and meetings separate from internal reminders,
desired follow-ups, and hypotheses. Record concise business-relevant context rather than copying raw
transcripts, email bodies, or sensitive personal details into permanent records.

### 4. Match carefully and make review easy

Match and deduplicate before creating records. Use stable source identifiers when available, such
as a message, thread, calendar-event, meeting, CRM, or import-row ID, so the same event is not logged
twice. Surface uncertain matches, conflicts, and missing required information rather than guessing.

Treat the current CRM value as the baseline and an original time-stamped activity as evidence of
what happened. When reliable sources conflict, show the conflict rather than overwriting a value
from memory, inference, or an undated summary.

Show a compact review with the source, target record, proposed change, and reason. Include the
current value when the comparison matters. For a new mapping or larger batch, begin with a small,
representative set so the user can correct the interpretation and review behavior before it scales.

### 5. Apply the approved scope

Treat approval as scoped to the reviewed records, fields, sources, timeframe, and conditions. A
standing approval may cover clearly defined future updates, including some consequential fields,
but ambiguous, unexpected, or unrelated changes return to review.

When another person or system may have changed a record, re-read it before writing rather than
overwriting a newer value. After applying updates, read the affected records again and confirm the
intended values, relationships, and activity links are present. Do not claim success only because a
write request was accepted.

“No update needed” is a successful result when the source does not establish a useful CRM fact or
the event is already recorded. Report applied, skipped, ambiguous, and failed updates separately
when useful.

### 6. Use the CRM to drive the next action

Surface missing follow-ups, stale assumptions, data gaps, or records that need attention according
to the user's own pipeline rules. Use `strawberry/sales/review-sales-pipeline` for the wider question
of where the team should focus rather than recreating a full pipeline review here.

After feedback, offer to save the accepted source mapping, field rules, matching logic, and review
preferences as a custom skill. If the workflow recurs, suggest a Routine after a meeting or on a
useful cadence. A good first Routine checks the agreed sources against the CRM, skips activity
already recorded, prepares the remaining changes, and flags uncertainty. The user can give standing
approval for defined sources, records, fields, and conditions. Stop for review when a match is
ambiguous, the situation falls outside that scope, or the CRM has changed unexpectedly.
