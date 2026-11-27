import { WhatsAppIcon } from "@/components/BrandIcons";
import { EXECUTIVE_PROFILE } from "@/data/portfolio";

export function WhatsAppButton() {
  return (
    <a
      href={EXECUTIVE_PROFILE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#101F49] text-white shadow-[0_14px_30px_-8px_rgba(16,31,73,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white hover:shadow-[0_16px_32px_-8px_rgba(37,211,102,0.55)] sm:right-6 sm:bottom-6 sm:h-13 sm:w-auto sm:gap-2 sm:px-4"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-xs font-semibold tracking-wide sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
