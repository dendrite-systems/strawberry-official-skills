---
name: prepare-a-daily-brief
description: Prepare a concise, source-linked view of the priorities, meetings, messages, commitments, risks, and decisions that need attention today. Use when someone wants to get oriented, plan their day, or turn scattered work context into a practical daily briefing.
---

# Prepare a Daily Brief

Help the user see what deserves attention today without making them reconstruct the picture across
their calendar, communication, tasks, meetings, documents, and open tabs. Produce a brief they can
scan and act from, not a digest of everything that happened.

## 1. Understand what the brief should help with

Infer the day or working window, timezone, likely workstreams, and purpose from available context
and saved preferences. Ask a focused question only when a missing or ambiguous detail could
materially change the brief. The user may want a personal plan, an executive overview, preparation
for a meeting-heavy day, or a quick view of operational exceptions.

If the user already has a preferred brief, use it. Otherwise, begin with a compact result and let a
real run reveal which sections, sources, and level of detail are useful. Do not require a profile or
full workspace setup before delivering value.

## 2. Use the context that can change the day

Start with relevant context already available in the conversation, memory, tabs, files, and
approved apps. Calendar, email, Slack or another communication system, project and task tools,
meeting notes, documents, and dashboards may help, but none is a universal prerequisite.

Suggest connecting an app only when it would materially improve coverage, accuracy, or speed, and
explain the specific benefit. Continue from available tabs, files, or details the user provides
when possible.

Treat the user's selected calendar as the default source for scheduled time commitments and the
designated task, project, or communication system as the authority for its respective records.
Prefer direct, current evidence when those records conflict. Name material conflicts rather than
resolving them by assumption.

Respect the boundaries the user sets. Do not pull private workstreams, confidential conversations,
or unrelated team activity into a broadly shareable brief.

## 3. Work out what actually needs attention

Prioritize evidence that could change what the user does today:

- deadlines, meetings, decisions, and commitments due or at risk;
- important messages that are unanswered or need preparation;
- blockers, dependencies, ownership gaps, and meaningful changes;
- work that is overdue, newly urgent, or waiting on the user;
- upcoming conversations that need a concise brief or promised material; and
- conflicts between calendar, communication, tasks, and the apparent current plan.

Use the user's priorities and accepted rules when known. Otherwise, distinguish observed urgency
from your recommendation and let the user correct the ranking. Do not equate high message volume,
seniority, or a calendar invitation with importance by default.

Reconcile duplicate references to the same work where possible. Keep conflicts, stale sources, and
missing information visible when they affect the recommendation.

## 4. Deliver a brief that can run the day

Default to a concise, bullet-led brief in chat with useful links beside the item they support.
Adapt the structure to the day rather than forcing every section. A useful result may include:

- **Focus:** the few outcomes that matter most today;
- **Schedule:** meetings or deadlines that change preparation or timing;
- **Needs attention:** messages, blockers, decisions, or commitments requiring action;
- **Watch:** risks, dependencies, or uncertain items worth monitoring; and
- **Suggested order:** a practical sequence when competing priorities need a recommendation.

Name owners and dates only when they are supported. Separate the source fact from your suggested
priority when the distinction matters. Keep deeper evidence available without turning the visible
brief into a status dump.

Use `strawberry/operations/triage-my-inbox` when one inbox needs deeper processing. Use
`strawberry/operations/close-open-loops` when the user needs to reconcile commitments or ownership
across systems. Use `strawberry/operations/prepare-for-meetings` when a particular meeting needs
more than the compact context in the daily brief.

## 5. Prepare actions without silently taking them

The brief may recommend a reply, delegation, task change, calendar adjustment, or escalation.
Prepare the smallest useful next action, but keep sending, posting, rescheduling, changing owners,
and updating external systems separately reviewable.

If the user approves execution, confirm the exact people, account, destination, records, and scope
immediately before consequential changes. Report what was completed, what remains blocked, and any
source that could not be checked.

## 6. Improve the next brief

Ask what the user would keep, remove, reprioritize, or add after a real brief. Carry forward useful
preferences such as trusted sources, priority rules, workstreams, depth, format, and delivery
destination without treating today's unusual circumstances as permanent policy.

When an accepted brief would help another person today, offer to share that approved artifact. When
the method should be reusable, offer to save the accepted approach as a custom or team skill. Only
suggest shared companion context when the need extends across several team workflows.

After the workflow is trusted, suggest a Routine only when there is a useful cadence. A concrete
version might run on agreed workdays in the user's timezone, check the selected calendar,
communication, task, meeting, and project sources, and prepare the brief in an explicitly approved
destination. Include reviewable proposed messages or action cards in the brief. Do not create
external drafts, send messages, change calendars or assignments, or update records unless that
specific behavior, account, destination, and scope have been approved for the Routine. Continue
from available selected sources and clearly flag missing coverage. Stop and ask only when an
unavailable source, unclear account or timezone, exposure risk, or conflicting evidence could
materially change the priority recommendation.
