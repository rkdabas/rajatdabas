import { PageShell } from "@/components/layout/PageShell";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CodingActivitySection } from "@/components/sections/CodingActivitySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectTreeSection } from "@/components/sections/ProjectTreeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="text-hex-foreground flex min-h-0 w-full min-w-0 flex-1 flex-col bg-hex-bg">
      <PageShell>
        <Header />
        <main className="w-full min-w-0 flex-1">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <CodingActivitySection />
          <ProjectTreeSection />
          <AchievementsSection />
          <FinalCtaSection />
          <FooterSection />
        </main>
      </PageShell>
    </div>
  );
}
