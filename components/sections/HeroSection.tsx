import { bricolage } from "@/app/fonts";
import { CornerButton } from "@/components/ui/CornerButton";
import { CONTACT_MAILTO } from "@/lib/contact";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-12 pt-10 md:pb-20 md:pt-14">
      <div className="relative z-[1] mx-auto flex w-full max-w-[1340px] flex-col items-center gap-6 text-center md:gap-8">
        <div className="border-hex-foreground/10 inline-flex items-center gap-2.5 rounded-full border border-dashed bg-white/50 px-4 py-1.5 text-sm text-hex-muted shadow-sm backdrop-blur-sm">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #ff8b17, #ff312f)" }}
          />
          <span>Backed by Y Combinator W26</span>
        </div>

        <h1
          className={`${bricolage.className} text-hex-foreground max-w-[900px] text-balance text-[2rem] font-normal leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.35rem]`}
        >
          Security at the speed of development.
        </h1>

        <p className="text-hex-muted-2 max-w-2xl text-balance text-base leading-relaxed md:text-lg">
          Autonomous AI agents that find vulnerabilities in your web apps, APIs, and
          infrastructure—continuously, not once a year.
        </p>

        <div className="pt-1">
          <CornerButton href={CONTACT_MAILTO} size="lg" external>
            Book a call
            <span
              className="text-hex-foreground/80 ml-2 text-xs font-normal"
              aria-hidden
            >
              ↗
            </span>
          </CornerButton>
        </div>
      </div>
    </section>
  );
}
