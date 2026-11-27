import type { Metadata } from "next";
import { PageNavigator } from "@/components/PageNavigator";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Faiz Jillani — CTO of ERHA Technologies",
  description:
    "Featured intelligent software and automation categories including WhatsApp chatbots, email and LinkedIn automation, AI workflows, and BI analytics.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <PageNavigator
        previous={{ label: "Services", href: "/services" }}
        next={{ label: "ERHA Technologies", href: "/erha-technologies" }}
      />
    </>
  );
}
