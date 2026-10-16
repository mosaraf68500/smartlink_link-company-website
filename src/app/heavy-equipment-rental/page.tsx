import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { heavyEquipmentRentalData } from "@/src/components/services/data/heavyEquipmentRental";

const title = "Heavy Equipment Rental Solutions | Smartlink Systems";
const description =
  "Smartlink Systems heavy equipment rental — excavators, loaders, cranes, asphalt pavers, and specialized machinery for construction and infrastructure projects across Bangladesh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "heavy equipment rental Bangladesh",
    "excavator loader rental",
    "mobile crane rental",
    "asphalt paver rental",
    "construction equipment rental",
    "material handler rental",
  ],
  alternates: { canonical: "/heavy-equipment-rental" },
  openGraph: {
    title,
    description,
    url: "/heavy-equipment-rental",
    type: "website",
  },
};

export default function Page() {
  return <ServicePage data={heavyEquipmentRentalData} />;
}
