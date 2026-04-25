import { bricolage } from "@/app/fonts";
import { personal } from "@/data/profile";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";

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

        <p className="text-hex-muted-2 max-w-5xl text-balance text-base leading-relaxed md:text-lg">
          {personal.tagline}
        </p>

        <SocialIconLinks className="flex flex-wrap items-center justify-center gap-1 pt-1" />
      </div>
    </section>
  );
}
