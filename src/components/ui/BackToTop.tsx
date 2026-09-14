"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  showAfter?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function BackToTop({
  showAfter = 400,
  minDuration = 400,
  maxDuration = 1200,
  className = "",
}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = useCallback(() => {
    const startY = window.scrollY;
    if (startY === 0) return;

    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const distanceBasedDuration = startY * 0.5;
    const duration = Math.min(
      Math.max(distanceBasedDuration, minDuration),
      maxDuration,
    );

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY * (1 - eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        html.style.scrollBehavior = previousScrollBehavior;
      }
    };

    requestAnimationFrame(tick);
  }, [minDuration, maxDuration]);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 cursor-pointer right-6 z-50 flex items-center justify-center transition-all duration-300 sm:bottom-8 sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      } ${className}`}
      style={{
        gap: 8,
        borderRadius: 53,
        background: "var(--color-cta-dark)",
      }}
    >
      {/* Mobile: icon-only round button */}
      <span className="flex h-12 w-12 items-center justify-center sm:hidden">
        <ArrowUp size={18} className="text-white" />
      </span>

      {/* Desktop: full text + icon pill */}
      <span
        className="hidden items-center sm:flex"
        style={{
          height: 47,
          paddingTop: 10,
          paddingRight: 24,
          paddingBottom: 10,
          paddingLeft: 20,
          gap: 8,
        }}
      >
        <ArrowUp size={18} className="flex-shrink-0 text-white" />
        <span className="body-regular text-white">Back to top</span>
      </span>
    </button>
  );
}
