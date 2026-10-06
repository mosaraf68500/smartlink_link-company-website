import { redirect } from "next/navigation";

/** Legacy route — Lentils & Pulses are now a single page. */
export default function Page() {
  redirect("/lentils-pulses");
}
