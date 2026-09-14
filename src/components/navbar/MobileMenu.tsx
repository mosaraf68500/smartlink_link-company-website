"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { type NavItem, type NavLinkGroup } from "./NavDropdown";
import { ArrowRight } from "../icons/ArrowRight";

interface MobileMenuProps {
  navItems: NavItem[];
  serviceGroups: NavLinkGroup[];
  productGroups: NavLinkGroup[];
}

export default function MobileMenu({
  navItems,
  serviceGroups,
  productGroups,
}: MobileMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleResize() {
      // 1024px matches the lg breakpoint where the desktop nav takes over
      // (see Navbar.tsx's lg:flex/lg:hidden switch) — keeping this in sync
      // avoids a dead zone where neither menu is visible.
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Exact match for "/" or nested path checks
  function isPathActive(href?: string) {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Active check for parent category dropdowns
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

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((v) => !v)}
        className="flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-50 lg:hidden shrink-0 ml-auto"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu Panel */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-md transition-[max-height] duration-300 ease-in-out lg:hidden z-50 ${
          mobileOpen
            ? "max-h-[80vh] border-t border-gray-100"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-4 py-3">
          {navItems.map((item) => {
            const active = item.type
              ? isDropdownActive(item)
              : isPathActive(item.href);

            return (
              <div
                key={item.label}
                className="border-b border-gray-50 last:border-none"
              >
                {item.type ? (
                  <>
                    <div className="flex w-full items-center justify-between py-3">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        aria-current={active ? "page" : undefined}
                        className={`text-[15px] transition-colors ${
                          active
                            ? "text-primary font-semibold"
                            : "text-gray-700 font-medium"
                        }`}
                      >
                        {item.label}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="p-1"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                        mobileExpanded === item.label
                          ? "max-h-[999px]"
                          : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-4 pb-3 pl-2">
                        {(item.type === "service"
                          ? serviceGroups
                          : productGroups
                        ).map((group) => (
                          <div key={group.title} className="flex flex-col gap-1">
                            <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                              {group.title}
                            </p>
                            {group.items.map((sub) => {
                              const subActive = isPathActive(sub.href);
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileExpanded(null);
                                  }}
                                  aria-current={subActive ? "page" : undefined}
                                  className={`rounded-md px-2 py-2 text-sm transition-colors ${
                                    subActive
                                      ? "bg-primary/8 font-medium text-primary"
                                      : "text-gray-700 hover:bg-gray-50"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-[15px] transition-colors ${
                      active
                        ? "text-primary font-semibold"
                        : "text-gray-700 font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
            <PrimaryButton className="group relative z-0 bg-cta-dark h-[47px] text-white title-regular w-full flex items-center justify-center pl-6 pr-10 overflow-hidden transition-all duration-300">
              <span>Schedule a Call</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}