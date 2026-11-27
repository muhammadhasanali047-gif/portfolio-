import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/MotionPrimitives";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import { ABOUT_SECTION } from "@/data/portfolio";

export function AboutSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  const verifiedFacts = ABOUT_SECTION.editableExecutiveFacts.filter(
    (fact) => !fact.isPlaceholder
  );

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={ABOUT_SECTION.eyebrow}
          title={ABOUT_SECTION.heading}
          titleId="about-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Editorial Narrative */}
          <div className="lg:col-span-7">
            <Reveal
              immediate={isStandalonePage}
              delay={0.08}
              className="space-y-5"
            >
              <p className="text-lg font-semibold leading-relaxed text-[#101F49] sm:text-xl sm:leading-relaxed">
                {ABOUT_SECTION.leadParagraph}
              </p>

              {ABOUT_SECTION.bodyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-[#344054] sm:text-[17px] sm:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          {/* 3D Executive Profile Dossier Card */}
          <div className="lg:col-span-5">
            <Reveal immediate={isStandalonePage} delay={0.12}>
              <Tilt3DCard maxTilt={5} className="rounded-2xl">
                <div className="surface-3d rounded-2xl border border-[#E2E5EE] bg-[#F4F5F8] p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-[#BDBFCC]/50 pb-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2F6BFF]">
                        Executive Dossier
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-[#101F49]">
                        Leadership Profile
                      </h3>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-[#101F49] shadow-xs">
                      ERHA Technologies
                    </span>
                  </div>

                  <dl className="mt-6 space-y-4">
                    {verifiedFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-xl border border-[#E2E5EE] bg-white p-4 shadow-[0_8px_18px_-14px_rgba(16,31,73,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <dt className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#475467]">
                          <span>{fact.label}</span>
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[#2F6BFF]"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd className="mt-1.5 text-sm font-semibold text-[#101F49]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Tilt3DCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
