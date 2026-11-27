import type { Metadata } from "next";
import { PageNavigator } from "@/components/PageNavigator";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services | Faiz Jillani — ERHA Technologies",
  description:
    "Explore AI automation, custom software, SaaS, web, mobile, cloud, DevOps, cybersecurity, UI/UX, and BI consulting services at ERHA Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <PageNavigator
        previous={{ label: "Areas of Expertise", href: "/expertise" }}
        next={{ label: "Featured Projects", href: "/projects" }}
      />
    </>
  );
}
