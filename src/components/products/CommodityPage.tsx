"use client";

import { MapPin, CheckCircle2 } from "lucide-react";
import ContentHero from "../shared/ContentHero";
import {
  ClosingCTA,
  ImageTextRow,
  PAGE_CONTAINER,
  ProseParagraphs,
  SectionHeading,
  type PageCTA,
} from "../shared/TemplatePageParts";

export interface CommoditySpec {
  label: string;
  /** Omit for a plain parameter list where no fixed value applies. */
  value?: string;
}

/**
 * One content block in client-provided order. Headings and body are rendered
 * exactly as authored — nothing is merged or reordered by the template.
 *
 * Prefer flat fields when the default order (countries → paragraphs → specs →
 * bullets → note) matches the copy. Use `blocks` when the client nests
 * sub-headings that need a custom order (e.g. bullets then specs).
 */
export type CommodityBlock =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "countries"; countries: string[] }
  | { type: "specs"; label?: string; specs: CommoditySpec[] }
  | { type: "bullets"; bullets: string[] }
  | { type: "subheading"; text: string }
  | { type: "note"; note: string };

export interface CommoditySection {
  /** Client ### heading. Omit for opening prose that has no heading. */
  heading?: string;
  /** Ordered body pieces — takes precedence over flat fields when present. */
  blocks?: CommodityBlock[];
  paragraphs?: string[];
  /** Origin / market chips with map pin. */
  countries?: string[];
  /** Spec / parameter table. */
  specs?: CommoditySpec[];
  /** Bullet list (portfolio grades, supply options, benefits, etc.). */
  bullets?: string[];
  /** Small follow-up note under the section body. */
  note?: string;
}

export type CommodityCTA = PageCTA;

export interface CommodityPageData {
  slug: string;
  /** Short parent-section label shown in the hero badge, e.g. "Products". */
  category: string;
  /** H1 — hero shows title only (no description under it). */
  name: string;
  /**
   * One unique image per section, assigned in order. Never reused within the
   * same product page; extra sections beyond the image count render text-only.
   */
  images: string[];
  /** Content blocks in the exact sequence provided by the client. */
  sections: CommoditySection[];
  cta: CommodityCTA;
}

function SpecTable({ specs }: { specs: CommoditySpec[] }) {
  if (specs.length === 0) return null;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-black/8">
      {specs.map((spec, index) => (
        <div
          key={spec.label}
          className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
            index % 2 === 0 ? "bg-[#F7F7F5]" : "bg-white"
          } ${index !== 0 ? "border-t border-black/8" : ""}`}
        >
          <span className="body-medium text-dark">{spec.label}</span>
          {spec.value && <span className="body-medium text-primary">{spec.value}</span>}
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            strokeWidth={2}
          />
          <span className="body-regular text-dark">{item}</span>
        </div>
      ))}
    </div>
  );
}

function SubHeading({ children }: { children: string }) {
  return <p className="mt-6 body-medium text-dark">{children}</p>;
}

function SectionContent({ section }: { section: CommoditySection }) {
  const hasHeading = Boolean(section.heading);

  if (section.blocks && section.blocks.length > 0) {
    return (
      <>
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
        {section.blocks.map((block, index) => {
          const key = `${block.type}-${index}`;
          switch (block.type) {
            case "countries":
              return (
                <div
                  key={key}
                  className={`flex flex-wrap gap-2 ${hasHeading || index > 0 ? "mt-5" : ""}`}
                >
                  {block.countries.map((country) => (
                    <span
                      key={country}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 body-small-medium text-primary"
                    >
                      <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                      {country}
                    </span>
                  ))}
                </div>
              );
            case "paragraphs":
              return (
                <ProseParagraphs
                  key={key}
                  paragraphs={block.paragraphs}
                  className={hasHeading || index > 0 ? undefined : "mt-0"}
                />
              );
            case "bullets":
              return <BulletList key={key} items={block.bullets} />;
            case "subheading":
              return <SubHeading key={key}>{block.text}</SubHeading>;
            case "specs":
              return (
                <div key={key}>
                  {block.label && <SubHeading>{block.label}</SubHeading>}
                  <SpecTable specs={block.specs} />
                </div>
              );
            case "note":
              return (
                <p key={key} className="mt-4 body-small-regular text-gray">
                  {block.note}
                </p>
              );
            default:
              return null;
          }
        })}
      </>
    );
  }

  return (
    <>
      {section.heading && <SectionHeading>{section.heading}</SectionHeading>}

      {section.countries && section.countries.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${hasHeading ? "mt-5" : ""}`}>
          {section.countries.map((country) => (
            <span
              key={country}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 body-small-medium text-primary"
            >
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              {country}
            </span>
          ))}
        </div>
      )}

      {section.paragraphs && section.paragraphs.length > 0 && (
        <ProseParagraphs
          paragraphs={section.paragraphs}
          className={
            hasHeading || (section.countries && section.countries.length > 0)
              ? undefined
              : "mt-0"
          }
        />
      )}

      {section.specs && <SpecTable specs={section.specs} />}
      {section.bullets && <BulletList items={section.bullets} />}

      {section.note && (
        <p className="mt-4 body-small-regular text-gray">{section.note}</p>
      )}
    </>
  );
}

export default function CommodityPage({ data }: { data: CommodityPageData }) {
  const { sections, cta, images, name, category } = data;

  return (
    <div className="mt-20 md:mt-10">
      <div className={PAGE_CONTAINER}>
        {/* Title-only hero — product body copy lives in `sections` below. */}
        <ContentHero breadcrumb={category} title={name} />
      </div>

      <div className={`${PAGE_CONTAINER} py-16 md:py-20`}>
        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((section, index) => {
            const image = index < images.length ? images[index] : undefined;
            const imagePosition: "left" | "right" =
              index % 2 === 0 ? "left" : "right";
            const altLabel = section.heading ?? name;

            return (
              <ImageTextRow
                key={`${section.heading ?? "intro"}-${index}`}
                image={image}
                imageAlt={`${altLabel} — ${name}`}
                imagePosition={imagePosition}
              >
                <SectionContent section={section} />
              </ImageTextRow>
            );
          })}
        </div>
      </div>

      <ClosingCTA cta={cta} />
    </div>
  );
}
