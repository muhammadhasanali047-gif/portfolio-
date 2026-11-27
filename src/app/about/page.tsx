import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { PageNavigator } from "@/components/PageNavigator";
import { TimelineSection } from "@/components/TimelineSection";

export const metadata: Metadata = {
  title: "About | Faiz Jillani — CTO of ERHA Technologies",
  description:
    "Executive biography, leadership philosophy, and verified career record of Faiz Jillani, CTO of ERHA Technologies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <TimelineSection />
      <PageNavigator
        previous={{ label: "Home", href: "/" }}
        next={{ label: "Areas of Expertise", href: "/expertise" }}
      />
    </>
  );
}
