import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { inlandWaterTransportData } from "@/src/components/services/data/inlandWaterTransport";

const title = "Inland Water Transport | Smartlink Systems";
const description =
  "Smartlink Systems provides Inland Water Transport across Bangladesh — river-based cargo movement connecting Chattogram, Dhaka, Meghna, Noapara, Khulna, Bhairab, Ashuganj, and other commercial destinations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "inland water transport Bangladesh",
    "river cargo Bangladesh",
    "lighterage barge",
    "Chattogram Dhaka river transport",
    "Ashuganj jetty",
    "Noapara Khulna cargo",
    "IWT Bangladesh",
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
