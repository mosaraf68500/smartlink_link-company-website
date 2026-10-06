import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { greenMungData } from "@/src/components/products/data/greenMung";

const title = "Green Mung Beans – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Green Mung Beans (Green Gram) from Tanzania, India, Nigeria and Mozambique — up to 99%+ purity — for importers, food processors and bulk buyers under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/green-mung" },
  openGraph: { title, description, url: "/green-mung", type: "website" },
};

export default function Page() {
  return <CommodityPage data={greenMungData} />;
}
