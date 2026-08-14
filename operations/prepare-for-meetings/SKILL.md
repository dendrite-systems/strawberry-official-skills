---
name: prepare-for-meetings
description: Prepare a concise, actionable brief for an upcoming internal or external meeting by combining the calendar event, participants, prior conversations, documents, projects, files, tabs, and relevant web context. Use for leadership, board, partner, vendor, client, project, one-to-one, and other general meeting preparation; route meetings that need specialist Sales or interview judgment to the appropriate focused skill.
---

# Prepare for Meetings

Help the user walk into a meeting knowing what matters, what they want from it, and what is worth
asking. Start with a brief they can scan quickly and go deeper only when the meeting warrants it.

Use `strawberry/sales/prepare-for-sales-meetings` when prospect, customer, partner, pipeline, or
account judgment is central. Use `strawberry/recruiting/prepare-candidate-interviews` for structured
candidate-interview preparation. Continue here for general meetings and for the shared preparation
work that does not depend on a specialist domain.

## 1. Find the meeting and the useful outcome

When the user refers to an upcoming, next, or named meeting, start from the calendar when possible.
Resolve the event, timing, participants, purpose, and relevant organization or project. Match people
carefully using attendee names, email addresses, domains, prior conversations, and relationship
context. Ask when an identity or event match is genuinely unclear.

If Calendar is unavailable, continue from an invite, meeting link, open tab, uploaded material, or
the details the user provides. Suggest a connection only when it would materially improve matching
or save repeated setup.

Infer the result the user likely needs from the meeting: a decision, alignment, feedback, an
introduction, an update, a difficult conversation, or a concrete next step. Confirm it only when the
wrong assumption would change the brief. Scale the work to the time remaining and the stakes. If the
meeting is imminent, give the essentials first.

## 2. Pull together only the context that matters

Start with the meeting itself, then use the sources most likely to change the conversation. These
may include prior meeting notes, messages, email, project records, documents, dashboards, files,
shared team context, and the user's open tabs or approved apps.

Use Strawberry's browser workspace when the useful context lives across real sites. Follow links
through the user's visible tabs and logged-in tools, inspect the underlying records, and let the user
see or take over the work. Research public people, company, market, or topic context only when it
could improve the meeting; do not add a web-research layer by default.

Keep facts, prior decisions, other people's claims, and the user's private hypotheses distinct.
Surface a conflict or missing record when it could change the meeting rather than smoothing it over.

## 3. Work out what could change the conversation

Prioritize the few things that should affect how the user shows up:

- what has happened since the last relevant interaction;
- open decisions, commitments, tensions, or dependencies;
- what each important participant is likely responsible for;
- material context the user may need to bring or explain;
- questions that could reveal, resolve, or advance something; and
- the outcome or next step worth aiming for.

Do not turn the brief into a biography, document summary, or project status dump. Include context
because it changes a question, a decision, a risk, or the way the conversation should be handled.

## 4. Give the user a brief they can use

Default to a compact, bullet-led brief in chat. Adapt the shape to the meeting, but a useful result
often includes:

- **Aim for:** the desired outcome or decision;
- **Who and why now:** the people, purpose, and latest relevant context;
- **Know:** the few facts, commitments, or changes that matter;
- **Bring:** a document, example, answer, or unresolved item;
- **Ask:** a short set of useful questions; and
- **Watch for:** a sensitive point, uncertainty, dependency, or decision boundary.

Put source links beside the claims they support when the user may need to verify or open them. Keep
private notes out of any version intended for attendees or a wider team.

## 5. Review, share, and complete the loop

Let the user correct the depth, priorities, sources, and format after seeing a real brief. Share the
approved version only with the agreed people and destination.

Strawberry's meeting capture can provide a transcript or other durable record without a visible
meeting bot; capture is a product capability, not a separate skill to route through. After a general
meeting, use `strawberry/operations/debrief-a-meeting`. Use the relevant specialist debrief when the
meeting needs domain-specific judgment.

When the preparation pattern is genuinely repeatable, save the accepted method as a custom or team
skill. A Routine may trigger before matching calendar events, check the agreed calendar, prior
meetings, messages, projects, and other useful sources, then place a draft brief in the chosen
destination. It should stop when the event or participant match is unclear, private context may be
shared, or the brief depends on a decision only the user can make.
