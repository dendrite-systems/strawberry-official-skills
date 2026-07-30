---
name: automate-customer-support
description: Set up and improve customer-support workflows for answer drafting, queue triage, customer-context gathering, recurring issue analysis, routing, or safe automation while preserving company knowledge, tone, escalation rules, and human judgment.
---

# Automate Customer Support

Use this Official Skill as starting guidance for a first or redesigned support workflow. If the
user already has a tailored support skill, follow that instead.

## Context, setup, and planning

Try to understand enough of the support desk to propose one useful starting workflow. Relevant
context may include:

- the support channels, volume, common issues, service expectations, and escalation rules;
- the help center, internal docs, macros, saved replies, and other sources of truth;
- representative resolved and escalated cases;
- the help desk, CRM, billing system, or other places where customer history lives;
- the team's actual register: formality, sign-off, whether they apologize or stay neutral, and
  other successful reply patterns;
- which parts of support the user wants help with, such as answer drafting, triage, context
  gathering, issue analysis, help-center upkeep, proactive outreach, or reporting.

Approved connected context can teach Strawberry more than interviewing the user cold, but it is not
a prerequisite. Offer to learn through a few questions, inspect the relevant existing context, or
combine both. If the team's writing style is not already clear, use
`strawberry/learn-writing-style` with approved past replies or user-selected examples.

Separate safe repetitive work from cases requiring judgment, account access, refunds, security
review, or empathy. Agree on a narrow first workflow, the information and decision rules it should
use, the output and destination, a representative calibration sample, and where human review is
required. Present that plan before processing the full queue.

Nothing is sent, auto-filed, auto-replied to, or changed in an external system without the user's
approval.

## Draft answers from docs and past replies

1. Ground every draft in the relevant help-center or internal documentation and, when available,
   similar approved past replies. Reuse existing macros and saved replies rather than rewriting
   policy from scratch.
2. Reply in the language of the incoming ticket. Match the team's actual register rather than a
   generic support voice.
3. If the documentation does not cover the question, flag the gap rather than inventing policy.
   Show the source behind each draft so the user can verify the answer and catch stale guidance.
4. Start with a representative sample, often 5–10 drafts, so the user can calibrate tone and
   accuracy before expanding.
5. Keep a human on send for refunds, account changes, security-sensitive work, and other sensitive
   cases.

## Triage the queue by impact

1. Agree on a compact category taxonomy and the signals that determine urgency. Useful signals may
   include customer ARR, contract stage, number of blocked users, deteriorating sentiment, issue
   recurrence, and SLA proximity.
2. Prioritize practical impact: for example, a new signup blocked at checkout or a paying customer
   who is down should usually surface above a feature request.
3. Triage a small sample first so the user can correct urgency and routing judgments before a full
   sweep.
4. Present the queue grouped by urgency and type, with blocked-customer items first, a clear
   recommendation on where to start, and the number of tickets reviewed.

## Pull the customer context together

Gather only the details that change how the team should respond. Depending on the workflow, these
may include account and plan information, recent orders or usage, past tickets, known-bug context,
an upcoming renewal, a recent escalation, or a champion who has gone quiet.

Present a short brief beside the ticket with the relevant account facts, history, known-bug match,
and the one or two details that materially affect the answer. Do not turn it into an indiscriminate
data dump.

## Catch and log recurring issues

1. Cluster tickets by meaning rather than exact keywords so differently worded reports of the same
   problem stay together.
2. Rank issue clusters by customer impact and preserve the evidence behind each cluster.
3. Draft or update one product issue per underlying problem with the affected-customer count,
   symptom cluster, likely root cause when supported, and source tickets. Attach the full timeline
   when routing an escalation.
4. After a fix ships, track whether the issue's ticket volume actually drops.

## Suggested outcome

Deliver the agreed support result in a reviewable form: calibrated reply drafts with their sources,
an impact-ranked queue, concise customer briefs, or evidence-backed recurring issue clusters. Make
the review point, escalation boundaries, and approval requirements explicit, and provide enough
evidence for the user to assess whether the workflow saves time without reducing support quality.

## Suggested next steps

- Once the core workflow works, consider help-center gap detection, macro maintenance, proactive
  incident outreach, a voice-of-customer digest, escalation preparation, or a QA pass against the
  team's own standard.
- If the process should be shared across a team, use
  `strawberry/set-up-shared-team-workflow`.
- Preserve the accepted sources, tone examples, decision rules, escalation boundaries, output, and
  approval behavior as a user-owned skill.
- When a stable workflow should repeat, offer a routine that surfaces exceptions or changes rather
  than repeating the entire analysis.
