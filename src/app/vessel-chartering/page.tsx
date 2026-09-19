import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { vesselCharteringData } from "@/src/components/services/data/vesselChartering";

const title =
  "International Bulk Vessel Chartering & Ocean Freight | Smartlink Systems";
const description =
  "Smartlink Systems arranges dry bulk shipping and international bulk vessel chartering — Handysize to Panamax, voyage and time charter, freight negotiation, and maritime logistics for cargo moving to Bangladesh and South Asia.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bulk vessel chartering",
    "dry bulk shipping",
    "ocean freight",
    "maritime logistics",
    "voyage charter",
    "time charter",
  ],
  alternates: { canonical: "/vessel-chartering" },
  openGraph: { title, description, url: "/vessel-chartering", type: "website" },
};

export default function Page() {
  return <ServicePage data={vesselCharteringData} />;
}
