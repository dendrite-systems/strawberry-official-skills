---
name: prepare-a-recurring-finance-report
description: Prepare a recurring operational finance report from approved portals, exports, files, or spreadsheets; apply the accepted source-to-output rules; validate the result; surface exceptions; and deliver a review-ready file or draft handoff. Use for payout, collections, revenue, transaction, cash, cost, or similar recurring reports without changing source records, posting accounting entries, making payments, or sending the result without sufficient permission.
---

# Prepare a Recurring Finance Report

Turn data from approved finance sources into the report format the team already uses. Keep each
important figure or row traceable to its source, make the checks visible, and leave judgment or
unresolved exceptions with the accepted reviewer.

## 1. Define the report

Confirm the entity, period and cutoff, time zone, currencies, source accounts, output format,
destination, and reviewer. Start from an accepted prior report, template, or written specification
when one exists rather than inventing a new reporting pack.

Clarify what the report is for and what the reviewer expects to receive. This skill prepares an
operational finance report. Use `strawberry/finance/review-financial-performance` when the main job
is interpreting why the figures changed.

## 2. Inspect the sources and rules

Use the approved logged-in portals, exports, files, and spreadsheets. Preserve source names, links,
report versions, download times, filters, and as-of dates. Pause for the user at MFA or when access,
account, entity, or data scope changes.

Identify the source-to-output mapping, including field names, joins, signs, date treatment,
currencies, aggregations, exclusions, formulas, and accepted exception rules. Keep a supplied
mapping or spreadsheet logic unless the user accepts a change.

## 3. Calibrate a new mapping

When the mapping or source is new, prepare a small, varied sample that includes a normal row and any
important edge cases available. Show the source values, transformation, resulting row or figure,
and anything that remains unclear. Apply accepted corrections before processing the full period.

Skip this calibration when the report and mapping are already trusted and the current source still
matches them.

## 4. Prepare the report

Retrieve the in-scope data and apply the accepted rules. Use the existing file or spreadsheet when
appropriate; if a new spreadsheet is needed, use `strawberry/general/spreadsheets` and keep inputs,
formulas, and outputs inspectable.

Do not alter a source record to make the report balance. Record missing rows, failed mappings,
duplicates, unexpected values, or unsupported assumptions as exceptions.

## 5. Validate the result

Check the report against the source set and any accepted controls:

- entity, period, cutoff, time zone, and currency coverage;
- row counts, control totals, and expected subtotals;
- duplicates, gaps, failed mappings, and excluded items;
- signs, date conversions, formulas, and output formatting; and
- material movement from a prior report when that comparison is a useful warning.

A prior-period difference is a prompt to investigate, not proof that the current report is wrong.
Do not force agreement between sources that measure different things.

## 6. Deliver a review-ready result

Return the report file or spreadsheet with a short validation summary, its source coverage, and a
clear exception list. Prepare a draft handoff message when useful, but treat sending or uploading it
as a separate action governed by the active permission for that destination and audience.

Use `strawberry/operations/organize-receipts-bookkeeping` when the unresolved work is collecting and
matching supporting documents. Use `strawberry/finance/review-financial-performance` when the
accepted report should be interpreted against a budget, forecast, or prior period.

## 7. Reuse the trusted method

After the reviewer accepts the sources, mapping, validation checks, exception rules, output, and
handoff, preserve them as a team method. A Routine may prepare the next report on an agreed cadence
and stop when access expires, MFA appears, a source changes, a control fails, or the entity, period,
destination, or reviewer falls outside the accepted setup.

This workflow may read approved financial data and prepare files or drafts. It does not initiate or
approve payments; post, reverse, categorize, or approve entries; change a ledger, bank, payroll,
invoice, or source record; file taxes or statutory reports; or share sensitive financial material
beyond the accepted audience.
