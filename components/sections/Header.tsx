"use client";

import Link from "next/link";
import { useState } from "react";
import { bricolage } from "@/app/fonts";
import { NavHexButton } from "@/components/ui/NavHexButton";
import { personal } from "@/data/profile";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#coding-activity", label: "Coding" },
  { href: "/#projects", label: "Projects" },
  { href: "/#achievements", label: "Awards" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-hex-line/40 relative z-50 w-full border-b border-dashed bg-hex-bg/50 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full min-w-0 items-center justify-between md:w-auto">
          <Link
            href="/#about"
            className={`${bricolage.className} text-hex-foreground shrink-0 text-lg font-medium tracking-tight md:text-xl`}
          >
            {personal.shortName}
          </Link>
          <button
            type="button"
            className="text-hex-foreground relative flex h-9 w-9 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={
                open
                  ? "bg-hex-foreground absolute top-1/2 h-0.5 w-[18px] -translate-y-1/2 rotate-45"
                  : "bg-hex-foreground absolute top-[10px] h-0.5 w-[18px] translate-y-0"
              }
            />
            <span
              className={
                open
                  ? "bg-hex-foreground absolute top-1/2 h-0.5 w-[18px] -translate-y-1/2 -rotate-45"
                  : "bg-hex-foreground absolute bottom-[10px] h-0.5 w-[18px] translate-y-0"
              }
            />
          </button>
        </div>

        <nav
          className={
            "flex w-full max-w-full flex-1 flex-col items-stretch gap-3 " +
            "md:w-auto md:flex-initial md:flex-row md:items-center md:justify-end md:gap-2 lg:gap-4 " +
            (open ? "" : " max-md:hidden")
          }
        >
          <ul className="text-hex-muted flex flex-col gap-3 text-sm font-medium md:ml-0 md:flex-row md:flex-wrap md:items-center md:gap-x-2 md:gap-y-2 lg:gap-x-4">
            {nav.map((item) => (
              <li key={item.href}>
                <NavHexButton href={item.href}>{item.label}</NavHexButton>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
