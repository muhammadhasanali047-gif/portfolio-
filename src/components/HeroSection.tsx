"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Floating3DAccent, Tilt3DCard } from "@/components/Spatial3D";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";
import ctoPortrait from "../../public/images/faiz-jillani-portrait.jpg";
import { EXECUTIVE_PROFILE } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const staggerChild = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[#BDBFCC]/45 bg-[#F4F5F8] pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12"
    >
      {/* Subtle 3D architectural perspective backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,31,73,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,31,73,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#2F6BFF]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left Column — Executive Authority & Positioning */}
        <div className="min-w-0 lg:col-span-7">
          <TypewriterHeadline
            id="hero-heading"
            text={EXECUTIVE_PROFILE.heroHeadline}
            typeSpeedMs={42}
            pauseMs={2800}
            eraseMode="fade"
            loop
            className="font-[family-name:var(--font-display)] text-[2.125rem] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#101F49] sm:text-5xl lg:text-[3.35rem] xl:text-[3.625rem] lg:leading-[1.08]"
          />

          <motion.p
            {...staggerChild(0.08)}
            className="mt-5 max-w-2xl text-base leading-relaxed text-[#344054] sm:mt-6 sm:text-lg sm:leading-relaxed"
          >
            {EXECUTIVE_PROFILE.heroSubheadline}
          </motion.p>

          {/* Identity Signature Block */}
          <motion.div
            {...staggerChild(0.14)}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-l-2 border-[#2F6BFF] pl-4 sm:mt-8"
          >
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[#101F49]">
                {EXECUTIVE_PROFILE.name}
              </p>
              <p className="text-sm font-medium text-[#475467]">
                {EXECUTIVE_PROFILE.roleTitle}
              </p>
            </div>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            {...staggerChild(0.2)}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#101F49] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_-10px_rgba(16,31,73,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#2F6BFF] hover:shadow-[0_16px_30px_-10px_rgba(47,107,255,0.5)] sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="surface-3d inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#BDBFCC] bg-white px-6 py-3.5 text-sm font-semibold text-[#101F49] transition-all hover:-translate-y-0.5 hover:border-[#101F49] sm:w-auto"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4 text-[#2F6BFF]" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column — Interactive 3D Spatial Portrait Stage */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 22, scale: 0.98 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
          className="min-w-0 lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md pr-3 pb-3 sm:pr-5 sm:pb-5 lg:max-w-none">
            {/* Ambient floating 3D architectural depth accent */}
            <Floating3DAccent
              duration={8}
              yOffset={8}
              className="pointer-events-none absolute -top-3 -left-3 -z-10 hidden h-20 w-20 rounded-2xl border border-[#2F6BFF]/25 bg-white/70 shadow-lg backdrop-blur-xs sm:block"
            >
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(47,107,255,0.12),transparent_70%)]" />
            </Floating3DAccent>

            {/* Structural backplate offset in 3D space */}
            <div
              aria-hidden="true"
              className="absolute inset-0 top-3.5 left-3.5 -z-10 rounded-2xl border border-[#101F49]/15 bg-gradient-to-br from-[#BDBFCC]/55 to-[#101F49]/15 shadow-lg sm:top-5 sm:left-5"
            />

            <Tilt3DCard
              maxTilt={5.5}
              glareColor="rgba(255, 255, 255, 0.22)"
              className="rounded-2xl"
            >
              <div className="overflow-hidden rounded-2xl border border-[#BDBFCC]/85 bg-[#BDBFCC] ring-1 ring-inset ring-white/50">
                <div className="relative aspect-square w-full bg-[#BDBFCC]">
                  <Image
                    src={ctoPortrait}
                    alt={EXECUTIVE_PROFILE.portraitAlt}
                    fill
                    priority
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
