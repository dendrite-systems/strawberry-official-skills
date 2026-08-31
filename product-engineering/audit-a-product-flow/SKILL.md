---
name: audit-a-product-flow
description: Navigate and test a product flow in the browser, then return a reviewable record of passes, regressions, screenshots, console or network evidence, scope, and uncertainty. Use for proactive product QA, pre-release or post-change checks, and live public-site audits; keep stateful or authenticated testing in staging or dedicated test accounts when possible.
---

# Audit a Product Flow

Test the product as a user and return evidence the team can inspect. This is a proactive flow audit,
not a substitute for the team's full test strategy and not an instruction to file every finding as
a bug.

## 1. Set the audit boundary

Clarify the product or URL, environment, user and account state, critical flow, expected result,
changed area or release context when relevant, test data, platforms or viewports that matter,
deadline, and reviewer.

Define what the audit will and will not cover. Prioritize the smallest set of paths and variations
that can answer the user's question. Use existing specifications, acceptance criteria, issue or
release context, and known risks when available.

Public live sites support read-only inspection. For authenticated, destructive, transactional,
permission-changing, or otherwise stateful paths, prefer staging, a preview environment, or a
dedicated test account. If production is the only environment, keep the audit read-only unless
Strawberry has active scoped permission for the exact action, account, data, and conditions.

## 2. Prepare safe test state

Confirm the account, role, data, credentials, and side effects required by the flow. Never expose
secrets or private user content in screenshots, logs, URLs, or reports. Use synthetic or approved
test data and make cleanup needs explicit.

Record the starting environment, build or version when known, browser state, feature flags, and
other conditions needed to reproduce the result. If the expected behavior is unclear, establish it
from the accepted product source or label the uncertainty before testing.

## 3. Navigate and test the flow

Use Strawberry's visible browser workspace to follow the flow end to end. Interact with the real
interface, inspect transitions and resulting state, and let the user observe or take over when
needed.

Check the critical path first, then the few variations most likely to reveal a material regression:
entry state, validation and recovery, permissions, empty or error states, responsive behavior, and
the changed area. Adapt to the flow rather than running a generic checklist.

Capture evidence as the work happens:

- steps, URLs or product locations, and expected versus observed behavior;
- screenshots or recordings where they make the result easier to verify;
- console errors, failed requests, response details, or timing evidence when relevant and safely
  available;
- environment, account role, version, and test data; and
- passes, failures, blocked paths, exclusions, and uncertainty.

## 4. Recheck important findings

Repeat a failure when safe to confirm it is not a transient state or test mistake. Check a nearby
control path when that helps isolate the changed condition. Do not claim a root cause from browser
symptoms alone.

Distinguish:

- a confirmed regression or failure;
- unexpected behavior whose requirement is unclear;
- an observation or usability concern;
- a blocked or untested path; and
- a pass within the stated scope.

## 5. Deliver the audit and route real bugs

Provide a concise audit record with the scope, environment, flow, evidence, passes, regressions,
blocked paths, exclusions, cleanup state, and remaining uncertainty. Lead with findings that could
change a release or product decision.

When a finding should become a grounded issue, use
`strawberry/product-engineering/report-bug` with the audit evidence. Do not create
an issue solely because something looked surprising; first establish the expected behavior,
impact, and duplicate status.

Follow Strawberry's active scoped permission for every account and action. Draft or ask when
permission is insufficient. Stop when identity, environment, scope, impact, or sensitive-data
handling changes, and verify any completed external action or cleanup.

After the team accepts the flow, evidence bar, environment, and report shape, preserve the method
for later audits. A recurring audit still needs explicit safe test state, ownership, destination,
and stop conditions.
