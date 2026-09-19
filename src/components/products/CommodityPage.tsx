"use client";

import { MapPin, Ruler, CheckCircle2 } from "lucide-react";
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

export interface CommoditySpec {
  label: string;
  /** Omit for a plain parameter list where no fixed value applies (e.g. Coal). */
  value?: string;
}

export interface CommodityTextSection {
  heading: string;
  paragraphs: string[];
}

export interface CommoditySpecificationsSection {
  heading: string;
  intro?: string;
  specs: CommoditySpec[];
  followUp?: string;
  sizesLabel?: string;
  sizes?: string[];
  sizesNote?: string;
}

export interface CommodityCapabilitySection extends CommodityTextSection {
  targetIndustries: string[];
}

export type CommodityCTA = PageCTA;

export interface CommodityPageData {
  slug: string;
  /** Short parent-section label shown in the hero breadcrumb, e.g. "Products". */
  category: string;
  /** H1 */
  name: string;
  tagline?: string;
  /** Hero intro paragraph. */
  intro: string;
  /**
   * Gallery images, minimum 3 expected. The hero is text-only (no image);
   * all entries here are cycled round-robin across the 4 alternating
   * image+text content sections (sourcing, specifications, capability,
   * closing), reused once there are more sections than images. Currently
   * populated with verified Unsplash demo URLs — swap in
   * `/images/<slug>/...` local paths once real product photos are
   * supplied, no component changes required.
   */
  images: string[];
  /** Every content section is optional; whichever are present render in this
   * order, alternating image sides and taking images in sequence. */
  sourcing?: {
    heading: string;
    countries: string[];
    paragraphs: string[];
    /** Optional spec/parameter table rendered inside the sourcing section,
     * for commodities whose specs share a section with sourcing (Coal). */
    specs?: CommoditySpec[];
  };
  /** Omit when specs live inside the sourcing section. */
  specifications?: CommoditySpecificationsSection;
  capability?: CommodityCapabilitySection;
  closing?: CommodityTextSection;
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

export default function CommodityPage({ data }: { data: CommodityPageData }) {
  const { specifications, sourcing, capability, closing, cta, images } = data;

  // Hero is text-only — every image is cycled round-robin across the 4
  // alternating content sections below, reused once we run out.
  let sectionIndex = 0;
  const nextSectionImage = (): string | undefined =>
    images.length > 0 ? images[sectionIndex % images.length] : undefined;
  // Called once per rendered section, after its image was picked, so the image
  // and the alternating side stay in step.
  const nextSectionSide = (): "left" | "right" =>
    sectionIndex++ % 2 === 0 ? "left" : "right";

  return (
    <div className="mt-20 md:mt-10">
      {/* Same container as Navbar and the sections below, so the hero's edges
          line up with them. Wraps (rather than overrides) ContentHero's own
          max-w-[1392px] default, which stays untouched for other pages. */}
      <div className={PAGE_CONTAINER}>
        <ContentHero breadcrumb={data.category} title={data.name} description={data.intro} />
      </div>

      <div className={`${PAGE_CONTAINER} py-16 md:py-20`}>
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Sourcing & supply chain scope */}
          {sourcing && (
            <Reveal>
              <ImageTextRow
                image={nextSectionImage()}
                imageAlt={`${sourcing.heading} — ${data.name}`}
                imagePosition={nextSectionSide()}
              >
                <SectionHeading>{sourcing.heading}</SectionHeading>

                {sourcing.countries.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {sourcing.countries.map((country) => (
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

                <ProseParagraphs paragraphs={sourcing.paragraphs} />
                {sourcing.specs && <SpecTable specs={sourcing.specs} />}
              </ImageTextRow>
            </Reveal>
          )}

          {/* Specs & sizes */}
          {specifications && (
            <Reveal>
              <ImageTextRow
                image={nextSectionImage()}
                imageAlt={`${specifications.heading} — ${data.name}`}
                imagePosition={nextSectionSide()}
              >
                <SectionHeading>{specifications.heading}</SectionHeading>
                {specifications.intro && (
                  <p className="mt-5 body-regular text-gray">{specifications.intro}</p>
                )}

                <SpecTable specs={specifications.specs} />

                {specifications.followUp && (
                  <p className="mt-5 body-regular text-gray">{specifications.followUp}</p>
                )}

                {specifications.sizes && specifications.sizes.length > 0 && (
                  <div className="mt-8">
                    <p className="body-medium text-dark">
                      {specifications.sizesLabel ?? "Available sizes:"}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {specifications.sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 body-small-medium text-dark"
                        >
                          <Ruler className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {specifications.sizesNote && (
                  <p className="mt-4 body-small-regular text-gray">{specifications.sizesNote}</p>
                )}
              </ImageTextRow>
            </Reveal>
          )}

          {/* Supply capability & target industries */}
          {capability && (
            <Reveal>
              <ImageTextRow
                image={nextSectionImage()}
                imageAlt={`${capability.heading} — ${data.name}`}
                imagePosition={nextSectionSide()}
              >
                <SectionHeading>{capability.heading}</SectionHeading>
                <ProseParagraphs paragraphs={capability.paragraphs} />

                {capability.targetIndustries.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {capability.targetIndustries.map((industry) => (
                      <div key={industry} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          strokeWidth={2}
                        />
                        <span className="body-regular text-dark">{industry}</span>
                      </div>
                    ))}
                  </div>
                )}
              </ImageTextRow>
            </Reveal>
          )}

          {/* Closing positioning */}
          {closing && (
            <Reveal>
              <ImageTextRow
                image={nextSectionImage()}
                imageAlt={`${closing.heading} — ${data.name}`}
                imagePosition={nextSectionSide()}
              >
                <SectionHeading>{closing.heading}</SectionHeading>
                <ProseParagraphs paragraphs={closing.paragraphs} />
              </ImageTextRow>
            </Reveal>
          )}
        </div>
      </div>

      <ClosingCTA cta={cta} />
    </div>
  );
}
