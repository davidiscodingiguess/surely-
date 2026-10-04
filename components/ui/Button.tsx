// PHASE 1 SKELETON — primary action button. Thumb-first: primary actions live
// in the bottom third; ≤2 taps from notification to decision.
export default function Button({ children }: { children: React.ReactNode }) {
  return <button className="rounded-lg bg-orange-600 px-4 py-3 text-white">{children}</button>;
}
