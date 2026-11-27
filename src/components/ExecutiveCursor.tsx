"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export function ExecutiveCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth spring for outer ring and ambient glow
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.45 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.45 });

  const auraX = useSpring(mouseX, { stiffness: 140, damping: 26, mass: 0.8 });
  const auraY = useSpring(mouseY, { stiffness: 140, damping: 26, mass: 0.8 });

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    // Defer initial enable into an animation frame to satisfy strict effect lint rules
    const raf = window.requestAnimationFrame(() => setEnabled(true));

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        'a, button, [role="tab"], input, select, textarea, label'
      );
      setIsInteractive(Boolean(interactiveEl));
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
    >
      {/* Subtle ambient electric-blue spotlight aura */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        className="absolute top-0 left-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.11)_0%,rgba(47,107,255,0.03)_45%,transparent_72%)]"
      />

      {/* Precision trailing ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isPressed ? 0.8 : isInteractive ? 1.55 : 1,
          backgroundColor: isInteractive
            ? "rgba(47, 107, 255, 0.10)"
            : "rgba(47, 107, 255, 0)",
          borderColor: isInteractive
            ? "rgba(47, 107, 255, 0.8)"
            : "rgba(16, 31, 73, 0.35)",
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 h-8 w-8 rounded-full border-[1.5px]"
      />

      {/* Crisp center tracking dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isPressed ? 1.4 : isInteractive ? 0.65 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#2F6BFF]"
      />
    </div>
  );
}
