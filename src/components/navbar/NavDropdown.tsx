

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronDown } from "lucide-react";
// import { ListRow, type SimpleDropdownItem } from "./ListRow";
// import { TestimonialPane, type Stat } from "./TestimonialPane";
// import millon from "../../../public/images/millon.svg";
// import monir from "../../../public/images/monir.svg";

// const HAIRLINE = "#00000014";

// export type NavItem = {
//   label: string;
//   href?: string;
//   type?: "resources" | "service" | "product";
// };

// interface NavDropdownProps {
//   navItems: NavItem[];
//   resourcesColumns: SimpleDropdownItem[][];
//   serviceItems: SimpleDropdownItem[];
//   productItems: SimpleDropdownItem[];
//   serviceStats: Stat[];
// }

// export default function NavDropdown({
//   navItems,
//   resourcesColumns,
//   serviceItems,
//   productItems,
//   serviceStats,
// }: NavDropdownProps) {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const navRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Exact match for "/" so it doesn't stay active on every route,
//   // startsWith for everything else so nested/child routes still
//   // count as active (e.g. /blog/my-post highlights "Blog").
//   function isPathActive(href?: string) {
//     if (!href) return false;
//     if (href === "/") return pathname === "/";
//     return pathname === href || pathname.startsWith(`${href}/`);
//   }

//   // A dropdown trigger (Resources/Service/Product) is "active" if the
//   // current route matches the item's own href, OR any of the links
//   // inside its panel.
//   function isDropdownActive(item: NavItem) {
//     if (isPathActive(item.href)) return true;

//     if (item.type === "resources") {
//       return resourcesColumns.some((col) =>
//         col.some((it) => isPathActive(it.href))
//       );
//     }
//     if (item.type === "service") {
//       return serviceItems.some((it) => isPathActive(it.href));
//     }
//     if (item.type === "product") {
//       return productItems.some((it) => isPathActive(it.href));
//     }
//     return false;
//   }

