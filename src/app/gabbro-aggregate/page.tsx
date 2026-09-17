import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { gabbroAggregateData } from "@/src/components/products/data/gabbroAggregate";

export const metadata: Metadata = {
  title: "Gabbro Aggregate Supplier & Importer in Bangladesh | Smartlink Systems",
  description:
    "Smartlink Systems supplies premium crushed Gabbro Aggregate from UAE and Oman to RMC plants, contractors and mega infrastructure projects in Bangladesh.",
};

export default function Page() {
  return <CommodityPage data={gabbroAggregateData} />;
}
