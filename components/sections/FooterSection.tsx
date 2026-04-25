import { personal } from "@/data/profile";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-hex-line/40 bg-transparent">
      <div className="border-t border-hex-line/30">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-8 text-sm text-hex-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="order-2 text-center md:order-1 md:text-left">
            © {new Date().getFullYear()} {personal.shortName}. All rights reserved.
          </p>
          <SocialIconLinks className="order-1 flex flex-wrap items-center justify-center gap-1 md:order-2 md:justify-end" />
        </div>
      </div>
    </footer>
  );
}
