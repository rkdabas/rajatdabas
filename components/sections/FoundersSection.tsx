import Image from "next/image";
import { bricolage } from "@/app/fonts";

const people = [
  { name: "Huzaifa", image: "https://i.pravatar.cc/200?img=12" },
  { name: "Prama", image: "https://i.pravatar.cc/200?img=47" },
  { name: "Ahmad", image: "https://i.pravatar.cc/200?img=33" },
] as const;

export function FoundersSection() {
  return (
    <section className="w-full border-t border-hex-line/30 bg-transparent py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-stretch justify-center gap-8 sm:flex-row sm:items-end sm:justify-center md:gap-16">
        {people.map((p) => (
          <div key={p.name} className="flex flex-1 flex-col items-center text-center sm:min-w-0 sm:max-w-[200px]">
            <div className="mb-3 h-[200px] w-full max-w-[200px] overflow-hidden rounded-2xl bg-hex-line/20 shadow-inner sm:h-[180px] sm:max-w-[180px]">
              <Image
                src={p.image}
                alt={`${p.name} portrait`}
                width={200}
                height={200}
                className="h-full w-full object-cover"
                sizes="(max-width: 640px) 100vw, 180px"
                unoptimized
              />
            </div>
            <p className={`${bricolage.className} text-hex-foreground text-base font-medium`}>
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
