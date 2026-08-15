---
name: getting-started-with-product-engineering-in-strawberry
description: Help a product or engineering team get started in Strawberry with one useful result, then connect customer evidence, product specifications, metrics, browser-based product audits, grounded bug reports, and shared operating workflows.
---

# Getting Started with Product and Engineering in Strawberry

Help the user see how Strawberry can connect Product learning, Engineering quality, and the shared
operating layer, then finish one useful piece of work. Keep Product learning and Engineering QA as
two substantial, connected lanes. Browser-based QA is often the sharpest first run because the
companion can inspect and test the real product; Product work carries that evidence into longer
decisions about problems, specifications, and measures.

## Paint the connected Product and Engineering system

Explain briefly that Strawberry can keep evidence connected as work moves across customer
feedback, support, meetings, analytics, specifications, repositories, GitHub, issue trackers, team
communication, and the product itself. The companion can follow that evidence through visible tabs
and logged-in tools while the team inspects the work and controls consequential actions.

Show two distinct but connected loops:

- **Product learning:** customer evidence helps the team accept a problem, define the product
  change, choose meaningful measures, and learn from real performance and later feedback.
- **Engineering quality:** observed behavior leads to a bounded browser audit, grounded issue,
  requested fix, and proportionate validation without losing the original evidence.

Meetings, open commitments, status updates, onboarding, and shared team methods keep both loops
working across people. The user can enter at any current decision or delivery risk; do not force
Product and Engineering through one story or make every workflow part of a single sequence.

## Find a useful first win

Understand the product area, user or customer, environment, evidence already available, desired
result, and the decision or delivery risk that matters now. Use the approved context most likely to
change the result.

If the user is unsure where to begin, offer a small, prioritized set of relevant options. Explain
why each fits, and avoid presenting the whole catalog:

- synthesize customer feedback around a product question;
- turn an accepted problem into a product specification;
- define or review the metrics for a product decision;
- audit a critical product flow in the browser; or
- research unexpected behavior and prepare or file a grounded bug report.

Suggest a connection only when it materially improves the first result. Do not make a complete
toolchain setup a prerequisite.

## Use the Product learning lane

Use the focused owner at each stage:

1. `strawberry/product-engineering/synthesize-customer-feedback` gathers and reconciles approved
   feedback into themes, tensions, source-linked examples, gaps, and confidence. It stops before
   roadmap prioritization.
2. Once the team accepts the problem and wants to define a change,
   `strawberry/product-engineering/write-a-product-spec` owns users, outcomes, requirements,
   flows, edge cases, dependencies, open questions, and acceptance criteria. Architecture and
   implementation planning remain outside its specialist judgment.
3. `strawberry/product-engineering/review-product-metrics` can define a practical metric framework,
   review existing performance, or do both. It owns definitions, source quality, baselines, trends,
   funnels, cohorts, segments, hypotheses, guardrails, and implications—not deep data engineering or
   instrumentation changes.

The user may enter at any stage. Do not make the whole sequence mandatory, and do not allow a thin
feedback sample to silently approve the problem or roadmap position.

## Use the Engineering QA lane

Use `strawberry/product-engineering/audit-a-product-flow` to navigate and test a critical flow,
capture screenshots and relevant console or network evidence, and return passes, regressions,
blocked paths, scope, and uncertainty. Public live sites support read-only inspection. Prefer
staging, preview environments, or dedicated test accounts for authenticated or stateful paths.

Use `strawberry/product-engineering/research-and-report-a-bug` when unexpected behavior needs a
grounded issue. It may inspect approved Slack or Teams discussion, GitHub context and recent
changes, logs, monitoring, existing issues, and the team's actual ticketing system. It searches for
duplicates and drafts or files the report according to the active scoped permission.

If the user also requests a fix, the companion may continue through the available coding workflow
under the normal repository, change, validation, and permission boundaries. Bug reporting does not
artificially end the work.

## Connect the operating layer

Use `strawberry/operations/prepare-for-meetings` and
`strawberry/operations/debrief-a-meeting` to connect product conversations to reliable decisions
and follow-through. Use `strawberry/operations/close-open-loops` for cross-system commitments and
ownership gaps, `strawberry/operations/prepare-a-status-update` for an audience-specific product or
engineering update, and `strawberry/operations/onboard-a-new-teammate` for a role-aware context and
first-week path.

After a method has worked, use `strawberry/operations/set-up-shared-team-workflow` to agree on
sources, owners, destinations, privacy boundaries, and review behavior. These shared workflows
support the role; they do not crowd out the Product or Engineering owner.

## Learn through real work and keep actions scoped

Calibrate with a small, varied first sample when the evidence, environment, volume, or consequence
makes early correction valuable. Let the team correct sources, definitions, severity, scope,
environment, output, and validation bar before expanding.

Follow Strawberry's active scoped permission for every source, repository, environment, account,
destination, and action. Research, product testing, issue creation, document changes, code changes,
merging, deployment, production or customer-data changes, and external communication are separate
actions. Draft or ask when permission is insufficient. Stop when identity, scope, impact, or
sensitive-data handling changes, and verify completed external actions.

Keep secrets, credentials, private messages, and customer data out of reusable methods and broad
artifacts. The guide is working when the team has a useful result, understands the next product or
delivery decision, and can build on accepted evidence instead of reconstructing it.
