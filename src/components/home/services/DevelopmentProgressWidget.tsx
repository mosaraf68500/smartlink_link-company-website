"use client";

import { useEffect, useRef, useState } from "react";
import { DevlopmentProgress } from "./ServiceIcon";

// Each line is a list of styled tokens — this mirrors the exact text/
// colors from the original static <pre> block, just split up so we can
// type it out token-by-token, character-by-character.
type Token = { text: string; className: string };

const CODE_LINES: Token[][] = [
  [
    { text: "function ", className: "text-[#C678DD]" },
    { text: "optimizeCampaign", className: "text-[#61AFEF]" },
    { text: "() {", className: "text-gray-300" },
  ],
  [
    { text: "  return ", className: "text-[#C678DD]" },
    { text: "new ", className: "text-[#C678DD]" },
    { text: "Promise((resolve) => {", className: "text-gray-300" },
  ],
  [
    { text: "    const ", className: "text-[#C678DD]" },
    { text: "data = ", className: "text-gray-300" },
    { text: "fetchCampaignData", className: "text-[#61AFEF]" },
    { text: "();", className: "text-gray-300" },
  ],
  [
    { text: "    const ", className: "text-[#C678DD]" },
    { text: "result = ", className: "text-gray-300" },
    { text: "analyze", className: "text-[#61AFEF]" },
    { text: "(data);", className: "text-gray-300" },
  ],
  [{ text: "    resolve(result);", className: "text-gray-300" }],
  [{ text: "  });", className: "text-gray-300" }],
  [{ text: "}", className: "text-gray-300" }],
];

const TYPE_SPEED_MS = 28; // per character
const LINE_PAUSE_MS = 120; // brief pause between lines
const LOOP_PAUSE_MS = 2200; // pause on the finished code before retyping

// Splits a line's tokens at `count` characters, returning only the
// visible slice of each token (used while a line is mid-type).
function sliceTokens(tokens: Token[], count: number): Token[] {
  let remaining = count;
  const result: Token[] = [];
  for (const token of tokens) {
    if (remaining <= 0) break;
    if (token.text.length <= remaining) {
      result.push(token);
      remaining -= token.text.length;
    } else {
      result.push({ text: token.text.slice(0, remaining), className: token.className });
      remaining = 0;
    }
  }
  return result;
}

function useTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Typing/looping logic
  useEffect(() => {
    const currentLine = CODE_LINES[lineIndex];
    const lineLength = currentLine.reduce((sum, t) => sum + t.text.length, 0);

    if (charCount < lineLength) {
      timeoutRef.current = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
    } else if (lineIndex < CODE_LINES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharCount(0);
      }, LINE_PAUSE_MS);
    } else {
      // Finished the whole snippet — hold, then reset and retype.
      timeoutRef.current = setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
      }, LOOP_PAUSE_MS);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [lineIndex, charCount]);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

  return { lineIndex, charCount, showCursor };
}

export const DevelopmentProgressWidget = () => {
  const { lineIndex, charCount, showCursor } = useTypewriter();

  return (
    <div className="w-full max-w-[416px] rounded-[14px] bg-[#E2C589] p-3.5 sm:p-4 mx-auto overflow-x-auto">
      <div className="mb-3 flex items-center gap-2">
        <DevlopmentProgress />
        <p className="body-medium text-[#112420]">Development Progress</p>
      </div>

      <div className="rounded-xl bg-[#0D1117] p-3 sm:p-4 font-mono text-[11px] xs:text-[12px] sm:text-[13px] leading-5 sm:leading-6 overflow-x-auto">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>

        <pre className="whitespace-pre text-gray-300">
          {CODE_LINES.map((tokens, i) => {
            const isPast = i < lineIndex;
            const isCurrent = i === lineIndex;
            const visibleTokens = isPast
              ? tokens
              : isCurrent
              ? sliceTokens(tokens, charCount)
              : [];

            return (
              <span key={i}>
                <span className="text-gray-500">{i + 1} </span>
                {visibleTokens.map((t, ti) => (
                  <span key={ti} className={t.className}>
                    {t.text}
                  </span>
                ))}
                {isCurrent && (
                  <span
                    className={`inline-block w-[6px] translate-y-[1px] bg-gray-300 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ height: "1em" }}
                  />
                )}
                {i < CODE_LINES.length - 1 ? "\n" : ""}
              </span>
            );
          })}
        </pre>
      </div>
    </div>
  );
};