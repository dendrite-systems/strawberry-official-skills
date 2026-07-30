---
name: source-customers
description: Set up and run a customer-sourcing workflow for prospective customers, leads, or clients. Use when a user wants a targeted prospect list based on their product, ideal customer, existing good customers, geography, or other qualification criteria, especially when creating or refining their own sourcing process.
---

# Source Customers

Use this Official Skill as starting guidance for a first or redesigned sourcing workflow. If the
user already has a tailored sourcing skill, follow that instead.

If the user already has a company or lead list and primarily needs verified decision-makers or
missing fields, use `strawberry/enrich-lead-list` instead.

## Context, setup, and planning

Try to understand the points below before starting. Ask whether the user wants to answer a few
questions, let Strawberry look through relevant connected apps, or combine both. If connected apps
may contain useful context—for example, existing ICP documentation or strong customer
examples—ask permission before looking and do not assume that those sources exist.

- the offer, target customer, and examples of strong or poor-fit customers, including closed-won
  accounts or engagements worth modeling as lookalikes;
- geography, exclusions, requested count, and valuable buying signals;
- preferred sources and the user's existing sourcing or qualification approach;
- the required company, contact, evidence, and confidence fields;
- the destination and whether the user wants a broad screen or deeper account research;
- the suggested deliverable: list size, depth, format, evidence standard, and review point.

Treat examples as evidence, not as the entire definition of fit. If the user sells a service, learn
what is being pitched and what a credible angle looks like. Prefer a concrete finding or useful
teardown over a generic capabilities pitch.

Explain the scope-and-depth tradeoff: strict or specific criteria generally require a deeper run,
while loose criteria support a wider, cheaper pass. For large pools, prefer a broad surface screen
followed by deeper research on the narrowed set.

Ask whether the user wants to calibrate against approved examples, a small and varied prospect
sample Strawberry finds, or both. Once enough context is clear, present a concise plan covering the
rubric, sources, search depth, calibration method, intended deliverable, destination, and review
point. Wait for the user to confirm or adjust the plan before substantial research.

## Execution

1. Turn the accepted criteria into a simple qualification rubric.
2. Build a broad candidate pool from reliable sources that fit the user's market. Useful signals
   may include funding, hiring, expansion, leadership changes, relevant technology, active job
   listings, product changes, relevant regulation or M&A, or visible gaps in the prospect's current
   approach. When relevant, look beyond saturated shared databases to company sites, industry or
   niche directories, and association lists.
3. When parallel research is useful, separate tasks by source or account so they do not duplicate
   work. Narrow on inexpensive surface signals first; reserve one-task-per-account depth for the
   prospects that survive the screen.
4. Check the CRM, existing lists, prior approved work, and companion memory for duplicates before
   spending time on deep research.
5. Prefer recent, primary sources where available; preserve source URLs and relevant dates. Keep
   observed facts separate from inference, cross-check important claims, expose contradictions or
   outdated evidence, and never guess contact details, profile URLs, or buying signals.
6. Save useful visual evidence when the requested output benefits from it: logos, profile images,
   product screenshots, live ads, landing pages, or competitor examples.
7. Research contacts only to the depth the user requested. Confirm that a person still holds the
   relevant role before presenting them as a decision-maker. If work emails are requested, include
   verification status; risky or unverifiable addresses must never be treated as send-ready.
8. If sourcing inside LinkedIn, narrow before opening many profiles, use one LinkedIn agent at a
   time at a human pace, and stop on a warning, challenge, rate limit, or uncertainty. Parallelize
   only off-platform research.
9. Follow the agreed calibration method. If it includes a sample, present an initial set of 5–10
   prospects unless the user asks for a smaller calibration.
10. Before expanding an accepted sample into a long run, restate the scope, requested count, search
    depth, and rough cost so the user can adjust them.
11. Include the agreed fields, source links, concise fit reasons, confidence, and suggested angles
   when requested.
12. State how many prospects were reviewed, how the list was filtered, and show a few rejected
   examples when that helps the user correct the rubric.
13. Show new, uncontacted prospects by default and flag any already in the CRM. Drop prospects that
    miss the criteria or mark them borderline rather than padding the list to hit a count.
14. Incorporate the user's corrections before expanding to the requested count. Preserve the
    accepted sources, fields, qualification criteria, and output format.
15. Before delivery, check missing values, duplicates, formats, source links, and low-confidence
    fields; flag anything that looks wrong rather than silently presenting it.
16. Deliver to the agreed spreadsheet, table, CRM, document, or deck. Do not silently change field
    meanings or mix tentative research with verified facts.
17. Draft outreach only when requested. Nothing is sent and no external record is changed without
    the user's approval.

## Suggested outcome

Produce the agreed, reviewable prospect-sourcing result in the requested destination and format.
It may be a prospect list, CRM update, research brief, spreadsheet, table, deck, or another
artifact. Include source links, concise fit reasons, the agreed contact or company fields,
suggested angles when requested, and a confidence signal. Never invent missing data.

## Suggested next steps

- If the user wants to contact the approved prospects, use
  `strawberry/personalized-outreach-sequence`.
- If a team should reuse the accepted criteria, fields, and review process, use
  `strawberry/set-up-shared-team-workflow`.
- After the output is useful, offer to save the refined sourcing process as a user-owned skill.
- Once sourcing has worked a few times and the user's preferences are stable, offer to run the
  accepted process on a daily or weekly routine.
