import { bricolage } from "@/app/fonts";
import { skills } from "@/data/profile";
import { SkillIconMarquee } from "@/components/sections/SkillIconMarquee";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "aiml", label: "AI & ML" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "cloud", label: "Cloud & DevOps" },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-6 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Skills
        </h2>
        <p className="text-hex-muted-2 mb-6 text-center text-sm md:text-base">
          Technologies I've worked with to build products.
        </p>
        <div className="mb-10">
          <SkillIconMarquee />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map(({ key, label }) => (
            <div
              key={key}
              className="border-hex-line/20 bg-hex-foreground/3 rounded-2xl border p-4 md:p-5"
            >
              <h3 className="text-hex-foreground/85 mb-2 text-sm font-semibold">
                {label}
              </h3>
              <p className="text-hex-muted-2 text-sm leading-relaxed">
                {skills[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
