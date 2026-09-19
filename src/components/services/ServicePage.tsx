"use client";

import Link from "next/link";
import {
  Anchor,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  MapPin,
  Package,
  Ship,
  type LucideIcon,
} from "lucide-react";
import ContentHero from "../shared/ContentHero";
import {
  ClosingCTA,
  ImageTextRow,
  PAGE_CONTAINER,
  ProseParagraphs,
  Reveal,
  SectionHeading,
  type PageCTA,
} from "../shared/TemplatePageParts";

/**
 * Template B — capability-based service page (SMARTLINK_PROJECT.md §5).
 * Hero → icon-marked sections, each pairing an image with heading + content
 * blocks, alternating sides → closing CTA. Shares hero alignment, container
 * width, 50/50 image split and CTA with CommodityPage via TemplatePageParts.
 */

/** Icons are referenced by name because page data is plain, serializable data
 * passed from server pages into this client component. Add entries here to
 * make more icons available to service pages. */
const SERVICE_ICONS = {
  ship: Ship,
  anchor: Anchor,
  globe: Globe,
  package: Package,
} satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export interface ServiceChip {
  label: string;
  /** When set, the chip links to that page; otherwise it is plain text. */
  href?: string;
}

export type ServiceBlock =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "chips"; items: ServiceChip[]; variant?: "region" | "plain" }
  | { type: "checklist"; items: string[] };

export interface ServiceSection {
  icon: ServiceIconName;
  heading: string;
  blocks: ServiceBlock[];
}

export interface ServicePageData {
  slug: string;
  /** Short parent-section label shown in the hero breadcrumb, e.g. "Services". */
  category: string;
  /** H1 */
  name: string;
  tagline?: string;
  /** Hero intro; separate paragraphs with a blank line. */
  intro: string;
  /** Gallery images cycled round-robin across the sections (hero is text-only). */
  images: string[];
  /** Sections after the hero; the last one is treated as the closing section. */
  sections: ServiceSection[];
  cta: PageCTA;
}

const chipBase =
  "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 body-small-medium";

function ServiceChipItem({
  chip,
  variant,
}: {
  chip: ServiceChip;
  variant: "region" | "plain";
}) {
  const tone =
    variant === "region"
      ? "border-primary/20 bg-primary/5 text-primary"
      : "border-black/10 bg-white text-dark";
  const content = (
    <>
      {variant === "region" && <MapPin className="h-3.5 w-3.5" strokeWidth={2} />}
      {chip.label}
      {chip.href && <ArrowUpRight className="h-3.5 w-3.5 text-primary" strokeWidth={2} />}
    </>
  );

  if (chip.href) {
    return (
      <Link
        href={chip.href}
        className={`${chipBase} ${tone} transition-colors duration-200 hover:border-primary hover:text-primary`}
      >
        {content}
      </Link>
    );
  }

  return <span className={`${chipBase} ${tone}`}>{content}</span>;
}

function SectionBlock({ block }: { block: ServiceBlock }) {
  switch (block.type) {
    case "paragraphs":
      return <ProseParagraphs paragraphs={block.paragraphs} />;
    case "chips":
      return (
        <div className="mt-5 flex flex-wrap gap-2">
          {block.items.map((chip) => (
            <ServiceChipItem
              key={chip.label}
              chip={chip}
              variant={block.variant ?? "plain"}
            />
          ))}
        </div>
      );
    case "checklist":
      return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
              <span className="body-regular text-dark">{item}</span>
            </div>
          ))}
        </div>
      );
  }
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const { sections, cta, images } = data;

  const imageForSection = (index: number): string | undefined =>
    images.length > 0 ? images[index % images.length] : undefined;

  return (
    <div className="mt-20 md:mt-10">
      {/* Same container as Navbar and the sections below, so the hero's edges
          line up with them. */}
      <div className={PAGE_CONTAINER}>
        <ContentHero
          breadcrumb={data.category}
          title={data.name}
          subtitle={data.tagline}
          description={data.intro}
        />
      </div>

      <div className={`${PAGE_CONTAINER} py-16 md:py-20`}>
        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((section, index) => {
            const Icon = SERVICE_ICONS[section.icon];

            return (
              <Reveal key={section.heading}>
                <ImageTextRow
                  image={imageForSection(index)}
                  imageAlt={`${section.heading} — ${data.name}`}
                  imagePosition={index % 2 === 0 ? "left" : "right"}
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <SectionHeading>{section.heading}</SectionHeading>
                  {section.blocks.map((block, blockIndex) => (
                    <SectionBlock key={blockIndex} block={block} />
                  ))}
                </ImageTextRow>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ClosingCTA cta={cta} />
    </div>
  );
}
