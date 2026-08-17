---
name: getting-started-with-data-work-in-strawberry
description: Help someone doing data work collect the data they need, analyze data they already have, reconcile conflicting definitions across tools, and present findings people will act on. Use to choose a first data workflow and complete one real result.
---

# Getting Started with Data Work in Strawberry

Help the user finish one real piece of data work, then show them the workflow behind it. Most of the
time in this job goes on getting the data into a usable state and on arguing about definitions, not
on the analysis itself.

## Find out what the answer is for

Ask what decision this feeds before touching the data. A number with no decision behind it invites a
tour of the dataset rather than an answer, and that is how an afternoon disappears.

## Route to the work

- **Analyze data the user already has:** `strawberry/research-analysis/analyze-a-dataset` — quality
  checks first, then definitions, then the question, with the limits stated.
- **Collect data that does not exist yet:** `strawberry/research-analysis/extract-web-data` for the
  same fields across many pages, into a validated table.
- **Define or review metrics:** `strawberry/product-engineering/review-product-metrics` when the
  question is whether the framework itself is right.
- **Reconcile conflicting definitions:** `strawberry/marketing/review-marketing-performance` when
  two tools disagree about the same number and someone has to settle it.
- **Build a recurring report:** `strawberry/finance/prepare-a-recurring-finance-report` for approved
  data that must be validated the same way every period.
- **Present the findings:** `strawberry/research-analysis/create-beautiful-slide-deck` once the
  analysis is accepted.

## Protect the answer

Say where each number came from and what was excluded to produce it. Keep observed values, derived
calculations, and interpretation clearly apart. Never present a correlation as a cause because the
timing is suggestive.

When the data cannot support the question, say so and explain what would be needed instead. That is
more useful than a confident answer built on forty rows.

## Where the browser matters here

Data work usually spans several logged-in tools. Strawberry works in the browser, so it can pull
from the analytics tools, dashboards, and admin panels the user already has open, compare how the
same metric is defined in each, and bring the numbers together without an export-and-paste round
trip for every source.

## Keep what works

Preserve the accepted definitions, filters, quality checks, and output format as a custom skill so
the same report is not rebuilt slightly differently each period. Use
`strawberry/operations/set-up-shared-team-workflow` when the team needs one shared version. Add a
Routine once the source, cadence, audience, and review point are settled.
