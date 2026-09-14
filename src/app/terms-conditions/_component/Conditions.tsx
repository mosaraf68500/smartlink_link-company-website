"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------- Content Types & Data ---------------- */

type Section = {
  number: string;
  title: string;
  intro?: string;
  points?: React.ReactNode[];
  outro?: string;
  paragraphs?: string[];
};

const sections: Section[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.",
    ],
  },
  {
    number: "2",
    title: "About Smartlink Systems",
    paragraphs: [
      "Smartlink Systems is a Bangladesh-based shipping, logistics, and commercial trading company, engaged in the sourcing, import, export, and bulk supply of commodities including construction raw materials, grains, animal feed ingredients, and other bulk cargo, as well as international vessel chartering and logistics coordination.",
    ],
  },
  {
    number: "3",
    title: "Our Products & Services",
    paragraphs: [
      "This website describes our sourcing, trading, and logistics services, including but not limited to bulk commodity supply, import/export coordination, vessel chartering, and related supply-chain services. Product availability, specifications, and pricing are subject to change and are confirmed only through direct commercial communication and a formal sales agreement, not through this website.",
    ],
  },
  {
    number: "4",
    title: "Website Use",
    paragraphs: [
      "You agree to use this website only for lawful purposes and to provide accurate information when submitting an inquiry or contact form. You must not use this website in any way that could damage, disable, or impair it, or interfere with any other party's use of it.",
    ],
  },
  {
    number: "5",
    title: "Inquiries & Quotations",
    paragraphs: [
      "Submitting an inquiry or quotation request through this website does not constitute a binding order or contract. All commercial terms — including price, quantity, specification, payment terms, and delivery schedule — are agreed separately in writing (e.g., a Proforma Invoice, Sales Contract, or Letter of Credit terms) between Smartlink Systems and the buyer.",
    ],
  },
  {
    number: "6",
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, images, logos, and graphics, is the property of Smartlink Systems or its licensors and may not be reproduced, distributed, or used without prior written permission.",
    ],
  },
  {
    number: "7",
    title: "Third-Party Services & Links",
    paragraphs: [
      "This website may contain links to third-party websites. Smartlink Systems is not responsible for the content, accuracy, or practices of any third-party website.",
    ],
  },
  {
    number: "8",
    title: "Service Availability",
    paragraphs: [
      "We aim to keep this website available and accurate but do not guarantee uninterrupted access and may update, suspend, or modify content at any time without notice.",
    ],
  },
  {
    number: "9",
    title: "Limitation of Liability",
    paragraphs: [
      "This website is provided for informational purposes. Smartlink Systems shall not be liable for any indirect, incidental, or consequential loss arising from the use of this website. Liability relating to actual commodity trade transactions is governed exclusively by the terms of the individual sales contract entered into between Smartlink Systems and the buyer.",
    ],
  },
  {
    number: "10",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    number: "11",
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions are governed by the laws of the People's Republic of Bangladesh.",
    ],
  },
  {
    number: "12",
    title: "Contact Us",
    intro:
      "If you have any questions about these Terms & Conditions, our products, or our services, please contact us.",
  },
];

/* ---------------- Animation Wrapper ---------------- */

const Reveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
};

/* ---------------- Main Component ---------------- */

const Conditions = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-4 lg:px-0 mt-6 sm:mt-[60px] md:mt-[80px] font-jakarta">
        {/* Main Header / Intro */}
        <Reveal>
          <p className="title-regular text-[#595959] leading-relaxed text-sm sm:text-base md:text-lg">
            <span className="title-large-medium text-[#112420] font-semibold">
              Welcome to Smartlink Systems.
            </span>{" "}
            These Terms &amp; Conditions govern your access to and use of the
            Smartlink Systems website, products, services, and related
            solutions. By accessing or using our website or services, you
            agree to be bound by these Terms.
          </p>
        </Reveal>

        {/* Sections */}
        <div className="mt-8 flex flex-col gap-8 sm:mt-12 sm:gap-10 md:gap-12">
          {sections.map((s) => (
            <Reveal key={s.number}>
              <h2 className="font-bricolage h5 text-[#112420] ">
                {s.number}. {s.title}
              </h2>

              <div className="privacy-body mt-2 sm:mt-3 body-regular font-jakarta text-[#595959] space-y-3">
                {/* Section intro paragraph */}
                {s.intro && (
                  <p className="whitespace-pre-line">{s.intro}</p>
                )}

                {/* Sub-intro sentence right before list */}
                {s.outro && <p>{s.outro}</p>}

                {/* Bullet List */}
                {s.points && s.points.length > 0 && (
                  <ul>
                    {s.points.map((point, i) => (
                      <li key={`${s.number}-${i}`}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Additional body paragraphs */}
                {s.paragraphs &&
                  s.paragraphs.map((para, idx) => (
                    <p key={`para-${s.number}-${idx}`}>{para}</p>
                  ))}
              </div>

              {s.number === "11" && (
                <>{/* TODO: confirm jurisdiction/court details with a lawyer before launch */}</>
              )}

              {/* Section 12 Contact Details Block */}
              {s.number === "12" && (
                <div className="mt-4 sm:mt-6 ml-0 sm:ml-4 md:ml-8 font-jakarta text-[#626262] body-regular space-y-1 sm:space-y-1.5 text-sm sm:text-base break-words">
                  <p className="title-large-medium text-[#112420] ">
                    Smartlink Systems
                  </p>
                  <p>DIVINE FLOX, House: 543, Apt-B3, Road: 08, DOHS, Mirpur-1216, Bangladesh</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@smartlinksystemsbd.com"
                      className="underline underline-offset-2 hover:text-[#E85528] transition-colors"
                    >
                      info@smartlinksystemsbd.com
                    </a>{" "}
                    |{" "}
                    <a
                      href="mailto:sales@smartlinksystemsbd.com"
                      className="underline underline-offset-2 hover:text-[#E85528] transition-colors"
                    >
                      sales@smartlinksystemsbd.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+8801677136584"
                      className="hover:text-[#E85528] transition-colors"
                    >
                      +8801677136584
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:+8801846216225"
                      className="hover:text-[#E85528] transition-colors"
                    >
                      +8801846216225
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:+8801737136022"
                      className="hover:text-[#E85528] transition-colors"
                    >
                      +8801737136022
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://smartlinksystemsbd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-[#E85528] transition-colors"
                    >
                      smartlinksystemsbd.com
                    </a>
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .privacy-body ul {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .privacy-body li {
          position: relative;
          padding-left: 1.25rem;
        }
        .privacy-body li::before {
          content: "•";
          position: absolute;
          left: 0.25rem;
          color: #595959;
        }
        .privacy-body p + ul {
          margin-top: 0.35rem;
        }
      `}</style>
    </div>
  );
};

export default Conditions;