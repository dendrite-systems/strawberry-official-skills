---
name: research-and-report-a-bug
description: Research unexpected product behavior, reproduce it when safe, inspect approved Slack or Teams discussion, GitHub context, recent changes, logs, monitoring, existing issues, and the team's actual ticketing system, then prepare or file a grounded deduplicated issue according to current scoped permissions.
---

# Research and Report a Bug

Turn a product problem into a grounded issue the team can act on. Research enough context to avoid a
thin report or a duplicate, but do not require every possible system before producing useful work.

## 1. Understand the report and the desired action

Establish the symptom, expected behavior, user impact, environment, account or role, version when
known, frequency, timing, affected scope, and any reproduction evidence already available. Infer
details from screenshots, URLs, messages, recordings, logs, and product context when reliable
instead of making the reporter repeat them.

Clarify whether the user wants research, a draft issue, issue creation, or research followed by a
code fix. Find the team's actual ticketing system, project, issue type, template, severity scale,
labels, and ownership conventions rather than assuming a particular vendor.

## 2. Research the context that can change the issue

Use approved sources selectively:

- Slack or Teams discussion for customer impact, timing, prior investigation, and ownership;
- GitHub for relevant repositories, code context, recent changes, pull requests, release history,
  and existing issues;
- the team's ticketing system for duplicates, linked work, templates, severity, and current state;
- logs, monitoring, analytics, support records, screenshots, or recordings for supporting evidence;
  and
- the product itself for safe reproduction and environment details.

Match people, accounts, repositories, builds, and tickets carefully. Preserve source links or record
identifiers. Keep secrets, tokens, private messages, and customer data out of the issue; summarize
or redact sensitive evidence when the team still needs the finding.

## 3. Reproduce and narrow the behavior

Reproduce the problem end to end when practical and safe. Prefer staging, preview environments, or
dedicated test accounts for authenticated or stateful paths. On a public live site, perform
read-only inspection unless Strawberry has active scoped permission for the exact state-changing
action, account, data, and conditions.

Record the smallest reliable steps, expected and observed result, environment, version, account
role, test data, frequency, screenshots, and relevant console or network evidence. Recheck a
failure when safe. Distinguish confirmed behavior, suspected regression range, likely component,
and unverified root-cause hypothesis.

If reproduction is not possible, assemble the strongest evidence chain available and state the
limitation rather than fabricating steps.

## 4. Search for the existing issue

Search the actual ticketing system and relevant GitHub issues using the symptom, error text,
affected flow, component, version, and likely synonyms. Compare behavior, environment, scope, and
status before declaring a duplicate.

If a matching issue exists, return the match and the new evidence worth adding. Updating,
commenting on, or reopening that issue is a separate external action governed by the current scoped
permission. Do not file a second issue merely to complete the workflow.

## 5. Prepare the report

Create a concise issue with the team's accepted format. Include what is useful:

- a clear title and user impact;
- environment, version, account role, scope, and frequency;
- minimal reproduction steps;
- expected and observed behavior;
- screenshots, logs, console or network evidence, and source links;
- severity or priority using the team's definitions;
- duplicate search and related work;
- suspected area or regression range, clearly labeled as inference;
- acceptance or verification notes; and
- uncertainty, privacy-safe evidence gaps, and cleanup state.

Keep solution ideas separate from confirmed cause. A good bug report is actionable without
pretending the investigation is complete.

## 6. Draft or file within the current permission

Follow Strawberry's active scoped permission for the exact ticketing account, project, issue type,
fields, destination, and action. If it covers creation under the current conditions, create the
issue and verify its identifier, URL, fields, and attachments. If it does not, return a reviewable
draft or ask for the missing approval.

Stop when identity, repository, environment, account, project, scope, impact, or sensitive-data
handling changes. Batch findings remain a reviewable set until filing scope is clear.

This skill does not limit what a capable companion may do next. If the user also asks for a fix,
the companion can continue through the available coding workflow under the normal repository,
change, validation, and permission boundaries. Preserve the issue evidence so implementation and
verification remain connected to the reported behavior.
