import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { soyabeanMealData } from "@/src/components/products/data/soyabeanMeal";

const title = "Soybean Meal (SBM) – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Soybean Meal (SBM) from USA, Brazil, Argentina, Tanzania and Nigeria — 44%–48%+ crude protein — for poultry, dairy, livestock and aquaculture feed under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soyabean-meal" },
  openGraph: { title, description, url: "/soyabean-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={soyabeanMealData} />;
}
