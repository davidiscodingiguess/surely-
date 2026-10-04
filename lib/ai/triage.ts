// PHASE 1 SKELETON — triage contract. Prompts and evals are AI Behavior's lane
// (Phase 4). This function exists so Phase 5 wiring has a typed seam to call.

import type { ModelRoute } from "./models";

export type TriageLevel = "emergency" | "urgent" | "routine";

export interface TriageResult {
  level: TriageLevel;
  /** One plain-language sentence: why this level. Shown to the owner. */
  reason: string;
  modelRoute: ModelRoute;
}

export async function triageMessage(_text: string): Promise<TriageResult> {
  throw new Error("triage prompts land in Phase 4 — do not stub behavior");
}
