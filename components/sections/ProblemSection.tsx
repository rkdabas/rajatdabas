import { bricolage } from "@/app/fonts";

export function ProblemSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-16 md:py-24">
      <div className="text-hex-foreground mx-auto max-w-[1000px]">
        <h2
          className={`${bricolage.className} mb-8 text-[1.5rem] font-normal leading-tight tracking-tight md:mb-10 md:text-[1.6rem] lg:text-[1.8rem]`}
        >
          You test once a year. Attackers probe every hour.
        </h2>
        <p className="text-hex-muted-2 text-base leading-[1.65] md:text-lg">
          Manual security assessments take weeks, cost six figures, and deliver
          reports outdated by the time you read them. Scanners catch the obvious
          stuff. Neither finds the vulnerabilities that actually lead to breaches.
        </p>
      </div>
    </section>
  );
}
