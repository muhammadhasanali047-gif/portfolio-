"use client";

import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

// Split contact parts so static SSR HTML does not expose raw email/phone to scrapers
const EMAIL_PARTS = ["info", "erhatechnologies", "com"] as const;
const PHONE_PARTS = ["+92", "328", "137", "3200"] as const;

export function getAssembledEmail(): string {
  return `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;
}

export function getAssembledPhone(): { raw: string; display: string } {
  return {
    raw: PHONE_PARTS.join(""),
    display: PHONE_PARTS.join(" "),
  };
}

export function useProtectedContact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    email: mounted ? getAssembledEmail() : "info [at] erhatechnologies.com",
    emailHref: mounted ? `mailto:${getAssembledEmail()}` : "#contact",
    phoneRaw: mounted ? getAssembledPhone().raw : "",
    phoneDisplay: mounted
      ? getAssembledPhone().display
      : "+92 328 ••• ••••",
    phoneHref: mounted ? `tel:${getAssembledPhone().raw}` : "#contact",
  };
}

export function ProtectedEmailLink({
  className,
}: {
  className?: string;
}) {
  const { email, emailHref } = useProtectedContact();
  return (
    <a href={emailHref} className={className}>
      <Mail className="h-4 w-4 text-[#2F6BFF]" aria-hidden="true" />
      <span>{email}</span>
    </a>
  );
}

export function ProtectedPhoneLink({
  className,
}: {
  className?: string;
}) {
  const { phoneDisplay, phoneHref } = useProtectedContact();
  return (
    <a href={phoneHref} className={className}>
      <Phone className="h-4 w-4 text-[#2F6BFF]" aria-hidden="true" />
      <span>{phoneDisplay}</span>
    </a>
  );
}
