"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Copy,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/MotionPrimitives";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt3DCard } from "@/components/Spatial3D";
import { EXECUTIVE_PROFILE } from "@/data/portfolio";

export function ContactSection({
  isStandalonePage = true,
}: {
  isStandalonePage?: boolean;
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState("AI & Automation Consultation");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EXECUTIVE_PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${EXECUTIVE_PROFILE.email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `[Executive Inquiry] ${topic}${organization ? ` — ${organization}` : ""}`
    );
    const body = encodeURIComponent(
      `Hello Faiz Jillani,\n\nName: ${name || "Not specified"}\nOrganization: ${
        organization || "Not specified"
      }\nTopic: ${topic}\n\nMessage:\n${message || "I would like to connect regarding a business or technology initiative."}\n`
    );
    window.location.href = `mailto:${EXECUTIVE_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[#E2E5EE] bg-[#F4F5F8] py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Executive Contact"
          title="Let's Build Something Meaningful Together."
          subtitle="Connect directly for strategic partnerships, AI automation initiatives, enterprise software architecture, or executive inquiries."
          titleId="contact-heading"
          as={isStandalonePage ? "h1" : "h2"}
          immediate={isStandalonePage}
        />

        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column — Direct Executive Contact Details */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal immediate={isStandalonePage} delay={0.08} className="space-y-3.5">
              {/* Email */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#E2E5EE] bg-white p-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
                <a
                  href={`mailto:${EXECUTIVE_PROFILE.email}`}
                  className="group flex min-w-0 flex-1 items-center gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#2F6BFF] transition-colors group-hover:bg-[#2F6BFF] group-hover:text-white">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                      Email
                    </span>
                    <span className="block break-words text-[13px] font-semibold text-[#101F49] group-hover:text-[#2F6BFF] sm:text-sm">
                      {EXECUTIVE_PROFILE.email}
                    </span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[36px] shrink-0 items-center justify-center gap-1.5 self-start rounded-md border border-[#E2E5EE] bg-[#F4F5F8] px-3 py-1.5 text-xs font-medium text-[#101F49] transition-colors hover:border-[#2F6BFF] sm:self-auto lg:self-start xl:self-auto"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#2F6BFF]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#667085]" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${EXECUTIVE_PROFILE.phone}`}
                className="group flex items-center gap-3.5 rounded-xl border border-[#E2E5EE] bg-white p-4 transition-colors hover:border-[#2F6BFF]/45"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#2F6BFF] transition-colors group-hover:bg-[#2F6BFF] group-hover:text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                    Phone
                  </span>
                  <span className="block text-sm font-semibold text-[#101F49] group-hover:text-[#2F6BFF]">
                    {EXECUTIVE_PROFILE.phone}
                  </span>
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={EXECUTIVE_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-[#E2E5EE] bg-white p-4 transition-colors hover:border-[#25D366]/60"
              >
                <span className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#101F49] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                    <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                      WhatsApp
                    </span>
                    <span className="block text-sm font-semibold text-[#101F49] group-hover:text-[#128C7E]">
                      {EXECUTIVE_PROFILE.phoneDisplay}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-[#667085] transition-colors group-hover:text-[#128C7E]"
                  aria-hidden="true"
                />
              </a>

              {/* Company */}
              <a
                href={EXECUTIVE_PROFILE.companyWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-[#E2E5EE] bg-white p-4 transition-colors hover:border-[#2F6BFF]/45"
              >
                <span className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#2F6BFF] transition-colors group-hover:bg-[#2F6BFF] group-hover:text-white">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                      Company
                    </span>
                    <span className="block text-sm font-semibold text-[#101F49] group-hover:text-[#2F6BFF]">
                      {EXECUTIVE_PROFILE.company}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-[#667085] transition-colors group-hover:text-[#2F6BFF]"
                  aria-hidden="true"
                />
              </a>

              {/* LinkedIn */}
              {EXECUTIVE_PROFILE.linkedinUrl ? (
                <a
                  href={EXECUTIVE_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[#E2E5EE] bg-white p-4 transition-colors hover:border-[#2F6BFF]/45"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#2F6BFF] transition-colors group-hover:bg-[#2F6BFF] group-hover:text-white">
                      <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                        LinkedIn
                      </span>
                      <span className="block text-sm font-semibold text-[#101F49] group-hover:text-[#2F6BFF]">
                        Official Executive Profile
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#667085] group-hover:text-[#2F6BFF]"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div className="flex items-center gap-3.5 rounded-xl border border-dashed border-[#BDBFCC] bg-white/70 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F5F8] text-[#667085]">
                    <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                      LinkedIn
                    </span>
                    <span className="block text-xs font-medium italic text-[#667085]">
                      Verified LinkedIn URL pending confirmation (editable in{" "}
                      <code className="font-mono">src/data/portfolio.ts</code>)
                    </span>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          {/* Right Column — 3D Executive Inquiry Composer */}
          <div className="lg:col-span-7">
            <Reveal immediate={isStandalonePage} delay={0.12} className="lg:ml-auto lg:max-w-xl">
              <Tilt3DCard maxTilt={3.5} className="rounded-2xl">
                <div className="surface-3d rounded-2xl border border-[#E2E5EE] bg-white p-5 sm:p-6">
                <div className="border-b border-[#E2E5EE] pb-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2F6BFF]">
                    Start a Conversation
                  </p>
                  <h3 className="mt-0.5 font-[family-name:var(--font-display)] text-lg font-bold text-[#101F49]">
                    Direct Executive Inquiry
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#344054] sm:text-[13px]">
                    Compose your message below to open a pre-addressed email to{" "}
                    <span className="font-semibold text-[#101F49]">
                      {EXECUTIVE_PROFILE.email}
                    </span>
                    .
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[11px] font-semibold uppercase tracking-wider text-[#101F49]"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="mt-1.5 w-full rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-3.5 py-2 text-xs text-[#101F49] placeholder:text-[#667085]/70 focus:border-[#2F6BFF] focus:bg-white focus:outline-none sm:text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-[11px] font-semibold uppercase tracking-wider text-[#101F49]"
                      >
                        Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Company or venture"
                        className="mt-1.5 w-full rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-3.5 py-2 text-xs text-[#101F49] placeholder:text-[#667085]/70 focus:border-[#2F6BFF] focus:bg-white focus:outline-none sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[#101F49]"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-3.5 py-2 text-xs text-[#101F49] focus:border-[#2F6BFF] focus:bg-white focus:outline-none sm:text-sm"
                    >
                      <option value="AI & Automation Consultation">
                        AI &amp; Automation Consultation
                      </option>
                      <option value="Custom Software / SaaS Development">
                        Custom Software / SaaS Development
                      </option>
                      <option value="WhatsApp & Outreach Systems">
                        WhatsApp &amp; Outreach Systems
                      </option>
                      <option value="Business Intelligence & Data Analytics">
                        Business Intelligence &amp; Data Analytics
                      </option>
                      <option value="Executive Partnership / Speaking">
                        Executive Partnership / Speaking
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[#101F49]"
                    >
                      Project or Partnership Brief
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your objectives, timeline, or how ERHA Technologies can assist..."
                      className="mt-1.5 w-full rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-3.5 py-2 text-xs text-[#101F49] placeholder:text-[#667085]/70 focus:border-[#2F6BFF] focus:bg-white focus:outline-none sm:text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#101F49] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#2F6BFF] sm:w-auto sm:text-sm"
                    >
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Send Inquiry via Email</span>
                    </button>

                    <a
                      href={`tel:${EXECUTIVE_PROFILE.phone}`}
                      className="inline-flex min-h-[36px] items-center justify-center gap-2 text-xs font-semibold text-[#101F49] transition-colors hover:text-[#2F6BFF] sm:justify-start"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#2F6BFF]" aria-hidden="true" />
                      <span>Or call {EXECUTIVE_PROFILE.phoneDisplay}</span>
                    </a>
                  </div>
                </form>
                </div>
              </Tilt3DCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
