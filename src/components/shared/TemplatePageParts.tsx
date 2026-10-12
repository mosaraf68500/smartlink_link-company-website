"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PAGE_CONTAINER } from "./pageContainer";

/**
 * Building blocks shared by the CommodityPage and ServicePage templates, so
 * both keep identical reveal animation, headings, prose, image+text rows and
 * closing CTA.
 */

export { PAGE_CONTAINER };

export function Reveal({
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

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-bricolage h5 text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}

export function ProseParagraphs({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 body-regular text-gray ${className ?? "mt-5"}`}
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-left [text-wrap:pretty] md:text-justify md:[text-align-last:left]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/** Pairs a section's heading+content with an image, alternating sides. Falls
 * back to a plain full-width column when no image is available for it. */
export function ImageTextRow({
  image,
  imageAlt,
  imagePosition,
  imageClassName,
  children,
}: {
  image?: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  /** Extra classes on the filled image (e.g. object-top). */
  imageClassName?: string;
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (!image) {
    return (
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  const fromX = imagePosition === "left" ? -28 : 28;

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14 ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F7F7F5] md:w-1/2"
        initial={
          prefersReducedMotion ? undefined : { opacity: 0, x: fromX, scale: 0.98 }
        }
        whileInView={
          prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }
        }
        viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </motion.div>
      <motion.div
        className="min-w-0 w-full md:w-1/2"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export interface PageCTA {
  text: string;
  buttonLabel: string;
  buttonHref: string;
}

export function ClosingCTA({ cta }: { cta: PageCTA }) {
  return (
    <Reveal className={`${PAGE_CONTAINER} pb-16 md:pb-20`}>
      <div className="flex flex-col items-start gap-6 rounded-[32px] bg-complementary px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
        <p className="title-regular max-w-xl text-white">{cta.text}</p>
        <Link href={cta.buttonHref} className="shrink-0">
          <button className="cursor-pointer rounded-[6px] bg-white px-8 py-3 title-regular text-dark transition-transform duration-200 hover:scale-[1.02]">
            {cta.buttonLabel}
          </button>
        </Link>
      </div>
    </Reveal>
  );
}
