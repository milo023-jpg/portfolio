import type { ToolingCategory } from "@/types";

export const tooling: ToolingCategory[] = [
  {
    name: {
      en: "Core",
      es: "Core",
    },
    technologies: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Node.js",
      "HTML",
      "CSS",
    ],
  },
  {
    name: {
      en: "Styling & Motion",
      es: "Estilos y motion",
    },
    technologies: [
      "Tailwind CSS v4",
      "CSS Modules",
    ],
  },
  {
    name: {
      en: "Data & State",
      es: "Datos y estado",
    },
    technologies: [
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Zod",
      "TanStack Query",
    ],
  },
  {
    name: {
      en: "Tooling",
      es: "Herramientas",
    },
    technologies: [
      "pnpm",
      "Turbopack",
      "Playwright",
      "Vitest",
      "Vercel",
    ],
  },
];
