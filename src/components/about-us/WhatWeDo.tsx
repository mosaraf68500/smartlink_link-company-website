import Link from "next/link";
import { Anchor, Bird, Factory, Sprout, Wheat, type LucideIcon } from "lucide-react";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import { PAGE_CONTAINER } from "../shared/pageContainer";

interface WhatWeDoCard {
  icon: LucideIcon;
  title: string;
  description: string;
  /** No category-level pages exist, so each card links to the category's
   * first product page (or the service page). */
  href: string;
  accentColor: string;
  panelColor: string;
}

// Colors reuse the accent/panel pairs from the home "How We Serve You" cards.
const cards: WhatWeDoCard[] = [
  {
    icon: Factory,
    title: "Cementious & RMC Raw Item",
    description:
      "Clinker, Limestone, and Gabbro Aggregate for RMC plants, cement industries, and construction projects.",
    href: "/clinker",
    accentColor: "#B23FA0",
    panelColor: "#F7BFE4",
  },
  {
    icon: Wheat,
    title: "Grain Commodities",
    description: "Wheat, Lentils, Pulses, and more, sourced from trusted global markets.",
    href: "/wheat-supplier-importer-bangladesh",
    accentColor: "#A67C23",
    panelColor: "#FDF0D5",
  },
  {
    icon: Bird,
    title: "Animal Feed Additives",
    description:
      "Quality feed ingredients for poultry, dairy, and livestock producers.",
    href: "/wheat-bran",
    accentColor: "#5B4FCF",
    panelColor: "#D9D3FF",
  },
  {
    icon: Sprout,
    title: "Season Crops",
    description: "Cotton and seasonal crop sourcing for Bangladesh's industries.",
    href: "/cotton",
    accentColor: "#1DA05D",
    panelColor: "#D3FEE8",
  },
  {
    icon: Anchor,
    title: "Shipping & Logistics",
    description:
      "International bulk vessel chartering and end-to-end logistics coordination.",
    href: "/vessel-chartering",
    accentColor: "#2455AA",
    panelColor: "#A4C4FA",
  },
];

export default function WhatWeDo() {
  return (
    <section className={`${PAGE_CONTAINER} py-16 md:py-20`}>
      <h2 className="h1 font-bricolage text-[#112420]">What We Do</h2>

      {/* 6-column grid: first row of three cards (2 cols each), second row of two (3 cols each). */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative flex flex-col gap-3 overflow-hidden rounded-t-md bg-white p-6 sm:p-7 lg:p-9 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${index === cards.length - 1 ? "sm:col-span-2" : ""}`}
              style={{
                boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2"
                style={{ backgroundColor: card.panelColor }}
              />

              <div className="flex items-center gap-3">
                <Icon size={32} color={card.accentColor} className="shrink-0" aria-hidden="true" />
                <h3 className="title-large-medium text-dark">{card.title}</h3>
                <span
                  className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                  style={{ color: card.accentColor }}
                >
                  <ArrowUpRightIcon size={20} />
                </span>
              </div>

              <p className="body-regular text-gray">{card.description}</p>

              <span
                className="body-regular mt-2 font-medium"
                style={{ color: card.accentColor }}
              >
                Learn more
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
