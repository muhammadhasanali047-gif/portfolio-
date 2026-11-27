"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TypewriterHeadlineProps {
  text?: string;
  phrases?: string[];
  id?: string;
  className?: string;
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseMs?: number;
  eraseMode?: "fade" | "backspace";
  loop?: boolean;
}

export function TypewriterHeadline({
  text,
  phrases,
  id,
  className = "",
  typeSpeedMs = 46,
  deleteSpeedMs = 20,
  pauseMs = 2600,
  eraseMode = "fade",
  loop = true,
}: TypewriterHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  const items = useMemo(() => {
    if (phrases && phrases.length > 0) return phrases;
    return text ? [text] : [""];
  }, [phrases, text]);

  const sizerText = useMemo(
    () =>
      items.reduce(
        (longest, current) => (current.length > longest.length ? current : longest),
        ""
      ),
    [items]
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = items[phraseIndex % items.length] ?? "";

  const [charCount, setCharCount] = useState(currentPhrase.length);
  const [phase, setPhase] = useState<
    "pause-full" | "fading-out" | "deleting" | "typing"
  >("pause-full");

  useEffect(() => {
    if (prefersReducedMotion || currentPhrase.length === 0) return;

    let timer: number;

    if (phase === "pause-full") {
      if (!loop && phraseIndex >= items.length - 1) return;
      timer = window.setTimeout(() => {
        setPhase(eraseMode === "fade" ? "fading-out" : "deleting");
      }, pauseMs);
    } else if (phase === "fading-out") {
      timer = window.setTimeout(() => {
        setCharCount(0);
        setPhraseIndex((prev) => (prev + 1) % items.length);
        setPhase("typing");
      }, 380);
    } else if (phase === "deleting") {
      if (charCount > 0) {
        timer = window.setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, deleteSpeedMs);
      } else {
        timer = window.setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % items.length);
          setPhase("typing");
        }, 260);
      }
    } else {
      if (charCount < currentPhrase.length) {
        const nextChar = currentPhrase[charCount];
        // Subtle natural cadence at spaces and punctuation
        const delay =
          nextChar === " "
            ? typeSpeedMs + 18
            : nextChar === "."
              ? typeSpeedMs + 60
              : typeSpeedMs;

        timer = window.setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, delay);
      } else {
        timer = window.setTimeout(() => {
          setPhase("pause-full");
        }, 140);
      }
    }

    return () => window.clearTimeout(timer);
  }, [
    charCount,
    currentPhrase,
    deleteSpeedMs,
    eraseMode,
    items.length,
    loop,
    pauseMs,
    phase,
    phraseIndex,
    prefersReducedMotion,
    typeSpeedMs,
  ]);

  const visibleText = prefersReducedMotion
    ? items[0]
    : currentPhrase.slice(0, charCount);

  return (
    <h1 id={id} aria-label={items[0]} className={`relative ${className}`}>
      {/* Invisible sizer prevents vertical layout shift across any phrase */}
      <span aria-hidden="true" className="invisible select-none">
        {sizerText}
      </span>

      <motion.span
        aria-hidden="true"
        animate={{
          opacity: phase === "fading-out" ? 0 : 1,
          y: phase === "fading-out" ? -4 : 0,
        }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {visibleText}
      </motion.span>
    </h1>
  );
}
