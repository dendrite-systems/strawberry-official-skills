---
name: audit-a-design-system
description: Click through a live product or site and record where the interface has drifted from its design system, with inspectable evidence for each finding. Use for spacing, type, color, component, state, and accessibility inconsistencies across real pages rather than in a design file.
---

# Audit a Design System

Walk a live product and find where the built interface has drifted from the system it is supposed to
follow. The design file is not the subject here. The pages users actually see are.

Drift is invisible page by page and obvious in aggregate. One button with the wrong radius is
nothing; the same button rendered four different ways across a signup flow is a system problem.

## 1. Agree the system and the scope

Establish what the interface is meant to conform to: a published design system, a token set, a
component library, or simply the pattern used on the pages the user considers correct. When there is
no documented system, ask which pages are the reference and treat those as the standard.

Agree the surface to walk. A flow, a section, a breakpoint, a theme, or a specific component
wherever it appears. An unbounded audit of an entire product returns a list nobody reads.

## 2. Walk the real pages

Move through the live interface the way a user would, and inspect what is actually rendered rather
than what the design file specifies. Look at each page in the states that matter: default, hover,
focus, disabled, loading, error, and empty. Empty and error states are where drift concentrates,
because they get built last and reviewed least.

Check the breakpoints the user cares about, and both themes where the product has them.

## 3. Record what has drifted

Useful categories:

- **Spacing:** padding and gaps that do not sit on the scale.
- **Type:** sizes, weights, and line heights outside the ramp, or the same role rendered differently
  in different places.
- **Color:** values that are close to a token but not the token, and text or icons that fail
  contrast against their real background.
- **Components:** the same element built several ways, or variants used outside their purpose.
- **States:** missing focus indication, hover that changes nothing, disabled that does not read as
  disabled.
- **Content and shape:** inconsistent radii, borders, shadows, or icon weights.

For every finding, record where it is, what it should be, and what it currently is. Capture the
evidence so the user can see it without rerunning the audit.

## 4. Separate a defect from a decision

Not every inconsistency is a bug. A deliberate exception, a legacy surface scheduled for
replacement, and a genuine mistake all look identical from outside. Group findings by confidence and
ask about the ones that look intentional rather than filing them as errors.

## 5. Return something a team can act on

Group by cause rather than by page. Twelve instances of one wrong token are a single fix and should
be presented that way; twelve unrelated one-offs are a different problem.

Order by what actually matters: accessibility failures first, then anything affecting a primary
flow, then visible inconsistency, then cosmetic drift. Say plainly what was walked and what was not,
so nobody reads a bounded audit as complete coverage.

## 6. Continue

Use `strawberry/product-engineering/audit-a-product-flow` when the question is whether the flow
works rather than whether it is consistent, and
`strawberry/product-engineering/write-a-product-spec` when a finding turns into work that needs
specifying.

After the audit proves useful, preserve the accepted system, the surfaces walked, the states
checked, and the report format as a custom skill. A Routine can re-walk agreed surfaces after
releases and report only new drift, once the scope and the review point are settled.
