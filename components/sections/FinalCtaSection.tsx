import { bricolage } from "@/app/fonts";
import { CornerButton } from "@/components/ui/CornerButton";
import { CONTACT_MAILTO, GITHUB_HREF } from "@/lib/contact";

export function FinalCtaSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-20 text-center md:py-28">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8 px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground text-[1.5rem] font-normal leading-tight tracking-tight md:text-[1.9rem] lg:text-[2.1rem]`}
        >
          Let&apos;s Build It.
        </h2>
        <p className="text-hex-muted-2 text-balance text-base">
          Open to collaborations about back-end, data systems, and AI tooling.
          Reach out by email or on GitHub.
        </p>
      </div>
    </section>
  );
}
