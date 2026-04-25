import Link from "next/link";
import { bricolage } from "@/app/fonts";
import { personal } from "@/data/profile";
import { CornerButton } from "@/components/ui/CornerButton";
import { CONTACT_MAILTO, GITHUB_HREF, RESUME_PDF } from "@/lib/contact";

export function HeroSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative w-full overflow-hidden bg-transparent pb-12 pt-10 md:pb-20 md:pt-14"
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-[1340px] flex-col items-center gap-6 text-center md:gap-8">
        <div className="border-hex-foreground/10 inline-flex items-center gap-2.5 rounded-full border border-dashed bg-white/50 px-4 py-1.5 text-sm text-hex-muted shadow-sm backdrop-blur-sm">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
            aria-hidden
          />
          <span>Software Engineer @ Paytm</span>
        </div>

        <h1
          className={`${bricolage.className} text-hex-foreground max-w-[900px] text-balance text-[2rem] font-normal leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.35rem]`}
        >
          {personal.name}
        </h1>

        <p className="text-hex-muted-2 max-w-2xl text-balance text-base leading-relaxed md:text-lg">
          {personal.tagline}
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center">
          <CornerButton href={GITHUB_HREF} size="lg" external>
            GitHub
            <span
              className="text-hex-foreground/80 ml-2 text-xs font-normal"
              aria-hidden
            >
              ↗
            </span>
          </CornerButton>
          <CornerButton href={CONTACT_MAILTO} size="lg" external>
            Email
            <span
              className="text-hex-foreground/80 ml-2 text-xs font-normal"
              aria-hidden
            >
              ↗
            </span>
          </CornerButton>
          <Link
            href={RESUME_PDF}
            className="border-hex-foreground/15 text-hex-foreground/90 hover:border-hex-foreground/30 hover:bg-hex-foreground/4 inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-2xl border-2 border-dotted px-4 text-sm font-medium transition-colors"
          >
            Download resume
          </Link>
        </div>
      </div>
    </section>
  );
}
