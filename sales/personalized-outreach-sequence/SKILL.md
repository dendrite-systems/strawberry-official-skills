---
name: personalized-outreach-sequence
description: Plan, draft, review, and safely run personalized outreach across LinkedIn, email, and manual follow-up. Use when contacting a known list of prospects, customers, clients, candidates, partners, or other recipients.
---

# Personalized Outreach

Use this Official Skill as starting guidance for a first or redesigned outreach workflow. If the
user already has a tailored outreach skill, follow that instead.

## Context, setup, and planning

Try to understand enough of the situation to propose a useful sequence. Relevant context may
include:

- the audience, desired outcome, offer, and intended next step;
- the recipients and any prior contact;
- the channels and sequence: LinkedIn, email, calling tasks, or a combination, plus the number and
  spacing of follow-ups and what a reply should trigger;
- the intended writing style; if it is not already clear, use `strawberry/general/learn-writing-style` to
  learn it from approved sent messages, user-selected examples, or both;
- the evidence available for personalization, claims, and pricing;
- where the user wants to review drafts and approve sending, enrollment, or follow-up.

Use relevant, approved history and company materials when available; do not require them. Let the
user answer a few questions, let Strawberry inspect context, or combine both. Pull claims, pricing,
and positioning from approved materials.

Present a concise plan covering the audience, channels, sequence, personalization approach, sample
size, review point, and intended follow-up. Let the user confirm or adjust it before drafting at
scale.

## Draft and calibrate

1. When prior outreach or existing records are available, deduplicate the recipients against them.
   Exclude opt-outs and do-not-contact recipients; clarify whether current customers or live deals
   should also be suppressed.
2. Verify each recipient and destination before drafting or sending. On LinkedIn, capture the real
   profile URL and cross-check at least two identity signals such as photo, current role and company,
   prior companies, education, location, or mutuals. Flag ambiguity rather than choosing the first
   plausible match. Verify email addresses with a published source or approved verifier; never send
   to a guessed, risky, or unverifiable address. Before any merge, clean name and company fields so
   honorifics, credentials, pronouns, emojis, or taglines do not leak into the copy.
3. Use only verified personal and company context. Do not invent familiarity, pain points, mutual
   relationships, intent, achievements, or reasons to buy.
4. Draft messages one by one and show a small, representative sample first. Personalize the body
   with a specific, recent, verified detail rather than only a merge field or generic praise.
   Include the evidence behind each personalization so the user can review the reasoning as well as
   the copy.
5. Incorporate corrections to tone, structure, detail, channel, and call to action before expanding
   the sequence. Avoid repeated or near-identical mass copy.

## Execute the approved sequence

Unless the user has explicitly approved the exact action and recipients, always ask for permission
immediately before sending, enrolling, or creating external records.

- **LinkedIn:** The safe default for a new connection is a plain request without a note. Add a note
  only when the user asks, and keep it under 300 characters. Use one agent in sequence, move at a
  human pace, and stop on any warning, challenge, unexpected state, or uncertainty about the
  recipient.
- **Email:** Keep messages as drafts with user confirmation enabled until sending is approved. Use
  Gmail or the user's approved campaign tool, such as Lemlist. Keep the first touch short and plain
  text with one ask and at most one link. For cold email at volume, confirm it uses a secondary
  sending domain, the inbox is warmed, and SPF, DKIM, and DMARC are configured before enrollment.
- **Follow-up:** Send email follow-ups in the original thread after the agreed wait, usually a few
  business days. Keep them short, introduce no new pitch, and stop the sequence immediately when the
  recipient replies. Surface the reply and a suggested response for review.
- **Manual follow-up:** When requested, create reviewable CRM or ATS tasks for calls or other
  actions rather than pretending the work was completed.

When the user has chosen a CRM, ATS, or workspace for outreach activity, record what was sent, when,
through which channel, and the next follow-up. Do not log a vague summary when the exact approved
activity can be preserved.

## Suggested outcome

Produce an approved channel plan and a calibrated set of personalized messages for verified
recipients, with the evidence behind each personalization visible during review. Execute only the
actions the user explicitly approves. Nothing is invented, sent, enrolled, or externally recorded
without the required approval.

## Suggested next steps

- Use `strawberry/sales/keep-crm-updated` to preserve approved sales activity and follow-up.
- Use `strawberry/sales/prepare-for-calls` when the next step is a scheduled conversation.
- After the sequence proves useful, save the accepted channel order, approval behavior,
  personalization rules, and follow-up logic as a user-owned outreach skill. Keep reusable voice
  examples in the writing-style skill.
