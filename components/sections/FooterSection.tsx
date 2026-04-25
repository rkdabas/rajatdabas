import { personal } from "@/data/profile";
import { UniqueVisitorCount } from "@/components/UniqueVisitorCount";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-hex-line/40 bg-transparent">
      <div className="border-t border-hex-line/30">
        <div
          className="mx-auto grid w-full max-w-[1200px] grid-cols-1 content-center items-center justify-items-center gap-4 px-4 py-8 text-sm text-hex-muted sm:px-6 md:grid-cols-3 md:items-center md:gap-6 md:justify-items-stretch"
        >
          <p className="order-1 max-w-full text-balance text-center md:order-1 md:justify-self-start md:text-left">
            © {new Date().getFullYear()} {personal.shortName}. All rights
            reserved.
          </p>
          <div className="order-2 flex w-full min-w-0 justify-center md:order-2">
            <UniqueVisitorCount className="text-center" />
          </div>
          <div className="order-3 flex w-full min-w-0 flex-wrap items-center justify-center gap-1 md:order-3 md:justify-end">
            <SocialIconLinks className="flex flex-wrap items-center justify-center gap-1 md:justify-end" />
          </div>
        </div>
      </div>
    </footer>
  );
}
