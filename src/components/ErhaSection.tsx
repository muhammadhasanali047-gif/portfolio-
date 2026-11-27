import Link from "next/link";
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import { ERHA_SERVICES, EXECUTIVE_PROFILE } from "@/data/portfolio";

export function ErhaSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  return (
    <section
      id="erha-technologies"
      aria-labelledby="erha-heading"
      className="border-b border-[#E2E5EE] bg-[#F4F5F8] py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Company Leadership"
          title="Leading Innovation at ERHA Technologies."
          titleId="erha-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column — Company Executive Overview */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <Reveal
              immediate={isStandalonePage}
              delay={0.08}
              className="space-y-5"
            >
              <p className="text-base leading-relaxed text-[#344054] sm:text-lg">
                {EXECUTIVE_PROFILE.company} is the technology company led by{" "}
                <span className="font-semibold text-[#101F49]">
                  {EXECUTIVE_PROFILE.name}
                </span>
                , delivering practical AI automation, custom software systems,
                cloud architectures, and end-to-end digital solutions for modern
                organizations.
              </p>

              {/* 3D Corporate Identity Card */}
              <Tilt3DCard maxTilt={5} className="rounded-2xl">
                <div className="surface-3d rounded-2xl border border-[#E2E5EE] bg-white p-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#101F49] text-white shadow-md">
                      <Building2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-base font-bold tracking-wider text-[#101F49]">
                        ERHA TECHNOLOGIES
                      </p>
                      <p className="text-xs font-medium text-[#475467]">
                        Led by {EXECUTIVE_PROFILE.name}, Chief Executive Officer
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={EXECUTIVE_PROFILE.companyWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#101F49] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#2F6BFF] sm:w-auto"
                    >
                      <span>Visit Official Website</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#BDBFCC] bg-[#F4F5F8] px-4 py-3 text-xs font-semibold text-[#101F49] transition-colors hover:border-[#101F49] hover:bg-white sm:w-auto"
                    >
                      <span>Discuss a Partnership</span>
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            </Reveal>
          </div>

          {/* Right Column — 10 Core Company Services */}
          <div className="lg:col-span-7">
            <Reveal immediate={isStandalonePage} delay={0.1}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.16em] text-[#101F49]">
                  Core Service Capabilities
                </h3>
                <Link
                  href="/services"
                  className="shrink-0 whitespace-nowrap text-xs font-semibold text-[#2F6BFF] transition-colors hover:text-[#101F49]"
                >
                  View All Services &rarr;
                </Link>
              </div>
            </Reveal>

            <StaggerGrid className="grid gap-3.5 sm:grid-cols-2">
              {ERHA_SERVICES.map((service) => (
                <StaggerItem key={service.title}>
                  <div className="surface-3d flex h-full items-start gap-3.5 rounded-xl border border-[#E2E5EE] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#2F6BFF]/45 hover:shadow-[0_18px_34px_-18px_rgba(16,31,73,0.22)]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#2F6BFF]"
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-[family-name:var(--font-display)] text-sm font-bold leading-snug text-[#101F49]">
                          {service.title}
                        </h4>
                        <span className="shrink-0 whitespace-nowrap rounded-md bg-[#F4F5F8] px-2 py-0.5 font-[family-name:var(--font-display)] text-xs font-bold text-[#101F49]">
                          {service.price}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#344054]">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
