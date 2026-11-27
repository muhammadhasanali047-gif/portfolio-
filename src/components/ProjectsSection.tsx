"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FileImage,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import {
  FEATURED_PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/data/portfolio";

export function ProjectsSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ProjectCategory
  >("All");
  const prefersReducedMotion = useReducedMotion();

  const visibleProjects =
    activeCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`bg-white py-10 sm:py-12 lg:py-14 ${
        isStandalonePage ? "" : "border-t border-[#E2E5EE]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Intelligent Systems & Software Architecture."
          subtitle="Core solution domains engineered to streamline communication, automate outreach, and unify executive analytics."
          titleId="projects-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        {/* Interactive Category Filter */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
            className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
              activeCategory === "All"
                ? "bg-[#101F49] text-white shadow-xs"
                : "border border-[#E2E5EE] bg-[#F4F5F8] text-[#667085] hover:border-[#BDBFCC] hover:text-[#101F49]"
            }`}
          >
            All Categories
          </button>

          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? "bg-[#101F49] text-white shadow-xs"
                    : "border border-[#E2E5EE] bg-[#F4F5F8] text-[#667085] hover:border-[#BDBFCC] hover:text-[#101F49]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3D Animated Compact Project Cards Grid */}
        <motion.div
          layout={!prefersReducedMotion}
          className="mt-7 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Tilt3DCard maxTilt={5.5} className="rounded-xl">
                  <article className="surface-3d flex h-full flex-col overflow-hidden rounded-xl border border-[#E2E5EE] bg-[#F4F5F8] transition-colors duration-300 hover:border-[#2F6BFF]/40">
                    {/* Compact Screenshot or Architecture Preview */}
                    <div
                      className={`relative h-36 w-full overflow-hidden border-b border-[#E2E5EE] sm:h-40 ${
                        project.imageFit === "contain"
                          ? "bg-white"
                          : "bg-[#101F49]/[0.03]"
                      }`}
                    >
                      {project.screenshotPath ? (
                        <Image
                          src={project.screenshotPath}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className={
                            project.imageFit === "contain"
                              ? "object-contain p-6 pt-9"
                              : "object-cover"
                          }
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#F4F5F8_0%,#ECEEF4_100%)] px-4 pt-6 pb-3 text-center">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-[#BDBFCC] bg-white text-[#101F49] shadow-2xs">
                            <FileImage
                              className="h-4 w-4 text-[#2F6BFF]"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#101F49]">
                            {project.title}
                          </p>
                          <p className="mt-0.5 line-clamp-1 max-w-xs text-[11px] text-[#475467]">
                            {project.screenshotPlaceholderLabel}
                          </p>
                        </div>
                      )}

                      <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-md border border-[#BDBFCC]/70 bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#101F49] shadow-xs backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Compact Card Content */}
                    <div className="flex flex-1 flex-col bg-white p-4 sm:p-5">
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-[#101F49] sm:text-[17px]">
                        {project.title}
                      </h3>

                      {/* Key Features */}
                      <div className="mt-3.5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                          Key Capabilities
                        </p>
                        <ul className="mt-1.5 space-y-1.5">
                          {project.keyFeatures.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-xs text-[#101F49]"
                            >
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2F6BFF]"
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>



                      {project.demoUrl ? (
                        <div className="pt-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[34px] items-center gap-1 rounded-md bg-[#101F49] px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#2F6BFF]"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Tilt3DCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
