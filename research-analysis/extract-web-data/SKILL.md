---
name: extract-web-data
description: Extract structured data from websites into a clean spreadsheet or dataset, from a few rows to thousands. Use when someone wants listings, directories, products, prices, profiles, or other repeated web data collected into rows and columns.
---

# Extract Web Data

Strawberry's harness is built for the web, so extraction that takes an hour elsewhere often takes a
minute here. Many sites load their data through their own network requests, and reading those
directly can pull thousands of rows quickly and cheaply.

## Setup

- What each row is, which fields they need, and roughly how many rows.
- What the data is for. That decides which fields matter and how deep to go.
- Where it should end up. If there's an existing sheet or database, look at its columns first.

## Worth knowing

- Before scraping the rendered page, check whether the page's own network requests already return
  clean JSON.
- Cover the whole scope: pagination, infinite scroll, load-more buttons, and detail pages.
- Show a sample of 10 to 20 rows before the full run. At high volume, a small mistake repeats
  thousands of times.
- Keep the source link for each row, and keep "not found" separate from "no".
- Never fill gaps with guesses to make the dataset look complete.
- For spreadsheets, use the `spreadsheets` skill.
