---
name: review-applications
description: Review inbound applications against an accepted job description or scorecard and prepare evidence-backed human review. Use for application backlogs, first-pass application review, or identifying which applicants need closer inspection. Do not reject, advance, rank, or silently dispose of applicants.
---

# Review Applications

Help a qualified human review applications consistently while preserving evidence, uncertainty,
and candidate dignity. The result is a reviewable evidence set, not an automated disposition.

## 1. Establish the review frame

Find the accepted job description, internal role profile, scorecard, eligibility constraints,
application questions, review policy, and relevant ATS context. Confirm the role, decision stage,
application set, approximate scale, requested fields, destination, and human review point.

If the criteria are missing, contradictory, or materially ambiguous, propose a review frame for
qualified human approval before assessing fit. Do not infer the hiring bar from the first
applications or change it to make the current pool look stronger.

## 2. Calibrate before scaling

For a new rubric, subjective criteria, or large backlog, start with a small, varied set that exposes
clear evidence, borderline cases, missing information, and contradictions. Let the reviewer correct
the criteria mapping, evidence bar, labels, fields, and output before more applications are
processed.

Reuse a trusted review method without unnecessary reconfirmation, but pause when the role, criteria,
source set, destination, volume, or consequence changes materially. Report what will be reviewed
and what will remain outside the current pass.

## 3. Review job-related evidence and record state

Inspect only job-relevant application evidence. For each criterion, distinguish applicant claims,
documented evidence, inference, contradiction, and missing information. Never infer protected
characteristics or use them in the assessment.

When the approved ATS or source system is available, resolve the candidate and role before
combining records. Check duplicates, prior applications, current stage, eligibility state when
appropriate, and missing attachments. Label state as observed, stale, unavailable, or unresolved
instead of assuming it.

Preserve links or references to the originating application, attachment, question, or ATS record
for material claims. Never invent experience, qualifications, dates, scores, or candidate intent.

## 4. Prepare the human review set

Deliver:

- an evidence table for each application;
- fit guidance with the supporting evidence, confidence, and unresolved questions;
- a clearly separate review set with the qualified human decision required;
- missing or ambiguous evidence and useful verification questions;
- duplicate, eligibility, attachment, or ATS-state caveats; and
- coverage of the backlog and any unreviewed remainder.

Make the fit guidance understandable and non-dispositive. A useful default is:

- **strong potential fit** — current evidence supports most critical criteria and no material conflict is visible;
- **potential fit with questions** — relevant evidence exists, but important criteria need clarification or verification;
- **limited fit based on current evidence** — the application does not currently support one or more important criteria, or contains material conflicting evidence; or
- **unable to assess** — the available application does not contain enough reliable evidence.

Explain the most important reasons for the guidance and show confidence. These labels help a human
decide what to inspect; they are not rankings, recommendations to reject or advance, or automatic
dispositions. Never reject, advance, rank candidates against one another, notify, delete, archive,
or change candidate records.

If the inbound set cannot plausibly support the hiring goal, use
`strawberry/recruiting/review-recruiting-pipeline` for the wider coverage decision. Use
`strawberry/recruiting/source-candidates` when more qualified candidates are needed, or
`strawberry/recruiting/map-a-talent-market` when the market definition is uncertain.

## 5. Apply only approved changes

Prepare proposed ATS notes or changes separately with sources, reasons, target records, fields, and
create-versus-update behavior. A qualified human owns advancement, rejection, and hiring judgment.

Follow Strawberry's active scoped permission for every source, candidate set, account, destination,
and action. Reviewing evidence, sharing internally, changing ATS records, advancing or rejecting,
archiving, and communicating with candidates are separate actions. Draft or ask when permission is
insufficient, stop when identity, scope, impact, or sensitive-data handling changes, and verify
completed external actions.

After human calibration, offer to save the accepted rubric, evidence labels, fields, destination,
and review point as a custom or team skill. Add a Routine only for a stable review-first workflow
with clear inputs, a human review gate, destination, and stop conditions; never automate candidate
disposition.
