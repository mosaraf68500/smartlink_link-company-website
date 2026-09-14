"use client";

import React, { useState } from "react";
import { Phone, Mail, Plus, X } from "lucide-react";

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1097_5774)">
        <path
          d="M30.0075 0H29.9925C13.4513 0 0 13.455 0 30C0 36.5625 2.115 42.645 5.71125 47.5838L1.9725 58.7288L13.5037 55.0425C18.2475 58.185 23.9062 60 30.0075 60C46.5487 60 60 46.5412 60 30C60 13.4588 46.5487 0 30.0075 0Z"
          fill="#4CAF50"
        />
        <path
          d="M47.4641 42.3637C46.7403 44.4074 43.8678 46.1024 41.5766 46.5974C40.0091 46.9312 37.9616 47.1974 31.0691 44.3399C22.2528 40.6874 16.5753 31.7287 16.1328 31.1474C15.7091 30.5662 12.5703 26.4037 12.5703 22.0987C12.5703 17.7937 14.7566 15.6974 15.6378 14.7974C16.3616 14.0587 17.5578 13.7212 18.7053 13.7212C19.0766 13.7212 19.4103 13.7399 19.7103 13.7549C20.5916 13.7924 21.0341 13.8449 21.6153 15.2362C22.3391 16.9799 24.1016 21.2849 24.3116 21.7274C24.5253 22.1699 24.7391 22.7699 24.4391 23.3512C24.1578 23.9512 23.9103 24.2174 23.4678 24.7274C23.0253 25.2374 22.6053 25.6274 22.1628 26.1749C21.7578 26.6512 21.3003 27.1612 21.8103 28.0424C22.3203 28.9049 24.0828 31.7812 26.6778 34.0912C30.0266 37.0724 32.7416 38.0249 33.7128 38.4299C34.4366 38.7299 35.2991 38.6587 35.8278 38.0962C36.4991 37.3724 37.3278 36.1724 38.1716 34.9912C38.7716 34.1437 39.5291 34.0387 40.3241 34.3387C41.1341 34.6199 45.4203 36.7387 46.3016 37.1774C47.1828 37.6199 47.7641 37.8299 47.9778 38.2012C48.1878 38.5724 48.1878 40.3162 47.4641 42.3637Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1097_5774">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GmailAppIcon({ size = 20 }) {
  return (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="white"/>
<path d="M48.4834 19.8235C48.4834 16.6792 44.9268 14.8843 42.4363 16.7686L40.0808 18.553V18.5582L29.9986 26.1902L19.9163 18.553L17.5661 16.7735C15.0703 14.8892 11.5137 16.6844 11.5137 19.8283V23.2193V41.4543C11.5137 42.8609 12.6418 44 14.0356 44H19.9163V29.5812L29.9986 37.2132L40.0808 29.5812V29.576L40.0925 29.5671L40.0808 29.5812V44H45.9615C47.3549 44 48.4834 42.8609 48.4834 41.4543V23.2197L48.4681 23.2257L48.4834 23.2144V19.8235Z" fill="#B5332A"/>
<path d="M14.0356 44.0001H19.9163V29.5813L11.5137 23.2197V41.4547C11.5137 42.861 12.6418 44.0001 14.0356 44.0001Z" fill="#4E85EB"/>
<path d="M40.082 44.0001H45.9627C47.3561 44.0001 48.4847 42.861 48.4847 41.4543V23.2197L40.082 29.5813V44.0001Z" fill="#58A45C"/>
<path d="M40.082 18.553V29.576L48.4847 23.2144V19.8235C48.4847 16.6792 44.9281 14.8843 42.4375 16.7686L40.082 18.553Z" fill="#F2BC42"/>
<path d="M19.918 29.5809V18.5527L30.0002 26.19L40.0824 18.558V29.5809L30.0002 37.213L19.918 29.5809Z" fill="#D85040"/>
<path d="M11.5137 19.829V23.22L19.9163 29.5815V18.5533L17.5661 16.7738C15.0703 14.8898 11.5137 16.6847 11.5137 19.829Z" fill="#B5332A"/>
</svg>

  );
}
const GMAIL_ADDRESS = "info@smartlinksystemsbd.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}`;

const contactButtons = [
  {
    label: "Call Now",
    href: "tel:+8801677136584",
    icon: Phone,
    bg: "bg-primary",
    text: "text-white",
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801677136584",
    icon: WhatsAppIcon,
    bg: "bg-emerald-600",
    text: "text-white",
    external: true,
  },
  {
    label: "Send Message",
    // Opens Gmail's compose window directly in a new tab, with the
    // "to" field already filled in with info@smartlinksystemsbd.com.
    href: GMAIL_COMPOSE_URL,
    icon: GmailAppIcon,
    bg: "bg-white",
    text: "text-primary",
    external: true,
  },
];

export default function StickyContactBar() {
  // Only drives the mobile toggle-open behaviour. On desktop (sm+) all
  // three buttons are always shown regardless of this state.
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes contact-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes contact-ping {
          0% { transform: scale(1); opacity: 0.45; }
          80%, 100% { transform: scale(1.9); opacity: 0; }
        }
        .contact-float {
          animation: contact-float 2.6s ease-in-out infinite;
        }
        .contact-ping {
          animation: contact-ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Mobile looks noisy/jumpy with the float + pulse — keep it
           calm on small screens, only animate from sm (640px) up. */
        @media (max-width: 639px) {
          .contact-float,
          .contact-ping {
            animation: none;
          }
        }
      `}</style>

      <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col-reverse items-end gap-4 sm:right-6 sm:flex-col">
        {/* Mobile-only toggle button — opens/closes the 3 options below.
            Hidden entirely on sm+ where options are always visible. */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close contact options" : "Open contact options"}
          aria-expanded={open}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-transform duration-200 ease-out active:scale-95 sm:hidden"
          style={{ boxShadow: "0px 6px 20px 0px #0000002A" }}
        >
          <span
            className="transition-transform duration-200 ease-out"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            {open ? (
              <X size={20} strokeWidth={2.25} />
            ) : (
              <Plus size={20} strokeWidth={2.25} />
            )}
          </span>
        </button>

        {/* The 3 contact options. On mobile: hidden unless `open` is
            true, and each one pops in with a staggered scale/fade. On
            sm+: always shown, ignoring the `open` state entirely. */}
        <div
          className={`flex-col-reverse items-end gap-4 sm:flex sm:flex-col ${
            open ? "flex" : "hidden"
          }`}
        >
          {contactButtons.map(
            ({ label, href, icon: Icon, bg, text }, index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="contact-float group relative flex h-12 w-12 items-center justify-center transition-all duration-200 ease-out"
                style={{
                  animationDelay: `${index * 0.3}s`,
                  transitionDelay: open ? `${index * 60}ms` : "0ms",
                }}
              >
                {/* Pulsing ring behind the circle — desktop only via the
                  media query above */}
                <span
                  className={`contact-ping absolute inset-0 rounded-full ${bg}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                />

                {/* Actual circle button */}
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full ${bg} ${text} transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95`}
                  style={{
                    boxShadow: "0px 6px 20px 0px #0000002A",
                  }}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </span>

                {/* Label pill that slides out on hover — desktop only */}
                <span className="body-small-medium pointer-events-none absolute right-full mr-3 hidden -translate-x-2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-secondary opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                  {label}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </>
  );
}
