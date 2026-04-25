export const personal = {
  name: "Rajat Dabas",
  shortName: "Rajat Dabas",
  tagline:
    "I have 3+ years of professional experience in building AI-powered and FullStack solutions—specializing in RAG, MCP, vector databases, SQL & NoSQL databases, and full-stack development. I architect and deploy scalable systems for thousands of users, with a focus on availability and performance. My work spans AI integration (LLMs, agents, MCP), CI/CD pipelines, and cloud infrastructure.",
  email: "rajatkumardabas@gmail.com",
} as const;

export const education = {
  school: "Delhi Technological University (DTU, formerly DCE)",
  location: "Delhi, India",
  degree: "Bachelor of Technology in Computer Engineering",
} as const;

export type ExperienceEntry = {
  company: string;
  title: string;
  type?: string;
  location?: string;
  mode?: string;
  start: string;
  end: string;
  isCurrent?: boolean;
  bullets: string[];
  source: "resume" | "linkedin" | "both";
};

export const experience: ExperienceEntry[] = [
  {
    company: "Paytm",
    title: "Software Engineer",
    location: "India",
    start: "Jan 2025",
    end: "Present",
    isCurrent: true,
    source: "resume",
    bullets: [
      "Owned backend architecture for Full Swipe Offer: high-throughput data pipelines ingesting 20,000+ Kafka events/sec, powering real-time merchant analytics with Elasticsearch, MySQL (Aurora), and TimescaleDB.",
      "Improved 10+ high-traffic APIs by moving from JSON to Protobuf: ~35% smaller payloads, ~15% lower latency, and ~20% higher throughput.",
      "Led AI-powered MCP servers and an internal chatbot: automated cross-team workflows and merchant query handling, cutting external API use by ~99% (Python, Vercel SDK, Next.js, OpenAI).",
      "Reduced AWS database infrastructure costs by 33% through the implementation of a rolling data tiering strategy, optimizing storage class (Standard to I/O Optimized) for high-access database partitions.",
      "Achieved 99.9% uptime, 95.5% SR, 5000+ TPS across production systems serving 76M monthly active users and 1.6B monthly transactions."
    ],
  },
  {
    company: "VoriqAI",
    title: "AI Software Developer",
    type: "Full-time",
    location: "Remote",
    start: "Jan 2023",
    end: "Dec 2024",
    source: "resume",
    bullets: [
      "Integrated Session-based auth with automated security testing and CI/CD—secured 10,000+ user sessions, zero known breaches, 99.9% session persistence (Homeland Group).",
      "Delivered Real-time monitoring with React and automated CI/CD over 1,000+ business workflows.",
      "Deploying AI-powered chatbot for world's largest fintech festival handling 10,000+ real-time queries with sub-2 second response time",
      "Facial recognition system processing 65,000+ photos with 98% accuracy. Established CI/CD pipeline with automated monitoring supporting 10,000+ concurrent users achieving 99.8% uptime."
    ],
  },
  {
    company: "Delhi Technological University (USIP–DTU)",
    title: "Frontend Developer",
    type: "Internship",
    location: "Delhi, India",
    mode: "Hybrid",
    start: "Oct 2022",
    end: "Dec 2022",
    source: "linkedin",
    bullets: [
      "Delivered the Department of Environment Engineering web presence on USIP–DTU (React, CSS, Firebase): multi-page layout, global nav and footer, and auth (login/signup).",
      "Shipped live weather updates and digital workflows that cut manual paperwork by ~40% versus prior paper-based processes.",
      "Partnered with two teammates (backend and research) under Asst. Prof. Anunay Gour to deliver the site end-to-end.",
    ],
  },
  {
    company: "CodeSpeedy Technology Private Limited",
    title: "Technical Writer",
    type: "Internship",
    location: "Remote",
    start: "Jul 2022",
    end: "Aug 2022",
    source: "linkedin",
    bullets: [
      "Wrote and published two long-form React.js tutorials aligned with CodeSpeedy’s style guide and audience expectations.",
      "Practiced end-to-end technical content: keyword research and on-page SEO, structural editing, and clear, beginner-friendly explanations.",
    ],
  },
];

export const skills = {
  languages: "JavaScript, TypeScript, Python, Java, C++, SQL, HTML5, CSS3",
  aiml:
    "RAG, vector DBs (Pinecone, Weaviate, Qdrant), LLM integration, prompt engineering, LangChain, Hugging Face, MCP servers",
  frontend: "React, Next.js, React Flow, Tailwind CSS, Redux, Zustand",
  backend: "Node.js, Express, FastAPI, Spring Boot, REST, WebSockets",
  databases: "PostgreSQL, MySQL, Redis, TimescaleDB, Elasticsearch, MongoDB, SQLite",
  cloud:
    "AWS (EC2, S3, Aurora, CloudWatch), CI/CD, Docker, Prometheus, Grafana, Kibana, Git",
} as const;

export const achievements = {
  professional: [
    "Paytm Rockstar Award (2025) — high-impact work on Paytm payment-gateway systems."
  ],
  positionOfResponsibility: [
    {
      title: "Mentor — Desh Ke Mentor (DKM)",
      period: "Jan 2022 – Mar 2022",
      description:
        "Mentored High School students on life and career: academic streams and long-term plans.",
    },
  ],
  competitive: [
    "Codeforces: 1413 rating: Global Rank 2144 in Educational CF Div 2.",
    "LeetCode Knight: 1850+ rating; 1,000+ solutions delivered.",
    "LeetCode Biweekly Contest 129: global rank 1001 of 25,000+ (~top 4%).",
    "GeeksforGeeks: institution rank 134 of 13,000+; 500+ solutions delivered.",
  ],
  certifications: [
    "Google Cloud Career Practitioner Program (2023): completed Google’s no-cost, lab-based training in generative AI, cloud engineering, and related foundations (content aligned with Google Cloud certificates and Google DeepMind’s AI research education); earned certificate and completion recognition.",
    "NPTEL — The Joy of Computing using Python (2022): Learnt and completed the course with certificate.",
  ],
} as const;
