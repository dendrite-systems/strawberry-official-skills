---
name: audit-seo-create-report
description: Audit a website's organic search performance and turn the evidence into a clear, prioritized report. Use to find query and competitor gaps, explain what matters, and recommend practical next actions.
---

# Audit SEO and create a report

Help the user understand which organic-search opportunities and problems deserve action, why they
matter, and what to do next. Produce a prioritized, source-linked report rather than a dump of every
available SEO metric or possible issue.

## 1. Define the decision and scope

Clarify the site, audience, market, priority products or pages, important competitors, timeframe,
and decision the audit should support. Establish whether this is a first audit, a focused question,
a periodic review, or a redesign of an existing process. Follow a trusted company or client method
when one exists.

Agree on the useful depth and output. The number of properties, pages, competitors, markets, and
queries determines whether a focused deep audit or wider first pass is more useful. Confirm the
audience for the result and whether it should be a concise chat brief, document, deck, dashboard,
or client-facing report.

For client work, match the correct client, property, account, and brand before combining evidence.
Keep each client's analytics, search data, conclusions, credentials, and artifacts separate.

## 2. Gather the evidence that can answer it

Use relevant approved sources such as Search Console, analytics, rank or crawl tools, previous
audits, keyword research, the live site, competitor sites, and current search results. None is an
automatic prerequisite; use the sources most likely to change the decision and state what is
missing.

Align properties, date ranges, markets, devices, currencies, attribution windows, query
definitions, and tool methodologies before comparing periods or sources. Label sampled, estimated,
stale, incomplete, or contradictory data instead of treating every platform number as ground truth.

Use the visible browser and logged-in context to inspect important pages, search results, and
underlying evidence. Follow links to the source and capture useful screenshots when they make a
finding easier to verify.

## 3. Inspect performance and opportunity

Examine the parts of search performance that fit the scope. These may include:

- queries and pages with meaningful impressions but weak position or click-through;
- pages or templates losing visibility, traffic, conversion contribution, or index coverage;
- competitor queries, content, offers, positioning, or formats the site does not credibly cover;
- content that overlaps, under-serves the intent, lacks evidence, or has become stale;
- technical, internal-linking, structured-data, crawl, rendering, or page-experience problems; and
- brand versus non-brand, market, device, page-type, funnel-stage, or audience differences.

When competitor research becomes broader than search opportunity, use
`strawberry/marketing/run-competitor-analysis`. Do not infer a keyword opportunity from volume
alone; consider intent, current authority, product fit, competition, conversion value, effort, and
the evidence that the team can create something genuinely useful.

If paid search is relevant, show where supported organic evidence could inform exact-match tests or
creative angles. Keep that as a recommendation for review, not permission to configure a campaign
or change spend.

## 4. Prioritize what matters

Separate observed evidence, platform estimates, hypotheses, and recommendations. Group related
symptoms into the underlying issue when the evidence supports it instead of creating an inflated
list of findings.

Prioritize each material opportunity by likely impact, confidence, effort, dependency, risk, and
time to learn. Explain the evidence, why it matters for this site and audience, the concrete next
action, and how the team could tell whether it helped. Keep unknowns and conflicting evidence
visible.

## 5. Build and review the report

Lead with the decision-relevant findings and a practical action plan. Include the scope and source
limitations, current baseline where available, prioritized opportunities, supporting links and
screenshots, recommended owners or dependencies, and a sensible review point.

For a client-facing visual report inside Strawberry, use the internal
`strawberry/general/visual-artifact` skill installed by the Strawberry harness; it is not part of
this public repository. Outside Strawberry, use the environment's presentation tooling. Follow the
approved brand, keep client-facing work polished and white-label when requested, and distinguish a
reviewable artifact from permission to share it.

Let the user correct the scope, source mix, prioritization, assumptions, and report shape before a
larger audit or recurring workflow. If substantial extraction, joining, statistics, or data-quality
work is required, use the available shared Data capabilities while Marketing retains the SEO
interpretation.

## 6. Continue within the current permission

Follow Strawberry's active scoped permission for every property, account, client, source,
destination, and action. Read-only inspection, creating a report, sharing it, changing site copy or
technical settings, publishing, changing tracking, configuring paid search, and changing spend are
separate actions. Draft or ask when permission is insufficient, stop when identity, scope, impact,
or sensitive-data handling changes, and verify completed external actions.

After the audit proves useful, preserve the accepted scope, sources, definitions, prioritization,
brand, output, and review behavior as a custom or team skill. Add a Routine only when there is a
real cadence or trigger; define the properties, comparison period, metrics, meaningful-change rule,
destination, approval behavior, and stop conditions.
