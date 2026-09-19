import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cornDdgsData } from "@/src/components/products/data/animalFeed";

const title = "DDGS – Distillers Dried Grains with Solubles Supplier | Smartlink Systems";
const description =
  "Smartlink Systems sources DDGS (crude protein 26–30% min, moisture 12% max) as a protein- and energy-rich ingredient for poultry, cattle, dairy and livestock feed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/corn-ddgs" },
  openGraph: { title, description, url: "/corn-ddgs", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cornDdgsData} />;
}
