import { GITHUB_HREF } from "@/lib/contact";

export type FeaturedProject = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  deployedHref?: string;
  githubHref: string;
  treeOrder: number;
};

const repo = (slug: string) => `${GITHUB_HREF}/${slug}`;

export const featuredProjects: FeaturedProject[] = [
  {
    id: "splitwise",
    name: "Splitwise",
    description:
      "Group expense-splitting app with JWT auth, BCrypt password hashing, and settlement workflows for managing balances across members.",
    githubHref: repo("splitwise"),
    techStack: ["Java", "Spring Boot", "JWT", "BCrypt", "SQLite"],
    treeOrder: 0,
  },
  {
    id: "college-management",
    name: "College Management ERP",
    description:
      "Role-based ERP for admin, student, and teacher operations with AI-enabled real-time query handling across platform workflows.",
    githubHref: repo("college-management"),
    techStack: ["Next.js", "PostgreSQL", "Role-based access", "AI assistant"],
    treeOrder: 1,
  },
  {
    id: "vakyav",
    name: "Vakyav",
    description:
      "Multi-tenant AI voice and text SaaS with real-time streaming modules, usage-based plans, and secure tenant isolation.",
    githubHref: repo("vakyav"),
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Django Channels",
      "WebSockets",
      "Groq LLaMA",
      "Vercel",
    ],
    treeOrder: 2,
  },
  {
    id: "learnsphere",
    name: "LearnSphere",
    description:
      "EdTech platform for instructors and students with course management, OTP/email auth flows, analytics dashboards, and payments.",
    githubHref: repo("LearnSphere"),
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
    ],
    treeOrder: 3,
  },
  {
    id: "pathfinding-visualizer",
    name: "Pathfinding Visualizer",
    description:
      "Interactive visualizer for A*, BFS, DFS, and Dijkstra with maze generation and adjustable simulation speed.",
    githubHref: repo("Pathfinding-Visualizer"),
    techStack: ["React", "TypeScript", "Tailwind CSS", "Algorithms"],
    treeOrder: 4,
  },
  {
    id: "portfolio-builder",
    name: "Portfolio Builder",
    description:
      "Platform to generate personalized portfolio sites from profile input, with auth and backend APIs for full content management.",
    githubHref: repo("Portfolio-Builder"),
    techStack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "REST APIs"],
    treeOrder: 5,
  }
];
