---
name: review-investment-pipeline
description: Review an investment pipeline to identify priority opportunities, stalled decisions, missing evidence, ownership gaps, and the next actions that matter. Use for deal-flow reviews, partner-meeting preparation, pipeline triage, or investment CRM hygiene; keep proposed record changes separate from the analysis.
---

# Review the Investment Pipeline

Turn the current pipeline and recent investment context into a clear view of where the team should
focus. Use the firm's stages and decision rules rather than importing a generic sales funnel.

## 1. Understand the review

Clarify the period, portfolio or strategy in scope, the audience, and the decision the review should
support. Learn the firm's actual stage definitions, ownership rules, target pace, meeting cadence,
and what counts as an active, stalled, passed, or monitoring opportunity.

Start with the current CRM, spreadsheet, or supplied pipeline view. If it is unavailable, continue
from an export or selected records. Ask only about fields or rules that cannot be interpreted
safely.

## 2. Reconcile the current picture

Use the pipeline alongside relevant founder emails, calendar events, meeting records, notes,
internal messages, diligence artifacts, and approved files when they could change the assessment.
Do not assume a record is current because a field is populated.

Check for:

- opportunities that need a decision, owner, meeting, follow-up, or evidence;
- promising companies receiving too little attention;
- stale stages, dates, ownership, or next steps;
- contradictions between the CRM and more recent source records;
- repeated reasons for delay, pass, or weak conviction; and
- concentration or coverage gaps against the firm's stated strategy.

Keep pipeline facts, recent source evidence, and interpretation distinct. Do not treat meeting
interest, a draft memo, or a requested reference as proof that a stage changed.

## 3. Prioritize the useful next moves

Rank attention using the firm's own criteria and the decision cost of waiting. Explain why each
priority matters, what evidence supports it, what remains uncertain, and the smallest useful next
action. Avoid unexplained composite scores.

Produce a compact review with:

- a short pipeline health view;
- priority opportunities and why they matter now;
- stalled or at-risk decisions;
- missing evidence, ownership, or follow-through;
- proposed next actions with owners or decision points; and
- proposed CRM corrections shown separately.

## 4. Prepare, apply, and verify approved changes

Use `strawberry/sales/keep-crm-updated` for approved record changes, adapted to the investment
team's objects, stages, fields, and source-of-truth rules. Treat the review, meeting agenda, messages,
assignments, and CRM writes as distinct actions. Re-read changed records and report applied,
skipped, ambiguous, or failed updates when useful.

Use `strawberry/operations/prepare-for-meetings` when the result should become a partner or pipeline
meeting brief. Use `strawberry/operations/close-open-loops` when commitments need tracking beyond
the review.

After the team accepts the review logic, offer to save its stage definitions, priority criteria,
sources, fields, and output as a custom or team skill. A weekly Routine may check the agreed
pipeline and recent context, prepare a draft review, and stop when stage definitions change,
records conflict materially, access fails, or an investment judgment requires a person.
