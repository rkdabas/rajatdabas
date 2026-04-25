import Link from "next/link";
import { bricolage, dmMono } from "@/app/fonts";
import { featuredProjects } from "@/data/featuredProjects";
import { GITHUB_HREF } from "@/lib/contact";

const sorted = [...featuredProjects].sort((a, b) => a.treeOrder - b.treeOrder);

/** Hub at (50, 10), leaves y=28, x spread for 7 nodes in viewBox 0 0 100 32 */
const leafX = [6, 19, 32, 45, 58, 71, 86];

function TreeArt() {
  return (
    <svg
      className="text-hex-foreground/30 pointer-events-none w-full max-w-4xl -mb-2 h-20 md:mb-0 md:h-28"
      viewBox="0 0 100 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 50 4 L 50 10"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
      />
      {leafX.map((x) => (
        <path
          key={x}
          d={`M 50 10 L ${x} 28`}
          stroke="currentColor"
          strokeWidth="0.35"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function ProjectTreeSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 w-full border-t border-hex-line/30 bg-transparent py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          className={`${bricolage.className} text-hex-foreground mb-2 text-center text-2xl font-normal tracking-tight md:text-3xl`}
        >
          Proof of Work
        </h2>
        <p className="text-hex-muted-2 mb-4 text-center text-sm md:mb-8 md:text-base">
        </p>
        <div className="flex flex-col items-center">
          <Link
            href={GITHUB_HREF}
            className="border-hex-foreground/15 bg-hex-foreground/5 text-hex-foreground hover:border-hex-foreground/30 hover:bg-hex-foreground/8 relative z-[1] inline-flex min-w-[8rem] items-center justify-center rounded-2xl border px-4 py-2.5 text-sm font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`${dmMono.className} text-sm tracking-tight`}>
              @rkdabas
            </span>
            <span
              className="text-hex-muted-2 ml-1.5 text-xs font-normal"
              aria-hidden
            >
              ↗
            </span>
          </Link>
          <TreeArt />
        </div>
        <ul className="border-hex-line/15 relative z-[1] mt-0 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((p) => (
            <li key={p.id} className="min-w-0">
              <Link
                href={p.href}
                className="border-hex-foreground/12 bg-hex-foreground/4 hover:border-hex-foreground/30 hover:bg-hex-foreground/7 group block h-full rounded-2xl border p-4 transition-all duration-200 md:p-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3
                  className={`${bricolage.className} text-hex-foreground group-hover:text-hex-foreground line-clamp-1 text-base font-medium`}
                >
                  {p.name}
                </h3>
                <p className="text-hex-muted-2 group-hover:text-hex-muted line-clamp-3 mt-2 min-h-14 text-sm leading-relaxed">
                  {p.description}
                </p>
                <p className="text-hex-muted-2 mt-3 flex flex-wrap gap-1.5 text-xs">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-hex-foreground/5 rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </p>
                <p
                  className={`${dmMono.className} text-hex-muted-2 group-hover:text-hex-muted mt-2 truncate text-xs`}
                >
                  {p.href.replace("https://", "")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
