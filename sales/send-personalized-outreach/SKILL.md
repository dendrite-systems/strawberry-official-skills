---
name: send-personalized-outreach
description: Research, write, review, send, and improve personalized outreach across email, LinkedIn, and other channels. Use when someone wants to contact known prospects, customers, candidates, partners, investors, or other recipients through one message, a small batch, or a coordinated sequence.
---

# Send Personalized Outreach That Sounds Like You

Help the user get relevant outreach out the door without losing their voice, context, or control.
Start with the smallest useful result and expand when helpful. Follow a tailored outreach skill if
the user already has one.

## Workflow

### 1. Understand the outreach

Clarify who the user wants to contact, why, what relationship exists, and what they hope happens
next. Use relevant tabs, connected apps, files, memory, previous messages, CRM history, and approved
materials before asking for context already available.

Understand whether the outreach is relationship-led, campaign-led, or a mix. A warm introduction,
meeting follow-up, customer issue, partner conversation, or important personal relationship may
deserve one thoughtful message rather than a campaign. In a mixed approach, keep high-context
relationships separate from the genuinely repeatable audience.

When meeting notes or a transcript should ground the follow-up, use
`strawberry/sales/debrief-a-sales-meeting` rather than reconstructing what was said. If the meeting
still needs to be captured, use `strawberry/operations/transcribe-meetings-follow-up` first.

If the user still needs recipients, use `strawberry/sales/find-new-customers`. If a list needs better
data or verification, use `strawberry/sales/enrich-lead-list`.

### 2. Choose the scope and channels

Align on whether the useful first result is one message, a small batch, or a sequence. When the user
is unsure, recommend a small, representative batch they can quickly review and use. Do not force a
warm introduction, meeting follow-up, customer issue, or important relationship into a campaign.

Before proposing a larger batch or sequence, inspect the available context and ask only for missing
inputs that would materially change the plan. Explain tradeoffs behind scope, cadence, and channels
rather than importing generic conventions. Offer rather than require a pilot when the user already
has trusted copy and an established process.

Choose channels that fit the audience and relationship. Distinguish a normal LinkedIn connection or
message from InMail. Clarify where the work should be reviewed or sent. If a sequence includes a
phone call or another manual step, prepare it for the user and carry its outcome forward; do not
imply that Strawberry performs the action.

### 3. Use the right context and voice

Use memory, approved sent messages, and selected examples to understand how the user writes. Read
`strawberry/general/learn-writing-style` when a deeper pass would materially improve the work. Take
positioning, proof points, claims, pricing, and sensitive details from approved context.

Choose research and personalization depth based on the goal, stakes, available context, audience,
and scale. Infer it when clear; align with the user when the tradeoff matters. Use relationship or
account context, relevant changes, and credible reasons to reach out. Do not force a recent detail
or invent familiarity, pain points, intent, achievements, or reasons to buy.

Private context may guide the decision to reach out, but do not reveal it in recipient-facing copy
unless its use is clearly appropriate and attributable. Avoid personalization that makes someone
feel monitored.

### 4. Draft and calibrate

Draft a small set that represents meaningful differences in recipients, channels, or message types.
Make each message natural for its channel, suited to the relationship, and grounded in facts the
user can inspect when needed.

Incorporate the user's feedback before expanding. Skip calibration when they already have trusted
copy and a straightforward setup.

### 5. Prepare and send

Prepare drafts, records, recipients, or a sequence in the agreed destination only when asked. Check
relevant prior outreach, CRM history, opt-outs, do-not-contact records, and ambiguous identities.
For an ambiguous person, confirm the match from multiple signals such as current role, company,
location, or prior work rather than guessing. Clean recipient and company fields so credentials,
pronouns, emojis, or profile taglines do not leak into greetings or message copy.

Before contacting anyone, show the sender, recipients, content, channel, timing, and whether
enrollment starts sending automatically. Get confirmation for that exact scope. One confirmation
may cover a fully defined batch or sequence; ask again after any material change.

For scaled cold email, surface material verification, sender, domain, authentication, volume, or
platform issues. Keep this lightweight for ordinary one-to-one outreach. On LinkedIn, work
sequentially at a human pace and stop on warnings, challenges, rate limits, identity ambiguity, or
unexpected states.

### 6. Deliver and follow through

Execute only the approved scope. Return the messages with their intended recipients, channels,
status, and any unresolved sending issues. Treat drafting, enrollment, sending, and recording as
separate states. When accurate activity history matters, verify what was actually sent rather than
treating a draft, enrollment, or CRM row as proof of delivery.

When requested, help manage replies, opt-outs, bounces, referrals, and booked meetings so the
outreach changes when the situation does. Record approved activity and next steps when useful.

### 7. Add follow-ups and make the next run easier

After the first useful message or batch is accepted or sent, briefly explain that thoughtful
follow-ups can keep promising conversations from being missed. Offer to plan a sequence then, or
earlier when the user already wants the full process.

When building a sequence, agree on who belongs in it, where it will live, what each touch
contributes, its timing or event trigger, the approval scope, and what should stop or change the
sequence. Each follow-up should add something useful, make the next step easier, deliver something
promised, address a real objection, or close the loop. Do not send a reminder merely because a
timer expired.

Include timing and response logic only when building a sequence.

After the user has improved a useful result, offer to save the accepted voice, channels,
personalization approach, messages, destination, and follow-up logic as a custom skill. Once the
workflow is trusted and has a useful trigger or cadence, suggest a concrete Routine such as a
weekday outreach review, reply-triage scan, or weekly outreach review. Keep early Routines
read-only or draft-first unless the user explicitly approves a broader scope.

Use `strawberry/sales/review-sales-pipeline` when the user wants to find which deals or
relationships need attention across the wider pipeline, rather than manage an existing outreach
queue.
