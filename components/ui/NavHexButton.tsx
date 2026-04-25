import Link from "next/link";
import type { ReactNode } from "react";
import { HexFramedBox } from "./HexFramedBox";

type NavHexButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

/**
 * Top-nav control: faint border, four corner + marks (matches hex.co OSS / Demo).
 */
export function NavHexButton({
  href,
  children,
  external = false,
  className: boxClassName = "",
}: NavHexButtonProps) {
  return (
    <HexFramedBox
      as="div"
      className={`inline-flex bg-hex-bg/90 ${boxClassName}`.trim()}
    >
      <Link
        href={href}
        className="text-hex-muted hover:text-hex-foreground min-w-0 px-3 py-2 text-sm font-medium transition-colors max-md:flex max-md:w-full max-md:items-center max-md:justify-center max-md:text-center"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </HexFramedBox>
  );
}
