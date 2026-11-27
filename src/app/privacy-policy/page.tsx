import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { PageNavigator } from "@/components/PageNavigator";
import { SectionHeader } from "@/components/SectionHeader";
import { EXECUTIVE_PROFILE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Privacy Policy | Faiz Jillani — CTO of ERHA Technologies",
  description:
    "Privacy Policy for the executive portfolio of Faiz Jillani, CTO of ERHA Technologies, covering inquiry handling, technical data, and contact details.",
};

const POLICY_SECTIONS = [
  {
    number: "01",
    title: "Overview & Scope",
    body: "This Privacy Policy explains how information is handled when you visit the official executive portfolio of Faiz Jillani, Chief Executive Officer of ERHA Technologies. We are committed to transparency, minimal data collection, and respectful handling of every executive or business inquiry.",
  },
  {
    number: "02",
    title: "Direct Inquiries & Communications",
    body: "This website does not store contact form submissions in a background database. When you use the Direct Executive Inquiry composer, it opens a pre-addressed email draft in your own email application to info@erhatechnologies.com. Any details you choose to share via email or telephone (+92 328 137 3200) are used strictly to respond to your inquiry, evaluate potential collaborations, or provide requested information.",
  },
  {
    number: "03",
    title: "Cookies, Fonts & Hosting Infrastructure",
    body: "Typography assets are self-hosted directly with the application rather than fetched from third-party font CDNs on page load. Standard web hosting infrastructure (such as Vercel) may process routine technical request logs—such as browser type, device viewport, and IP address—solely for security, DDoS protection, and service reliability.",
  },
  {
    number: "04",
    title: "Third-Party Links",
    body: "This portfolio includes outbound links to external platforms such as ERHA Technologies' official website and LinkedIn. Once you leave this site, any information you share on external platforms is governed by their respective privacy policies and terms.",
  },
  {
    number: "05",
    title: "Data Retention & Your Rights",
    body: "Correspondence sent directly to ERHA Technologies is retained only as long as necessary to maintain active business communication or satisfy applicable legal obligations. You may request access to, correction of, or deletion of your inquiry correspondence at any time by contacting us directly.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        aria-labelledby="privacy-heading"
        className="bg-[#F4F5F8] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Legal & Transparency"
            title="Privacy Policy"
            subtitle="Clear standards for how visitor information and direct executive communications are handled."
            titleId="privacy-heading"
            as="h1"
            immediate
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5EE] bg-white px-3.5 py-2 text-xs font-semibold text-[#101F49] shadow-2xs">
              <ShieldCheck
                className="h-4 w-4 text-[#2F6BFF]"
                aria-hidden="true"
              />
              <span>Last Updated: November 27, 2026</span>
            </span>
          </div>

          <div className="mt-8 space-y-5">
            {POLICY_SECTIONS.map((item) => (
              <article
                key={item.number}
                className="surface-3d rounded-2xl border border-[#E2E5EE] bg-white p-6 sm:p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.18em] text-[#2F6BFF]">
                    {item.number}
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#101F49] sm:text-xl">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#344054] sm:text-[15px]">
                  {item.body}
                </p>
              </article>
            ))}

            {/* Privacy Contact Card */}
            <article className="surface-3d rounded-2xl border border-[#E2E5EE] bg-white p-6 sm:p-7">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#101F49] sm:text-xl">
                06 &middot; Privacy Questions &amp; Contact
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#344054] sm:text-[15px]">
                If you have questions regarding this Privacy Policy or wish to
                update or remove prior inquiry correspondence, please contact{" "}
                <span className="font-semibold text-[#101F49]">
                  {EXECUTIVE_PROFILE.name}
                </span>{" "}
                at{" "}
                <span className="font-semibold text-[#101F49]">
                  {EXECUTIVE_PROFILE.company}
                </span>
                :
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EXECUTIVE_PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-4 py-2.5 text-xs font-semibold text-[#101F49] transition-colors hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#2F6BFF]" aria-hidden="true" />
                  <span>{EXECUTIVE_PROFILE.email}</span>
                </a>

                <a
                  href={`tel:${EXECUTIVE_PROFILE.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5EE] bg-[#F4F5F8] px-4 py-2.5 text-xs font-semibold text-[#101F49] transition-colors hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#2F6BFF]" aria-hidden="true" />
                  <span>{EXECUTIVE_PROFILE.phoneDisplay}</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <PageNavigator
        previous={{ label: "Executive Contact", href: "/contact" }}
        next={{ label: "Return Home", href: "/" }}
      />
    </>
  );
}
