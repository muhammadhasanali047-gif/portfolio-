import type { Metadata } from "next";
import { ErhaSection } from "@/components/ErhaSection";
import { PageNavigator } from "@/components/PageNavigator";

export const metadata: Metadata = {
  title: "ERHA Technologies | Led by Faiz Jillani",
  description:
    "Explore ERHA Technologies, led by CTO Faiz Jillani, offering AI automation, custom software, SaaS, cloud, DevOps, cybersecurity, and BI services.",
};

export default function ErhaTechnologiesPage() {
  return (
    <>
      <ErhaSection />
      <PageNavigator
        previous={{ label: "Projects", href: "/projects" }}
        next={{ label: "Executive Contact", href: "/contact" }}
      />
    </>
  );
}
