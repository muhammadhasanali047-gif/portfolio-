"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
  elevationShadow?: boolean;
}

export function Tilt3DCard({
  children,
  className = "",
  maxTilt = 5,
  glareColor = "rgba(47, 107, 255, 0.12)",
  elevationShadow = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22, mass: 0.6 });

  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 65%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rY = (px - 0.5) * (maxTilt * 2);
    const rX = (0.5 - py) * (maxTilt * 2);

    rawRotateX.set(rX);
    rawRotateY.set(rY);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHovered ? { rotateX, rotateY } : undefined}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={`relative h-full ${
          elevationShadow
            ? "shadow-[0_14px_34px_-18px_rgba(16,31,73,0.22),0_4px_12px_-6px_rgba(16,31,73,0.08)] hover:shadow-[0_26px_52px_-20px_rgba(16,31,73,0.32),0_8px_20px_-10px_rgba(47,107,255,0.18)]"
            : ""
        } ${className}`}
      >
        {/* Dynamic specular 3D highlight */}
        <motion.div
          aria-hidden="true"
          style={{ background: glareBackground }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
        />
        {children}
      </motion.div>
    </div>
  );
}

export function Floating3DAccent({
  children,
  className = "",
  duration = 7,
  yOffset = 10,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
