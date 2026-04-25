import { bricolage } from "@/app/fonts";
import { achievements } from "@/data/profile";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-20"
    >
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-10 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Awards &amp; impact
        </h2>
        <div className="flex flex-col gap-10">
          <div>
            <h3
              className="text-hex-foreground/90 mb-3 text-sm font-semibold tracking-wide uppercase"
            >
              Professional
            </h3>
            <ul className="text-hex-muted-2 list-inside list-disc space-y-2 text-sm leading-relaxed md:list-outside md:pl-4">
              {achievements.professional.map((a, i) => (
                <li key={`p-${i}`}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-hex-foreground/90 mb-3 text-sm font-semibold tracking-wide uppercase"
            >
              Position of responsibility
            </h3>
            <ul className="text-hex-muted-2 space-y-4 text-sm">
              {achievements.positionOfResponsibility.map((p) => (
                <li key={p.title}>
                  <p className="text-hex-foreground font-medium">{p.title}</p>
                  <p className="text-hex-muted text-xs">{p.period}</p>
                  <p className="text-hex-muted-2 mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-hex-foreground/90 mb-3 text-sm font-semibold tracking-wide uppercase"
            >
              Competitive programming
            </h3>
            <ul className="text-hex-muted-2 list-inside list-disc space-y-2 text-sm leading-relaxed md:list-outside md:pl-4">
              {achievements.competitive.map((a, i) => (
                <li key={`c-${i}`}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-hex-foreground/90 mb-3 text-sm font-semibold tracking-wide uppercase"
            >
              Certifications
            </h3>
            <ul className="text-hex-muted-2 list-inside list-disc space-y-2 text-sm leading-relaxed md:list-outside md:pl-4">
              {achievements.certifications.map((a, i) => (
                <li key={`f-${i}`}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
