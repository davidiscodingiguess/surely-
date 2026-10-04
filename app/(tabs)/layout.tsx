// PHASE 1 SKELETON — tab shell. The Discord-style left rail lands in Phase 2.
export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white">
      {/* Left rail: one circle per property (Phase 2) */}
      <aside aria-label="Properties rail" className="fixed left-0 top-0 bottom-0 w-16 border-r" />
      <div className="pl-16">{children}</div>
    </div>
  );
}
