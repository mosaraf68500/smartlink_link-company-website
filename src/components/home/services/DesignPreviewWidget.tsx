"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DesignPrev } from "./ServiceIcon";

const TAGS = ["Website Design", "Brand Design", "Packaging Design", "Logo Design"];
const HIGHLIGHT_INTERVAL_MS = 1400;

export const DesignPreviewWidget = () => {
  // Auto-cycling "spotlight" that highlights one tag pill at a time,
  // looping forever — purely visual, no functional change.
  const [activeTag, setActiveTag] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % TAGS.length);
    }, HIGHLIGHT_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative w-full max-w-[416px] rounded-[20px] bg-[#C1B7FA] pt-5 px-3.5 sm:px-5 pb-10 mx-auto"
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-2.5">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6C5CE7]"
        >
          <DesignPrev />
        </motion.div>
        <p className="body-medium text-[#112420]">Design Preview</p>
      </div>

      {/* Content Card with Stacked Shadow Layers */}
      <div className="relative">
        <div className="absolute inset-x-4 sm:inset-x-6 top-6 bottom-[-20px] rounded-[14px] bg-[#D9D3FF]" />

        {/* Main Inner White Card */}
        <div className="relative z-10 rounded-[18px] bg-white p-3.5 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect
                  width="42"
                  height="42"
                  rx="21"
                  fill="url(#paint0_linear_119_28753)"
                />
                <path
                  d="M17.5967 13.937C17.5967 13.7536 17.7306 13.5995 17.9099 13.577L20.0588 13.3036C20.1091 13.2972 20.1601 13.3018 20.2086 13.3169C20.257 13.3321 20.3017 13.3575 20.3398 13.3915C20.3779 13.4256 20.4084 13.4674 20.4294 13.5143C20.4504 13.5612 20.4614 13.6121 20.4616 13.6636V20.8509C20.4616 21.0692 20.2735 21.239 20.0588 21.2109L17.9099 20.9386C17.8234 20.9274 17.7439 20.8846 17.6863 20.8181C17.6287 20.7516 17.5968 20.6661 17.5967 20.5775V13.9359V13.937ZM13.2988 14.8472C13.2988 14.6638 13.4327 14.5097 13.612 14.4872L15.7609 14.2138C15.8112 14.2074 15.8623 14.212 15.9107 14.2271C15.9591 14.2423 16.0038 14.2677 16.0419 14.3018C16.08 14.3358 16.1105 14.3776 16.1315 14.4245C16.1525 14.4714 16.1635 14.5223 16.1637 14.5738V20.3041C16.1637 20.5235 15.9756 20.6922 15.7609 20.6652L13.612 20.393C13.5253 20.3817 13.4457 20.3387 13.3881 20.272C13.3304 20.2053 13.2987 20.1195 13.2988 20.0307V14.8472ZM24.4873 13.9111C24.5649 13.9307 24.6339 13.9761 24.6832 14.0401C24.7325 14.1042 24.7594 14.1831 24.7595 14.2644V17.3C24.7593 17.3888 24.7273 17.4745 24.6695 17.541C24.6116 17.6075 24.5319 17.6502 24.4452 17.6612L22.2963 17.9346C22.2459 17.9409 22.1947 17.9364 22.1462 17.9211C22.0977 17.9059 22.053 17.8804 22.0149 17.8462C21.9768 17.8121 21.9463 17.7701 21.9254 17.7231C21.9044 17.676 21.8936 17.625 21.8935 17.5734V13.7187C21.8935 13.4813 22.1126 13.3081 22.3383 13.3655L24.4873 13.9111ZM28.6988 15.1746C28.6987 15.0933 28.6719 15.0144 28.6225 14.9504C28.5732 14.8863 28.5042 14.8409 28.4266 14.8214L26.2777 14.2757C26.2249 14.2624 26.1698 14.2614 26.1166 14.273C26.0634 14.2845 26.0135 14.3082 25.9707 14.3422C25.9278 14.3762 25.8931 14.4198 25.8692 14.4694C25.8454 14.5191 25.8329 14.5737 25.8328 14.629V17.3911C25.8328 17.6105 26.0221 17.7793 26.2356 17.7523L28.3846 17.4789C28.471 17.468 28.5506 17.4254 28.6085 17.3591C28.6663 17.2929 28.6984 17.2074 28.6988 17.1189V15.1746Z"
                  fill="white"
                />
                <path
                  d="M28.6988 18.8967L21.7153 19.0778C21.7638 19.7217 22.0496 20.3233 22.5156 20.7622C22.9815 21.2011 23.5932 21.445 24.2283 21.4451H25.8328V22.9943L13.2988 21.8096V29.4008L28.6988 28.3083V18.8955V18.8967Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_119_28753"
                    x1="14.3121"
                    y1="-6.84783"
                    x2="17.4192"
                    y2="47.7733"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CB3D0B" />
                    <stop offset="1" stopColor="#EE7950" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <p className="body-regular text-[#112420] font-jakarta leading-tight">
                  Grow Your Business
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#626262] mt-0.5">
                  12+ Design Service
                </p>
              </div>
            </div>

            <a
              href="#"
              className="caption-regular font-jakarta text-[#E85528] hover:underline pt-0.5 shrink-0"
            >
              See All
            </a>
          </div>

          <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-2.5">
            {TAGS.map((label, i) => {
              const isActive = i === activeTag;
              return (
                <motion.span
                  key={label}
                  animate={{
                    scale: isActive ? 1.04 : 1,
                    borderColor: isActive ? "var(--color-primary)" : "#D1D5DB",
                    backgroundColor: isActive ? "#FFF2EE" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ borderStyle: isActive ? "solid" : "dashed" }}
                  className="rounded-[50px] border py-1.5 sm:py-2 px-1.5 sm:px-2 text-center text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-[#0A0A0A] truncate"
                >
                  {label}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};