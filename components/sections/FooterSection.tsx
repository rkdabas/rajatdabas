import Link from "next/link";
import { bricolage } from "@/app/fonts";
import { CornerButton } from "@/components/ui/CornerButton";
import { CONTACT_MAILTO } from "@/lib/contact";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-hex-line/40 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="border-hex-foreground/10 mb-5 inline-flex items-center gap-2.5 rounded-full border border-dashed bg-white/40 px-3 py-1.5 text-xs text-hex-muted">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #ff8b17, #ff312f)" }}
            />
            Backed by Y Combinator W26
          </div>
          <p
            className={`${bricolage.className} text-hex-foreground text-2xl font-medium tracking-tight md:text-3xl`}
          >
            Hex Security
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <CornerButton href={CONTACT_MAILTO} size="md" external>
            Contact
            <span className="ml-1.5 text-xs" aria-hidden>
              ↗
            </span>
          </CornerButton>
        </div>
      </div>
      <div className="border-t border-hex-line/30">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 py-8 text-sm text-hex-muted md:flex-row md:items-center md:justify-between">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} All rights reserved.</p>
          <ul className="order-1 flex flex-wrap items-center gap-6 font-medium md:order-2">
            <li>
              <Link href="/oss" className="hover:text-hex-foreground transition-colors">
                OSS Program
              </Link>
            </li>
            <li>
              <Link
                href={CONTACT_MAILTO}
                className="hover:text-hex-foreground transition-colors"
              >
                Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
