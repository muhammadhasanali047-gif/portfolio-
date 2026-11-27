"use client";

import {
  BarChart3,
  Bot,
  Code2,
  Layers,
  MessageSquareMore,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import { EXPERTISE_AREAS, type ExpertiseItem } from "@/data/portfolio";

const ICON_MAP: Record<ExpertiseItem["iconName"], LucideIcon> = {
  Workflow,
  Bot,
  Code2,
  Layers,
  MessageSquareMore,
  BarChart3,
};

export function ExpertiseSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-y border-[#E2E5EE] bg-[#F4F5F8] py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Strategic Capabilities Built for Modern Enterprises."
          subtitle="Focused across artificial intelligence, automation infrastructure, full-stack software engineering, and decision-ready business intelligence."
          titleId="expertise-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE_AREAS.map((area) => {
            const Icon = ICON_MAP[area.iconName];

            return (
              <StaggerItem key={area.id}>
                <Tilt3DCard maxTilt={5.5} className="rounded-2xl">
                  <article className="surface-3d group relative flex h-full flex-col rounded-2xl border border-[#E2E5EE] bg-white p-7 transition-colors duration-300 hover:border-[#2F6BFF]/45">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E2E5EE] bg-[#F4F5F8] text-[#101F49] shadow-xs transition-all duration-300 group-hover:border-[#2F6BFF]/25 group-hover:bg-[#2F6BFF] group-hover:text-white group-hover:shadow-[0_10px_20px_-8px_rgba(47,107,255,0.55)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475467] xl:text-[11px]">
                        {area.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[#101F49]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#344054]">
                      {area.description}
                    </p>

                    <div aria-hidden="true" className="mt-auto pt-6">
                      <div className="h-[2px] w-10 rounded-full bg-[#E2E5EE] transition-all duration-300 group-hover:w-16 group-hover:bg-[#2F6BFF]" />
                    </div>
                  </article>
                </Tilt3DCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
