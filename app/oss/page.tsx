import { bricolage } from "@/app/fonts";
import { PageShell } from "@/components/layout/PageShell";
import { OssSphereBlock } from "@/components/oss/OssSphereBlock";
import { Header } from "@/components/sections/Header";
import { FooterSection } from "@/components/sections/FooterSection";
import { CornerButton } from "@/components/ui/CornerButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSS program | Portfolio",
  description: "Open source and community programs.",
};

export default function OssPage() {
  return (
    <div className="text-hex-foreground flex min-h-0 w-full min-w-0 flex-1 flex-col bg-hex-bg">
      <PageShell>
        <Header />
        <main className="w-full min-w-0 flex-1">
          <section className="flex w-full flex-col items-center gap-10 border-b border-hex-line/30 py-12 md:gap-14 md:py-20">
            <h1
              className={`${bricolage.className} text-center text-[1.6rem] font-normal leading-tight tracking-tight sm:text-3xl md:text-4xl`}
            >
              Open source program
            </h1>
            <OssSphereBlock />
            <p className="text-hex-muted-2 max-w-xl text-center text-base leading-relaxed">
              Point-cloud sphere (stippled dots on a Fibonacci sphere) with continuous
              rotation—same idea as hex.co/oss. Replace this copy with your own OSS details.
            </p>
            <CornerButton href="https://github.com" size="md" external>
              View on GitHub
            </CornerButton>
          </section>
          <FooterSection />
        </main>
      </PageShell>
    </div>
  );
}
