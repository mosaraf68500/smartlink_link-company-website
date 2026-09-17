"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import PrimaryButton from "../ui/PrimaryButton";
import NavDropdown, { NavItem, NavLinkGroup } from "../navbar/NavDropdown";
import MobileMenu from "../navbar/MobileMenu";
import { ArrowRight } from "../icons/ArrowRight";

const productGroups: NavLinkGroup[] = [
  {
    title: "Cementious & RMC Raw Item",
    items: [
      { label: "Clinker", href: "/clinker" },
      { label: "Limestone", href: "/limestone" },
      { label: "Gabbro Aggregate", href: "/gabbro-aggregate" },
      { label: "Coal", href: "/coal" },
    ],
  },
  {
    title: "Grain Commodities",
    items: [
      { label: "Wheat", href: "/wheat-supplier-importer-bangladesh" },
      { label: "Lentils", href: "/lentils" },
      { label: "Pulses", href: "/pulses" },
      { label: "Soyabean Seeds", href: "/soyabean-seeds" },
      { label: "Canola Seeds", href: "/canola-seeds" },
      { label: "Green Mung", href: "/green-mung" },
    ],
  },
  {
    title: "Animal Feed Additives",
    items: [
      { label: "Wheat Bran", href: "/wheat-bran" },
      { label: "Corn DDGS", href: "/corn-ddgs" },
      { label: "Soyabean Meal", href: "/soyabean-meal" },
      { label: "Poultry Meal", href: "/poultry-meal" },
      { label: "Rapeseed Meal", href: "/rapeseed-meal" },
    ],
  },
  {
    title: "Season Crops",
    items: [{ label: "Cotton", href: "/cotton" }],
  },
];

const serviceGroups: NavLinkGroup[] = [
  {
    title: "Shipping & Logistics",
    items: [
      { label: "International Bulk Vessel Chartering", href: "/vessel-chartering" },
    ],
  },
];

const navItems: NavItem[] = [
  { label: "Products", type: "product" },
  { label: "Services", type: "service" },
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => { const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto container flex items-center justify-between py-4 px-4 sm:px-6 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="Smartlink Systems"
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        {/* Desktop & Laptop Menu */}
        <div className="hidden items-center gap-4 lg:gap-8 lg:flex">
          <NavDropdown
            navItems={navItems}
            serviceGroups={serviceGroups}
            productGroups={productGroups}
          />
          <a
            href="https://wa.me/8801677136584?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton className="group relative z-0 bg-cta-dark h-[47px] text-white title-regular shrink-0 flex items-center justify-center gap-2 pl-6 pr-10 overflow-hidden transition-all duration-300 cursor-pointer">
              <span>Contact us</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </PrimaryButton>
          </a>
        </div>

        {/* Mobile & Tablet Menu */}
        <div className="flex lg:hidden">
          <MobileMenu
            navItems={navItems}
            serviceGroups={serviceGroups}
            productGroups={productGroups}
          />
        </div>
      </div>
    </div>
  );
}
