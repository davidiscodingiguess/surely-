// PHASE 1 SKELETON — root redirects to the Today tab (Phase 2 owns the home screen).
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/today");
}
