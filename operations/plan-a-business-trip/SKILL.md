---
name: plan-a-business-trip
description: Research, compare, book, and organize a business trip across flights, rail, accommodation, ground transport, calendars, and confirmations. Use when someone needs a traveler-specific itinerary, live travel options, approved bookings, or help managing a work trip.
---

# Plan a Business Trip

Help the user turn a work trip into a practical itinerary, then complete only the bookings and
follow-through they explicitly approve. Use Strawberry's browser as a shared working surface: start
from the user's calendar and company context, search across real travel sites, keep useful options
visible for inspection, and continue into an approved booking in the same browser. Do more than
return a detached list from a headless search.

## 1. Get the trip straight

Infer what is already clear from the conversation, calendar, files, tabs, and saved preferences.
Confirm only the missing details that could materially change the options or make a booking unsafe:

- trip purpose, travelers, origin, destination, dates, and required arrival or departure windows;
- meetings, event times, working hours, buffers, and other calendar constraints;
- travel policy, approval status, budget, cabin or accommodation rules, and reimbursable limits;
- seating, accessibility, dietary, mobility, accommodation, location, loyalty, and flexibility
  preferences; and
- hard requirements such as checked bags, reliable workspace, late arrival, or changeability.

Keep planning preferences separate from legal identity and payment details. Never infer a
traveler's full legal name, date of birth, document details, eligibility, or payment authority.
Clarify policy conflicts and any required exception approval before booking, while continuing useful
research where possible.

## 2. Search real options using the context that matters

Use approved internal context when it changes the trip: Calendar, event or meeting details,
messages, travel policy, past itineraries, loyalty information, files, and connected apps. Suggest
an app connection only when it materially improves the result; continue through available browser
tabs, websites, uploads, or user-provided details when possible.

Then work in the browser. Search current flight, rail, accommodation, and ground-transport options,
follow promising results to the provider's own pages, and use logged-in services when the user has
made them available. Include suitable hotels, serviced apartments, short-term rentals, company
lodging, or other stays rather than assuming one accommodation type. Keep the useful tabs, provider
links, observed prices, currencies, key terms, and time checked easy for the user to inspect.

Use official government or carrier sources for current entry, document, transit, and disruption
requirements when they could affect feasibility. Present uncertainty and ask the traveler to
confirm eligibility rather than giving unsupported legal or immigration assurances.

## 3. Compare trips that actually work

Build a small set of viable choices around the purpose of the trip. Check that every leg works
together across timezones, transfers, calendar commitments, check-in windows, and realistic
buffers. Compare the factors that materially distinguish the options:

- total expected cost, including known taxes, fees, baggage, transfers, and local transport;
- door-to-door travel time, departure and arrival timing, stops, and disruption exposure;
- accommodation type, location, safety-relevant practicalities, workspace, check-in, and proximity
  to the work;
- change, cancellation, refund, and no-show terms;
- policy fit, loyalty value, accessibility, and stated preferences; and
- uncertainties such as split tickets, separate bookings, or unconfirmed ground connections.

Do not manufacture precision when a price excludes material fees or is visible only as a starting
rate. Keep estimates, live quoted prices, held reservations, and confirmed purchases distinct.

## 4. Show the best choices

Present the best few options with a clear recommendation and the tradeoff behind it. Default to a
compact comparison followed by the proposed end-to-end itinerary, expected total, policy status,
assumptions, and unresolved decisions. Prefer a coherent trip over a long list of fares and stays.

Make clear what has only been researched and what, if anything, is reserved or paid. If the work is
for an event, use `strawberry/operations/plan-an-event` for the event outcome, venue, vendors,
budget, invitations, and run-of-show; keep traveler-specific journeys here.

## 5. Book only what the user approves

Recheck availability, price, currency, itinerary, and terms immediately before each approved
booking. If the option disappears or a material price, timing, accommodation, fare, or cancellation
term changes, stop and show the change before proceeding.

Treat each purchase, reservation, cancellation, upgrade, loyalty redemption, calendar change, and
message as a separate reviewable action. A budget or preferred option is not itself approval to
spend. Immediately before a transaction, confirm the traveler, account, selected option, dates,
total, and material terms. When booking for someone else, confirm that the user has authority and
that the traveler's identity and relevant preferences have been verified.

Request sensitive identity or payment information only when needed for the selected provider and
handle it in the provider's trusted flow. Do not expose, retain, or repeat full payment-card,
passport, or government-identity details in the itinerary or general conversation. Stop when a
required identity, policy, payment, or safety check cannot be completed reliably.

## 6. Put the confirmed trip in one place

After each approved booking, verify the provider's confirmation state rather than relying on a
submitted form or browser transition. Reconcile the confirmation against the chosen dates,
traveler, amount, and terms. Report partial completion or failure plainly.

Create a concise shareable itinerary with local times and timezones, addresses, confirmation
references, transfer logic, relevant contacts, cancellation deadlines, and links to the source
records. Keep sensitive details out of broadly shared versions. Prepare calendar entries,
traveler messages, or document filing separately, and apply them only after their destinations and
scope are approved. Organize confirmations and receipts and prepare an expense handoff when useful;
leave reimbursement, accounting treatment, and reconciliation to the appropriate Finance workflow.

## 7. Help when plans change

Use corrections from a real trip to retain useful preferences, policy rules, trusted providers,
buffer expectations, and itinerary format. Do not turn a one-off exception into a permanent rule.

When the user returns with a disruption or changed plan, verify the current booking, research the
best alternatives, and use the same comparison, recheck, and approval boundaries. Do not force a
Routine onto a trip that is better managed on request.
