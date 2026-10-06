import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { poultryMealData } from "@/src/components/products/data/poultryMeal";

const title = "Poultry Meal – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Poultry Meal from Saudi Arabia, Nigeria, India and Egypt — 55%–65%+ crude protein — for aquaculture, pet food, poultry, livestock and compound-feed manufacturers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/poultry-meal" },
  openGraph: { title, description, url: "/poultry-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={poultryMealData} />;
}
