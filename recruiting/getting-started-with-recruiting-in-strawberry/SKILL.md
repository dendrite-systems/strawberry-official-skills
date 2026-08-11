---
name: getting-started-with-recruiting-in-strawberry
description: Best practices for anyone getting started with recruiting in Strawberry. Use when helping a user choose, set up, or expand candidate sourcing, screening, interviews, outreach, or shared hiring workflows.
---

# Getting Started with Recruiting in Strawberry

Strawberry can connect work across the hiring lifecycle, from requisitions and job descriptions
through sourcing, outreach, interviews, references, offers, and onboarding. This is not a fixed
methodology. Enter wherever the user or team has a real bottleneck, interview them candidly until
the best starting point is clear, and skip what already works. Over time, help them adopt the
workflows here that genuinely suit how they hire.

## Set up Strawberry around the role

Start with a candid conversation about the result that would be most useful now. While the goal is
broad, ask one short question at a time. Once a concrete workflow emerges, offer to gather deeper
context through a few questions, approved hiring material, or a combination of both. Relevant
context may include job descriptions, scorecards, the company website, email, Slack, the ATS,
interview notes, prior searches, and examples of strong or rejected candidates.

Learn the role, existing approach, job-relevant criteria, exclusions, source boundaries,
destination, required fields, evaluation format, and approval rules. Keep hard criteria such as
location, compensation band, must-have skills, and eligibility distinct from softer signals such
as seniority, hypergrowth experience, technical background, and communication evidence. The user
owns the hiring bar; use examples to clarify it without turning one person's biography into the
requirement. Before substantive work, summarize the understood context, open uncertainties,
suggested result, and intended approach in a concise plan. Wait for the user to confirm or adjust
it.

## Find and qualify promising candidates

Strawberry can turn a plain-language description of a role into a reviewable shortlist across
approved sources. On a first run, use a varied surface-level calibration sample, often fewer than
ten candidates, so the user can correct the bar before the search scales. If nobody in the sample
meets the rubric, stop and clarify rather than scaling a weak search.

The reviewed result should make the judgment easy to inspect: include real source links, requested
fields, an overall rating, evidence against the important criteria, caveats, and reviewed and
filtered counts. Cross-reference the ATS or tracker, check duplicates and identity mismatches, and
show new, uncontacted candidates by default. Especially early on, include a few candidates set
aside and why so the user can calibrate the filtering. Read `strawberry/recruiting/source-candidates` for the
complete sourcing, enrichment, calibration, and review workflow.

## Screen incoming applications

When the starting point is an applicant pool rather than a new search, Strawberry can compare
applications against an agreed, job-relevant rubric while keeping observed evidence, inference,
caveats, and unknowns distinct. Calibrate the hiring bar on a small, varied sample before screening
the full pool when it is not already clear. Do not reject applicants, change ATS records, or send
messages without approval. Read `strawberry/recruiting/screen-applicants-against-job-description` for the
complete application-screening workflow.

## Write outreach in the team's voice

Good candidate outreach depends on verified relevance and a voice that sounds like the team.
When the voice is not already clear, read `strawberry/general/learn-writing-style` to learn it from
approved sent messages, user-selected examples, or both. Reuse the evidence and calibration from
`strawberry/recruiting/source-candidates`. Use specific, verified professional context when it
genuinely improves the reason to reach out; do not force a recent detail or generic praise.

Agree on the channel and whether the useful result is one message, a small batch, or a sequence.
Verify the recipient and contact information, and review a representative sample when calibration
would help. Keep messages as drafts unless the user has explicitly approved the exact action and
recipients; never send when identity or contact details are uncertain. Read
`strawberry/sales/send-personalized-outreach` for the detailed drafting, review, sending, and
follow-up workflow.

## Prepare interviews and decisions

Before an interview, Strawberry can combine approved candidate background and recent work, the
role-specific signals that matter, open items from earlier stages, and useful questions into a
concise brief. Read `strawberry/sales/prepare-for-calls` for the preparation workflow.

Afterwards, Strawberry can turn the transcript into a structured scorecard mapped to the agreed
rubric, preserve decisions and action items, draft a follow-up grounded in what was actually said,
and prepare approved ATS updates. Read `strawberry/operations/transcribe-meetings-follow-up` for the
post-interview workflow. Nothing should be sent or externally recorded without the required
approval.

## Other things to try

These are useful discovery ideas, not complete standalone workflows:

- Prepare a talent-market map of where a profile exists, in what numbers, and at what compensation
  before opening or reshaping a search.
- Clean duplicates, normalize fields, fix stale statuses, and rediscover strong past applicants
  who fit a role open today.
- Draft a reference brief from the role rubric and open interview questions, then turn the call
  transcript into a structured summary.
- Prepare a requisition, job description, hiring-manager kickoff, offer, rejection, or onboarding
  plan from the team's approved context.
- Flag candidates in flight who have not had a recent touch and draft a reviewable check-in.

## Make the process yours

Review the first real result before scaling it. Save the accepted sourcing, screening, outreach, or
interview method as a user-owned skill, including the criteria, evidence, fields, destinations,
communication style, approval behavior, and exceptions.

When the process should become shared across recruiters and hiring managers, read
`strawberry/operations/set-up-shared-team-workflow` to establish common owners, field meanings, destinations,
privacy boundaries, and review conventions. Add a weekly or bi-weekly sourcing, ATS-hygiene, or
candidate-follow-up Routine only after the underlying workflow is trusted and the role has enough
volume to justify it.
