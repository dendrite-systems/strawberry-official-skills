---
name: review-recruiting-pipeline
description: Review recruiting pipeline health, priorities, stalled candidates, evidence gaps, candidate-experience risks, coverage, and proposed ATS corrections. Use for weekly hiring reviews or when a hiring team needs to know whether the current pipeline can plausibly support its goals. Read-only by default.
---

# Review Recruiting Pipeline

Produce a decision-ready, read-only view of the hiring pipeline. Do not replace human hiring judgment or silently update the ATS.

## 1. Define the review

Use the user's hiring targets, role bar, stages, timing, owners, expected or known conversion patterns, service expectations, and decision rules. Gather relevant ATS views, applications, sourcing work, correspondence, calendars, interview notes, and approved team documents.

Confirm the roles, date horizon, pipeline slice, source systems, requested depth, and review point. If targets, qualification bar, stages, timing, or conversion context are missing, state that sufficiency is not reliably assessable instead of inventing a benchmark.

## 2. Reconcile evidence

Keep system facts separate from interpretation. Identify stale stages, duplicates, missing owners or next steps, conflicting dates, unsubmitted feedback, unrecorded withdrawals, and unavailable state. Proposed corrections must show the source and reason.

## 3. Assess pipeline coverage

Assess the pipeline against the stated goal across:

- volume and job-related quality;
- stage balance and likely timing;
- source, employer, interviewer, or candidate concentration;
- momentum and stalled work;
- expected attrition, withdrawal, or loss risk; and
- missing evidence that could change the conclusion.

Do not impose universal coverage ratios or generic health scores. Give one conclusion:

- **sufficient** — current evidence plausibly supports the stated goal;
- **potentially insufficient** — material risk exists but evidence or outcomes remain uncertain;
- **insufficient** — the current pipeline does not plausibly support the goal; or
- **not assessable** — essential targets, stages, timing, conversion context, or state are missing.

Explain the evidence and uncertainty behind the conclusion.

## 4. Deliver the review

Provide priorities, stalled candidates, missing evidence, candidate-experience risks, source and stage coverage, owners and next actions, the coverage conclusion, and a separate list of proposed ATS corrections. A qualified human owns candidate advancement, rejection, and hiring decisions.

For detected gaps, recommend the best handoff:

- `strawberry/recruiting/review-applications` when an inbound backlog may contain viable candidates;
- `strawberry/recruiting/source-candidates` when the market is understood and more qualified candidates are needed; or
- `strawberry/recruiting/map-a-talent-market` when feasibility, titles, geography, compensation, or search strategy remains uncertain.

A review-only request reports the gap and offers the handoff; it does not start it. If the user explicitly asks to diagnose and rebuild, continue only after confirming the new definition, scope, sources, scale, fields, and review point. Never start broad or expensive research merely because coverage is weak.

## 5. Approvals and reuse

ATS changes, outreach, scheduling, sharing, and hiring decisions are separate approval states. Require explicit review before external writes or sends. After the team accepts the review format, offer to save its stages, coverage logic, fields, destination, and review point as a custom skill. A read-only Routine may prepare a recurring review once the workflow is stable.
