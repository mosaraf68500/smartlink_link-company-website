import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { truckTransportationData } from "@/src/components/services/data/truckTransportation";

const title = "Truck Transportation Service | Smartlink Systems";
const description =
  "Smartlink Systems Truck Transportation Service — drum truck and trailer truck road delivery across Bangladesh, connecting ports, jetties, and inland destinations to plants, warehouses, and project sites.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "truck transportation Bangladesh",
    "drum truck",
    "trailer truck",
    "road logistics Bangladesh",
    "bulk cargo trucking",
    "plant delivery truck",
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
