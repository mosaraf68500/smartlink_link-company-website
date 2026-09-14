
// import Image from "next/image";
// import { ReactNode } from "react";
// import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

// function hexToRgba(hex: string, alpha: number) {
//   const clean = hex.replace("#", "");
//   const bigint = parseInt(
//     clean.length === 3
//       ? clean
//           .split("")
//           .map((c) => c + c)
//           .join("")
//       : clean,
//     16,
//   );
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }

// export interface ProductCardProps {
//   badgeLabel: string; // e.g. "Agency CRM"
//   icon: ReactNode; // e.g. <SyncBariIcon size={32} />
//   title: string; // e.g. "SyncBari"
//   description: string;
//   linkText: string;
//   linkHref?: string;
//   image: string; // dashboard screenshot src
//   imageAlt?: string;
//   accentColor: string; // badge border/text, link color e.g. "#F74608"
//   panelColor: string; // bleed bg behind image e.g. "#DFCCFF"
//   imageBorderColor: string; // image container border color e.g. "#F4ECFF"
// }

// export default function ProductCard({
//   badgeLabel,
//   icon,
//   title,
//   description,
//   linkText,
//   linkHref = "#",
//   image,
//   imageAlt,
//   accentColor,
//   panelColor,
//   imageBorderColor,
// }: ProductCardProps) {
//   return (
//     <div
//       className="group relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 overflow-hidden rounded-t-md bg-white px-4 pt-6 sm:gap-10 sm:px-6 sm:pt-8 lg:gap-[60px] lg:px-10 lg:pt-10"
//       style={{
//         boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
//       }}
//     >
//       {/* full-bleed color panel, anchored to bottom, ignores side padding */}
//       <div
//         className="absolute -left-4 -right-4 bottom-0 sm:-left-6 sm:-right-6 lg:-left-10 lg:-right-10"
//         style={{ height: "min(40%, 338px)" }}
//       >
//         <div
//           className="h-full w-full"
//           style={{ backgroundColor: panelColor }}
//         />
//       </div>

//       {/* Header */}
//       <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <span
//             className="body-small-medium mb-4 inline-block rounded-full border px-4 py-1.5"
//             style={{
//               borderColor: hexToRgba(accentColor, 0.16),
//               color: accentColor,
//             }}
//           >
//             {badgeLabel}
//           </span>
//           <div className="flex items-center gap-3">
//             <span className="flex-shrink-0">{icon}</span>
//             <h3 className="title-large-medium text-secondary">{title}</h3>
//             {/* Arrow icon: same icon on every card, shown on hover */}
//             <span
//               className="flex-shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
//               style={{ color: accentColor }}
//             >
//               <ArrowUpRightIcon size={20} />
//             </span>
//           </div>
//         </div>

//         <div className="max-w-md sm:text-left">
//           <p className="body-regular text-gray mb-2">{description}</p>
//           <a
//             href={linkHref}
//             className="body-regular font-medium"
//             style={{ color: accentColor }}
//           >
//             {linkText}
//           </a>
//         </div>
//       </div>

//       {/* Image container - aspect-ratio instead of fixed height, so it
//           scales correctly on small screens instead of forcing a fixed
//           450px height while width shrinks */}
//       <div
//         className="relative mx-auto w-full overflow-hidden border-[6px] !border-b-0 lg:border-[10px]"
//         style={{
//           maxWidth: 1000,
//           aspectRatio: "1000 / 450",
//           borderColor: imageBorderColor,
//           backgroundColor: "#FEFCF9",
//           boxSizing: "border-box",
//         }}
//       >
//         <div className="relative h-full w-full">
//           <Image
//             src={image}
//             alt={imageAlt ?? title}
//             fill
//             sizes="(max-width: 1024px) 100vw, 1000px"
//             className="object-cover object-top"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
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

function isExternalLink(href: string) {
  return /^https?:\/\//i.test(href);
}

export interface ProductCardProps {
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

export default function ProductCard({
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
}: ProductCardProps) {
  const external = isExternalLink(linkHref);

  return (
    <Link
      href={linkHref}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 overflow-hidden rounded-t-md bg-white px-4 pt-6 sm:gap-10 sm:px-6 sm:pt-8 lg:gap-[60px] lg:px-10 lg:pt-10 block cursor-pointer"
      style={{
        boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
      }}
    >
      {/* full-bleed color panel, anchored to bottom, ignores side padding */}
      <div
        className="absolute -left-4 -right-4 bottom-0 sm:-left-6 sm:-right-6 lg:-left-10 lg:-right-10"
        style={{ height: "min(40%, 338px)" }}
      >
        <div
          className="h-full w-full"
          style={{ backgroundColor: panelColor }}
        />
      </div>

      {/* Header */}
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span
            className="body-small-medium mb-4 inline-block rounded-full border px-4 py-1.5"
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
            <span
              className="flex-shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              style={{ color: accentColor }}
            >
              <ArrowUpRightIcon size={20} />
            </span>
          </div>
        </div>

        <div className="max-w-md sm:text-left">
          <p className="body-regular text-gray mb-2">{description}</p>
          <span
            className="body-regular font-medium inline-block"
            style={{ color: accentColor }}
          >
            {linkText}
          </span>
        </div>
      </div>

      {/* Image container */}
      <div
        className="relative mx-auto w-full overflow-hidden border-[6px] !border-b-0 lg:border-[10px]"
        style={{
          maxWidth: 1000,
          aspectRatio: "1000 / 450",
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
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
}