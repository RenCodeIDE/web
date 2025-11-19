import {
  Zap,
  Code,
  Layout,
  LucideIcon,
  Sparkles,
  Database,
  Book,
} from "lucide-react";

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "v0.2.0",
    date: "Coming Soon",
    title: "Semantic Search & Models",
    description:
      "Advanced semantic search capabilities and support for additional AI models like Claude 3.5 Sonnet and GPT-4o.",
    icon: Sparkles,
    isComingSoon: true,
  },
  {
    version: "v0.1.3",
    date: "November 18, 2025",
    title: "Codebase Indexing",
    description:
      "Fast and efficient codebase indexing system that enables instant context retrieval for the AI agent.",
    icon: Database,
  },
  {
    version: "v0.1.2",
    date: "November 10, 2025",
    title: "Automatic Documentation",
    description:
      "Generate comprehensive documentation for your entire project with a single click, including API references and architecture overviews.",
    icon: Book,
  },
  {
    version: "v0.1.1",
    date: "November 5, 2025",
    title: "Graph Tools & Changelogs",
    description:
      "Visual dependency graph exploration tools and automated changelog generation based on git history.",
    icon: Layout,
  },
  {
    version: "v0.1.0",
    date: "November 1, 2025",
    title: "Initial Release",
    description:
      "The first public release of Ren. Includes the core AI coding agent, basic file manipulation, and chat interface.",
    icon: Zap,
  },
];
