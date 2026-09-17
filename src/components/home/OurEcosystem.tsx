
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Globe2, Anchor, Warehouse, ShieldCheck } from "lucide-react";
import ProductCard from "../shared/ProductCard";
import ProductCardCompact from "../shared/ProductCardCompact";
import SectionHeader from "../shared/SectionHeader";

const fullWidthProducts = [
  {
    badgeLabel: "Global Sourcing Network",
    icon: <Globe2 size={32} color="#B23FA0" />,
    title: "Bulk Sourcing & Trading",
    description:
      "We connect you with trusted suppliers and quarries worldwide, sourcing construction materials, grains, and feed ingredients to your exact specification.",
    linkText: "Explore our products",
    linkHref: "/clinker",
    image:
      "https://images.unsplash.com/photo-1774946103680-3d34a461a581?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Stacks of sacks and containers in a bulk sourcing warehouse",
    accentColor: "#B23FA0",
    panelColor: "#F7BFE4",
    imageBorderColor: "#FDE9F7",
  },
  {
    badgeLabel: "Shipping & Logistics",
    icon: <Anchor size={32} color="#2455AA" />,
    title: "Vessel Chartering & Ocean Freight",
    description:
      "From Handysize to Panamax, we arrange the right vessel for your cargo — covering major trade routes worldwide.",
    linkText: "See our shipping services",
    linkHref: "/vessel-chartering",
    image:
      "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Aerial view of a cargo ship crossing the ocean",
    accentColor: "#2455AA",
    panelColor: "#A4C4FA",
    imageBorderColor: "#DEE9FF",
  },
];

const compactProducts = [
  {
    badgeLabel: "Port Operations",
    icon: <Warehouse size={32} color="#5B4FCF" />,
    title: "Port Handling & Cargo Management",
    description:
      "We manage loading, discharging, and inland transport, moving your cargo efficiently from port to final destination.",
    linkText: "Talk to our logistics team",
    linkHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Container ship being loaded at a busy port with cranes",
    accentColor: "#5B4FCF",
    panelColor: "#D9D3FF",
    imageBorderColor: "#F0EDFF",
  },
  {
    badgeLabel: "Certified Quality",
    icon: <ShieldCheck size={32} color="#A67C23" />,
    title: "Quality Assurance & Documentation",
    description:
      "Every shipment can be backed by a Certificate of Analysis (COA) and full documentation, so you know exactly what you're getting.",
    linkText: "Request a sample COA",
    linkHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1754039985008-a15410211b67?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Close-up of a hand marking a quality checklist on a notebook",
    accentColor: "#A67C23",
    panelColor: "#FDF0D5",
    imageBorderColor: "#FDF5E4",
  },
];

const TOP_BASE = 20;
const TOP_STEP = 28;
const DESKTOP_BREAKPOINT = 1024;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

function StackCard({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.8,
  });

  const scale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

  if (!isDesktop) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className="sticky scroll-mt-[140px]"
      style={{
        top: `${TOP_BASE + index * TOP_STEP}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div style={{ scale }} className="origin-top rounded-[24px]">
        {children}
      </motion.div>
    </div>
  );
}

export default function OurEcosystem() {
  return (
    <section>
      <div className="mt-20 md:mt-25">
        <div className="px-4 md:px-0">
          <SectionHeader
            title="How We Serve You"
            description="From sourcing to final delivery, we handle every step of your supply chain."
          />
        </div>
      </div>

      <div className="container section-padding !pt-15 flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* Full-width cards: Bulk Sourcing & Trading, Vessel Chartering & Ocean Freight */}
        {fullWidthProducts.map((product, index) => (
          <StackCard key={product.title} index={index}>
            <ProductCard
              badgeLabel={product.badgeLabel}
              icon={product.icon}
              title={product.title}
              description={product.description}
              linkText={product.linkText}
              linkHref={product.linkHref}
              image={product.image}
              imageAlt={product.imageAlt}
              accentColor={product.accentColor}
              panelColor={product.panelColor}
              imageBorderColor={product.imageBorderColor}
            />
          </StackCard>
        ))}

        {/* Compact 2-up row: Port Handling & Cargo Management, Quality Assurance & Documentation */}
        <StackCard index={fullWidthProducts.length}>
          <div className=" sm:gap-8 lg:gap-10 md:px-14 ">
            <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 bg-white" >
              {compactProducts.map((product) => (
              <ProductCardCompact
                key={product.title}
                badgeLabel={product.badgeLabel}
                icon={product.icon}
                title={product.title}
                description={product.description}
                linkText={product.linkText}
                linkHref={product.linkHref}
                image={product.image}
                imageAlt={product.imageAlt}
                accentColor={product.accentColor}
                panelColor={product.panelColor}
                imageBorderColor={product.imageBorderColor}
              />
            ))}
            </div>
          </div>
        </StackCard>
      </div>
    </section>
  );
}
