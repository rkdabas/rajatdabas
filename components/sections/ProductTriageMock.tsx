import { dmMono } from "@/app/fonts";

type Row = {
  level: "critical" | "high" | "medium";
  levelLabel: string;
  title: string;
  tags: string;
  status: string;
  assignee: string;
  app: string;
  due: string;
};

const rows: Row[] = [
  {
    level: "critical",
    levelLabel: "Critical",
    title: "SQL injection exposing data",
    tags: "SQL · Auth",
    status: "To do",
    assignee: "—",
    app: "api.acem.io",
    due: "Overdue by 2 days",
  },
  {
    level: "high",
    levelLabel: "High",
    title: "Authorization bypass via IDOR",
    tags: "IDOR · Auth",
    status: "In progress",
    assignee: "Jhone Park",
    app: "web.acme.io",
    due: "Due tomorrow",
  },
  {
    level: "high",
    levelLabel: "High",
    title: "Unauthenticated remote code execution",
    tags: "EXEC · REC",
    status: "In progress",
    assignee: "—",
    app: "web.acme.io",
    due: "Overdue by 2 days",
  },
  {
    level: "medium",
    levelLabel: "Medium",
    title: "Cross-site scripting in admin panel",
    tags: "XSS · WEB",
    status: "To do",
    assignee: "Alikhan Akhmetov",
    app: "dev.acme.io",
    due: "Due 5 days",
  },
  {
    level: "medium",
    levelLabel: "Medium",
    title: "Sensitive information exposure via debug",
    tags: "Info Leak",
    status: "In progress",
    assignee: "—",
    app: "dev.acme.io",
    due: "Due 1 week",
  },
  {
    level: "medium",
    levelLabel: "Medium",
    title: "Subdomain takeover risk",
    tags: "DNS · Web",
    status: "To do",
    assignee: "John Park",
    app: "staging.app.io",
    due: "Due 1 week",
  },
];

const levelPill: Record<Row["level"], string> = {
  critical: "bg-hex-red text-white",
  high: "bg-hex-orange text-hex-foreground",
  medium: "bg-amber-300/90 text-hex-foreground",
};

export function ProductTriageMock() {
  return (
    <div
      className={`${dmMono.className} border-hex-border/20 max-w-full overflow-hidden rounded-xl border bg-hex-dark text-[11px] text-white/90 shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:text-xs md:text-sm`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#2c2c2c] px-2.5 py-2 sm:px-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="ml-2 min-w-0 flex-1 truncate text-center text-[0.6rem] text-white/50 sm:text-[0.65rem]">
          hex.co · /search — app.hex.co
        </p>
      </div>

      {/* App sub-header */}
      <div className="border-b border-white/10 bg-[#1f1f1f] px-2.5 py-1.5 text-[0.6rem] text-white/50 sm:px-3 sm:text-[0.65rem]">
        Triage · History · Company
      </div>

      <div className="bg-hex-dark px-2.5 py-2 sm:px-3 sm:py-2.5">
        <p className="text-[0.6rem] text-white/45 sm:text-[0.65rem]">
          Security Findings · Status: Open · Priority: All · Sort: Latest
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[0.55rem] text-white/70 sm:gap-2 sm:text-[0.6rem]">
          <span className="rounded border border-white/20 px-1.5 py-0.5 sm:px-2">Search</span>
          <span className="rounded border border-white/20 px-1.5 py-0.5 sm:px-2">Filter</span>
          <span className="rounded border border-hex-cta/60 px-1.5 py-0.5 sm:px-2">
            Assigned to me
          </span>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[520px] divide-y divide-white/10">
          <div className="grid grid-cols-[5.5rem_1fr] gap-x-2 px-2.5 py-1.5 text-[0.55rem] uppercase tracking-wide text-white/40 sm:px-3 sm:py-2 sm:text-[0.6rem]">
            <div className="font-medium">Sev</div>
            <div className="grid font-medium min-[600px]:grid-cols-2 min-[800px]:grid-cols-4 min-[800px]:gap-3">
              <span className="min-w-0 min-[800px]:col-span-1">Finding</span>
              <span className="max-[799px]:hidden min-[800px]:block">Status / Owner</span>
              <span className="text-right max-[799px]:col-span-1">App</span>
              <span className="text-right">Due</span>
            </div>
          </div>
          {rows.map((r) => (
            <div
              key={r.title}
              className="hover:bg-hex-foreground/5 grid grid-cols-[5.5rem_1fr] gap-x-2 px-2.5 py-2.5 sm:px-3"
            >
              <div className="pt-0.5">
                <span
                  className={`inline-block w-full max-w-[5rem] rounded px-1.5 py-0.5 text-center text-[0.55rem] font-medium sm:text-[0.6rem] ${levelPill[r.level]}`}
                >
                  {r.levelLabel}
                </span>
              </div>
              <div className="grid min-w-0 min-[800px]:grid-cols-4 min-[800px]:gap-3 min-[800px]:items-center">
                <div className="min-w-0 pr-2 min-[800px]:col-span-1">
                  <p className="whitespace-nowrap text-[0.6rem] font-medium leading-tight sm:text-[0.65rem]">
                    {r.title}
                  </p>
                  <p className="text-[0.55rem] text-white/45 sm:text-[0.6rem]">{r.tags}</p>
                </div>
                <div className="text-[0.55rem] text-white/75 max-[799px]:mt-1.5 sm:text-[0.6rem] min-[800px]:text-left">
                  {r.status}
                  {r.assignee !== "—" ? <span> · {r.assignee}</span> : null}
                </div>
                <p className="text-[0.55rem] text-hex-cta/95 max-[799px]:pt-0.5 sm:text-[0.6rem] min-[800px]:text-right min-[800px]:pt-0">
                  {r.app}
                </p>
                <p className="text-[0.55rem] text-hex-orange/95 max-[799px]:pt-0.5 sm:text-[0.6rem] min-[800px]:text-right min-[800px]:pt-0">
                  {r.due}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
