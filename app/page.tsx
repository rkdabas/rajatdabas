import { PageShell } from "@/components/layout/PageShell";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { VulnerabilitiesSection } from "@/components/sections/VulnerabilitiesSection";
import { SphereSection } from "@/components/sections/SphereSection";

export default function Home() {
  return (
    <div className="text-hex-foreground flex min-h-0 w-full min-w-0 flex-1 flex-col bg-hex-bg">
      <PageShell>
        <Header />
        <main className="w-full min-w-0 flex-1">
          <HeroSection />
          <SphereSection />
          <ProblemSection />
          <FoundersSection />
          <VulnerabilitiesSection />
          <HowItWorksSection />
          <TrustSection />
          <FinalCtaSection />
          <FooterSection />
        </main>
      </PageShell>
    </div>
  );
}
