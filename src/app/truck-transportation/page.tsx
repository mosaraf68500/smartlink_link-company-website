import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { truckTransportationData } from "@/src/components/services/data/truckTransportation";

const title = "Land Logistics & Heavy Transportation | Smartlink Systems";
const description =
  "Smartlink Systems provides land logistics and heavy transportation — dump trucks, tippers, trailers, and heavy-duty solutions for construction, infrastructure, and industrial projects across Bangladesh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "land logistics Bangladesh",
    "heavy transportation Bangladesh",
    "dump truck tipper",
    "construction material transport",
    "heavy cargo trailer",
    "project logistics Bangladesh",
  ],
  alternates: { canonical: "/truck-transportation" },
  openGraph: {
    title,
    description,
    url: "/truck-transportation",
    type: "website",
  },
};

export default function Page() {
  return <ServicePage data={truckTransportationData} />;
}
