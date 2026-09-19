import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { wheatBranData } from "@/src/components/products/data/animalFeed";

const title = "Feed Grade Wheat Bran Supplier | Smartlink Systems";
const description =
  "Smartlink Systems supplies feed grade wheat bran (protein 14% min, moisture 14% max) for poultry, dairy, cattle and livestock feed. Contact us for pricing and bulk supply.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wheat-bran" },
  openGraph: { title, description, url: "/wheat-bran", type: "website" },
};

export default function Page() {
  return <CommodityPage data={wheatBranData} />;
}
