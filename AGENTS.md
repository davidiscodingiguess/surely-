# Surely — Engineering notes

Next.js 16 + TypeScript + Tailwind 4. Mobile-first owner web app; tenants only text one SMS number.

## Lane rules (Lead Engineer)

- Test-first. No merge without tests. Boring technology only.
- No feature merges before its design is approved (Phase 2 gate).
- No money moves in the app. Approve = dispatch the vendor; the owner pays vendors directly.
- Every AI action carries a one-sentence plain-language reason (surfaced in UI, not logged only).

## Architectural hard rules

- `tenant_id uuid not null` on EVERY table — no exceptions. Guarded by `tests/schema.contract.test.ts`.
- Single-tenant for the test; the stub makes multi-tenancy later a data change, never a rebuild.
- Tenant privacy: the AI never reveals one tenant's info to another. Enforced in prompts (AI Behavior, Phase 4), not just here.
- Secrets never in the repo. `.env.local` only; see `.env.example`. Accounts (Twilio/Supabase/Vercel) are created by David under his own name.

## Cost guardrails (see idea-lab/surely-spend-estimate.md, budget $50 total)

- Per-task model routing lives in `lib/ai/models.ts`. Cheap model for triage, stronger only for tenant-facing replies.
- Cap reply lengths; strip context to essentials. Every outbound SMS costs ~1.3¢/segment.
- Track cumulative spend; budget exhausted = full stop.

## Build phases

1. Skeleton (this commit) → 2. Design → 3. Foundation (DB/auth/properties) → 4. AI brain → 5. Wire it (Twilio/approvals) → 6. Polish + 14-day live test.

## Docs of record

- Build brief: `~/workspace/user/files/Surely_Agent_Super_Team_Build_Brief_v2_1_bd6b.pdf`
- Acceptance criteria: `~/workspace/idea-lab/surely-acceptance-criteria.md`
- Decision log: `~/workspace/idea-lab/surely-decision-log.md`
- Spend estimate: `~/workspace/idea-lab/surely-spend-estimate.md`
