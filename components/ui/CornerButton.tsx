import Link from "next/link";
import type { ReactNode } from "react";
import { HexFramedBox } from "./HexFramedBox";

type CornerButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  external?: boolean;
};

const sizeClasses = {
  md: "px-4 py-2 text-sm",
  lg: "px-7 py-3 text-sm md:text-base",
} as const;

export function CornerButton({
  href,
  children,
  className = "",
  size = "md",
  external = true,
}: CornerButtonProps) {
  return (
    <HexFramedBox
      as="div"
      className={`inline-flex ${className} bg-hex-bg transition-opacity hover:opacity-90`}
    >
      <Link
        href={href}
        className={`${sizeClasses[size]} text-hex-foreground inline-flex items-center justify-center font-medium tracking-tight`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </HexFramedBox>
  );
}
