// PHASE 1 SKELETON — Twilio client. Credentials are David's, provisioned in
// Phase 5. No secrets live in this repo. Owner's personal number is never exposed.

export function getTwilio() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) {
    throw new Error("Twilio env vars missing — see .env.example (Phase 5)");
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("twilio")(sid, token);
}

export function surelyNumber(): string {
  const n = process.env.SURELY_PHONE_NUMBER;
  if (!n) throw new Error("SURELY_PHONE_NUMBER missing (Phase 5)");
  return n;
}
