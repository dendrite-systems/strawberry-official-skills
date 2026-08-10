---
name: enrich-lead-list
description: Add, verify, or correct useful company and contact fields in an existing lead or account list. Use when someone already has the records they want to work with and needs better data, identity resolution, decision-makers, source links, or verification status. If they need to discover new prospects first, use find-new-customers instead.
---

# Enrich a Lead List

Turn an existing list into a more complete and trustworthy working set. Enrich the fields the user
actually needs rather than assuming every list requires decision-makers or contact details.

## Workflow

### 1. Understand the list and the result

Inspect the list, its current fields, and the destination. Use relevant CRM context, connected apps,
files, tabs, memory, and prior work before asking the user to repeat information already available.
Understand what each row represents and what would make it useful: company facts, segmentation,
current roles, decision-makers, contact information, source links, cleanup, or a combination.
Research people only when the requested result needs them.

### 2. Agree on fields, depth, and a first sample

Agree on the fields, matching criteria, sources, destination, and whether the user wants to fill
more rows quickly or verify a smaller set more deeply. If decision-makers are needed, use the
user's process or strong customer examples rather than assuming one universal title.

For someone new to Strawberry or for a large, unfamiliar, or expensive job, propose a short plan and
a representative sample. Explain breadth, depth, and credit tradeoffs comparatively; give specific
estimates only when reliable. Keep this brief for a trusted repeat workflow.

### 3. Resolve and check the existing records

Treat the supplied list as the working set. Preserve the original rows, identify duplicates, and
surface ambiguous matches instead of silently merging or dropping records.

When a CRM or other source of truth is available, check customer status, ownership, live deals,
prior contact, and do-not-contact records when relevant. Flag conflicts or existing relationships
rather than presenting them as fresh leads.

Use enough evidence to resolve each identity. For people, check signals such as current role and
company, location, previous roles, profile details, and company sources. Never guess a profile URL,
employment relationship, email address, phone number, or missing field.

### 4. Enrich and calibrate

Use the best available source for each requested field across enrichment services, CRM records,
LinkedIn, company sites, connected apps, and other relevant web sources. Preserve useful links and
dates where freshness matters.

When a field cannot be verified, do not present it as verified. A potentially useful email address
or phone number may remain when its source is known, but label its status and risk clearly. Never
treat risky or unverified contact information as send-ready.

Present a sample when calibration would materially improve the work. Let the user correct the
fields, matching, sources, and verification bar before expanding. Do not force this when the process
is trusted and the scope is straightforward.

When working in LinkedIn, work sequentially at a human pace and stop on any warning, challenge,
rate limit, or unexpected state. Parallelize only independent off-platform research.

### 5. Expand and prepare any updates

Apply the accepted approach without changing field meanings or lowering the verification bar. If a
field has poor coverage, explain why and offer a choice: try another source, accept clearly labeled
unverified data, narrow the field, or leave it missing.

Prepare changes for review before writing to an external destination. Do not overwrite existing or
conflicting values without showing what would change and receiving approval.

### 6. Deliver a trustworthy result

For each input record, preserve:

- the original record or identifier;
- the resolved company or person when identity resolution was needed;
- the requested enriched or corrected fields; and
- source and verification notes when they affect trust or use.

Prefer a compact table for a review sample and the agreed destination for larger results. Keep
missing data missing rather than guessing. Surface stale, conflicting, ambiguous, or unverified
values when they could affect how the user acts.

Before delivery, check duplicates, missing values, identity mismatches, stale roles, formats, broken
links, and provenance. Report how many rows were reviewed and updated when useful.

If the user needs new prospects first, use `strawberry/sales/find-new-customers`. If they want to
contact approved leads, use `strawberry/sales/personalized-outreach-sequence`. If they want approved
changes written into the CRM, use `strawberry/sales/keep-crm-updated`.

After the user has improved a useful result, offer to save the accepted fields, sources, matching
rules, verification bar, and destination as a custom skill. Once the workflow is trusted and has a
useful trigger or cadence, offer to turn it into a Routine.
