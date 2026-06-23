import type { ContactErrorKey, LocalizedText } from "./i18n";

export type {
  ContactErrorKey,
  Locale,
  LocalizedText,
  TranslationSchema,
} from "./i18n";

export type ProjectMetric = {
  label: LocalizedText;
  value: string;
};

export type CodeSnippet = {
  title: string;
  language: string;
  code: string;
};

export type GalleryItem = {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  kind?: "phone" | "image";
  aspect?: string;
  span?: { rows?: number; cols?: number };
};

export type Project = {
  id: string;
  name: string;
  slug: string;
  image: string;
  cover: string;
  coverAspect?: string;
  coverLayout?: "default" | "mockup";
  date: string;
  role: LocalizedText;
  metrics: ProjectMetric[];
  tech: string[];
  demo: string;
  github: string;
  oneLiner: LocalizedText;
  overview: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  keyFeatures: LocalizedText[];
  results: LocalizedText;
  lessonsLearned: LocalizedText;
  codeSnippets?: CodeSnippet[];
  gallery?: GalleryItem[];
};

export type Education = {
  id: string;
  institution: string;
  degree: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  areas: string[];
};

export type ToolingCategory = {
  name: LocalizedText;
  technologies: string[];
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "pending" | "success" | "error";
  errorKey?: ContactErrorKey;
};
