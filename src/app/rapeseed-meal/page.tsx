import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { rapeseedMealData } from "@/src/components/products/data/rapeseedMeal";

const title = "Rapeseed Meal (RSM) – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Rapeseed Meal (RSM) — approx. 34%–38%+ crude protein — for feed mills, dairy, livestock and poultry-feed manufacturers under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rapeseed-meal" },
  openGraph: { title, description, url: "/rapeseed-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={rapeseedMealData} />;
}
