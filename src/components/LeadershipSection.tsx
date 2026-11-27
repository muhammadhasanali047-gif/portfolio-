import { Compass, Lightbulb, TrendingUp } from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import { LEADERSHIP_PILLARS } from "@/data/portfolio";

const PILLAR_ICONS = {
  INNOVATION: Lightbulb,
  LEADERSHIP: Compass,
  GROWTH: TrendingUp,
} as const;

export function LeadershipSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-[#101F49] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* 3D Perspective Grid Horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden opacity-45 [mask-image:linear-gradient(to_top,#000_10%,transparent_100%)]"
      >
        <div className="perspective-grid-floor h-full w-full" />
      </div>

      {/* Subtle architectural line accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6BFF]/70 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Leadership & Vision"
          title="My Vision. My Leadership. Our Future."
          subtitle="Guiding technology initiatives with clarity of purpose, disciplined engineering standards, and long-term business responsibility."
          theme="dark"
          titleId="leadership-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        <StaggerGrid className="mt-8 grid gap-6 lg:grid-cols-3">
          {LEADERSHIP_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.key];

            return (
              <StaggerItem key={pillar.key}>
                <Tilt3DCard
                  maxTilt={5.5}
                  glareColor="rgba(47, 107, 255, 0.22)"
                  elevationShadow={false}
                  className="rounded-2xl"
                >
                  <article className="surface-3d-dark group flex h-full flex-col rounded-2xl border border-white/14 bg-[#0A1533]/85 p-7 backdrop-blur-xs transition-colors duration-300 hover:border-[#2F6BFF]/75 hover:bg-[#0A1533] sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#2F6BFF] transition-all group-hover:bg-[#2F6BFF] group-hover:text-white group-hover:shadow-[0_12px_24px_-8px_rgba(47,107,255,0.65)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-[#D0D5E4]">
                        {pillar.index}
                      </span>
                    </div>

                    <h3 className="mt-7 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.22em] text-[#5B8EFF]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white">
                      {pillar.statement}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#D8DCE8]">
                      {pillar.detail}
                    </p>
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
