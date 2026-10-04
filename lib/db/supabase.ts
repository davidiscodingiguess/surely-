// PHASE 1 SKELETON — Supabase client. Instantiated in Phase 3 after David
// creates the Supabase project under his own name. No keys live in this repo.
import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Supabase env vars missing — see .env.example (Phase 3)");
  }
  return createClient(url, key);
}
