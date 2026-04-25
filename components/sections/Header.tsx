"use client";

import Link from "next/link";
import { useState } from "react";
import { bricolage } from "@/app/fonts";
import { NavHexButton } from "@/components/ui/NavHexButton";

const primaryCta = "https://anytool.cal.com/hex/demo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-hex-line/40 relative z-50 w-full border-b border-dashed bg-hex-bg/50 backdrop-blur-sm">
      <div className="mx-auto flex w-full flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full min-w-0 items-center justify-between md:w-auto">
          <Link
            href="/"
            className={`${bricolage.className} text-hex-foreground shrink-0 text-lg font-medium tracking-tight md:text-xl`}
          >
            Portfolio
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
            "flex w-full max-w-full flex-1 flex-col items-stretch gap-4 " +
            "md:w-auto md:flex-initial md:flex-row md:items-center md:gap-12 lg:gap-16 " +
            (open ? "" : " max-md:hidden")
          }
        >
          <ul className="text-hex-muted flex flex-col gap-4 text-sm font-medium md:ml-auto md:flex-row md:items-center md:gap-8 lg:gap-12">
            <li>
              <NavHexButton href="/oss">OSS Program</NavHexButton>
            </li>
            <li>
              <NavHexButton href={primaryCta} external>
                Demo
              </NavHexButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
