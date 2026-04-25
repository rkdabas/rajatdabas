import { bricolage } from "@/app/fonts";

export function TrustSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-16 md:py-24">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-12 md:gap-16">
        <div>
          <h2
            className={`${bricolage.className} text-hex-foreground mb-4 text-[1.5rem] font-normal leading-tight tracking-tight md:text-[1.6rem]`}
          >
            Built by security researchers.
          </h2>
        </div>
        <div>
          <h2
            className={`${bricolage.className} text-hex-foreground mb-4 text-[1.5rem] font-normal leading-tight tracking-tight md:text-[1.6rem]`}
          >
            Tested in production.
          </h2>
          <p className="text-hex-muted-2 text-base leading-[1.7] md:text-lg">
            We built AI agents that reason like elite security researchers, running
            continuously against your systems. Our methodology has uncovered
            critical vulnerabilities at countless unicorns and now the same approach
            is protecting yours.
          </p>
        </div>
      </div>
    </section>
  );
}
