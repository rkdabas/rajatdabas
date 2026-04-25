import { bricolage } from "@/app/fonts";

const GITHUB_USERNAME = "rkdabas";
const LEETCODE_USERNAME = "little-angel";

const githubGridUrl = `https://ghchart.rshah.org/${GITHUB_USERNAME}`;
const leetcodeCardUrl = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=light&font=Karma&ext=heatmap`;

export function CodingActivitySection() {
  return (
    <section
      id="coding-activity"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-3 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Coding Activity
        </h2>
        <p className="text-hex-muted-2 mx-auto mb-10 max-w-2xl text-center text-sm md:text-base">
          Contribution heatmaps from GitHub and LeetCode.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="border-hex-line/20 bg-hex-foreground/3 rounded-2xl border p-4 md:col-span-2 md:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-hex-foreground/90 text-sm font-semibold uppercase tracking-wide">
                GitHub contributions
              </h3>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                className="text-hex-muted hover:text-hex-foreground text-xs transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile
              </a>
            </div>
            <img
              src={githubGridUrl}
              alt="GitHub contribution graph"
              className="w-full rounded-lg bg-white p-1 md:p-2"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </article>

          <article className="border-hex-line/20 bg-hex-foreground/3 rounded-2xl border p-4 md:col-span-1 md:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-hex-foreground/90 text-sm font-semibold uppercase tracking-wide">
                LeetCode heatmap
              </h3>
              <a
                href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                className="text-hex-muted hover:text-hex-foreground text-xs transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile
              </a>
            </div>
            <img
              src={leetcodeCardUrl}
              alt="LeetCode activity heatmap"
              className="w-full rounded-lg bg-white p-2"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
