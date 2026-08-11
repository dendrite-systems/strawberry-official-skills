---
name: debrief-a-sales-meeting
description: Turn a completed sales, prospect, customer, or partner meeting into a clear debrief, grounded follow-up, proposed CRM changes, and owned next actions. Use after a conversation when notes or a transcript are available and the user wants to understand what changed and finish the follow-through.
---

# Debrief a Sales Meeting

Turn a real conversation into a clear understanding of what happened and what should happen next.
Use the user's sales process and preferred level of detail rather than forcing every meeting into the
same template.

## Workflow

### 1. Understand the meeting and the result

Confirm the meeting, relationship, and what the user wants from the debrief. They may need a quick
recap, a follow-up message, CRM updates, next actions, coaching, or a fuller account view. Start with
the most useful result and offer more only when it helps.

Resolve the meeting calendar-first when possible. Match the recording or transcript time to the
calendar event, use attendee names, email addresses, and company or domain context to identify the
speakers and account, then search CRM, email, and other sources narrowly with those exact
identifiers. Broaden the search only when the calendar match is missing or ambiguous.

Use the existing relationship and desired meeting outcome when available. If the meeting still
needs to be recorded or transcribed, use
`strawberry/operations/transcribe-meetings-follow-up`. Continue here when a transcript, notes, or
another reliable record is ready for a sales-specific debrief. If the record lives in another
meeting-notes app, use an available connection or ask the user to connect it when helpful.

### 2. Ground the debrief in what was said

Use the full transcript or notes when available, not only a short summary. Match speakers and the
correct account or opportunity before combining context. Keep uncertain wording, attribution, and
missing details visible when they could change the follow-up.

Separate what someone actually said or agreed from interpretation. Do not turn polite interest into
buying intent, an idea into a commitment, or a suggested date into a confirmed deadline.

### 3. Work out what changed

Focus on what should change the user's understanding or next move. Depending on the meeting, this
may include:

- the outcome and whether the intended purpose was achieved;
- priorities, needs, objections, questions, or constraints in the other person's own words;
- decisions, promises, next steps, owners, and dates;
- stakeholders or relationship changes that now matter;
- evidence that affects qualification, timing, stage, risk, or opportunity; and
- open questions or missing context that should be resolved before acting.

Use the user's qualification framework, stage definitions, and meeting habits when known. Otherwise,
offer a light interpretation and let the user correct it.

### 4. Prepare the useful follow-through

Lead with a concise debrief. Add only the outputs the user needs, such as:

- a short recap and the most important change;
- owned next actions and dates;
- a follow-up draft grounded in the conversation and the user's voice;
- internal notes or a decision log;
- proposed CRM activity, contact, stage, close-date, next-step, or risk updates; and
- a question, asset, introduction, or piece of research promised during the meeting.

Do not pad the debrief with a play-by-play when a quick answer is enough. Keep source moments easy to
inspect when a claim, commitment, or proposed record change matters.

When the user promised an asset, example, answer, or technical detail, use approved material. If it
is unavailable, leave a clear placeholder and ask the user to supply it or approve creating it as a
separate piece of work. Do not synthesize the promised content from the transcript alone or invent
product capabilities, customer facts, or commitments.

Use `strawberry/sales/create-a-sales-asset` when the promised work should become a customer-facing
one-pager, deck, page, interactive asset, or another tailored visual deliverable.

### 5. Review and complete the next actions

Keep the follow-up message, CRM changes, tasks, and any other external action as separate reviewable
items. Approval of the debrief is not approval to send or update systems.

Use `strawberry/sales/send-personalized-outreach` when the user wants to send or manage the message.
Use `strawberry/sales/keep-crm-updated` for approved CRM changes. If the meeting changes which deals
need attention across the wider pipeline, use `strawberry/sales/review-sales-pipeline`.

When the approved debrief would help others, offer to share the useful notes and owned actions with
the relevant teammates in their agreed destination. Keep private notes separate and do not post or
send anything without approval.

### 6. Make the next debrief easier

Carry forward genuinely useful account context and clear preferences in how the user wants to work.
Also notice emerging patterns—what resonates, recurring objections, useful questions, or gaps in
sales material—so repeated evidence can improve future meeting prep, follow-up, skills, and
materials. Keep this light: do not turn every takeaway into memory or one meeting into a team-wide
rule. Early on, include proposed learnings in the review; once the user's preferences are clear, use
judgment for obvious low-risk updates and ask before changing a shared method.

After feedback, offer to save the accepted debrief depth, fields, voice, destinations, and review
behavior as a custom or team skill. When teammates need ongoing access to the same customer context,
memory, and several Sales workflows, offer to share the full companion. Once trusted, suggest an
event-triggered Routine that runs when a sales meeting transcript is ready, checks the calendar and
account context, prepares the debrief, follow-up draft, and proposed CRM changes, then waits for
review. Stop and ask for help when the record is incomplete, the account match is uncertain, or the
next action depends on a decision only the user can make.
