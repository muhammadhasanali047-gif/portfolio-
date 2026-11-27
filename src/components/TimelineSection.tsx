"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Milestone,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  TIMELINE_CATEGORIES,
  TIMELINE_ENTRIES,
  type TimelineCategory,
} from "@/data/portfolio";

const CATEGORY_ICONS: Record<TimelineCategory, typeof Briefcase> = {
  "Professional Roles": Briefcase,
  "Company Milestones": Milestone,
  "Verified Achievements": Award,
  Education: GraduationCap,
  Certifications: ShieldCheck,
  "Important Projects": FolderGit2,
};

export function TimelineSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | TimelineCategory
  >("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredEntries =
    selectedCategory === "All"
      ? TIMELINE_ENTRIES
      : TIMELINE_ENTRIES.filter((entry) => entry.category === selectedCategory);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[#E2E5EE] bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience & Achievements"
          title="Executive Record & Milestones."
          subtitle="Leadership tenure, company milestones, academic progression, certifications, and flagship systems delivered at ERHA Technologies."
          titleId="experience-heading"
          as="h2"
          immediate={false}
        />

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Filter timeline records"
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "All"}
            onClick={() => setSelectedCategory("All")}
            className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
              selectedCategory === "All"
                ? "bg-[#101F49] text-white"
                : "border border-[#E2E5EE] bg-[#F4F5F8] text-[#475467] hover:text-[#101F49]"
            }`}
          >
            All Records
          </button>

          {TIMELINE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-[#101F49] text-white"
                    : "border border-[#E2E5EE] bg-[#F4F5F8] text-[#475467] hover:text-[#101F49]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative mt-7 pl-6 sm:pl-8">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-px bg-[#E2E5EE] sm:left-3.5"
          />

          <div className="space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredEntries.map((entry) => {
                const Icon = CATEGORY_ICONS[entry.category];

                return (
                  <motion.article
                    key={entry.id}
                    layout={!prefersReducedMotion}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, x: -12 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      prefersReducedMotion ? undefined : { opacity: 0, x: 12 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="surface-3d relative rounded-2xl border border-[#E2E5EE] bg-[#F4F5F8] p-5 transition-all duration-200 hover:-translate-y-0.5 sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-6 -left-[22px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#2F6BFF] bg-white shadow-[0_0_0_4px_rgba(47,107,255,0.12)] sm:-left-[26px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2F6BFF]">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{entry.category}</span>
                      </div>

                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-[#101F49] shadow-2xs">
                        {entry.period}
                      </span>
                    </div>

                    <h3 className="mt-3.5 font-[family-name:var(--font-display)] text-lg font-bold text-[#101F49]">
                      {entry.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[#475467]">
                      {entry.organization}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#344054]">
                      {entry.description}
                    </p>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
