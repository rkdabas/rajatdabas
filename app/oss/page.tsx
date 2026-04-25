import { bricolage } from "@/app/fonts";
import { personal } from "@/data/profile";
import { GITHUB_HREF } from "@/lib/contact";
import { PageShell } from "@/components/layout/PageShell";
import { Header } from "@/components/sections/Header";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";
import { CornerButton } from "@/components/ui/CornerButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `OSS | ${personal.shortName}`,
  description: "Open source and featured repositories.",
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
            <p className="text-hex-muted-2 max-w-xl text-center text-base leading-relaxed">
              The interactive 3D stipple now lives on the{" "}
              <Link
                className="text-hex-foreground/90 underline decoration-hex-foreground/25 underline-offset-2 transition-colors hover:decoration-hex-foreground/50"
                href="/#sphere"
              >
                home page
              </Link>
              . Replace this copy with your own OSS program details, sponsors, and links.
            </p>
            <CornerButton href={GITHUB_HREF} size="md" external>
              View on GitHub
            </CornerButton>
          </section>
          <FooterSection />
        </main>
      </PageShell>
    </div>
  );
}
