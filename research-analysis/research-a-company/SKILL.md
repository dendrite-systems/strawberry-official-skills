---
name: research-a-company
description: Research one company into a concise, source-linked brief focused on the question or decision in front of the user. Use for general company understanding, partner or vendor research, strategic research, or a current company view that is not primarily a sales account brief, marketing competitor analysis, or investment screen.
---

# Research a Company

Help the user understand one company well enough to answer a real question or make a better
decision. Adapt the depth and output to that question instead of filling a standard company
profile.

## 1. Identify the company and the useful answer

Confirm which company the user means, resolve ambiguous names or domains, and understand what the
research should help them decide. They may need a quick current view, an explanation of the
business, an assessment of a potential partner or vendor, an understanding of recent changes, or a
deeper answer about the product, team, strategy, customers, ownership, or market position.

Use the time available and likely consequence to set the depth. Give a useful first answer when the
question is bounded; propose a deeper pass when missing evidence could materially change the view.

## 2. Start with relevant context and authorized sources

Use approved tabs, files, prior research, notes, connected apps, and internal documents when they
help answer the question. Do not ask the user to reconstruct context that is already available.

Research current primary and credible secondary sources. Strawberry may be able to reach useful
sources beyond ordinary public search by working with sites and tools the user is already
authorized to access. Follow promising links, search within sources, and investigate past the first
generic result when greater depth could change the answer. Never bypass access controls or treat
technical availability as permission to use sensitive information.

Choose sources for the question rather than visiting the same checklist every time. Useful evidence
may come from company and product pages, documentation, filings, announcements, leadership
material, hiring, customer or partner references, reviews, reporting, databases, industry sources,
and approved internal context.

## 3. Reconcile the company view

Confirm identities before combining records. Keep material sources and dates close to the claims
they support. Distinguish the company's own claims, observed facts, third-party evidence, internal
context, calculations, and inference.

Look for changes, tensions, and missing evidence that matter to the user's question. Do not force a
recent signal, silently resolve contradictions, or present a public proxy as proof. Stop when the
question is answered or more searching is unlikely to change the decision.

## 4. Deliver the brief the decision needs

Lead with the answer or most useful current view. Depending on the question, include:

- what the company does and the context needed to understand it;
- the findings most likely to change the decision;
- important recent changes, supported patterns, or tensions;
- relevant people, products, customers, ownership, partnerships, or market context;
- contradictions, uncertainty, and evidence still missing; and
- useful next questions or the next research step.

Return a concise, source-linked brief in the format the user needs: chat, document, table,
spreadsheet, or another agreed destination. Prefer a few decision-relevant findings over a long,
generic profile.

## 5. Hand off to the specialist owner

Use `strawberry/sales/research-an-account` when the company is being researched as an account and
relationship for a sales decision. Use
`strawberry/venture-capital/research-an-investment-opportunity` when thesis fit and the investment
screen are the primary result. Use `strawberry/marketing/run-competitor-analysis` for a marketing
competitor comparison, or `strawberry/research-analysis/map-a-market` when the question concerns a
broader landscape rather than one company.

Research and presentation production remain separate jobs. When the accepted findings should
become a presentation, use `strawberry/research-analysis/create-beautiful-slide-deck` without
reopening the research by default.

After feedback, offer to preserve trusted sources, depth, questions, fields, and output shape as a
custom or team skill. Suggest a Routine only when the company, source set, change definition,
cadence, audience, destination, and review point are stable.
