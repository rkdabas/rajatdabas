import { dmMono } from "@/app/fonts";

const marks = [200, 250, 300] as const;

/**
 * Fixed left/right column labels (hex.co layout) — vertical ruler-style numbers.
 * Hidden on small viewports; shown from `md` and up (cleaner on phones; avoids edge clutter).
 */
export function VerticalRulers() {
  return (
    <>
      <Ruler column="left" />
      <Ruler column="right" />
    </>
  );
}

function Ruler({ column }: { column: "left" | "right" }) {
  const position =
    column === "left" ? "left-0 pl-1.5 md:pl-2" : "right-0 pr-1.5 md:pr-2";
  const items = Array.from({ length: 12 }, (_, i) => marks[i % 3]);

  return (
    <div
      className={`text-hex-foreground/35 ${dmMono.className} pointer-events-none fixed top-0 z-20 hidden h-full w-8 flex-col justify-between border-hex-foreground/10 py-6 text-[9px] font-medium leading-none antialiased sm:w-9 sm:py-10 sm:text-[10px] md:flex md:w-10 ${position} ${column === "right" ? "items-end border-l" : "items-start border-r"}`}
      aria-hidden
    >
      {items.map((n, i) => (
        <span key={`${column}-${i}-${n}`} className="tabular-nums tracking-tight opacity-90">
          {n}
        </span>
      ))}
    </div>
  );
}
