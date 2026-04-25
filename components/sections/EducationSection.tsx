import { bricolage } from "@/app/fonts";
import { education } from "@/data/profile";

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-20"
    >
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-6 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Education
        </h2>
        <div className="bg-hex-foreground/5 border-hex-line/25 rounded-2xl border p-6 text-center md:text-left">
          <p className="text-hex-foreground text-lg font-medium">
            {education.school}
          </p>
          <p className="text-hex-muted-2 mt-1 text-sm">
            {education.location}
          </p>
          <p className="text-hex-foreground/90 mt-2">{education.degree}</p>
        </div>
      </div>
    </section>
  );
}
