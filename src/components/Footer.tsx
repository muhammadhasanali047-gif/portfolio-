import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import {
  ProtectedEmailLink,
  ProtectedPhoneLink,
} from "@/components/ProtectedContact";
import { EXECUTIVE_PROFILE, NAV_ITEMS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#0A1533] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 border-b border-white/12 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:pb-12">
          {/* Executive Brand Block */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F6BFF] font-[family-name:var(--font-display)] text-xs font-bold tracking-wider text-white"
              >
                FJ
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[0.12em] text-white">
                  {EXECUTIVE_PROFILE.brandTitle}
                </p>
                <p className="text-xs font-medium text-[#BDBFCC]">
                  {EXECUTIVE_PROFILE.roleTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#BDBFCC] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[#BDBFCC] transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Direct Contact &amp; Channels
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <ProtectedEmailLink className="inline-flex items-center gap-2.5 text-[#BDBFCC] transition-colors hover:text-white" />
              </li>
              <li>
                <ProtectedPhoneLink className="inline-flex items-center gap-2.5 text-[#BDBFCC] transition-colors hover:text-white" />
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#BDBFCC] transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  <span>WhatsApp ({EXECUTIVE_PROFILE.phoneDisplay})</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.companyWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#BDBFCC] transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 text-[#2F6BFF]" aria-hidden="true" />
                  <span>ERHA Technologies Official Website</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                {EXECUTIVE_PROFILE.linkedinUrl ? (
                  <a
                    href={EXECUTIVE_PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[#BDBFCC] transition-colors hover:text-white"
                  >
                    <LinkedInIcon className="h-4 w-4 text-[#2F6BFF]" aria-hidden="true" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[#BDBFCC] sm:flex-row sm:items-center">
          <p>
            &copy; {EXECUTIVE_PROFILE.copyrightYear} {EXECUTIVE_PROFILE.name}.
            All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-[#BDBFCC] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <p>{EXECUTIVE_PROFILE.roleTitle}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
