---
name: write-a-product-spec
description: Turn an accepted product problem into a source-linked specification covering users, outcomes, requirements, flows, edge cases, dependencies, open questions, non-goals, measurement, and acceptance criteria. Use when product and engineering need a shared definition of what to build; keep roadmap prioritization, architecture, and implementation planning separate.
---

# Write a Product Spec

Turn an accepted product problem into a clear definition of what should change and how the team will
know it works. Do not hide unresolved product decisions behind a polished template.

## 1. Confirm the accepted problem

Clarify the problem, affected users and situations, desired outcome, decision owner, scope, timing,
constraints, and why the team is specifying it now. Use source-linked customer feedback, product
evidence, metrics, existing behavior, strategy, and prior decisions when available.

Use `strawberry/product-engineering/synthesize-customer-feedback` when the feedback still needs
proper synthesis. A synthesis can inform the problem; it does not automatically approve the
roadmap priority or solution.

If the problem or priority is not accepted, produce the smallest decision brief or list of open
questions needed to resolve it rather than writing a fictional specification.

## 2. Understand the current product

Inspect the current flow, relevant product surfaces, existing documentation, past decisions,
related tickets, constraints, and known dependencies. Use approved browser, document, product,
analytics, meeting, and repository context where it changes the product definition.

Keep current behavior, user evidence, stakeholder request, product judgment, and technical
constraint distinct. Surface conflicting sources and stale assumptions.

## 3. Define the product change

Build the specification around the work, including:

- problem, users, situations, desired outcomes, and evidence;
- goals, non-goals, scope, and decision boundaries;
- the main user flow and important alternate, empty, error, permission, and recovery states;
- functional requirements and relevant experience requirements;
- product rules, data or content needs, dependencies, migrations, and rollout considerations;
- measurement and guardrails;
- acceptance criteria tied to observable behavior; and
- open questions, risks, owners, and decisions still needed.

Write requirements that describe the product behavior and outcome, not an implementation disguised
as a requirement. Architecture, detailed system design, engineering task breakdown, and code
changes remain with the relevant Engineering workflow.

When the interaction or scope is still uncertain, present the critical flow and highest-risk
choices first. Let the team correct them before expanding the full document.

## 4. Validate the specification

Trace consequential requirements back to the accepted problem, evidence, constraint, or decision.
Check for contradictory rules, missing states, hidden dependencies, undefined terms, untestable
criteria, unsupported claims, accidental scope expansion, and metrics that cannot answer whether
the outcome improved.

Ask the relevant product, design, engineering, data, legal, support, or go-to-market owner only
about decisions they genuinely own. Record accepted choices and leave unresolved items visible.

## 5. Deliver and apply only permitted document actions

Provide a concise spec in the team's useful format, with a short decision summary, source links,
clear acceptance criteria, and the few remaining decisions that could change implementation.

Follow Strawberry's active scoped permission for the destination and action. If the current
permission covers creating or updating the specified document or product record, apply the approved
content and verify it. Otherwise return a reviewable draft or ask. Ticket creation, roadmap changes,
architecture, implementation work, and release actions are separate.

Use `strawberry/product-engineering/review-product-metrics` when success measures need definition
or current performance needs review. Preserve accepted product terminology, spec shape, source
hierarchy, and review behavior after they prove useful.
