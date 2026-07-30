---
name: enrich-lead-list
description: Enrich an existing company or lead list with verified decision-makers, source links, and the fields needed by the user's sales process.
---

# Enrich a lead list with decision-maker contacts

## Workflow

1. Inspect the approved list, ICP, CRM, and existing field definitions. Confirm the destination and
   the fields that would make each row actionable. Agree on the desired research depth; a broad
   surface pass is cheaper than deep research on every row.
2. Agree on the decision-maker criteria. Use the user's process or evidence from strong existing
   customers instead of assuming one universal title.
3. Before substantial enrichment, present a brief plan covering the criteria, sources, depth,
   sample, destination, and review point. Wait for the user to confirm or adjust it.
4. Deduplicate against the existing CRM or destination before enriching. When relevant, flag
   current customers, live deals, previously contacted leads, and do-not-contact records rather
   than returning them as fresh prospects.
5. Use inexpensive company and visible list signals to narrow the work before opening many profiles.
   For a large list, extract once, narrow on those signals, and deeply enrich only the useful subset.
6. Verify each person's identity across multiple signals such as photo, current role and company,
   prior companies, education, location, and mutual connections. Preserve the real source URL.
   Never guess a LinkedIn URL, email address, phone number, title, or employment relationship.
7. If an email is requested, use a published company source or an available email verifier and
   record its verification status. Leave risky or unverifiable addresses missing.
8. Cross-reference existing contacts against current profiles and company websites. Flag job or
   title changes, inactive contacts, and company acquisitions or closures for review rather than
   silently overwriting the record.
9. If LinkedIn is used, work sequentially with one agent at a human pace. Stop and ask if a CAPTCHA,
   rate-limit message, account warning, or identity uncertainty appears.
10. Enrich a small sample, usually 5–10 rows, so the user can correct the criteria and fields before
    the full list.
11. Before presenting, check missing values, duplicates, formats, source links, identity mismatches,
    and low-confidence fields. Report how many rows were reviewed and how the list was narrowed.
12. Write to the chosen destination only after the user approves the sample and proposed updates.
13. Save the accepted enrichment criteria, fields, and destination as a user-owned skill when useful.

## Expected result

Return a deduplicated, enriched list with verified people, roles, real source URLs, agreed fields,
verification status, and explicit uncertainty. Flag stale or conflicting records. Missing data
remains missing rather than being guessed.

## Suggested next steps

- If the user needs new accounts or prospects before enrichment, use `strawberry/source-customers`.
- If the user wants to contact approved leads, use `strawberry/personalized-outreach-sequence`.
