import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { rapeseedMealData } from "@/src/components/products/data/animalFeed";

const title = "Rapeseed Meal (RSM) Supplier | Smartlink Systems";
const description =
  "Smartlink Systems supplies rapeseed meal (RSM) — crude protein 34–38% min, moisture 12% max — as a cost-effective plant-based protein for livestock and feed formulations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rapeseed-meal" },
  openGraph: { title, description, url: "/rapeseed-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={rapeseedMealData} />;
}
