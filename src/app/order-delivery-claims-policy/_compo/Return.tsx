"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------- Content Types & Data ---------------- */

type Section = {
  number: string;
  title: string;
  intro?: string;
  outro?: string;
  points?: React.ReactNode[];
  paragraphs?: string[];
};

const sections: Section[] = [
  {
    number: "1",
    title: "Nature of Our Transactions",
    paragraphs: [
      "Smartlink Systems supplies bulk commodities under individually negotiated sales contracts. Each transaction's terms — including price, quantity, specification, delivery, and payment — are governed by that specific contract, not by this website.",
    ],
  },
  {
    number: "2",
    title: "Non-Returnable Nature of Bulk Commodities",
    paragraphs: [
      "Due to the nature of bulk commodity trade (e.g., quantity, shipping method, and perishability/handling considerations), goods delivered in accordance with the agreed contract specification are generally not eligible for return.",
    ],
  },
  {
    number: "3",
    title: "Quality Claims & Discrepancies",
    paragraphs: [
      "If delivered goods do not conform to the agreed specification (as verified by an agreed Certificate of Analysis, lab report, or inspection method), the buyer should raise a claim in writing within the timeframe specified in the sales contract, along with supporting documentation (e.g., inspection report, photos, lab results).",
    ],
  },
  {
    number: "4",
    title: "Delivery & Shipment Issues",
    paragraphs: [
      "Any concerns regarding delivery timing, quantity discrepancies, or shipment condition should be reported promptly, ideally at the point of receiving/unloading, with supporting documentation.",
    ],
  },
  {
    number: "5",
    title: "How to Raise a Claim",
    paragraphs: [
      "Contact our team at sales@smartlinksystemsbd.com or the phone numbers listed below with your order/contract reference, a description of the issue, and any supporting documentation.",
    ],
  },
  {
    number: "6",
    title: "Claim Review Process",
    paragraphs: [
      "We will review submitted claims against the agreed contract terms and applicable documentation, and respond with our findings and proposed resolution within a reasonable timeframe.",
    ],
  },
  {
    number: "7",
    title: "Third-Party Services",
    paragraphs: [
      "Certain aspects of our service (such as vessel chartering, port handling, or inland transport) may depend on third-party logistics providers, shipping lines, or other external service providers.",
      "We cannot guarantee outcomes for issues caused solely by third-party delays, decisions, or service interruptions outside our control.",
      "Any claim involving a third-party service will be reviewed based on the specific circumstances and the applicable contract terms.",
    ],
  },
  {
    number: "8",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time to reflect changes in our services, business practices, or applicable requirements.",
      "Any updates will be published on this page with a revised effective date.",
    ],
  },
  {
    number: "9",
    title: "Governing Contract Terms",
    paragraphs: [
      "In the event of any conflict between this policy and the terms of an individual sales contract, the sales contract governs.",
    ],
  },
  {
    number: "10",
    title: "Contact Us",
    intro:
      "If you have any questions about this policy, our products, or our services, please contact us.",
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

const Return = () => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-6 sm:px-4 lg:px-0 mt-6 sm:mt-[60px] md:mt-[80px] font-jakarta">
        {/* Main Header / Intro */}
        <Reveal>
          <p className="title-regular text-[#595959] ">
            <span className="title-large-medium text-[#112420] ">
              Welcome to Smartlink Systems.
            </span>{" "}
            Smartlink Systems supplies bulk commodities and logistics
            services under individually negotiated sales contracts. This
            policy explains how we handle delivery issues, quality claims,
            and related matters for orders placed with us.
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
                {/* Intro text */}
                {s.intro && <p>{s.intro}</p>}

                {/* Sub-intro text right before list */}
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
                  s.paragraphs.map((para, idx) => {
                    // Custom formatting for Section 5 (How to Raise a Claim) email link
                    if (s.number === "5") {
                      return (
                        <p key={`para-${s.number}-${idx}`}>
                          Contact our team at{" "}
                          <a
                            href="mailto:sales@smartlinksystemsbd.com"
                            className="text-[#E85528] underline underline-offset-2 hover:opacity-80 transition-opacity"
                          >
                            sales@smartlinksystemsbd.com
                          </a>{" "}
                          or the phone numbers listed below with your
                          order/contract reference, a description of the
                          issue, and any supporting documentation.
                        </p>
                      );
                    }

                    return <p key={`para-${s.number}-${idx}`}>{para}</p>;
                  })}
              </div>

              {/* Section 10 Contact Details Block */}
              {s.number === "10" && (
                <div className="mt-4 sm:mt-6 ml-0 sm:ml-4 md:ml-8 font-jakarta text-[#626262] body-regular space-y-1 sm:space-y-1.5">
                  <p className="title-large-medium text-[#112420] font-semibold">
                    Smartlink Systems
                  </p>
                  <p>DIVINE FLOX, House: 543, Apt-B3, Road: 08, DOHS, Mirpur-1216, Bangladesh</p>
                  <p>
                    Email:{" "}
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

export default Return;
