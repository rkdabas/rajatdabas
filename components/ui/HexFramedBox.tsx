import type { ReactNode } from "react";

function MiniCornerPlus() {
  return (
    <span className="pointer-events-none relative block h-2.5 w-2.5" aria-hidden>
      <span className="bg-hex-foreground absolute left-1/2 top-0 h-full w-px -translate-x-1/2" />
      <span className="bg-hex-foreground absolute left-0 top-1/2 h-px w-full -translate-y-1/2" />
    </span>
  );
}

type HexFramedBoxProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "div";
};

/**
 * Faded full border with small + marks at the four outer corners (hex.co nav / CTA).
 */
export function HexFramedBox({ children, className = "", as: Tag = "span" }: HexFramedBoxProps) {
  return (
    <Tag className={`relative inline-flex ${className}`}>
      <span
        className="border-hex-foreground/18 pointer-events-none absolute inset-0 border"
        aria-hidden
      />
      <span className="absolute -left-[5px] -top-[5px]">
        <MiniCornerPlus />
      </span>
      <span className="absolute -right-[5px] -top-[5px]">
        <MiniCornerPlus />
      </span>
      <span className="absolute -bottom-[5px] -left-[5px]">
        <MiniCornerPlus />
      </span>
      <span className="absolute -right-[5px] -bottom-[5px]">
        <MiniCornerPlus />
      </span>
      {children}
    </Tag>
  );
}
