import Link from "next/link";
import { bricolage } from "@/app/fonts";
import { personal } from "@/data/profile";
import { CornerButton } from "@/components/ui/CornerButton";
import { CONTACT_MAILTO, GITHUB_HREF, LINKEDIN_HREF } from "@/lib/contact";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-hex-line/40 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p
            className={`${bricolage.className} text-hex-foreground text-2xl font-medium tracking-tight md:text-3xl`}
          >
            {personal.shortName}
          </p>
          <p className="text-hex-muted-2 mt-2 max-w-md text-sm">
            {personal.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap gap-3">
            <CornerButton href={CONTACT_MAILTO} size="md" external>
              Contact
            </CornerButton>
            <CornerButton href={GITHUB_HREF} size="md" external>
              GitHub
            </CornerButton>
            <CornerButton href={LINKEDIN_HREF} size="md" external>
              LinkedIn
            </CornerButton>
          </div>
        </div>
      </div>
      <div className="border-t border-hex-line/30">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 text-sm text-hex-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} {personal.shortName}. All rights reserved.
          </p>
          <ul className="order-1 flex flex-wrap items-center gap-4 font-medium md:order-2 md:gap-6">
            <li>
              <Link href="/oss" className="hover:text-hex-foreground transition-colors">
                OSS program
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_HREF}
                className="hover:text-hex-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                rkdabas
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_HREF}
                className="hover:text-hex-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
