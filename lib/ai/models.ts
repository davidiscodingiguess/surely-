// PHASE 1 SKELETON — model routing table.
// Rule: cheapest capable model per task; stronger model only where the brief
// demands it (tone quality of tenant-facing replies). Eval'd by AI Behavior in
// Phase 4 — this table changes only with a re-run of the 150-message eval set.
//
// Pricing anchors (USD per 1M tokens, fetched 2026-10-04; re-verify before Phase 4):
// - Triage / classification:   GPT-5.4-nano  $0.20 in / $1.25 out
// - Tenant reply drafting:     GPT-5.4-mini  (mid tier; quality-sensitive)
// - Emergency re-check:        GPT-5.4-nano  (deterministic guardrail pass)
//
// Full cost model: ~/workspace/idea-lab/surely-spend-estimate.md

export const MODEL_ROUTES = {
  /** Triage every inbound message: emergency | urgent | routine + one-line why. */
  triage: "gpt-5.4-nano",
  /** Draft the tenant-facing SMS reply (tone presets, eval'd Phase 4). */
  replyDraft: "gpt-5.4-mini",
  /** Second pass on anything flagged emergency — must agree before escalation fires. */
  emergencyRecheck: "gpt-5.4-nano",
  /** Daily summary to the owner. */
  dailySummary: "gpt-5.4-nano",
} as const;

export type ModelRoute = keyof typeof MODEL_ROUTES;
