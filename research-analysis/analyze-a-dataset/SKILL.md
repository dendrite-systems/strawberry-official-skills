---
name: analyze-a-dataset
description: Analyze a dataset the user already has, from first look and data quality through the actual question, with the caveats the data genuinely supports. Use for a spreadsheet, export, or query result that needs interpreting rather than collecting.
---

# Analyze a Dataset

Help the user get a defensible answer out of data they already have. Collecting data is a different
job; this one starts once the file is in front of you.

The most valuable thing here is usually not the analysis. It is catching the reason the analysis
would have been wrong.

## 1. Understand the question and the data's limits

Ask what decision this feeds. "Look at this data" produces a tour; "should we keep running this
channel" produces an answer.

Then find out where the data came from, what each row represents, what period it covers, and how it
was filtered before it reached the user. An export that silently excludes cancelled orders answers a
different question than the one being asked.

## 2. Look at the data before analysing it

Inspect it first and report what you find:

- row and column counts, and what one row actually represents;
- missing values, and whether they are missing at random or in a pattern;
- duplicates, and whether they are genuine repeats or a join gone wrong;
- types that do not match their content, such as numbers stored as text or mixed date formats;
- outliers, and whether they are errors or the most interesting part of the dataset.

Say what you found before moving on. A user who learns about a broken join after seeing a chart has
already half-believed the chart.

## 3. Agree the definitions

Most disputes about numbers are disputes about definitions. Before calculating, pin down what counts
as active, what counts as a customer, whether the period is calendar or rolling, and which currency
or timezone applies. Where the user's organization already has an accepted definition, use theirs
rather than a reasonable-looking alternative.

## 4. Answer the question

Do the analysis the question needs, not the most sophisticated one available. Most real questions
are answered by a well-chosen cut, a rate, or a comparison over time.

Show the work: the filters applied, the rows excluded and why, and the formula behind any figure
that matters. The user should be able to reproduce the number without asking how it was made.

Separate what the data shows from what it implies. A drop in signups and a pricing change in the
same week is a correlation with a plausible story, and it should be labelled as that rather than as
a cause.

## 5. Say what the data cannot support

State the limits plainly: sample sizes too small to generalise, a period too short for a trend, a
segment with too few rows to compare, survivorship or selection effects baked into how the data was
collected.

A confident answer with an unstated limitation is worse than a hedged answer with a clear one.

## 6. Deliver and continue

Lead with the answer, then the evidence, then the caveats. Return it in the format the decision
needs: a short written answer, an annotated spreadsheet, a table, or a chart where the shape is the
point.

Use `strawberry/research-analysis/extract-web-data` when the analysis needs data the user does not
have yet, and `strawberry/research-analysis/create-beautiful-slide-deck` when the accepted findings
need presenting.

After the analysis proves useful, preserve the accepted definitions, filters, checks, and output
format as a custom skill, so the same report does not get rebuilt differently each time. A recurring
version can become a Routine once the source, cadence, and review point are settled.
