---
name: review-product-metrics
description: Define a practical product metric framework or review existing performance by checking metric definitions, source quality, baselines, trends, funnels, cohorts, segments, hypotheses, guardrails, and implications. Use when a product team needs measurable outcomes and a decision-ready view; keep deep data engineering and instrumentation changes separate.
---

# Review Product Metrics

Define the measures a product decision needs, review the performance that already exists, or do
both. Make definitions and data quality visible before drawing conclusions.

## 1. Start with the product decision

Clarify the product outcome, user behavior, feature or flow, population, time horizon, decision,
known metrics, and source systems. Determine whether the team needs a metric framework, a current
performance review, or a framework followed by a review.

Use product strategy, specifications, customer evidence, prior decisions, existing dashboards,
event documentation, experiments, and relevant business context when available. Avoid adopting a
generic North Star, funnel, or benchmark without showing why it fits this product decision.

## 2. Inspect definitions and sources

For every material metric, establish:

- the behavior or outcome it represents;
- numerator, denominator, unit, eligibility, identity, and deduplication rules;
- event or record sources, ownership, freshness, and known transformations;
- time window, attribution or cohort rule, segment, and exclusions;
- baseline, target or decision threshold when one is accepted; and
- guardrails that protect quality, trust, retention, cost, or another important outcome.

Reconcile conflicting dashboard labels, event names, funnel stages, filters, and time zones. Flag
sampled, modeled, delayed, missing, backfilled, or recently changed data.

When deep extraction, SQL, joins, statistical analysis, or data validation is needed, use available
shared Data capabilities. Instrumentation design and implementation remain separate Engineering
work.

## 3. Define a useful framework

When the measures are unclear, propose the smallest coherent framework that can answer the
decision:

- one outcome measure;
- the few input or leading measures that explain movement;
- necessary guardrails;
- relevant funnel, retention, quality, or reliability measures; and
- the segments or cohorts most likely to hide a materially different result.

Explain why each metric belongs, how it is calculated, which source owns it, what current gap blocks
it, and what decision it could change. Do not create a large scorecard simply because data is
available.

## 4. Review current performance

Where reliable data exists, examine baselines, trends, seasonality, funnels, cohorts, segments,
concentration, anomalies, experiment context, and changes in product or instrumentation.

Separate observed movement, plausible explanation, and implication. Check alternative explanations
and qualitative evidence. Do not claim causality from correlation, ignore a definition change, or
hide a thin denominator behind a percentage.

## 5. Validate and deliver

Check calculations, units, filters, denominators, source freshness, segment coverage, and
reproducibility. Compare a sample back to the source when practical. If the data cannot support the
requested conclusion, say what is known, what is not, and what would resolve it.

Deliver:

- the decision and product outcome in scope;
- the metric framework and complete definitions;
- source quality, coverage, and material limitations;
- current baseline, trend, funnel, cohort, or segment findings where supported;
- hypotheses and alternative explanations;
- product implications and the next decision or experiment; and
- instrumentation or data gaps as separate proposed work.

Follow Strawberry's active scoped permission for every source, account, destination, and action.
If the current permission covers updating an approved metric document or review artifact, apply and
verify it; otherwise return a draft or ask. Do not change instrumentation, production data,
dashboards, experiments, or product behavior as part of this review.

Preserve accepted definitions, source ownership, review cuts, and decision thresholds for the next
cycle. Revalidate them when the product, population, or instrumentation changes.
