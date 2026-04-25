import Link from "next/link";
import type { ReactNode } from "react";
import { HexFramedBox } from "./HexFramedBox";

type NavHexButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

/**
 * Top-nav control: faint border, four corner + marks (matches hex.co OSS / Demo).
 */
export function NavHexButton({ href, children, external = false }: NavHexButtonProps) {
  return (
    <HexFramedBox as="div" className="inline-flex bg-hex-bg/90">
      <Link
        href={href}
        className="text-hex-muted hover:text-hex-foreground px-3 py-2 text-sm font-medium transition-colors"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </HexFramedBox>
  );
}
