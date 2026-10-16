import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { rapeseedMealData } from "@/src/components/products/data/rapeseedMeal";

const title =
  "Rapeseed Meal (RSM) – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Expanding our portfolio of plant-based protein ingredients, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Rapeseed Meal (RSM) for the animal-feed industry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rapeseed-meal" },
  openGraph: { title, description, url: "/rapeseed-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={rapeseedMealData} />;
}
