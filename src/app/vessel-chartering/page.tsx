import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { vesselCharteringData } from "@/src/components/services/data/vesselChartering";

const title =
  "International Bulk Chartering & Maritime Logistics | Smartlink Systems";
const description =
  "Smartlink Systems provides international bulk vessel chartering and maritime logistics for dry bulk commodities — Handysize to Panamax/Kamsarmax, voyage charter, time charter, COA, and cargo-to-destination logistics.";

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