//   function renderDesktopPanel(item: NavItem) {
//     if (item.type === "resources") {
//       return (
//         <div className="absolute right-0 top-full z-50 mt-3 w-[520px] max-w-[90vw]">
//           <div
//             className="rounded-lg bg-white p-4 shadow-lg"
//             style={{ border: `1px solid ${HAIRLINE}` }}
//           >
//             <div className="grid grid-cols-2 gap-5">
//               {resourcesColumns.map((col, i) => (
//                 <div
//                   key={i}
//                   className={`flex flex-col gap-1 ${i > 0 ? "pl-5" : ""}`}
//                   style={
//                     i > 0 ? { borderLeft: `1px solid ${HAIRLINE}` } : undefined
//                   }
//                 >
//                   {col.map((it) => (
//                     <ListRow
//                       key={it.label}
//                       item={it}
//                       active={isPathActive(it.href)}
//                       onClick={() => setOpenDropdown(null)}
//                     />
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (item.type === "service" || item.type === "product") {
//       const items = item.type === "service" ? serviceItems : productItems;
//       const testimonial =
//         item.type === "service"
//           ? {
//               quote:
//                 "We don't just build software—we build solutions businesses trust.",
//               name: "Md. Moniruzzaman",
//               role: "Head of Engineering",
//               avatar: monir,
//               ctaLabel: "Ready to Turn Your Ideas Into Reality?",
//               ctaText: "Book a Free Consultation",
//               stats: serviceStats,
//             }
//           : {
//               quote:
//                 "Great software isn't just built. It's built around real business problems.",
//               name: "Milon Hossain",
//               role: "CEO & Founder",
//               avatar: millon,
//               ctaLabel: "Can't find the perfect product?",
//               ctaText: "Book a call",
//               stats: undefined,
//             };

//       return (
//         <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2">
//           <div
//             className="flex gap-5 rounded-lg bg-white p-4 shadow-lg"
//             style={{ border: `1px solid ${HAIRLINE}` }}
//           >
//             <div className="flex w-72 flex-col">
//               <div className="flex flex-col gap-1">
//                 {items.map((it) => (
//                   <ListRow
//                     key={it.label}
//                     item={it}
//                     active={isPathActive(it.href)}
//                     onClick={() => setOpenDropdown(null)}
//                   />
//                 ))}
//               </div>
//             </div>
//             <TestimonialPane {...testimonial} />
//           </div>
//         </div>
//       );
//     }

//     return null;
//   }

//   return (
//     <div ref={navRef} className="flex items-center gap-6">
//       {navItems.map((item) => {
//         const active = item.type ? isDropdownActive(item) : isPathActive(item.href);

//         return (
//           <div key={item.label} className="relative">
//             {item.type === "product" ? (
//               <div
//                 className={`flex items-center gap-0.5 title-regular transition-colors ${
//                   active ? "text-primary font-semibold" : "text-[#112420]"
//                 }`}
//               >
//                 <Link
//                   href={item.href ?? "/products"}
//                   onClick={() => setOpenDropdown(null)}
//                   className="hover:text-black transition-colors"
//                   aria-current={active ? "page" : undefined}
//                 >
//                   {item.label}
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setOpenDropdown(
//                       openDropdown === item.label ? null : item.label
//                     );
//                   }}
//                   className="p-1 hover:bg-gray-100 rounded-md transition-colors"
//                   aria-label="Toggle Products dropdown"
//                 >
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${
//                       openDropdown === item.label ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {openDropdown === item.label && renderDesktopPanel(item)}
//               </div>
//             ) : item.type ? (
//               /* Services & Resources: Normal behavior */
//               <>
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setOpenDropdown(
//                       openDropdown === item.label ? null : item.label
//                     )
//                   }
//                   aria-current={active ? "page" : undefined}
//                   className={`flex items-center gap-1 title-regular cursor-pointer transition-colors ${
//                     active ? "text-primary font-semibold" : "text-[#112420]"
//                   }`}
//                 >
//                   {item.label}
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${
//                       openDropdown === item.label ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {openDropdown === item.label && renderDesktopPanel(item)}
//               </>
//             ) : (
//               /* Normal Links */
//               <Link
//                 href={item.href ?? "#"}
//                 aria-current={active ? "page" : undefined}
//                 className={`title-regular transition-colors ${
//                   active ? "text-primary font-semibold" : "text-[#112420]"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }



"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const HAIRLINE = "#00000014";

export type NavLinkItem = {
  label: string;
  href: string;
};

export type NavLinkGroup = {
  title: string;
  items: NavLinkItem[];
};

export type NavItem = {
  label: string;
  href?: string;
  type?: "service" | "product";
};

interface NavDropdownProps {
  navItems: NavItem[];
  serviceGroups: NavLinkGroup[];
  productGroups: NavLinkGroup[];
}

export default function NavDropdown({
  navItems,
  serviceGroups,
  productGroups,
}: NavDropdownProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Hover Handlers
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function isPathActive(href?: string) {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function isDropdownActive(item: NavItem) {
    if (isPathActive(item.href)) return true;

    if (item.type === "service") {
      return serviceGroups.some((g) => g.items.some((it) => isPathActive(it.href)));
    }
    if (item.type === "product") {
      return productGroups.some((g) => g.items.some((it) => isPathActive(it.href)));
    }
    return false;
  }

  function renderDesktopPanel(item: NavItem) {
    if (item.type === "service" || item.type === "product") {
      const groups = item.type === "service" ? serviceGroups : productGroups;

      return (
        <div
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex max-w-[92vw] gap-8 overflow-x-auto rounded-lg bg-white p-5 shadow-lg"
            style={{ border: `1px solid ${HAIRLINE}` }}
          >
            {groups.map((group) => (
              <div key={group.title} className="flex min-w-[170px] flex-col gap-2">
                <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  {group.title}
                </p>
                <div className="flex flex-col gap-0.5">
                  {group.items.map((link) => {
                    const linkActive = isPathActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        aria-current={linkActive ? "page" : undefined}
                        className={`whitespace-nowrap rounded-md px-2 py-1.5 text-sm transition-colors ${
                          linkActive
                            ? "bg-primary/8 font-medium text-primary"
                            : "text-[#2C1107] hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  }

  return (
    <div ref={navRef} className="flex items-center gap-6">
      {navItems.map((item) => {
        const active = item.type ? isDropdownActive(item) : isPathActive(item.href);

        return (
          <div
            key={item.label}
            className="relative py-2"
            onMouseEnter={() => item.type && handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            {item.type ? (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-1 title-regular cursor-pointer whitespace-nowrap transition-colors ${
                    active ? "text-primary font-semibold" : "text-[#112420]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.label && renderDesktopPanel(item)}
              </>
            ) : (
              /* Normal Links */
              <Link
                href={item.href ?? "#"}
                aria-current={active ? "page" : undefined}
                className={`title-regular whitespace-nowrap transition-colors ${
                  active ? "text-primary font-semibold" : "text-[#112420]"
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}