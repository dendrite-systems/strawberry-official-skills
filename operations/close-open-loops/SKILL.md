---
name: close-open-loops
description: Find and resolve commitments, unanswered follow-ups, missing owners, stale statuses, and decisions that have not reached the right system. Use when someone wants to stop work from slipping between meetings, messages, tasks, and project tools.
---

# Close Open Loops

Help the user find work that exists in the gaps between conversations and systems, then prepare the
smallest actions needed to close it. Focus on exceptions that deserve attention rather than
rebuilding every thread, task, or project record.

## 1. Define which loops matter

Establish the time window, people or workstreams, systems, and result in scope. Learn what the user
considers open and what counts as closed. Depending on the team, closure may require a reply, an
accepted decision, a named owner and date, a delivered artifact, a completed task, or an updated
system of record.

Clarify the relevant source of truth when one exists and whether the user wants personal follow-ups,
team commitments, project exceptions, or a combination. Begin with one useful workstream or a
representative time window before scanning a large organization.

## 2. Gather candidate commitments from the real work

Use relevant approved context from meetings and transcripts, email, Slack or other communication,
task and project tools, documents, calendars, files, tabs, and memory. A connected source can make
the audit faster or more reliable, but continue with supplied material or browser access when
possible.

When the evidence spans logged-in tools, follow it through the user's visible tabs and compare the
underlying records where the user can inspect or take over. Keep the path back to each source so an
accepted resolution can continue into the right message, task, or project record instead of ending
as a detached audit.

Look for signals such as:

- explicit promises, requests, approvals, decisions, introductions, and follow-up dates;
- questions or threads that appear to require an answer;
- actions mentioned in a meeting but missing from the agreed task system;
- tasks with no credible owner, date, dependency, or current status;
- decisions that have not reached the people or system that depend on them;
- records marked complete while the promised result still appears missing; and
- duplicate or conflicting representations of the same work.

Do not treat every unanswered message as an obligation or every conversational suggestion as a
commitment. Match people, workstreams, and records carefully before combining evidence.

## 3. Reconcile evidence before calling something open

Check whether a candidate was completed, superseded, delegated, declined, or resolved elsewhere.
Prefer direct and current evidence over an old task state or a model inference. Preserve source
links or source moments that let the user verify important commitments.

Classify the result in plain language, for example:

- confirmed open;
- likely open but missing evidence;
- conflicting status across sources;
- blocked or waiting on someone; or
- resolved during the checked window.

Keep ambiguity visible when identity, ownership, dates, wording, or the definition of done could
change the action. Do not invent a deadline, owner, or commitment to make the list look complete.

## 4. Return an exception list, not a transcript dump

Prioritize by consequence, urgency, dependency, and the user's own operating rules. Default to a
concise review containing:

- the open loop and why it matters;
- current owner and due date when supported;
- the evidence and systems checked;
- the gap or contradiction;
- the smallest proposed next action; and
- whether the action needs a human decision.

Group multiple references to the same underlying loop. Keep resolved items out of the main view
unless the user needs an audit trail. Summarize coverage and name material sources or workstreams
that could not be checked.

Use `strawberry/operations/debrief-a-meeting` when one recent meeting still needs an immediate
record and follow-through. Use `strawberry/operations/prepare-a-status-update` when the accepted
findings should become an async update. When the gaps need shared discussion or a decision, use the
exception list as context for `strawberry/operations/prepare-for-meetings`.

## 5. Prepare and apply approved resolutions

Possible resolutions include a reply or nudge, a clarified owner or date, a new or corrected task,
an updated project status, a recorded decision, an escalation, or an explicit closure. Draft or
preview each action beside the evidence that supports it.

Keep communication, task creation, ownership changes, and record updates as separate approvals.
Approval of the exception list is not approval to send messages or change systems. Immediately
before execution, confirm the exact people, account, destination, records, and scope. Afterward,
verify consequential writes and report anything that remains open or blocked.

## 6. Turn repeated gaps into a better operating loop

Use feedback to learn which commitments matter, which systems are authoritative, how the team
defines closure, and when an apparent gap is normal. Preserve these durable rules only after the
user has corrected a real result.

Share an approved exception list when it helps the relevant owners. Share the accepted method as a
team skill when others should audit open loops the same way. Offer the full companion only when the
team needs shared context and several connected Operations workflows.

After the audit is trusted, suggest a Routine with a real cadence or trigger. A concrete version
might run before a named coordination meeting or on an agreed cadence, check the relevant meeting,
communication, task, and project sources, surface only new or materially changed open loops,
prepare proposed nudges or record updates, and wait for approval. Stop and ask when identity or
source-of-truth matching is unclear, permissions or sources are missing, private context could cross
a boundary, or resolution depends on a decision the user has not made.
