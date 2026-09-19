import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { soyabeanMealData } from "@/src/components/products/data/animalFeed";

const title = "Soybean Meal (SBM) Supplier | Smartlink Systems";
const description =
  "Smartlink Systems supplies high-protein soybean meal (crude protein 46–48% min, moisture 12% max) to poultry, aquaculture, dairy and livestock feed manufacturers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soyabean-meal" },
  openGraph: { title, description, url: "/soyabean-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={soyabeanMealData} />;
}
