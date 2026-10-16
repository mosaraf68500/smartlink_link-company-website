import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { stevedoringData } from "@/src/components/services/data/stevedoring";

const title = "Stevedoring & Vessel Discharge Services | Smartlink Systems";
const description =
  "Smartlink Systems provides high-speed stevedoring and vessel discharge in Bangladesh — mother-to-lighter cargo transfer, bulk discharge, and optimized vessel turnaround.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "stevedoring Bangladesh",
    "vessel discharge",
    "mother vessel lighter transfer",
    "bulk cargo discharge",
    "vessel turnaround",
    "high-speed stevedoring",
  ],
  alternates: { canonical: "/stevedoring" },
  openGraph: { title, description, url: "/stevedoring", type: "website" },
};

export default function Page() {
  return <ServicePage data={stevedoringData} />;
}
