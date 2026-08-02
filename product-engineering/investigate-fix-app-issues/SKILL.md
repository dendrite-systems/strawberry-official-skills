---
name: investigate-fix-app-issues
description: Investigate application errors or unexpected behavior and help fix the highest-value issue. Use when a user wants logs, monitoring, code, user reports, and reproduction evidence connected into a reviewable diagnosis and implementation.
---

# Investigate and Fix App Issues

## Context, setup, and planning

Try to understand the symptom, expected behavior, impact, project, environment, and desired result.
Useful evidence may include a report or reproduction, error strings, logs, monitoring, recent changes,
code, screenshots, and existing issues. Infer details such as operating system, browser, app version,
and error strings from that evidence when possible rather than interrogating the reporter.

If the work includes issue triage, understand the team's issue tracker, labels, severity scale,
issue template, duplicate criteria, and what makes a report ready to file. Confirm whether the user
wants a diagnosis, a draft issue, an implementation, or a combination, then present a concise plan
before substantial changes.

## Execution

1. Reproduce the issue end to end when practical, capturing screenshots when they make the evidence
   clearer. Otherwise establish the smallest reliable evidence chain.
2. When triaging a report, search existing issues for a duplicate first and link the match. Draft a
   new issue only when the problem is genuinely new, including useful reproduction steps, severity,
   and labels.
3. Inspect relevant reports, logs, monitoring, recent changes, and code without leaking secrets or
   user content.
4. Distinguish confirmed root cause from inference.
5. Implement the smallest maintainable fix when authorized, then validate proportionately.
6. For a batch of reports, save the list first and present the triage result before filing anything.
   The user confirms what gets filed.

## Suggested outcome

Provide a concise diagnosis with supporting evidence, a confirmed root cause or clearly labeled
inference, any duplicate match or reviewable issue draft, a fix when requested, validation results,
and remaining risk.

## Suggested next steps

Once the workflow is trusted, offer to preserve it as a user-owned skill. For recurring intake, a
Routine can triage reports as they arrive and notify the team only when something new and serious
appears.
