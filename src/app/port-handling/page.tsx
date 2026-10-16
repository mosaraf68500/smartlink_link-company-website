import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { portHandlingData } from "@/src/components/services/data/portHandling";

const title = "Port & Jetty Material Handling | Smartlink Systems";
const description =
  "Smartlink Systems provides port and jetty material handling through its BIWTA-licensed jetty in Rupganj — bulk cargo handling, inland waterway logistics, and integrated road transportation across Bangladesh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "port jetty material handling",
    "BIWTA jetty Rupganj",
    "bulk cargo handling Bangladesh",
    "inland waterway jetty",
    "aggregates sand clinker handling",
    "jetty logistics Bangladesh",
  ],
  alternates: { canonical: "/port-handling" },
  openGraph: { title, description, url: "/port-handling", type: "website" },
};

export default function Page() {
  return <ServicePage data={portHandlingData} />;
}
