"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------- Content ---------------- */

type Section = {
  number: string;
  title: string;
  intro?: string;
  points: React.ReactNode[];
};

const sections: Section[] = [
  {
    number: "1",
    title: "Introduction",
    points: [
      <>
        This Privacy Policy explains how Smartlink Systems collects, uses,
        and protects information submitted through this website.
      </>,
    ],
  },
  {
    number: "2",
    title: "Information We Collect",
    points: [
      <>
        When you submit an inquiry through our contact form, we may collect:
        your name, WhatsApp/phone number, email address, the product or
        commodity you&apos;re interested in, and your message. We do not
        collect payment information through this website.
      </>,
    ],
  },
  {
    number: "3",
    title: "How We Use Your Information",
    points: [
      <>
        We use the information you provide to respond to your inquiry,
        prepare quotations, and communicate with you about potential or
        ongoing business. We do not sell or rent your information to
        third parties.
      </>,
    ],
  },
  {
    number: "4",
    title: "How We Share Your Information",
    points: [
      <>
        We do not share your personal information with third parties except
        where necessary to fulfill a business inquiry (e.g., logistics
        partners for an active order) or where required by law.
      </>,
    ],
  },
  {
    number: "5",
    title: "Data Security",
    points: [
      <>
        We take reasonable technical and organizational measures to protect
        the information you submit, but no method of electronic
        transmission or storage is 100% secure.
      </>,
    ],
  },
  {
    number: "6",
    title: "Your Rights & Choices",
    points: [
      <>
        You may contact us at any time to request access to, correction of,
        or deletion of the information you&apos;ve submitted to us.
      </>,
    ],
  },
  {
    number: "7",
    title: "Cookies & Tracking Technologies",
    points: [
      <>
        This website may use basic cookies or analytics tools to understand
        website usage and improve user experience.
      </>,
    ],
  },
  {
    number: "8",
    title: "Third-Party Services",
    points: [
      <>
        Our services may contain links to third-party websites. We are not
        responsible for the privacy practices of those sites.
      </>,
      <>We encourage you to review their policies.</>,
    ],
  },
  {
    number: "9",
    title: "Data Retention",
    points: [
      <>
        We retain inquiry information for as long as reasonably necessary to
        respond to your request and maintain business records.
      </>,
    ],
  },
  {
    number: "10",
    title: "Children's Privacy",
    points: [
      <>Our services are not intended for children under 13.</>,
      <>
        We do not knowingly collect personal information from children under
        13.
      </>,
    ],
  },
  {
    number: "11",
    title: "Changes To This Policy",
    points: [
      <>
        We may update this Privacy Policy from time to time. The updated
        version will be posted on this page.
      </>,
    ],
  },
  {
    number: "12",
    title: "Contact Us",
    intro:
      "If you have any questions about these Privacy Policy, our products, or our services, please contact us.",
    points: [],
  },
];

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

/* ---------------- Main component ---------------- */

const Privacy = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-4 lg:px-0 mt-6 sm:mt-[60px] md:mt-[80px] font-jakarta">
        {/* Intro */}
        <Reveal>
          <p className="title-regular text-[#595959] leading-relaxed text-sm sm:text-base md:text-lg">
            <span className="title-large-medium text-[#112420]">
              Welcome to Smartlink Systems.
            </span>{" "}
            This Privacy Policy governs your access to and use of the
            Smartlink Systems website, products, services, and related
            solutions. By accessing or using our website or services, you
            agree to be bound by these Terms.
          </p>
        </Reveal>

        {/* Sections */}
        <div className="mt-8 flex flex-col gap-8 sm:mt-12 sm:gap-10 md:gap-12">
          {sections.map((s) => (
            <Reveal key={s.number}>
              <h2 className="font-bricolage h5 text-[#112420] text-lg sm:text-xl md:text-2xl font-bold">
                {s.number}. {s.title}
              </h2>

              <div className="privacy-body mt-2 sm:mt-3 body-regular font-jakarta text-[#595959]">
                {s.intro && (
                  <p className="mb-3 sm:mb-4 md:mb-6">{s.intro}</p>
                )}

                {s.points.length > 0 && (
                  <ul>
                    {s.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Contact Block */}
              {s.number === "12" && (
                <div className="mt-4 sm:mt-6 ml-0 sm:ml-4 md:ml-8 font-jakarta text-[#626262] body-regular space-y-1 sm:space-y-1.5 text-sm sm:text-base break-words">
                  <p className="title-large-medium text-[#112420] font-semibold">
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
        .privacy-body li span {
          font-weight: 600;
          color: #112420;
        }
        .privacy-body p + ul {
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Privacy;