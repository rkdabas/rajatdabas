import { bricolage } from "@/app/fonts";
import { ProductTriageMock } from "./ProductTriageMock";

export function HowItWorksSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-12 text-center text-[1.5rem] font-normal leading-tight tracking-tight md:mb-16 md:text-[1.75rem] lg:text-[1.9rem]`}
        >
          Protected in minutes, not months.
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-6 xl:gap-10">
          <div>
            <h3
              className={`${bricolage.className} text-hex-foreground mb-3 text-lg font-medium md:text-xl`}
            >
              Connect
            </h3>
            <p className="text-hex-muted-2 text-base leading-relaxed">
              Point us at your application. No weeks of scoping.
            </p>
          </div>

          <div className="w-full min-w-0 max-w-full">
            <h3
              className={`${bricolage.className} text-hex-foreground mb-3 text-center text-lg font-medium md:text-left md:text-xl`}
            >
              Test
            </h3>
            <p className="text-hex-muted-2 mb-4 text-center text-base leading-relaxed md:text-left">
              Agents probe continuously: APIs, auth flows, business logic.
            </p>
            <div className="relative w-full min-w-0 max-w-full">
              <div
                className="pointer-events-none absolute -inset-1 rounded-[0.6rem] opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(255,49,47,0.2), transparent 50%), radial-gradient(ellipse at bottom, rgba(250,101,30,0.15), transparent 55%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <ProductTriageMock />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${bricolage.className} text-hex-foreground mb-3 text-lg font-medium md:text-xl`}
            >
              Report
            </h3>
            <p className="text-hex-muted-2 text-base leading-relaxed">
              Validated findings with reproduction steps and remediation guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
