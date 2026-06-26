import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectDetailContent } from "@/components/features/project-detail-content";
import { projects } from "@/content/projects";
import { LOCALES, DEFAULT_LOCALE, hasLocale } from "@/lib/locale";

const SITE_URL = "https://camiloartunduaga.dev";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) {
    return { title: "Project not found" };
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}/projects/${slug}`]),
  ) as Record<(typeof LOCALES)[number], string> & {
    "x-default": string;
  };
  languages["x-default"] = `${SITE_URL}/${DEFAULT_LOCALE}/projects/${slug}`;

  return {
    title: project.name,
    description: project.oneLiner[lang],
    alternates: {
      canonical: `${SITE_URL}/${lang}/projects/${slug}`,
      languages,
    },
    openGraph: {
      title: `${project.name} · Case study`,
      description: project.oneLiner[lang],
      url: `${SITE_URL}/${lang}/projects/${slug}`,
      images: [{ url: project.cover, width: 1200, height: 750 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · Case study`,
      description: project.oneLiner[lang],
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetailContent project={project} />
      </main>
      <Footer />
    </>
  );
}
