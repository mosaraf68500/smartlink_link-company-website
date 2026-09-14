
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SyncBariIcon from "../icons/SyncBariIcon";
import SiteBariIcon from "../icons/SiteBariIcon";
import MetaBariIcon from "../icons/MetaBariIcon";
import MailBariIcon from "../icons/MailBariIcon";
import ProductCard from "../shared/ProductCard";
import ProductCardCompact from "../shared/ProductCardCompact";
import SectionHeader from "../shared/SectionHeader";

const fullWidthProducts = [
  {
    badgeLabel: "Agency CRM",
    icon: <SyncBariIcon size={32} />,
    title: "SyncBari",
    description:
      " Keep all your customers, orders and payments in one place. No more Excel files and paper notebooks.",
    linkText: "For development, design and marketing studios.",
    linkHref: "https://syncbari.com/",
    image: "/products/syncbari.png",
    accentColor: "#7947cd",
    panelColor: "#DFCCFF",
    imageBorderColor: "#F4ECFF",
    showArrow: true,
  },
  {
    badgeLabel: "No-Code Website Builder",
    icon: <SiteBariIcon size={32} />,
    title: "SiteBari",
    description:
      "Make your business website without any coding. We manage the hosting and updates for you.",
    linkText: "For Small Businesses & Client Management.",
    linkHref: "https://sitebari.com/",
    image: "/products/sitebari.png",
    accentColor: "#2455AA",
    panelColor: "#A4C4FA",
    imageBorderColor: "#DEE9FF",
  },
];

const compactProducts = [
  {
    badgeLabel: "Ad Management Platform",
    icon: <MetaBariIcon size={32} />,
    title: "MetaBari",
    description:
      "Manage ad accounts, client payments and billing in one place. Made for agencies who run ads for other businesses.",
    linkText:
      "For agencies renting ad accounts on Meta, Google TikTok & LinkedIn.",
    linkHref: "https://metabari.com/",
    image: "/products/metabari.png",
    accentColor: "#C93798",
    panelColor: "#FBD4EE",
    imageBorderColor: "#FBE2F3",
  },
  {
    badgeLabel: "Business Mail",
    icon: <MailBariIcon size={32} />,
    title: "MailBari",
    description:
      "Get email with your own business name, like you@yourshop.com. Your emails reach the inbox, not the spam folder.",
    linkText: "For any business running email on its own domain.",
    linkHref: "https://mailbari.com/",
    image: "/products/mailbari.png",
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
            title="One Ecosystem. Infinite Opportunities."
            description="From business communication to customer management, websites, and advertising—our products work together to power every stage of your growth."
          />
        </div>
      </div>

      <div className="container section-padding !pt-15 flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* Full-width cards: SyncBari, SiteBari */}
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
              accentColor={product.accentColor}
              panelColor={product.panelColor}
              imageBorderColor={product.imageBorderColor}
            />
          </StackCard>
        ))}

        {/* Compact 2-up row: MetaBari, MailBari */}
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
