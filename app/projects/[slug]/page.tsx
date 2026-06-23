import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectDetailContent } from "@/components/features/project-detail-content";
import { projects } from "@/content/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.oneLiner.en,
    openGraph: {
      title: `${project.name} · Case study`,
      description: project.oneLiner.en,
      images: [{ url: project.cover, width: 1200, height: 750 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · Case study`,
      description: project.oneLiner.en,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
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
