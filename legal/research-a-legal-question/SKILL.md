---
name: research-a-legal-question
description: Research a legal question in a named jurisdiction using secondary sources then primary law, and return a source-linked answer that separates binding from persuasive authority and flags what could not be verified. Use for statutory questions, case research, regulatory scope, and background before drafting or advising.
---

# Research a Legal Question

Produce the first draft and the source assembly for a legal question. A qualified human verifies
before anything is relied on, and this skill should make that verification fast rather than assume
it away.

## 1. Fix the jurisdiction before anything else

Legal research is jurisdiction-specific, and a rule from the wrong jurisdiction is worse than no
answer. Establish which law applies before searching:

- The user names a jurisdiction: proceed, but flag it if the facts suggest another country's law
  may actually apply.
- The user does not name one: ask before researching.
- The user does not know: identify the plausible regimes and the factors that would decide between
  them, such as where the parties are, where the contract was formed, and where the harm occurred.
  Research those regimes as far as is useful, but present the result as a preliminary view rather
  than a determination. The user or a qualified legal reviewer confirms the governing jurisdiction
  before anything here is relied on.
- The question is general and the facts are too thin to determine applicable law: say so explicitly
  in the output, generalise with significant caveats, and recommend the user identify the
  jurisdiction before relying on anything.

Never blend rules from different jurisdictions into one answer.

## 2. State the question precisely, then plan

"Research EU data protection" is not a research question. "What are the lawful bases for processing
under Article 6 GDPR, and how have EU courts interpreted legitimate interest for large-scale
profiling?" is. Restate the question, identify the legal issues inside it, and agree the depth and
the output the user needs before running searches.

## 3. Protect the matter before searching

Search queries leave the session. Never put client or party names, deal terms, financial figures, or
privileged facts into a web search. Use anonymised or hypothetical formulations instead: search
"limitation of liability clause SaaS agreement", not the parties and their terms.

If the user pastes material containing identifiable confidential information without having
confirmed their confidentiality posture, stop and flag it before processing — even mid-workflow. Do
not carry confidential material into memory, custom skills, or anything else that persists into
later sessions unless the user explicitly asks for that.

## 4. Secondary sources first, then primary law

Start with commentary — treatises, practice guides, law-firm analysis, encyclopaedias — to
understand the landscape and find the controlling authorities. Then go to the primary law itself:
statutes, regulations, case law.

Strawberry can work through the databases and subscriptions the user is already entitled to use and
follow citations into the underlying sources rather than stopping at search summaries.

For every authority, record three things: the jurisdiction, whether it is primary or secondary, and
whether it is binding or persuasive for this user's jurisdiction. Label persuasive authority as
persuasive in the output. Do not present a case from one jurisdiction as though it controls in
another.

## 5. Stop when the research converges

Legal research has no natural endpoint. Stop when independent sources point to the same primary
authorities, new searches return what you have already found, the controlling statute and leading
cases are identified, and further work would add depth without changing the answer. Say so when
authorities genuinely conflict rather than picking one.

## 6. Verify before returning anything

This is not optional, and it is the step that makes the rest usable. For every citation:

- Confirm the source exists, in an authoritative database or the original.
- Confirm it supports the proposition it is cited for, by reading the passage rather than trusting
  a summary.
- Check pinpoints. Treat page references as unverified until checked; article and section
  references are structural and more reliable, but still verify them.
- Check the law is current — statutes amended, cases overruled, distinguished, or questioned.
- Check the jurisdictional attribution is right.

Anything that cannot be verified is removed or explicitly flagged as unverified. Never leave an
unchecked citation sitting quietly in the output.

## 7. Return something a lawyer can check

Lead with the answer and the authority it rests on. Keep each proposition next to the source that
supports it, separate binding from persuasive, and state plainly what remains uncertain, contested,
or unverified.

Say what was searched and what was not. A named gap is useful; a confident answer with a hidden gap
is dangerous.

Use `strawberry/legal/compare-across-jurisdictions` when the question spans several jurisdictions,
and `strawberry/legal/brief-a-regulation` when the result should be a briefing on a specific
instrument rather than an answer to a question.

After the work proves useful, preserve the accepted jurisdictions, source hierarchy, citation
system, and output format as a custom skill.
