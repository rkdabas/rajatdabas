import { Fragment, type ReactNode } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siAnthropic,
  siCplusplus,
  siCss,
  siDocker,
  siElasticsearch,
  siExpress,
  siFastapi,
  siGit,
  siGithubactions,
  siGrafana,
  siHtml5,
  siHuggingface,
  siJavascript,
  siKibana,
  siLangchain,
  siModelcontextprotocol,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siOllama,
  siOpenapiinitiative,
  siOpenjdk,
  siPostgresql,
  siPrometheus,
  siPython,
  siQdrant,
  siReact,
  siRedis,
  siRedux,
  siSocketdotio,
  siSpringboot,
  siSqlite,
  siTailwindcss,
  siTimescale,
  siTypescript,
  siXyflow,
} from "simple-icons";

type IconEntry = { name: string; data: SimpleIcon } | { name: string; custom: "aws" | "pinecone" | "weaviate" };

/** Order matches `data/profile` skills: languages → AI/ML → frontend → backend → DB → cloud. */
const iconEntries: IconEntry[] = [
  { name: "JavaScript", data: siJavascript },
  { name: "TypeScript", data: siTypescript },
  { name: "Python", data: siPython },
  { name: "Java", data: siOpenjdk },
  { name: "C++", data: siCplusplus },
  { name: "SQL", data: siPostgresql },
  { name: "HTML5", data: siHtml5 },
  { name: "CSS3", data: siCss },
  { name: "RAG", data: siOllama },
  { name: "Pinecone", custom: "pinecone" },
  { name: "Weaviate", custom: "weaviate" },
  { name: "Qdrant", data: siQdrant },
  { name: "LLM", data: siAnthropic },
  { name: "LangChain", data: siLangchain },
  { name: "Hugging Face", data: siHuggingface },
  { name: "MCP", data: siModelcontextprotocol },
  { name: "React", data: siReact },
  { name: "Next.js", data: siNextdotjs },
  { name: "React Flow", data: siXyflow },
  { name: "Tailwind CSS", data: siTailwindcss },
  { name: "Redux", data: siRedux },
  { name: "Zustand", data: siNpm },
  { name: "Node.js", data: siNodedotjs },
  { name: "Express", data: siExpress },
  { name: "FastAPI", data: siFastapi },
  { name: "Spring Boot", data: siSpringboot },
  { name: "REST", data: siOpenapiinitiative },
  { name: "WebSockets", data: siSocketdotio },
  { name: "MySQL", data: siMysql },
  { name: "Redis", data: siRedis },
  { name: "TimescaleDB", data: siTimescale },
  { name: "Elasticsearch", data: siElasticsearch },
  { name: "MongoDB", data: siMongodb },
  { name: "SQLite", data: siSqlite },
  { name: "AWS", custom: "aws" },
  { name: "CI/CD (GitHub Actions)", data: siGithubactions },
  { name: "Docker", data: siDocker },
  { name: "Prometheus", data: siPrometheus },
  { name: "Grafana", data: siGrafana },
  { name: "Kibana", data: siKibana },
  { name: "Git", data: siGit },
];

function SimpleBrandIcon({ data }: { data: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 shrink-0 text-hex-muted"
      fill="currentColor"
      role="img"
      aria-hidden
    >
      <path d={data.path} />
    </svg>
  );
}

function AwsRackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 shrink-0 text-hex-muted"
      fill="currentColor"
      role="img"
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="3" rx="0.5" />
      <rect x="2" y="8.5" width="20" height="3" rx="0.5" />
      <rect x="2" y="14" width="20" height="3" rx="0.5" />
      <rect x="2" y="19.5" width="20" height="1.5" rx="0.25" />
    </svg>
  );
}

function PineconeMarkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 shrink-0 text-hex-muted"
      fill="currentColor"
      role="img"
      aria-hidden
    >
      <path d="M12 3 21 20H3L12 3Z" />
    </svg>
  );
}

function WeaviateMarkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 shrink-0 text-hex-muted"
      fill="currentColor"
      role="img"
      aria-hidden
    >
      <text
        x="12"
        y="17"
        textAnchor="middle"
        className="fill-[currentColor] font-sans font-bold"
        style={{
          fontFamily: "var(--font-sans, ui-sans-serif, system-ui)",
          fontSize: 13,
        }}
      >
        W
      </text>
    </svg>
  );
}

function MarqueeItem({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div
      className="border-hex-line/20 bg-hex-foreground/4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
      title={name}
    >
      {children}
    </div>
  );
}

function renderEntryNode(entry: IconEntry) {
  if ("custom" in entry) {
    if (entry.custom === "aws") {
      return (
        <MarqueeItem name={entry.name}>
          <AwsRackIcon />
        </MarqueeItem>
      );
    }
    if (entry.custom === "pinecone") {
      return (
        <MarqueeItem name={entry.name}>
          <PineconeMarkIcon />
        </MarqueeItem>
      );
    }
    return (
      <MarqueeItem name={entry.name}>
        <WeaviateMarkIcon />
      </MarqueeItem>
    );
  }
  return (
    <MarqueeItem name={entry.name}>
      <SimpleBrandIcon data={entry.data} />
    </MarqueeItem>
  );
}

function IconRow() {
  return (
    <>
      {iconEntries.map((e) => (
        <Fragment key={e.name}>{renderEntryNode(e)}</Fragment>
      ))}
    </>
  );
}

export function SkillIconMarquee() {
  return (
    <div
      className="relative -mx-4 w-[calc(100%+2rem)] overflow-hidden py-1 sm:mx-0 sm:w-full"
      aria-hidden
    >
      <div
        className="from-hex-bg pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="from-hex-bg pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-10 bg-gradient-to-l to-transparent sm:w-16"
        aria-hidden
      />
      <div className="skill-marquee-track flex w-max items-center gap-3 md:gap-4">
        <div className="flex items-center gap-3 pr-0 md:gap-4" aria-hidden>
          <IconRow />
        </div>
        <div className="flex items-center gap-3 pr-0 md:gap-4" aria-hidden>
          <IconRow />
        </div>
      </div>
    </div>
  );
}
