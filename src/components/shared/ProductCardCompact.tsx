import Image from "next/image";

import { ReactNode } from "react";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean,
    16,
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export interface ProductCardCompactProps {
  badgeLabel: string;
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  image: string;
  imageAlt?: string;
  accentColor: string;
  panelColor: string;
  imageBorderColor: string;
}

export default function ProductCardCompact({
  badgeLabel,
  icon,
  title,
  description,
  linkText,
  linkHref = "#",
  image,
  imageAlt,
  accentColor,
  panelColor,
  imageBorderColor,
}: ProductCardCompactProps) {
  return (
    <div
      className="group relative flex h-full w-full flex-col gap-8 overflow-hidden rounded-t-md bg-white px-5 pt-5 sm:gap-10 sm:px-7 sm:pt-7 lg:gap-12 lg:px-9 lg:pt-9"
      style={{
        boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
      }}
    >
      {/* full-bleed color panel, anchored to bottom, ignores side padding */}
      <div
        className="absolute -left-5 -right-5 bottom-0 sm:-left-7 sm:-right-7 lg:-left-9 lg:-right-9"
        style={{ height: "min(35%, 240px)" }}
      >
        <div
          className="h-full w-full"
          style={{ backgroundColor: panelColor }}
        />
      </div>

      {/* Header */}
      <div className="relative flex flex-1 flex-col gap-2">
        <span
          className="body-small-medium mb-2 inline-block w-fit rounded-full border px-4 py-1.5"
          style={{
            borderColor: hexToRgba(accentColor, 0.16),
            color: accentColor,
          }}
        >
          {badgeLabel}
        </span>

        <div className="flex items-center gap-3">
          <span className="flex-shrink-0">{icon}</span>
          <h3 className="title-large-medium text-secondary">{title}</h3>
          {/* Arrow icon: same icon on every card, shown on hover */}
          <span
            className="flex-shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            style={{ color: accentColor }}
          >
            <ArrowUpRightIcon size={20} />
          </span>
        </div>

        <p className="body-regular text-gray">{description}</p>

        <a
          href={linkHref}
          className="body-regular font-medium"
          style={{ color: accentColor }}
        >
          {linkText}
        </a>
      </div>

      {/* Image container - matches reference code behavior with top/left/right border only */}
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          aspectRatio: "508 / 260",
          borderStyle: "solid",
          borderWidth: "8px 8px 0px 8px",
          borderColor: imageBorderColor,
          backgroundColor: "#FEFCF9",
          boxSizing: "border-box",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 100vw, 580px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}


