import { bricolage } from "@/app/fonts";

export function VulnerabilitiesSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-16 md:py-24">
      <div className="text-hex-foreground mx-auto max-w-[1000px]">
        <h2
          className={`${bricolage.className} mb-8 text-[1.5rem] font-normal leading-tight tracking-tight md:mb-10 md:text-[1.6rem] lg:text-[1.8rem]`}
        >
          The vulnerabilities that matter.
        </h2>
        <p className="text-hex-muted-2 mb-5 text-base leading-[1.65] md:text-lg">
          SQL injection exposing 947 billion records. Broken access controls leaking
          data across accounts. Authentication bypasses enabling full account
          takeover.
        </p>
        <p className="text-hex-foreground/90 text-base font-medium leading-relaxed">
          Every finding validated with a working proof-of-concept. No false positives.
        </p>
      </div>
    </section>
  );
}
