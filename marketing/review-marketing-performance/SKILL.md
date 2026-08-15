---
name: review-marketing-performance
description: Review marketing performance across campaigns and channels by reconciling definitions, source quality, baselines, trends, attribution, funnel behavior, audiences, and creative. Use when a team needs a decision-ready performance view and recommendations; not for client reporting, deep data engineering, platform configuration, or live spend changes.
---

# Review Marketing Performance

Turn marketing data into a decision-ready view of what changed, what the evidence can support, and
what the team should learn or test next.

## 1. Define the review

Clarify the business and marketing goals, campaigns or channels, audience, funnel, period,
comparison, source systems, budget context, and the decision the review should support. Use the
team's accepted definitions and reporting habits when they exist.

If the request is broad, begin with the campaign, funnel stage, or period most likely to change a
current decision. For client-facing, multi-source progress reporting, use
`strawberry/operations/build-client-progress-report-project-tools`; keep this skill focused on
marketing interpretation.

## 2. Reconcile the evidence

Use approved analytics, campaign platforms, CRM or lifecycle data, product signals, content data,
prior reports, experiments, and relevant qualitative feedback. Preserve source links or record
identifiers and freshness.

Align date ranges, time zones, currencies, metric definitions, attribution windows, identity and
deduplication rules, funnel stages, and denominator choices before comparing results. Keep
platform-reported attribution separate from independently observed outcomes.

Use available shared Data capabilities when extraction, joins, statistical work, or validation
becomes substantial. Surface missing, delayed, sampled, modeled, or conflicting data instead of
forcing false reconciliation.

## 3. Analyze what changed

Review the evidence across the dimensions that can change the decision:

- progress against the stated objective and useful baseline;
- trend, seasonality, mix, spend, reach, response, conversion, retention, or revenue;
- funnel movement and the point where performance changed;
- audience, segment, geography, channel, placement, message, offer, and creative differences;
- operational changes or external events that could explain the pattern; and
- uncertainty, concentration, and missing evidence.

Separate observed change, plausible explanation, and recommendation. Do not claim causation from a
before-and-after chart or give one platform's attribution model more certainty than it deserves.

## 4. Diagnose and recommend

Identify the few audience, proposition, channel, creative, funnel, or measurement issues most likely
to matter. Compare hypotheses against both quantitative and qualitative evidence.

Recommend practical actions or experiments with their rationale, owner, expected signal, review
window, and major dependency. Some results should lead to more measurement or a smaller test rather
than immediate optimization.

## 5. Deliver and keep actions separate

Provide:

- scope, sources, definitions, freshness, and material limitations;
- the few changes that matter, with their evidence;
- funnel, audience, channel, and creative diagnosis where supported;
- hypotheses and alternative explanations;
- prioritized recommendations or experiments; and
- open questions and the next review point.

The review may define a better metric framework when current measures do not match the goal. It
does not change tracking, configure campaigns, edit creative, launch tests, or change spend.

Follow Strawberry's active scoped permission for every source, account, destination, and action.
Draft or ask when permission is insufficient. Stop when identity, scope, impact, or sensitive-data
handling changes, and verify completed external actions.

After the team accepts the definitions, comparisons, analysis shape, and review behavior, preserve
them for the next cycle. A recurring review should still surface definition drift and material data
gaps rather than mechanically repeating last period's dashboard.
