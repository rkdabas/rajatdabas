"use client";

import { startTransition, useCallback, useEffect, useState } from "react";
import { dmMono } from "@/app/fonts";

const STEP = 40;
const MAX_CELLS = 900;

type Grid = { cols: number; rows: number; cell: number };

function buildGrid(w: number, h: number): Grid {
  let cell = STEP;
  let cols = Math.ceil(w / cell);
  let rows = Math.ceil(h / cell);
  while (cols * rows > MAX_CELLS && cell < 72) {
    cell += 4;
    cols = Math.ceil(w / cell);
    rows = Math.ceil(h / cell);
  }
  return { cols, rows, cell };
}

export function PlusGridBackground() {
  /* Fixed initial grid: identical SSR/CSR; `measure` updates after mount. */
  const [grid, setGrid] = useState<Grid>({ cols: 28, rows: 40, cell: STEP });

  const measure = useCallback(() => {
    if (typeof window === "undefined") return;
    const next = buildGrid(window.innerWidth, window.innerHeight);
    startTransition(() => {
      setGrid(next);
    });
  }, []);

  useEffect(() => {
    const onResize = () => measure();
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const { cols, rows, cell } = grid;
  const count = cols * rows;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[2] select-none overflow-hidden"
      aria-hidden
    >
      <div
        className="flex h-full w-full flex-wrap content-start"
        style={{ width: `${cols * cell}px`, height: `${rows * cell}px` }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <PlusCell key={`${cell}-${i}`} size={cell} className={dmMono.className} />
        ))}
      </div>
    </div>
  );
}

function PlusCell({ size, className }: { size: number; className: string }) {
  return (
    <div
      className="pointer-events-none flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span
        className={[
          className,
          "font-extralight text-hex-foreground/[0.08]",
          "hover:text-hex-foreground/[0.2]",
          "pointer-events-none block origin-center p-0.5",
          "text-sm leading-none antialiased",
          "transition-[color,transform] duration-500 ease-out",
          "will-change-transform cursor-default select-none",
          "hover:scale-110",
          "sm:text-[0.9rem] sm:hover:scale-[1.12]",
        ].join(" ")}
        style={{ lineHeight: 0, fontFeatureSettings: '"tnum" 0' }}
      >
        +
      </span>
    </div>
  );
}
