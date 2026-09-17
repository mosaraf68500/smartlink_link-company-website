import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { limestoneData } from "@/src/components/products/data/limestone";

export const metadata: Metadata = {
  title: "Limestone Supplier & Importer in Bangladesh | Smartlink Systems",
  description:
    "Smartlink Systems supplies bulk limestone from UAE, Oman, Thailand, China & India to RMC plants, cement industries and infrastructure projects in Bangladesh.",
};

export default function Page() {
  return <CommodityPage data={limestoneData} />;
}
