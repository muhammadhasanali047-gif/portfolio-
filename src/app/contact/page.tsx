import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageNavigator } from "@/components/PageNavigator";

export const metadata: Metadata = {
  title: "Contact | Faiz Jillani — CTO of ERHA Technologies",
  description:
    "Connect directly with Faiz Jillani, CTO of ERHA Technologies, via email, phone, or an executive inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <PageNavigator
        previous={{ label: "ERHA Technologies", href: "/erha-technologies" }}
        next={{ label: "Return Home", href: "/" }}
      />
    </>
  );
}
