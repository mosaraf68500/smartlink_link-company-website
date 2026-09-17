"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Ruler, CheckCircle2 } from "lucide-react";
import ContentHero from "../shared/ContentHero";

export interface CommoditySpec {
  label: string;
  value: string;
}

export interface CommodityTextSection {
  heading: string;
  paragraphs: string[];
}

export interface CommoditySpecificationsSection {
  heading: string;
  intro: string;
  specs: CommoditySpec[];
  followUp?: string;
  sizesLabel?: string;
  sizes: string[];
  sizesNote?: string;
}

export interface CommodityCapabilitySection extends CommodityTextSection {
  targetIndustries: string[];
}

export interface CommodityCTA {
  text: string;
  buttonLabel: string;
  buttonHref: string;
}

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
  sourcing: {
    heading: string;
    countries: string[];
    paragraphs: string[];
  };
  specifications: CommoditySpecificationsSection;
  capability: CommodityCapabilitySection;
  closing: CommodityTextSection;
  cta: CommodityCTA;
}

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-bricolage h5 text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}

function ProseParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-5 flex flex-col gap-4 body-regular text-gray">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

/** Pairs a section's heading+content with an image, alternating sides. Falls
 * back to a plain full-width column when no image is available for it. */
function ImageTextRow({
  image,
  imageAlt,
  imagePosition,
  children,
}: {
  image?: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  children: ReactNode;
}) {
  if (!image) {
    return <div>{children}</div>;
  }

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14 ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F7F7F5] md:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 w-full md:w-1/2">{children}</div>
    </div>
  );
}

export default function CommodityPage({ data }: { data: CommodityPageData }) {
  const { specifications, sourcing, capability, closing, cta, images } = data;

  // Hero is text-only — every image is cycled round-robin across the 4
  // alternating content sections below, reused once we run out.
  const imageForSection = (index: number): string | undefined =>
    images.length > 0 ? images[index % images.length] : undefined;

  return (
    <div className="mt-20 md:mt-10">
      <ContentHero breadcrumb={data.category} title={data.name} description={data.intro} />

      <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-0">
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Sourcing & supply chain scope */}
          <Reveal>
            <ImageTextRow
              image={imageForSection(0)}
              imageAlt={`${sourcing.heading} — ${data.name}`}
              imagePosition="left"
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
            </ImageTextRow>
          </Reveal>

          {/* Specs & sizes */}
          <Reveal>
            <ImageTextRow
              image={imageForSection(1)}
              imageAlt={`${specifications.heading} — ${data.name}`}
              imagePosition="right"
            >
              <SectionHeading>{specifications.heading}</SectionHeading>
              <p className="mt-5 body-regular text-gray">{specifications.intro}</p>

              {specifications.specs.length > 0 && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-black/8">
                  {specifications.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                        index % 2 === 0 ? "bg-[#F7F7F5]" : "bg-white"
                      } ${index !== 0 ? "border-t border-black/8" : ""}`}
                    >
                      <span className="body-medium text-dark">{spec.label}</span>
                      <span className="body-medium text-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {specifications.followUp && (
                <p className="mt-5 body-regular text-gray">{specifications.followUp}</p>
              )}

              {specifications.sizes.length > 0 && (
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

          {/* Supply capability & target industries */}
          <Reveal>
            <ImageTextRow
              image={imageForSection(2)}
              imageAlt={`${capability.heading} — ${data.name}`}
              imagePosition="left"
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

          {/* Closing positioning */}
          <Reveal>
            <ImageTextRow
              image={imageForSection(3)}
              imageAlt={`${closing.heading} — ${data.name}`}
              imagePosition="right"
            >
              <SectionHeading>{closing.heading}</SectionHeading>
              <ProseParagraphs paragraphs={closing.paragraphs} />
            </ImageTextRow>
          </Reveal>
        </div>
      </div>

      {/* Closing CTA */}
      <Reveal className="container mx-auto px-4 pb-16 sm:px-6 md:pb-20 lg:px-0">
        <div className="flex flex-col items-start gap-6 rounded-[32px] bg-complementary px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
          <p className="title-regular max-w-xl text-white">{cta.text}</p>
          <Link href={cta.buttonHref} className="shrink-0">
            <button className="cursor-pointer rounded-[6px] bg-white px-8 py-3 title-regular text-dark transition-transform duration-200 hover:scale-[1.02]">
              {cta.buttonLabel}
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
