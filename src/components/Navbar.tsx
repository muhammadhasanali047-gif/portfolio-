"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { EXECUTIVE_PROFILE, NAV_ITEMS } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const mobileOpen = openForPath === pathname;
  const closeMobileMenu = () => setOpenForPath(null);
  const toggleMobileMenu = () =>
    setOpenForPath((prev) => (prev === pathname ? null : pathname));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenForPath(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#BDBFCC]/45 bg-[#F4F5F8]/95 shadow-[0_4px_24px_-12px_rgba(16,31,73,0.12)] backdrop-blur-md"
          : "border-b border-[#BDBFCC]/30 bg-[#F4F5F8]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-3 text-left focus-visible:rounded-md"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#101F49] font-[family-name:var(--font-display)] text-xs font-bold tracking-wider text-white transition-colors group-hover:bg-[#2F6BFF]"
          >
            FJ
          </span>
          <span className="flex flex-col">
            <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.12em] text-[#101F49] sm:text-[15px]">
              {EXECUTIVE_PROFILE.brandTitle}
            </span>
            <span className="hidden whitespace-nowrap text-[11px] font-medium tracking-wide text-[#475467] xl:block">
              CEO — ERHA Technologies
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-0.5 lg:flex xl:gap-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-md px-2 py-2 text-[12.5px] font-semibold tracking-wide transition-colors xl:px-3 xl:text-[13px] ${
                  isActive
                    ? "text-[#101F49]"
                    : "text-[#475467] hover:text-[#101F49]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-[#2F6BFF] xl:inset-x-3"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#101F49] px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-[#2F6BFF] hover:shadow-md sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#BDBFCC]/70 bg-white text-[#101F49] transition-colors hover:border-[#2F6BFF] hover:text-[#2F6BFF] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#BDBFCC]/40 bg-white shadow-lg lg:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMobileMenu}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#F4F5F8] font-semibold text-[#101F49]"
                        : "text-[#667085] hover:bg-[#F4F5F8] hover:text-[#101F49]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-[#2F6BFF]"
                      />
                    ) : null}
                  </Link>
                );
              })}

              <div className="mt-2 border-t border-[#E2E5EE] pt-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#101F49] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2F6BFF]"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
