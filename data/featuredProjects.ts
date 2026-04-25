import { GITHUB_HREF } from "@/lib/contact";

export type FeaturedProject = {
  id: string;
  name: string;
  description: string;
  href: string;
  tags: string[];
  treeOrder: number;
};

const repo = (slug: string) => `${GITHUB_HREF}/${slug}`;

export const featuredProjects: FeaturedProject[] = [
  {
    id: "splitwise",
    name: "splitwise",
    description:
      "Shared-expense and split-bill style utilities — data modeling and app flows in practice.",
    href: repo("splitwise"),
    tags: ["Full stack", "Payments"],
    treeOrder: 0,
  },
  {
    id: "college-management",
    name: "college-management",
    description:
      "Academic and campus operations workflow tooling — CRUD, roles, and dashboards.",
    href: repo("college-management"),
    tags: ["Web", "Admin"],
    treeOrder: 1,
  },
  {
    id: "vakyav",
    name: "vakyav",
    description:
      "Multi-tenant voice & text AI: WebSockets, streaming, and third-party model integrations.",
    href: repo("vakyav"),
    tags: ["SaaS", "AI", "Django"],
    treeOrder: 2,
  },
  {
    id: "LearnSphere",
    name: "LearnSphere",
    description: "Learning-focused web app: content delivery and study workflows.",
    href: repo("LearnSphere"),
    tags: ["JavaScript", "EdTech"],
    treeOrder: 3,
  },
  {
    id: "Budpiler",
    name: "Budpiler",
    description: "Custom compiler / language tooling experiments and pipelines.",
    href: repo("Budpiler"),
    tags: ["Compiler", "Systems"],
    treeOrder: 4,
  },
  {
    id: "Pathfinding-Visualizer",
    name: "Pathfinding-Visualizer",
    description: "Visual exploration of pathfinding and graph search algorithms in the browser.",
    href: repo("Pathfinding-Visualizer"),
    tags: ["Algorithms", "Canvas"],
    treeOrder: 5,
  },
  {
    id: "Portfolio-Builder",
    name: "Portfolio-Builder",
    description: "Configurable portfolio and layout tooling for static sites and demos.",
    href: repo("Portfolio-Builder"),
    tags: ["Next.js", "UI"],
    treeOrder: 6,
  },
];
