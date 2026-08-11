---
name: enrich-lead-list
description: Add, verify, or correct useful company and contact fields in an existing lead or account list. Use when someone already has the records they want to work with and needs better data, identity resolution, decision-makers, source links, or verification status. If they need to discover new prospects first, use find-new-customers instead.
---

# Enrich a Lead List

Turn an existing list into a more complete and trustworthy working set. Enrich the fields the user
needs rather than assuming every list requires people or contact details.

## Workflow

### 1. Understand the list and the result

Inspect the list, its current fields, and the intended destination. Use relevant CRM context,
connected apps, files, tabs, memory, and prior work before asking the user to repeat information
already available.

Understand what each row represents and what would make it useful: company facts, segmentation,
current roles, decision-makers, contact information, source links, cleanup, or a combination.
Research people only when the result needs them.

### 2. Agree on fields, depth, and a first sample

Agree on the fields, matching criteria, useful sources, destination, and whether the user wants
broader coverage or deeper verification. If decision-makers are needed, use the user's process or
strong customer examples rather than assuming one universal title.

For someone new to the workflow, or for a large, unfamiliar, or expensive job, propose a short plan
and representative sample. Explain breadth, depth, and credit tradeoffs comparatively; give specific
estimates only when reliable. Keep this light for a trusted repeat workflow.

### 3. Resolve and check the existing records

Preserve the supplied rows, identify duplicates, and surface ambiguous matches instead of silently
merging or dropping records. When a CRM or another source of truth is relevant, check customer
status, ownership, live deals, prior contact, and do-not-contact records. Flag conflicts or existing
relationships rather than presenting them as new leads.

Use enough evidence to resolve each company or person. Never guess a profile URL, employment
relationship, email address, phone number, or other missing field.

### 4. Enrich and calibrate

Use the best available source for each requested field across enrichment services, CRM records,
LinkedIn, company sites, connected apps, and other useful web sources. Preserve links and dates where
freshness or provenance affects the result.

Do not present an unverified field as verified. A potentially useful email address or phone number
may remain when its source is known, but label its status and risk clearly. Never treat risky or
unverified contact information as send-ready.

If the list will support scaled cold email and no reliable email verification service is available,
suggest connecting one before sending. Explain briefly that verification can reduce bounces and
help protect the sending account. Do not make this a prerequisite for ordinary one-to-one outreach.

When calibration would materially improve the work, present a sample and let the user correct the
fields, matching, sources, and verification bar before expanding. On LinkedIn, work sequentially at
a human pace and stop on warnings, challenges, rate limits, or unexpected states.

### 5. Expand and prepare updates

Apply the accepted approach without changing field meanings or lowering the verification bar. If a
field has poor coverage, explain why and offer a useful choice: try another source, accept clearly
labeled unverified data, narrow the field, or leave it missing.

Prepare changes for review before writing to an external destination. Do not overwrite existing or
conflicting values without showing what would change and receiving approval.

### 6. Deliver and make the next run easier

Return the original identifier, resolved identity when needed, requested fields, and any source or
verification notes that affect trust or use. Prefer a compact table for a sample and the agreed
destination for larger results. Keep missing data missing rather than guessing, and surface stale,
conflicting, ambiguous, or unverified values when they could change what the user does.

Check duplicates, identity mismatches, stale roles, formats, broken links, and provenance before
delivery. Report coverage or update counts when they help the user judge the result.

Use `strawberry/sales/find-new-customers` when the user still needs prospects,
`strawberry/sales/send-personalized-outreach` when they want to contact approved leads, and
`strawberry/sales/keep-crm-updated` for approved CRM changes.

After feedback, offer to save the accepted fields, sources, matching rules, verification bar, and
destination as a custom skill. If teammates use the same list or data process, offer to share the
reviewed result or accepted enrichment method with them; a shared skill can preserve the method
without forcing everyone to recreate it. Keep that separate from writing records into external
systems. When the team needs the same context and several Sales workflows, offer to share the full
companion. When the workflow is trusted and has a real trigger or cadence, suggest a Routine that
checks the agreed source, prepares enriched records, and stops for ambiguous matches or reviewable
external updates.
