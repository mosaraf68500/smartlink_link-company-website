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

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.1934 11.6096C21.7668 11.7636 22.2204 12.2172 22.3744 12.7906C22.6568 13.8346 22.6654 15.9998 22.6654 15.9998C22.6654 15.9998 22.6654 18.1735 22.383 19.209C22.2289 19.7824 21.7753 20.236 21.202 20.3901C20.1664 20.6725 15.9987 20.6725 15.9987 20.6725C15.9987 20.6725 11.831 20.6725 10.7954 20.3901C10.2221 20.236 9.76849 19.7824 9.61444 19.209C9.33203 18.165 9.33203 15.9998 9.33203 15.9998C9.33203 15.9998 9.33203 13.8346 9.60589 12.7991C9.75993 12.2257 10.2135 11.7722 10.7869 11.6181C11.8224 11.3357 15.9901 11.3271 15.9901 11.3271C15.9901 11.3271 20.1579 11.3271 21.1934 11.6096ZM18.1211 15.9998L14.6637 18.0024V13.9972L18.1211 15.9998Z"
      fill="black"
    />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#clip0_footer_linkedin)">
      <path
        d="M11.5328 13.1318H8.41406V24.0004H11.5328V13.1318Z"
        fill="black"
      />
      <path
        d="M9.90625 8.00098C8.75625 8.00098 8 8.81085 8 9.88613C8 10.941 8.73125 11.7713 9.8625 11.7713H9.8875C11.0625 11.7713 11.7938 10.9342 11.7875 9.88613C11.7625 8.81085 11.0562 8.00098 9.90625 8.00098Z"
        fill="black"
      />
      <path
        d="M20.0484 13.0293C18.2609 13.0293 17.1422 14.091 16.9359 14.8396V13.1314H13.4297C13.4734 14.0365 13.4297 23.9999 13.4297 23.9999H16.9359V18.1267C16.9359 17.7932 16.9234 17.4666 17.0109 17.2352C17.2484 16.5818 17.7672 15.9013 18.6984 15.9013C19.9172 15.9013 20.4672 16.9085 20.4672 18.3785V23.9999H24.0047V17.9566C24.0047 14.5946 22.2672 13.0293 20.0484 13.0293Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_footer_linkedin">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(8 8.00098)"
        />
      </clipPath>
    </defs>
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

// TODO: no confirmed Smartlink Systems social media accounts yet — links
// disabled (href="#") rather than pointing at the old AdsFixter accounts.
const socials = [
  { icon: FacebookIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: Youtube, href: "#" },
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
                  {office.hotlines && office.hotlines.length > 0 ? (
                    <p className="body-small-regular mt-1.5 text-[#112420]">
                      Hotline: {office.hotlines.join(", ")}
                    </p>
                  ) : null}
                  {office.landline ? (
                    <p className="body-small-regular mt-1.5 text-[#112420]">
                      Phone: {office.landline}
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
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition-colors"
              >
                <Icon width={16} height={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NextFooter;
