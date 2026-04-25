import type { ReactNode } from "react";
import { PlusGridBackground } from "./PlusGridBackground";
import { VerticalRulers } from "./VerticalRulers";

/**
 * Content sits in a centered, pointer-active column; viewport gutters stay
 * pointer-inactive so the fixed + grid (below) receives hover, matching hex.co.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-0 w-full min-w-0 flex-1">
      <PlusGridBackground />
      <VerticalRulers />
      <div
        className="pointer-events-none relative z-10 w-full min-w-0 pl-7 pr-7 sm:pl-9 sm:pr-9 md:pl-11 md:pr-11"
      >
        <div className="mx-auto w-full min-h-0 max-w-[1200px] min-w-0 flex-1 pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
