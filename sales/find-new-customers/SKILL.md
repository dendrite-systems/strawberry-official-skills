---
name: find-new-customers
description: Find and qualify prospective customers from the user's offer, best customers, target market, geography, buying signals, or other criteria. Use when someone wants to discover a targeted set of new prospects or improve how they source them. If they already have a list and mainly need contacts or missing fields, use enrich-lead-list instead.
---

# Find New Customers

Find prospects who fit for a reason, not just a long list. If the user already has a sourcing skill
shaped around their business, follow that instead.

## Workflow

### 1. Understand what a good prospect looks like

Start with the result the user needs and what makes a prospect worth their time. Use relevant tabs,
connected apps, files, memory, and prior work already available before asking them to repeat
themselves.

Good prospecting depends on context about how the user's business works: what they sell, who gets
value, strong and poor-fit customers, exclusions, CRM history, and feedback from earlier searches.
Use that context to judge fit the way the user does, rather than relying only on generic filters. If
a useful source is unavailable, briefly explain what connecting it would improve without making
setup a requirement.

Find the kind of prospect the user actually sells to. This might be an organization, school,
location, property, team, individual, or something else. Research specific people or contact details
only when the requested result needs them.

### 2. Propose the search and first sample

For someone new to Strawberry or this workflow, propose:

- a concise definition of who you will look for, with any important uncertainty made clear; and
- a short plan covering the first sample, feedback, wider search, and delivery.

Include sources, breadth versus depth, approximate scale, useful fields, destination, and review
point only when they matter. Explain tradeoffs comparatively; give specific time or credit estimates
only when they can be estimated reliably. For a trusted repeat workflow, keep the plan brief and
reconfirm only material changes or a substantially larger, deeper, or more expensive run.

### 3. Find and calibrate an initial set

Choose a search approach that fits the situation. It may use explicit criteria, lookalikes, a market
or account universe, signs of a relevant problem or change, or a combination that becomes clearer
through research.

Search where the useful evidence is likely to live. Because Strawberry is a browser, it can follow
promising paths across LinkedIn, company sites, connected apps, public databases, niche directories,
and other web sources rather than relying on one shared lead database.

When the criteria are new, subjective, or expensive to apply at scale, begin with a small and varied
set. Explain why each prospect appears to fit and preserve the important sources. Include borderline
or rejected examples when they would help the user correct the approach. Do not force calibration
when the user already has a trusted rubric and straightforward scope.

Require evidence of fit for every prospect. Treat a credible timing or "why now" signal as helpful
when it exists, not as a universal requirement. Use lighter, clearly labeled evidence for an initial
screen; go deeper and cross-check material claims for the final shortlist.

### 4. Expand the accepted approach

Use the user's feedback to improve the criteria, sources, fields, and research depth before expanding.
Do not pad the result or silently loosen the criteria to reach a requested count. If too few prospects
meet the bar, explain why and offer useful choices: broaden a criterion, search other sources, accept
more uncertainty, or keep the smaller list.

When a CRM, existing list, prior work, or useful memory is available, check it for duplicates and
prior contact before deep research. Flag existing prospects rather than silently excluding them
unless the user asked to see only new ones.

When working in LinkedIn, narrow the search before opening many profiles, work sequentially at a
human pace, and stop on any warning, challenge, rate limit, or unexpected state. Parallelize only
independent off-platform research.

### 5. Deliver a result the user can trust

For every prospect, include:

- the prospect's name or other clear identifier;
- a concise reason it fits;
- the material evidence and source links.

Make important uncertainty or confidence caveats visible when they could affect how the user
interprets or acts on the result.

Add timing signals, requested fields, contact details, prior-relationship status, or a suggested
outreach angle only when relevant. If people or contact details are included, confirm that each
person still holds the relevant role and keep verification status visible. Never invent missing
companies, people, profile URLs, contact details, or buying signals.

Prefer a compact table when delivering more than a few prospects. Include how many were reviewed or
filtered when that context is meaningful. Before delivery, check duplicates, missing values, stale
roles, inconsistent formats, broken links, and low-confidence fields. Keep observed facts separate
from inference.

Deliver to the agreed destination. Default to a reviewable result in chat when no other destination
matters.

### 6. Improve and reuse the workflow

Finding prospects, drafting outreach, adding CRM records, and enrolling or sending messages are
separate steps. Do not change external records or contact anyone without the user's approval. If the
user wants to contact approved prospects, use `strawberry/sales/send-personalized-outreach`.

After the user has reviewed and improved a useful result, offer to save the accepted criteria,
sources, fields, destination, and review points as a custom skill. When useful, also offer to share
the approved prospect list or accepted sourcing method with the relevant teammates in their agreed
destination. Keep sharing the list, sharing the method, and changing external systems as separate
choices. When teammates need the same context and several Sales workflows—not only this sourcing
method—offer to share the full companion. Once the workflow works reliably and has a useful cadence
or trigger, offer to turn it into a Routine.
