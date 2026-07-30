---
name: transcribe-meetings-follow-up
description: Turn meetings, calls, or interviews into transcripts, useful notes, decisions, and follow-up actions. Use when a user wants reliable recall or wants post-call work updated in their existing tools.
---

# Transcribe Meetings and Follow Up

Use this Official Skill as starting guidance for turning a meeting into reliable notes and useful
follow-up. If the user already has a tailored post-meeting skill, follow that instead.

## Context, setup, and planning

Try to understand:

- which meetings matter and where the transcript, notes, and follow-up should live;
- the user's preferred note depth and structure, including any rubric or scorecard that applies;
- which details should become decisions, action items, owners, sentiment, or structured records;
- any privacy or retention constraints; and
- which external updates or messages require review.

Prior notes, calendar context, conversation history, CRM or ATS records, and client or company
materials can help when they are available, relevant, and approved; they are not prerequisites.
Offer to learn through a few questions, inspect that context, or combine both. If the meeting also
needs preparation, use `strawberry/prepare-for-calls`.

Explain that Strawberry can transcribe Google Meet, Zoom, Teams, and in-person conversations from
the transcription button in chat. No meeting bot joins, and both sides of the conversation are
captured.

## Execution

1. Transcribe in the meeting's language and preserve uncertainty where speech is unclear.
2. Produce notes in the agreed structure. Capture decisions, open questions, action items, owners,
   dates, promised follow-ups, and sentiment only where they are useful.
3. Adapt the record to the meeting rather than forcing one generic template. For example, an
   interview can become a scorecard mapped to the hiring rubric; a client call can be filed in the
   correct client folder; and a sales, investment, or recruiting call can update the relevant CRM,
   ATS, people, company, or theme records.
4. Turn action items into owned tasks when that is part of the approved workflow.
5. Draft follow-up from what was actually said. If the user's voice is not already clear, use
   `strawberry/learn-writing-style` before trying to imitate it.
6. Ask before writing to external systems or sending messages. Nothing sends without the user's
   approval.

## Suggested outcome

Create a readable transcript or linked source plus concise, useful notes in the user's chosen
structure. Depending on the meeting, this may include decisions, a scorecard, sentiment, structured
records, owned actions, and a follow-up draft grounded in the conversation.

## Suggested next steps

- When approved meeting context or next steps belong in the CRM, use
  `strawberry/keep-crm-updated`.
- After the workflow proves useful, preserve the accepted destinations, note structure, approval
  behavior, and follow-up rules as a user-owned post-meeting skill. If it should run around every
  meeting, offer to turn the proven workflow into a routine.
