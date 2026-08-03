---
name: extract-web-data
description: Research websites and extract repeated structured information into a clean spreadsheet or dataset. Use for company lists, market maps, directories, public records, product comparisons, or other research requiring tens or hundreds of consistent rows.
---

# Extract Web Data

Use this Official Skill as a starting point for a web-extraction workflow. Adapt it to the source,
the decision the data should support, and the user's preferred output rather than treating it as a
fixed method.

## Context, setup, and planning

Try to understand:

- the entities and exact fields to collect, source boundaries, exclusions, freshness requirements,
  and intended decision;
- the approximate row count and required depth: extracting 20 records is different from extracting
  2,000, and enriching every record beyond the source is slower and more expensive than collecting
  a base list;
- where the result should go and how it should be structured. When an existing spreadsheet or
  database is available and approved, inspect its headers before collecting data.

If the request is vague, suggest a useful schema and let the user adjust it. Before a large
extraction, present a concise plan covering the source, row target, schema, depth, destination, and
likely cost, then confirm it. Show a representative first sample, often 10–20 rows, before scaling;
at high volume, even a small error rate can produce thousands of bad records.

## Execution

1. Check whether the approved page content or its own network calls expose a clean JSON API before
   scraping rendered HTML. Prefer semantic extraction, such as collecting every product name and
   price, over brittle CSS selectors.
2. Navigate the full requested scope systematically. Handle page numbers, infinite scroll,
   load-more controls, and detail pages without stopping at the first page, skipping items, or
   revisiting the same ones.
3. Extract the base data first. Preserve source URLs, respect access constraints, and distinguish
   missing information from evidence that a value is negative.
4. Present the sample as a clean table and check its fit before the full run or export.
5. When deeper research is useful, enrich only the agreed fields. Parallelize independent rows or
   companies only when safe and cost-effective, give each task specific data points to find, and
   merge the results into the accepted schema.
6. Normalize formats, deduplicate entities, validate missing values and a representative sample,
   and flag low-confidence or unusual values instead of silently presenting them.
7. Do not invent values to make the dataset look complete. Slow down when a source rate-limits or
   blocks access, and hand CAPTCHA, 2FA, or authentication walls back to the user.
8. Export to the requested spreadsheet, database, or connected tool. Inside Strawberry, use the
   internal `strawberry/general/spreadsheets` skill installed by the Strawberry harness to create,
   validate, and push a workbook; it is not part of this public repository. Outside Strawberry,
   use the environment's spreadsheet tooling and preserve the same schema, validation, and review
   steps.

## Suggested outcome

Deliver a clean spreadsheet or dataset with consistent columns, the requested number of rows where
evidence permits, source links, normalized values, explicit missing or uncertain data, and a brief
validation summary.

## Suggested next steps

When the workflow proves useful, offer to save the accepted source, schema, destination, and
procedure as a user-owned skill. If the user wants it repeated, a routine can rerun it on an agreed
schedule and flag only meaningful changes; clarify frequency, cost, and notification behavior
before enabling it.
