---
name: getting-started-with-sales-in-strawberry
description: Best practices for anyone getting started with sales in Strawberry. Use when helping a user choose, set up, or expand prospecting, research, outreach, meetings, CRM, or shared sales workflows.
---

# Getting Started with Sales in Strawberry

Strawberry can connect prospecting, research, outreach, meetings, and CRM work without making the
team copy context between tools. This guide shows how those workflows can grow into a connected
sales process. It is not a fixed methodology: enter wherever the team has a real bottleneck and
skip what already works. Interview the user candidly until the best starting point is clear. Over
time, help the team adopt the workflows here that genuinely suit how it sells.

## Set up Strawberry around how the team sells

Start with a candid conversation about the result that would be most useful now. While the goal is
broad, ask one short question at a time. Once a concrete workflow emerges, gather the deeper
context needed to do it well.

Offer to learn through a few questions, ask permission to look through relevant connected apps, or
combine both. Useful context may include an ICP document, the company website or product
documents, existing or won accounts in the CRM, email, Slack, meetings, and prior sales work; do
not assume that any particular source exists. Learn the team's customer criteria,
exclusions, preferred fields, writing style, destinations, and approval boundaries. When the
choice affects time or credits, explain the tradeoff between a wider surface-level pass and deeper
account research. Before substantial work, summarize the intended result, sources, fields,
destination, scope, and approach in a concise plan for confirmation.

Keep outreach as drafts and CRM changes as proposals until the user approves sending or applying
them. Verify the intended recipient and destination before any external action; do not infer
permission from approval of the research or draft.

## Find and qualify the right prospects

Strawberry can turn the team's customer criteria into a reviewable list with evidence for why each
prospect fits now. The user can describe those criteria, or Strawberry can infer a proposal from
approved ICP material, the company website, or existing customers. Begin with a small sample,
often fewer than ten prospects, so the user can correct the bar before the search scales. Restate
the full-run scope and rough cost before expanding substantially. Read
`strawberry/sales/source-customers` for the sourcing workflow.

Useful fit and timing signals may include funding, hiring, expansion, leadership changes,
tech-stack fit, recent news, or public pain points. Preserve the source behind each important
include or exclude, check the CRM and prior work for duplicates, and report how many prospects were
reviewed and narrowed. A fit score and a few borderline examples can help the user calibrate the
filtering; never pad the result to reach a requested count.

If the team already has a list, Strawberry can add verified decision-makers and the fields needed
for qualification or outreach. Return source links and verification status, and flag risky or
unverifiable contact details rather than treating guesses as facts. Read
`strawberry/sales/enrich-lead-list` when the starting point is an existing list rather than a new search.

## Research accounts and prepare useful material

Start from the decision the research should support. Strawberry can research a company before an
important interaction, preserving source links and relevant dates, separating facts from
inference, and exposing missing, outdated, or contradictory evidence. Read
`strawberry/sales/research-prospect-before-meeting` for a concise account brief, or
`strawberry/research-analysis/research-companies-create-decks` when the result should be a sourced visual deck.

## Write outreach that sounds like the team

Good outreach depends on a verified recipient, a specific and recent reason to reach out, and the
team's own voice. Strawberry can learn from approved sent messages, agree the channel mix and
sequence, draft messages one by one from sourced research, and deduplicate against prior outreach.
Review a small sample before any batch. If pricing or another sensitive claim appears, take it from
the team's approved materials rather than guessing from public context. Read
`strawberry/sales/personalized-outreach-sequence` for the detailed workflow; nothing is sent or enrolled
in a campaign without the user's approval.

## Connect calls, notes, and follow-up

Strawberry is useful throughout the meeting cycle. It can prepare concise briefs for today's calls,
using relevant approved calendar, company, contact, relationship, and CRM context. Read
`strawberry/sales/prepare-for-calls` before meetings. Afterwards,
`strawberry/operations/transcribe-meetings-follow-up` can turn a transcript in the meeting's language into
decisions, open questions, action items and owners, and a follow-up grounded in what was actually
said. Keep messages and external-system updates reviewable until approved.

## Keep the CRM and team in sync

Once the team trusts the captured information, Strawberry can propose deduplicated CRM updates
with the source, target record, field changes, and reason visible for review. It can also surface
pipeline issues such as no activity for seven or more days, passed close dates, or missing fields
without silently changing the pipeline. Read `strawberry/sales/keep-crm-updated` for that handoff.

When an individual process works reliably and sharing it would solve a real coordination problem,
read `strawberry/operations/set-up-shared-team-workflow` to establish common fields, owners, destinations,
privacy boundaries, and approvals.

## Other things to try

These are useful discovery ideas, not complete standalone workflows:

- Find companies similar to a newly closed or clearly ideal customer.
- Find a second real contact on an open opportunity beyond an early stage so the deal does not rest
  on one person.
- Flag a champion's job change as a possible warm reintroduction.
- Mine CRM and prior work for win-loss patterns and concrete improvements.
- Review the full thread and call notes for an inbound reply, then draft a response in the team's
  voice.

## Make the process yours

Review the first real result before scaling it. Preserve the accepted criteria, fields, voice,
destinations, review points, and exceptions as a user-owned skill. Use Official Skills as starting
points; once the team has a tailored process, that process should become the durable way the work
is done. After a few successful runs, a Routine may prepare morning call briefs, surface a weekly
pipeline review, or source fresh leads at an accepted cadence. Add one only after the underlying
workflow, scope, and review behavior are trusted.
