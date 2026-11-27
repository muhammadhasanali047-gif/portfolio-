import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ErhaSection } from "@/components/ErhaSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HeroSection } from "@/components/HeroSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TimelineSection } from "@/components/TimelineSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection isStandalonePage={false} />
      <ExpertiseSection isStandalonePage={false} />
      <ServicesSection isStandalonePage={false} />
      <ProjectsSection isStandalonePage={false} />
      <LeadershipSection isStandalonePage={false} />
      <ErhaSection isStandalonePage={false} />
      <TimelineSection />
      <ContactSection isStandalonePage={false} />
    </>
  );
}
