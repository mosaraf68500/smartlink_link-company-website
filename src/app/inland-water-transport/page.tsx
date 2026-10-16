import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { inlandWaterTransportData } from "@/src/components/services/data/inlandWaterTransport";

const title = "Inland Transportation & Logistics | Smartlink Systems";
const description =
  "Smartlink Systems provides end-to-end inland transportation solutions connecting Chittagong Port with industrial and commercial destinations across Bangladesh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "inland transportation Bangladesh",
    "inland logistics Bangladesh",
    "Chittagong port transport",
    "cargo transportation Bangladesh",
    "supply chain logistics",
    "domestic freight Bangladesh",
    "inland water transport",
  ],
  alternates: { canonical: "/inland-water-transport" },
  openGraph: {
    title,
    description,
    url: "/inland-water-transport",
    type: "website",
  },
};

export default function Page() {
  return <ServicePage data={inlandWaterTransportData} />;
}
