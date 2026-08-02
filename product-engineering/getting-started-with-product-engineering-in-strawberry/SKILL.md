---
name: getting-started-with-product-engineering-in-strawberry
description: Best practices for anyone getting started with product or engineering work in Strawberry. Use when helping a user choose, set up, or expand investigation, research, data, delivery, or team workflows.
---

# Getting Started with Product and Engineering in Strawberry

Strawberry can connect customer evidence, application issues, code, data, meetings, and market
signals around the product or delivery problem that matters now. This is not a fixed methodology.
Enter wherever the user or team has a real bottleneck, skip what already works, and preserve their
technical judgment as the process becomes more repeatable.

## Start with the current bottleneck

Ask one short question at a time while the goal is broad, then gather deeper context when a
specific workflow emerges. Ask whether Strawberry may look through relevant connected apps—such
as GitHub, Linear or Jira, product analytics, support, docs, and meeting notes—or whether the user
would rather answer a few questions. Combine both when useful; do not assume an app or source
exists.

Try to understand the decision or delivery problem, the team's existing approach, where the source
of truth lives, and what a useful reviewable result would be. That result might be a diagnosis,
issue, patch, dataset, brief, or decision. Summarize the proposed approach before substantial work.

## Investigate product and application issues

Strawberry can connect user reports, reproduction evidence, logs, monitoring, recent changes, and
code into a reviewable diagnosis. It can search for duplicate issues before drafting anything new
and separate observed facts from likely causes. Read `strawberry/product-engineering/investigate-fix-app-issues` for
the detailed triage and repair workflow. Let the user review the diagnosis, proposed change, and
anything that would be filed before execution.

## Turn web sources into useful product data

Strawberry can turn an approved web source into a structured dataset, including sources behind a
login. Read `strawberry/research-analysis/extract-web-data` to agree the fields, source boundaries, row count, depth,
and destination; check for a clean source API before relying on rendered pages; and validate a
small sample before scaling. At high volume, even a small extraction error can create thousands of
bad records.

When the dataset is about companies or people, use the relevant Sales, Recruiting, or Research
skill so the domain-specific decisions do not disappear inside a generic extraction workflow.

## Preserve product decisions from meetings

Meetings often contain customer evidence, product decisions, owners, and follow-up that otherwise
gets lost. Read `strawberry/operations/transcribe-meetings-follow-up` to preserve those details in the agreed
structure and draft the next actions. Once the team trusts the result, it can become a tailored
post-meeting skill or routine.

## Understand markets, competitors, and customer signals

Strawberry can research companies, compare competitors, and trace product sentiment back to
current sources. Read `strawberry/research-analysis/research-companies-create-decks` when the result should be a
sourced visual story, or `strawberry/marketing/run-competitor-analysis` for a reviewable market comparison.
Focus the research on a real decision, distinguish facts from inference, and surface themes and
changes rather than returning raw mention counts.

## Keep delivery work visible without adding noise

When useful, Strawberry can summarize open pull requests, stale reviews, releases, build status,
flaky tests, and issues that need attention. Agree which repositories and signals matter, and
prefer a concise digest or release-based check over triggering expensive work on every commit. For
deep review, confirm the comparison base and review the evidence before commenting or opening a
draft change.

## Other things to try

These are useful discovery ideas, not complete standalone workflows:

- Scrape a large, defensible dataset that becomes part of the product's data moat.
- Turn a messy backlog into a de-duplicated, prioritized sprint candidate list.
- Maintain a living weekly view of what the team is working on.
- Check a product or website for broken flows, errors, and confusing copy.
- Draft product requirements or user stories from raw feedback.

## Make the process yours

Review the first result before automating investigation, extraction, monitoring, or team updates.
Save the accepted sources, fields, evidence standards, output format, and review points as a
user-owned skill. Connect adjacent workflows or add a routine only when doing so improves a process
the team already trusts.
