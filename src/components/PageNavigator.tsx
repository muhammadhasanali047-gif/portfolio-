import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageLink {
  label: string;
  href: string;
}

interface PageNavigatorProps {
  previous?: PageLink;
  next?: PageLink;
}

export function PageNavigator({ previous, next }: PageNavigatorProps) {
  return (
    <nav
      aria-label="Page sequence navigation"
      className="border-t border-[#E2E5EE] bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        {previous ? (
          <Link
            href={previous.href}
            className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[#E2E5EE] bg-[#F4F5F8] px-4 py-2.5 text-sm font-semibold text-[#101F49] transition-colors hover:border-[#2F6BFF] hover:bg-white"
          >
            <ArrowLeft
              className="h-4 w-4 text-[#667085] transition-transform group-hover:-translate-x-0.5 group-hover:text-[#2F6BFF]"
              aria-hidden="true"
            />
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                Previous
              </span>
              <span>{previous.label}</span>
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group inline-flex min-h-[44px] items-center justify-between gap-2.5 rounded-xl bg-[#101F49] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2F6BFF] sm:justify-end"
          >
            <span className="text-left sm:text-right">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BDBFCC]">
                Continue To
              </span>
              <span>{next.label}</span>
            </span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
