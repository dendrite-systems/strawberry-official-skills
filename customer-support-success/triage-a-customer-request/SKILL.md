---
name: triage-a-customer-request
description: Triage a customer request using the team's actual impact, urgency, SLA, category, ownership, and escalation rules; gather the context that changes the response, check for duplicates or known issues, and prepare the next action. Use for new or backlogged support tickets, emails, chats, and customer issues.
---

# Triage a Customer Request

Turn a customer request into a grounded view of what is happening, how quickly it needs attention,
who should own it, and what the customer should hear next.

## 1. Understand the request

Read the full thread or record. Identify the customer's question or symptom, affected workflow,
scope, timing, environment, emotional state, prior attempts, and what they need now. Keep the
customer's words and exact error text where they help investigation or search.

Confirm the relevant account, channel, and support policy. Use the team's actual categories,
priority definitions, SLA, routing, and entitlement rules. If they are missing, describe impact and
urgency plainly rather than inventing a P1–P4 system.

## 2. Gather only the context that changes triage

Use approved support history, account notes, product docs, help-center content, known-issue records,
team discussions, and project tracking. Check for related open requests, an existing workaround,
or a duplicate issue. Keep source links and recency visible.

Do not turn triage into a complete account research project. Pull in goals, plan, renewal, usage, or
relationship context only when it changes impact, tone, ownership, or the next action.

## 3. Assess impact and route

Separate observed facts from assumptions. Consider who is affected, how blocked they are, whether a
workaround exists, how long the issue has persisted, whether it is spreading, and any accepted
contractual or relationship obligation. Customer value may inform attention, but it does not erase
product, security, fairness, or SLA rules.

Recommend the category, priority or urgency, owner, and response deadline using the team's policy.
Route suspected security, privacy, data loss, legal, regulated, or active incident cases immediately
to the accepted specialist path.

## 4. Deliver the triage result

Provide:

- a one-line request summary and current state;
- customer, impact, urgency, and supporting evidence;
- category, suggested priority, and reasoning;
- known issue, workaround, and duplicate status;
- recommended owner and exact next action;
- gaps or questions that could change the route; and
- a concise initial customer response when useful.

Use `strawberry/customer-support-success/research-and-answer-a-customer-question` when the next job
is finding and communicating a reliable answer. Use
`strawberry/customer-support-success/escalate-a-customer-issue` when another team needs a complete
customer-impact brief. Use `strawberry/product-engineering/research-and-report-a-bug` when product
reproduction and an engineering issue are required.

## 5. Apply only the accepted action

Drafting a response, sending it, changing priority, assigning an owner, merging a duplicate, updating
a ticket, and filing an issue are separate actions. Follow the active scoped permission for each
record and destination, and verify any completed change.

After the team accepts the categories, signals, routing, and response pattern, preserve them for
later requests. A queue Routine may surface new and changed requests using named rules, but it
should stop on ambiguous identity, unusual impact, sensitive content, or a case outside the accepted
policy.

