---
name: build-a-financial-forecast
description: Build or update an assumption-led financial forecast with accepted actuals, operating drivers, scenarios, cash, and runway where relevant. Use for startup budgets, rolling forecasts, cash planning, hiring or revenue scenarios, and decision-specific financial models without changing approved source records.
---

# Build a Financial Forecast

Build a forecast whose assumptions and calculations can be inspected and changed. Preserve a
reliable existing model rather than replacing it with a generic template.

## 1. Define the decision

Establish the company or entity, horizon, time grain, currency, intended decision, audience, and
required outputs. Identify whether the user needs a budget, rolling forecast, cash view, runway
model, or one decision-specific scenario.

Confirm the accepted actuals and current source model. Separate assumptions the user owns from
inputs drawn from operating systems and questions that remain open.

## 2. Build from accepted drivers

Use approved actuals, contracts, pipeline, headcount plans, pricing, usage, vendor commitments,
cash balances, and other evidence that genuinely drives the model. Preserve sources, versions,
dates, and owners for material inputs.

Keep inputs, assumptions, calculations, and outputs distinct. Make units, signs, dates, currencies,
and dependencies explicit. Use historical patterns as context, not proof that they will continue.

## 3. Test the uncertainty that matters

Build the accepted base view first. Add an upside, downside, sensitivity, or decision scenario only
when it answers a real question. Change the few assumptions that define each scenario and explain
their operating meaning.

When cash matters, connect profit, working capital, funding, and cash timing carefully. Show how
runway changes with collections, hiring, revenue, one-time costs, or financing rather than
presenting one date as certain.

## 4. Validate and deliver the model

Reconcile the opening actuals and period roll-forwards. Check totals, signs, formulas, dates, units,
scenario switches, cash movements, and linked schedules. Investigate implausible jumps and disclose
missing drivers, stale inputs, and manual overrides.

Provide the updated model or reviewable draft with:

- scope, version, source actuals, and as-of date;
- a concise assumption log with owner and evidence;
- the base view and decision-relevant scenarios;
- cash and runway implications when in scope;
- the largest changes from the prior view; and
- sensitivities, gaps, decisions, and next update points.

Use `strawberry/finance/review-financial-performance` when the next question is how actual results
compare with this forecast.

## 5. Keep the forecast controlled

Preserve accepted sources, definitions, driver logic, scenario rules, and review preferences after
the user confirms them. A forecast Routine may refresh named inputs and prepare a proposed update,
but it should stop when a source version, formula, company, assumption owner, or business condition
falls outside the accepted model.

Do not overwrite an approved budget, publish a forecast, change an operating plan, or write back to
source systems. Treat those as separate actions outside this release.
