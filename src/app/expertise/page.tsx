import type { Metadata } from "next";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { PageNavigator } from "@/components/PageNavigator";

export const metadata: Metadata = {
  title: "Expertise | Faiz Jillani — CTO of ERHA Technologies",
  description:
    "Core executive and technical capabilities in AI automation, intelligent chatbots, full-stack engineering, SaaS, WhatsApp Business, and BI.",
};

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseSection />
      <PageNavigator
        previous={{ label: "About the CTO", href: "/about" }}
        next={{ label: "Services", href: "/services" }}
      />
    </>
  );
}
