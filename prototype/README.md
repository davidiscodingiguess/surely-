# Surely — Clickable Prototype (Phase 2)

**Open it:** double-click `index.html`. No build step, no backend, no network —
pure HTML/CSS/vanilla JS with fake data. Mobile viewport (390px); on a wide
screen you also get the Discord-style house rail.

**Design system:** Direction A "Warm Ledger" (warm matte paper `#FAF7F2`,
serif titles, 3pt urgency spine, tabular numerals, system fonts only).

## The 7 screens

1. **Today** — "Needs you" decision cards (emergency → approval → urgent → FYI)
   + "Handled for you" feed. Empty state: *"All quiet. Surely's got it."*
2. **Messages** — SMS threads grouped by house; AI replies labeled SURELY AI.
3. **Ticket** — maintenance detail: photo, triage + why, vendor + why, cost
   **before** approve, sticky Approve / Decline / Call me bar.
4. **Houses** — properties → units (tenant, lease, tappable open-ticket counts),
   plain-language house rules (editable).
5. **Vendors** — preferred/backup, tap-to-call/text from the Surely number,
   <1-minute add-vendor sheet.
6. **AI settings** — approval limit ($250), quiet hours, tone presets,
   escalation contacts, dark mode, About, **Push lab**.
7. **Number** — the one Surely number `(317) 555-0148`, activity history, and a
   transcribed 2:14 AM voicemail rendered as an emergency card.

## Demo flows (end to end)

- **Push → approve:** a push-style banner slides in after launch → tap → Today
  opens with the leak card expanded → **Approve** → *"Vendor dispatched ·
  Undo (60s)"* → expiry moves it to the handled feed; Undo cancels.
- **Take over:** Messages → Marcus's thread → **Take over** → type + Send
  (goes out as the Surely number) → **Hand back to AI**.
- **Ticket cost-before-approve:** Today card → Details → estimate shown above
  the sticky action bar.
- **House switcher:** tap the house bar in the header → bottom sheet.
- **Voicemail:** Number tab → emergency card with transcript + fake playback.
- **Push lab** (AI settings → Push notifications → Open push lab): the Web Push
  spike checklist with local stubs — permission UX, subscribe toggle, a
  simulated Android notification with exactly Approve/Decline (text-only),
  headless approve (closes, no window opens), body-tap deep link to
  `/today?card=leak`, and same-tag re-push replacing instead of stacking.

Fake data throughout: 2 properties, 3 doors, fictional tenants/vendors/numbers.
Nothing here sends anything anywhere.
