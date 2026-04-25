import { bricolage } from "@/app/fonts";
import { OssSphereBlock } from "@/components/oss/OssSphereBlock";

export function SphereSection() {
  return (
    <section
      id="sphere"
      className="relative w-full scroll-mt-8 border-t border-hex-line/20 bg-transparent"
      aria-labelledby="sphere-section-heading"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-8 px-4 py-20 sm:px-6 sm:py-24 md:gap-10 md:px-10 md:py-28">
        <div className="text-center">
          <h2
            id="sphere-section-heading"
            className={`${bricolage.className} text-hex-foreground/90 text-lg font-normal tracking-tight sm:text-xl`}
          >
            Continuous surface
          </h2>
          <p className="text-hex-muted-2 mt-2 max-w-md text-balance text-sm sm:text-base">
            Hover the cloud—points bulge under the pointer while the field keeps
            turning.
          </p>
        </div>
        <OssSphereBlock />
      </div>
    </section>
  );
}
