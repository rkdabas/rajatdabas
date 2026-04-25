import { bricolage } from "@/app/fonts";
import { CornerButton } from "@/components/ui/CornerButton";

const calUrl = "https://anytool.cal.com/hex/demo";

export function FinalCtaSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-20 text-center md:py-28">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8">
        <h2
          className={`${bricolage.className} text-hex-foreground text-[1.5rem] font-normal leading-tight tracking-tight md:text-[1.9rem] lg:text-[2.1rem]`}
        >
          Ready to see what you&apos;re missing?
        </h2>
        <CornerButton href={calUrl} size="lg" external>
          Talk to us
          <span className="text-hex-foreground/80 ml-2 text-xs" aria-hidden>
            ↗
          </span>
        </CornerButton>
      </div>
    </section>
  );
}
