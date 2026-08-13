---
name: source-candidates
description: Find and calibrate a reviewable candidate shortlist for an accepted role definition or talent market. Use when a user needs more qualified candidates, wants to test a sourcing strategy, or wants evidence-backed candidate research. Do not use for application review, market mapping without a shortlist, or sending outreach.
---

# Source Candidates

Build a defensible shortlist, not a long list. Keep sourcing, team review, ATS changes, outreach, and hiring decisions as separate states.

## 1. Confirm the search

Use the accepted job description, role profile, scorecard, talent-market map, hiring notes, and prior feedback already available. Confirm only what materially affects the search:

- outcomes, job-related must-haves, useful adjacent backgrounds, and evidence of capability;
- location, working pattern, compensation, eligibility, timing, and exclusions; and
- requested scale, sources, fields, destination, and review point.

If feasibility, titles, target employers, geography, compensation, or adjacent backgrounds remain uncertain, use `strawberry/recruiting/map-a-talent-market` before scaling. Never use protected or irrelevant personal characteristics as criteria.

## 2. Calibrate a small, varied set

When the judgment is new or subjective, propose a small set containing strong matches, borderline cases, and people set aside. Explain the planned sources, breadth versus depth, fields, likely scale, and review point. This lets the user correct the search before more time and credits are spent. Reuse a trusted search without unnecessary reconfirmation, but pause before a materially broader, deeper, or more expensive run.

Search approved professional sources where relevant evidence lives, including LinkedIn, portfolios, GitHub, talks, company pages, and approved internal systems. Work sequentially and at a human pace on interactive services; stop on warnings, challenges, rate limits, or unexpected states.

## 3. Research and assess fit

Require evidence tied to the accepted criteria for every person. Verify identity and current role where material, preserve links, and keep observed facts separate from candidate claims and inference. Label stale, incomplete, or contradictory evidence.

Give each person understandable fit guidance:

- **strong potential fit** — current evidence supports most critical criteria and shows no material conflict;
- **potential fit with questions** — relevant evidence exists, but important points need checking;
- **limited fit based on current evidence** — important criteria lack support or have conflicting evidence; or
- **unable to assess** — reliable professional evidence is too incomplete or ambiguous.

Show the rationale, strongest evidence, gaps or counter-evidence, confidence, and sources. These labels help humans choose what to inspect; they are not proof of qualification, comparative rankings, hiring recommendations, or automatic dispositions. If priority tiers would help, define their job-related criteria and keep them reviewable.

## 4. Check coverage and state

Deduplicate across sources and available ATS, CRM, spreadsheet, referral, or prior-work context. Report:

- source coverage and blind spots;
- whether each candidate is new, known, previously contacted, or unresolved;
- contactability as verified, likely, unavailable, or not checked;
- ATS state as observed, inferred, stale, unavailable, or not checked; and
- scarcity signals and the constraints or evidence standards behind them.

Do not imply that a public profile is interested, available, qualified, eligible, or contactable. Never invent people, URLs, roles, contact details, or evidence. Do not weaken the bar silently to reach a requested count.

## 5. Deliver the shortlist

Provide:

1. the accepted search definition and caveats;
2. the shortlist with fit guidance, criterion evidence, sources, confidence, contactability, and ATS state;
3. a separate review set with the human judgment required;
4. coverage, duplicates, and unresolved identity or state issues;
5. a scarcity diagnosis when the requested result could not be met; and
6. search levers and tradeoffs without changing them automatically.

Use a compact table in chat for a small result. For team review, offer an internal spreadsheet or CSV, structured candidate brief, dashboard in an approved company tool, or ATS-ready import. A local interactive artifact can support filtering and comparison, but candidate data must not be published through a publicly viewable Strawberry artifact.

## 6. Share internally or prepare the ATS

Creating an artifact, sharing it internally, and uploading records are separate approvals.

Before internal sharing, confirm the reviewers, candidates, fields, triage labels, destination, access, exports, and retention. Use the minimum candidate data needed. If the destination cannot enforce the agreed access, deliver a file for the user to place in an approved company tool. Keep comments and triage state distinct from ATS truth.

Before an ATS upload, show the exact candidates, target records, field mapping, create-versus-update behavior, owners, source attribution, stages or tags, notes, duplicate handling, and blank fields. Require explicit approval. For a new mapping, start with a small batch, verify the resulting records and links, and report created, updated, skipped, failed, and unresolved candidates.

## 7. Continue deliberately

A human owns advancement, rejection, and hiring judgment. After shortlist approval, use `strawberry/recruiting/send-candidate-outreach` for draft-first messaging with exact send approval.

When the method proves useful, offer to save its criteria, sources, fit logic, fields, artifact, destination, and review points as a custom skill. Sharing the artifact, the team skill, or the full companion are separate choices. Use `strawberry/operations/set-up-shared-team-workflow` when the team should reuse the method. A Routine may refresh an internal review file or prepare candidates for review after the workflow is stable; it does not publish candidate data, change ATS state, contact anyone, or make hiring decisions.
