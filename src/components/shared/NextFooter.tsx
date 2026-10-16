import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";
import PrimaryButton from "../ui/PrimaryButton";
import { offices } from "../contact/officesData";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.4"
      y="0.4"
      width="31.2"
      height="31.2"
      rx="15.6"
      stroke="#E5E7EB"
      strokeWidth="0.8"
    />
    <path
      d="M19.8941 8.8034L17.7303 8.80078C15.632 8.80078 14.2765 10.191 14.2765 12.345V13.978H12.1055V16.9331H14.2765L14.2739 23.2H17.3114L17.3141 16.9331H19.8051L19.8032 13.9786H17.3141V12.593C17.3141 11.9267 17.4718 11.5896 18.339 11.5896L19.8876 11.589L19.8941 8.8034Z"
      fill="black"
    />
  </svg>
);

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

const productLinks = [
  { label: "Cementitious & RMC", href: "/clinker" },
  { label: "Grain Commodities", href: "/wheat-supplier-importer-bangladesh" },
  { label: "Animal Feed Additives", href: "/wheat-bran" },
  { label: "Season Crops", href: "/cotton" },
];

const legalLinks = [
  { label: "Order & Delivery Policy", href: "/order-delivery-claims-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const socials = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/smartlinkfan",
  },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h4 className="body-medium mb-4 text-[#112420]">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="body-regular whitespace-nowrap text-[#626262] transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const NextFooter = () => {
  return (
    <footer className="bg-white">
      {/* Top: brand + link columns */}
      <div className="container section-padding !pb-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="w-full max-w-[320px]">
            <Image
              src={logo}
              alt="Smartlink Systems"
              width={441}
              height={98}
              className="h-auto w-[240px]"
            />
            <Link href="/contact" className="mt-6 inline-block">
              <PrimaryButton>Contact Us</PrimaryButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-12">
            <FooterLinkColumn title="Company" links={companyLinks} />
            <FooterLinkColumn title="Product" links={productLinks} />
            <FooterLinkColumn title="Legal" links={legalLinks} />
          </div>
        </div>
      </div>

      {/* Offices — full-bleed bg, same container alignment as content above */}
      <div className="border-t border-[#F3E8E2] bg-[#FEF7F4]">
        <div className="container px-4 py-10 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {offices.map((office) => (
              <div
                key={`${office.country}-${office.label}`}
                className="flex gap-3"
              >
                <span className="relative mt-0.5 h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={office.flag}
                    alt={`${office.country} flag`}
                    fill
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <h5 className="title-large-medium mb-1.5 text-[#112420]">
                    {office.label}
                  </h5>
                  <p className="body-small-regular text-[#112420]">
                    {office.address}
                  </p>
                  {office.phones && office.phones.length > 0 ? (
                    <p className="body-small-regular mt-1.5 text-[#112420]">
                      Phone: {office.phones.join(", ")}
                    </p>
                  ) : null}
                  {office.hotlines && office.hotlines.length > 0 ? (
                    <p className="body-small-regular mt-1.5 text-[#112420]">
                      Hotline: {office.hotlines.join(", ")}
                    </p>
                  ) : null}
                  {office.landline ? (
                    <p className="body-small-regular mt-1.5 text-[#112420]">
                      Landline: {office.landline}
                    </p>
                  ) : null}
                  {office.emails[0] ? (
                    <p className="body-small-regular mt-1.5 text-[#112420] [overflow-wrap:anywhere]">
                      {office.emails[0]}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5E7EB]">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-0">
          <p className="text-sm text-gray-500">
            © 2026 <span className="text-primary">Smartlink Systems</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-opacity hover:opacity-80"
              >
                <Icon width={40} height={40} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NextFooter;
