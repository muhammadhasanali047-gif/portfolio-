import { Reveal } from "@/components/MotionPrimitives";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  titleId?: string;
  as?: "h1" | "h2";
  immediate?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  theme = "light",
  align = "center",
  titleId,
  as = "h1",
  immediate = true,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isCentered = align === "center";
  const HeadingTag = as;

  return (
    <Reveal
      immediate={immediate}
      className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div
        className={`mb-3.5 inline-flex items-center gap-2.5 ${
          isCentered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true" className="h-px w-6 bg-[#2F6BFF]" />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-[#D0D5E4]" : "text-[#2F6BFF]"
          }`}
        >
          {eyebrow}
        </span>
        {isCentered ? (
          <span aria-hidden="true" className="h-px w-6 bg-[#2F6BFF]" />
        ) : null}
      </div>

      <HeadingTag
        id={titleId}
        className={`font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-[2.625rem] lg:leading-[1.15] ${
          isDark ? "text-white" : "text-[#101F49]"
        }`}
      >
        {title}
      </HeadingTag>

      {subtitle ? (
        <p
          className={`mt-3.5 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-[#E2E5EE]" : "text-[#344054]"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
