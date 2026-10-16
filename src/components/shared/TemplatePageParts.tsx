"use client";

import { ReactNode, useEffect, useState } from "react";
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

const FADE_OFFSET = 32;
const EASE = [0.22, 1, 0.36, 1] as const;

/** Shared across all product/service reveal blocks. */
const scrollDirection = { current: "down" as "up" | "down" };
let scrollListenerCount = 0;
let lastScrollY = 0;

function onWindowScroll() {
  const y = window.scrollY;
  if (y > lastScrollY + 2) scrollDirection.current = "down";
  else if (y < lastScrollY - 2) scrollDirection.current = "up";
  lastScrollY = y;
}

function useScrollDirectionTracking() {
  useEffect(() => {
    if (scrollListenerCount === 0) {
      lastScrollY = window.scrollY;
      window.addEventListener("scroll", onWindowScroll, { passive: true });
    }
    scrollListenerCount += 1;
    return () => {
      scrollListenerCount -= 1;
      if (scrollListenerCount === 0) {
        window.removeEventListener("scroll", onWindowScroll);
      }
    };
  }, []);
}

/**
 * Fade in from below when scrolling down, from above when scrolling up.
 * Replays each time the block re-enters the viewport.
 */
function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  useScrollDirectionTracking();
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(FADE_OFFSET);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={
        visible ? { opacity: 1, y: 0 } : { opacity: 0, y: offsetY }
      }
      transition={{ duration, delay, ease: EASE }}
      onViewportEnter={() => {
        // Scroll down → rise from below; scroll up → drop from above.
        setOffsetY(
          scrollDirection.current === "down" ? FADE_OFFSET : -FADE_OFFSET,
        );
        setVisible(true);
      }}
      onViewportLeave={() => {
        // Exit in the direction of travel.
        setOffsetY(
          scrollDirection.current === "down" ? -FADE_OFFSET : FADE_OFFSET,
        );
        setVisible(false);
      }}
      viewport={{ once: false, amount: 0.2, margin: "-40px 0px -40px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ScrollReveal className={className}>{children}</ScrollReveal>;
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
  if (!image) {
    return <ScrollReveal>{children}</ScrollReveal>;
  }

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14 ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <ScrollReveal
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F7F7F5] md:w-1/2"
        duration={0.55}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </ScrollReveal>
      <ScrollReveal className="min-w-0 w-full md:w-1/2" delay={0.08}>
        {children}
      </ScrollReveal>
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
