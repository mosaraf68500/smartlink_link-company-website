"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import ContentHero from "../shared/ContentHero";
import {
  ImageTextRow,
  PAGE_CONTAINER,
  ProseParagraphs,
  Reveal,
  SectionHeading,
} from "../shared/TemplatePageParts";

/**
 * Template B — capability-based service page (SMARTLINK_PROJECT.md §5).
 * Hero → sections pairing an image with heading + content blocks,
 * alternating sides. Shares hero alignment, container width, and 50/50
 * image split with CommodityPage via TemplatePageParts.
 */

export interface ServiceChip {
  label: string;
  /** When set, the chip links to that page; otherwise it is plain text. */
  href?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export type ServiceBlock =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "chips"; items: ServiceChip[]; variant?: "region" | "plain" }
  | { type: "checklist"; items: string[] }
  | { type: "features"; items: ServiceFeature[] }
  | { type: "subheading"; text: string };

export interface ServiceSection {
  heading: string;
  blocks: ServiceBlock[];
  /**
   * Full-width body (no side image). Use for dense value-prop / feature
   * sections that need room to read.
   */
  layout?: "split" | "full";
}

export interface ServicePageData {
  slug: string;
  /** Short parent-section label shown in the hero breadcrumb, e.g. "Services". */
  category: string;
  /** H1 */
  name: string;
  tagline?: string;
  /** Optional support line under the tagline in the hero. */
  description?: string;
  /** Gallery images — one unique image per section (no cycling/repeats). */
  images: string[];
  /** Sections after the hero. */
  sections: ServiceSection[];
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
    case "features":
      return (
        <div className="mt-6 flex flex-col gap-5">
          {block.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                strokeWidth={2}
              />
              <div className="min-w-0">
                <p className="body-small-medium text-dark">{item.title}</p>
                <p className="mt-1 body-regular text-gray [text-wrap:pretty]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    case "subheading":
      return <p className="mt-8 title-large-medium text-dark">{block.text}</p>;
  }
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const { sections, images } = data;

  return (
    <div className="mt-20 md:mt-10">
      {/* Same container as Navbar and the sections below, so the hero's edges
          line up with them. */}
      <div className={PAGE_CONTAINER}>
        <ContentHero
          breadcrumb={data.category}
          title={data.name}
          subtitle={data.tagline}
          description={data.description}
        />
      </div>

      <div className={`${PAGE_CONTAINER} py-16 md:py-20`}>
        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((section, index) => (
            <Reveal key={section.heading}>
              <ImageTextRow
                image={section.layout === "full" ? undefined : images[index]}
                imageAlt={`${section.heading} — ${data.name}`}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              >
                <SectionHeading>{section.heading}</SectionHeading>
                {section.blocks.map((block, blockIndex) => (
                  <SectionBlock key={blockIndex} block={block} />
                ))}
              </ImageTextRow>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
