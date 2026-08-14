---
name: debrief-a-meeting
description: Turn a completed meeting into a grounded debrief with decisions, commitments, owned actions, follow-up drafts, and proposed updates to the right systems. Use after an internal or external meeting when a transcript, notes, or another reliable record is available; route Sales meetings and candidate interviews to their specialist workflows when domain judgment dominates.
---

# Debrief a Meeting

Help the user understand what changed in a meeting and finish the useful follow-through. Start from
what was actually said, keep accepted outcomes separate from discussion, and produce only the work
the meeting now requires.

Use `strawberry/sales/debrief-a-sales-meeting` when account, opportunity, qualification, pipeline,
or commercial judgment is central. Use `strawberry/recruiting/synthesize-interview-feedback` when
an interview must be assessed against an accepted scorecard. Continue here for general meetings and
for follow-through that does not require specialist interpretation.

## 1. Match the right meeting and record

Identify the meeting, participants, purpose, and result the user wants. They may need a quick recap,
decisions and actions, a follow-up message, updates to shared systems, or a fuller debrief. Start
with the smallest useful result.

Resolve the meeting calendar-first when possible. Match the event to the transcript, recording,
notes, or other record using timing, attendee names, email addresses, and relevant organization or
project context. If a reliable record is not available, work from notes the user supplies and make
the limitation clear. Do not reconstruct detailed outcomes from a calendar title or memory alone.

Strawberry can capture supported meetings and produce a durable transcript without a visible
meeting bot. Treat that transcript as evidence for this workflow, not as a separate skill or as a
guarantee that every word and speaker label is correct.

## 2. Ground the debrief in what happened

Use the full available record when the details matter. Identify speakers carefully, preserve
uncertain wording or attribution, and bring in prior messages, documents, project records, calendar
context, or other sources only when they help interpret a reference or commitment.

Keep these distinctions clear:

- something discussed is not necessarily a decision;
- an idea or request is not necessarily a commitment;
- a suggested owner or date is not necessarily accepted; and
- a private note or hypothesis is not part of the shared meeting record.

When sources disagree about a decision, owner, or date, show the conflict rather than choosing the
most convenient version.

## 3. Find what changed

Focus on what should affect work after the meeting:

- decisions and changed assumptions;
- commitments, owners, dates, and dependencies;
- open questions, unresolved choices, and blockers;
- material risks, concerns, or context that surfaced;
- messages, documents, introductions, or answers someone promised; and
- systems whose current record no longer matches the accepted outcome.

Do not produce a play-by-play when a concise answer will do. If the meeting was exploratory and
nothing was decided, say so plainly.

## 4. Prepare the useful debrief

Lead with a compact summary of the outcome. Add only the parts the user needs, such as:

- what changed and what did not;
- accepted decisions with the evidence behind them;
- owned actions and due dates;
- unresolved questions and the next decision point;
- a follow-up message in the user's established voice; and
- proposed task, project, document, calendar, or other record updates.

Keep source moments or links close to consequential claims so the user can inspect them. Separate a
shared recap from private notes and sensitive hypotheses. When a promised asset or answer does not
exist in the record or approved company material, leave a clear gap rather than inventing it.

## 5. Complete only the approved follow-through

Treat the debrief, each message, each assignment, and each external-system update as distinct
actions. Show the person or record, destination, proposed change, and scope before acting. After an
approved update, verify the result and report anything that remains blocked or unresolved.

Use `strawberry/operations/close-open-loops` when commitments should be tracked beyond the immediate
follow-through. When the next meeting needs preparation, use
`strawberry/operations/prepare-for-meetings` with the accepted decisions and open questions from
this debrief.

## 6. Make the next debrief easier

Use feedback to remember the user's preferred depth, note shape, voice, destinations, and review
behavior. Do not turn one meeting into a permanent rule or shared fact.

When the pattern is trusted, save it as a custom or team skill. An event-triggered Routine may run
when a meeting record is ready, match it to the calendar and agreed sources, prepare the debrief,
follow-up drafts, and proposed system updates, then wait for review. It should stop when the meeting
or speaker match is unclear, the record is incomplete, private context could be exposed, or the next
action depends on a decision only the user can make.
