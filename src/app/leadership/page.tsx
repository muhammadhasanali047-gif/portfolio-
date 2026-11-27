import type { Metadata } from "next";
import { LeadershipSection } from "@/components/LeadershipSection";
import { PageNavigator } from "@/components/PageNavigator";

export const metadata: Metadata = {
  title: "Leadership & Vision | Faiz Jillani — CEO of ERHA Technologies",
  description:
    "Executive vision and leadership principles centered on Innovation, Leadership, and Growth at ERHA Technologies.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipSection />
      <PageNavigator
        previous={{ label: "Featured Projects", href: "/projects" }}
        next={{ label: "ERHA Technologies", href: "/erha-technologies" }}
      />
    </>
  );
}
