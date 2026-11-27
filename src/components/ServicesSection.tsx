"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Briefcase,
  Database,
  Globe,
  Layers,
  Palette,
  Plug,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import {
  ERHA_SERVICES,
  SERVICE_CATEGORIES,
  type CompanyService,
  type ServiceCategory,
} from "@/data/portfolio";

const SERVICE_ICONS: Record<CompanyService["iconName"], LucideIcon> = {
  Bot,
  Globe,
  Layers,
  Smartphone,
  Database,
  Palette,
  Plug,
  ShieldCheck,
  BarChart3,
  Briefcase,
};

export function ServicesSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ServiceCategory
  >("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredServices =
    selectedCategory === "All"
      ? ERHA_SERVICES
      : ERHA_SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="End-to-End Technology & AI Services."
          subtitle="Comprehensive delivery across artificial intelligence, custom software engineering, cloud infrastructure, and strategic digital consulting through ERHA Technologies."
          titleId="services-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        {/* Service Category Filter */}
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-8">
          <div
            role="tablist"
            aria-label="Filter services by practice area"
            className="flex flex-wrap justify-center gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "All"}
              onClick={() => setSelectedCategory("All")}
              className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === "All"
                  ? "bg-[#101F49] text-white shadow-xs"
                  : "border border-[#E2E5EE] bg-[#F4F5F8] text-[#667085] hover:border-[#BDBFCC] hover:text-[#101F49]"
              }`}
            >
              All Services ({ERHA_SERVICES.length})
            </button>

            {SERVICE_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
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
        </div>

        {/* 3D Animated Services Grid */}
        <motion.div
          layout={!prefersReducedMotion}
          className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = SERVICE_ICONS[service.iconName];

              return (
                <motion.div
                  key={service.title}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tilt3DCard maxTilt={5} className="rounded-xl">
                    <article className="surface-3d group flex h-full flex-col rounded-xl border border-[#E2E5EE] bg-[#F4F5F8] p-5 transition-colors duration-200 hover:border-[#2F6BFF]/45 hover:bg-white">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E5EE] bg-white text-[#101F49] shadow-xs transition-all group-hover:border-[#2F6BFF]/25 group-hover:bg-[#2F6BFF] group-hover:text-white group-hover:shadow-[0_10px_20px_-8px_rgba(47,107,255,0.5)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#475467] shadow-2xs">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-[#101F49]">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-[#344054] sm:text-[13px]">
                        {service.summary}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#E2E5EE] pt-3.5">
                        <span className="font-[family-name:var(--font-display)] text-base font-bold text-[#101F49]">
                          {service.price}
                        </span>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F6BFF] transition-colors hover:text-[#101F49]"
                        >
                          <span>Request Consultation</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </Tilt3DCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
