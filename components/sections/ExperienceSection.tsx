import { bricolage, dmMono } from "@/app/fonts";
import { experience, type ExperienceEntry } from "@/data/profile";

function formatWindow(e: ExperienceEntry) {
  const a = e.start;
  const b = e.isCurrent ? "Present" : e.end;
  return `${a} — ${b}`;
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-2 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Professional Experience
        </h2>
        {/* <p className="text-hex-muted-2 mb-10 text-center text-sm md:text-base">
          Roles from resume and LinkedIn, most recent first.
        </p> */}
        <ol className="border-hex-line/25 flex flex-col gap-10 border-l-2 pl-6 md:pl-8">
          {experience.map((e) => (
            <li key={`${e.company}-${e.start}`} className="relative">
              <span
                className="bg-hex-bg border-hex-foreground/25 absolute -left-[calc(0.5rem+2px)] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border md:-left-[calc(1.25rem+1px)]"
                aria-hidden
              />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3
                    className={`${bricolage.className} text-hex-foreground text-lg font-medium md:text-xl`}
                  >
                    {e.title}
                  </h3>
                  <p className="text-hex-foreground/90 mt-0.5 text-base">
                    {e.company}
                    {e.type ? ` · ${e.type}` : ""}
                    {e.mode ? ` · ${e.mode}` : ""}
                  </p>
                  {e.location ? (
                    <p className="text-hex-muted-2 text-sm">{e.location}</p>
                  ) : null}
                </div>
                <p
                  className={`${dmMono.className} text-hex-muted mt-2 shrink-0 text-xs md:mt-0 md:text-right`}
                >
                  {formatWindow(e)}
                </p>
              </div>
              <ul className="text-hex-muted-2 mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed md:list-outside md:pl-4">
                {e.bullets.map((b, i) => (
                  <li key={`${e.start}-${e.company}-b${i}`}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
