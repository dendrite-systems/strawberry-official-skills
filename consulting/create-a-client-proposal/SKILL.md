---
name: create-a-client-proposal
description: Turn an RFP, discovery conversation, or defined consulting opportunity into a clear client proposal covering the problem, outcomes, approach, scope, responsibilities, timeline, approved fees, assumptions, exclusions, and terms. Use when a consultant or client-services team wants a proposal or statement of work ready for review.
---

# Create a Client Proposal

Build the proposal from the real opportunity and the consultant's approved pricing, terms, and
delivery material. The aim is a proposal the client can evaluate, not a generic capabilities
pitch. If the user already has a proposal process or tailored skill, follow it.

## 1. Understand the decision

Identify the client, opportunity, proposal type, intended reader, decision the proposal should
support, deadline, and requested delivery format. Establish whether this is a new proposal, a
response to an RFP, a statement of work, or a revision.

If the work has already been accepted and the user needs to prepare delivery, use
`strawberry/consulting/build-client-brief` to start the engagement instead of reopening the proposal.

## 2. Bring together the approved context

Use the relevant sources already available in Strawberry, such as visible tabs, a logged-in RFP
portal, discovery notes or transcripts, email threads, the client website, prior proposals, case
studies, offer descriptions, pricing, terms, and brand material. Ask before looking through
connected apps when permission or scope is not already clear.

Working from this shared context lets Strawberry draft from the complete opportunity record without
making the user reconstruct it in a prompt. Keep important source material easy to inspect while
the proposal is reviewed.

Use `strawberry/sales/research-an-account` when important account context is missing. Use
`strawberry/sales/debrief-a-sales-meeting` when a discovery record still needs commercial
interpretation about client needs, commitments, or next steps. Do not repeat work those skills have
already completed.

Keep each client's facts, files, commercial terms, and examples separate. A prior proposal may
provide an approved structure or style, but never carry its client facts, pricing, commitments, or
confidential material into this one. Ask only about gaps or conflicts that could materially change
the scope or commitment.

## 3. Agree the scope before drafting

Prepare a concise proposal outline that distinguishes:

- the client's stated problem, requirements, and constraints;
- the outcomes the work is intended to support;
- the consultant's proposed approach, deliverables, responsibilities, and timeline;
- approved fees, payment terms, assumptions, exclusions, and other terms;
- unresolved decisions, unsupported claims, and dependencies.

Make interpretation visible rather than presenting it as a client-agreed fact. Explain meaningful
choices about depth, schedule, deliverables, or format, and recommend an answer where the evidence
supports one. Let the user correct the outline before building the finished proposal.

## 4. Draft the proposal

Write in language appropriate to the client and decision. Include only the sections the proposal
needs, while making the problem, intended outcomes, approach, deliverables, responsibilities,
timeline, commercial scope, assumptions, exclusions, terms, and next step easy to find.

Use a document for a detailed proposal or statement of work. Use a deck when the proposal will be
presented or benefits from a visual narrative; in that case, use
`strawberry/research-analysis/create-beautiful-slide-deck` for presentation production. When fees,
options, resourcing, or calculations need a transparent model, use the internal
`strawberry/general/spreadsheets` capability and keep its inputs and formulas visible.

Do not invent fees, discounts, legal language, authority, client outcomes, ROI, dates, staffing, or
other commitments. Use a clear placeholder or decision note when an approved answer is missing.

## 5. Review it as a commitment

Check every promise against the available evidence and approved authority. Look for scope creep,
unclear acceptance criteria, hidden client dependencies, scheduling or resourcing conflicts,
unsupported outcomes, and commercial or legal points that still need review.

Show the user the material decisions and recommended answers, then revise the proposal with their
feedback. Identify when legal, finance, delivery, or leadership approval is still required; do not
provide that approval on their behalf.

## 6. Prepare the approved delivery

Deliver an editable source and the agreed presentation or export, plus a short list of unresolved
commercial points. Before recommending any sharing path, establish the audience, access model, and
destination. Protect client and personal data in the document, its links, and any visual examples.

Treat internal review, client sharing, sending, CRM updates, and legal acceptance as separate
approval states. Approval of the draft does not authorize any of them. If the user wants to send
the proposal, use `strawberry/sales/send-personalized-outreach` and obtain its required approval. If
the opportunity record should change, use `strawberry/sales/keep-crm-updated` and follow its scoped
review behavior.

## 7. Preserve what worked

After the proposal has been accepted as a useful model, offer to save the approved structure,
sources, claims, voice, pricing rules, and review points as a custom skill. Share the reusable
method with a boutique team only after removing client-specific facts and restrictions and agreeing
who can access it and where it belongs.

Proposal work is normally event-driven, so do not suggest a scheduled Routine by default. If a
trusted intake process genuinely repeats, a draft-first Routine may prepare the outline and flag
missing inputs. It must stop when pricing or authority is missing, terms conflict, client context is
unclear, or the request falls outside the approved offer.

## Suggested outcome

Create a client-ready proposal in the agreed format, grounded in the opportunity record and
approved firm material. Keep assumptions and open decisions visible, and make it clear what has
been drafted, reviewed, shared, sent, or accepted.
