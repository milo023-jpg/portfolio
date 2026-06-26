"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneMockup } from "@/components/features/phone-mockup";
import { useLanguage } from "@/components/providers/language-provider";
import { projects } from "@/content/projects";
import type { Project } from "@/types";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useLanguage();

  return (
    <article className="min-h-screen pt-24 md:pt-32 pb-20">
      <div className="section-shell">
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 eyebrow text-ink-3 hover:text-ink transition-colors"
        >
          <span aria-hidden>←</span>
          {t.projectDetail.backToProjects}
        </Link>

        <header className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              <span>
                {String(
                  projects.findIndex((p) => p.slug === project.slug) + 1,
                ).padStart(2, "0")}{" "}
                / {String(projects.length).padStart(2, "0")}
              </span>
              <span className="text-ink-4">·</span>
              <span className="text-ink-4">{project.date}</span>
              <span className="text-ink-4">·</span>
              <span className="text-ink-4">{project.role[locale]}</span>
            </div>

            <h1 className="text-4xl md:text-5xl tracking-[-0.02em] font-medium text-ink leading-[1.1]">
              {project.name}
            </h1>

            <p className="text-xl text-ink-2 leading-relaxed max-w-2xl">
              {project.oneLiner[locale]}
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 border border-hairline rounded-sm bg-surface-raised p-5 space-y-4">
            <Row label={t.projectDetail.role} value={project.role[locale]} />
            <Row label={t.projectDetail.stack} value={project.tech.join(" · ")} />
            <Row label={t.projectDetail.date} value={project.date} />
            <Row
              label={t.projectDetail.outcome}
              value={project.oneLiner[locale]}
            />
            <div className="pt-3 flex flex-col gap-2 border-t border-hairline">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 rounded-sm bg-accent text-accent-fg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {t.projectDetail.liveDemo} →
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 rounded-sm border border-hairline-strong text-ink text-sm font-medium hover:border-ink-3 transition-colors"
              >
                {t.projectDetail.viewCode} →
              </Link>
            </div>
          </aside>
        </header>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-16 md:mt-24 space-y-6">
            <h2 className="eyebrow text-ink-3">
              <span className="text-accent mr-2">{"//"}</span>
              {t.projectDetail.gallery}
            </h2>
              {(() => {
                const hasSpan = project.gallery.some(
                  (item) => item.span?.rows || item.span?.cols,
                );
                const gridCols =
                  project.gallery.length === 1
                    ? "grid-cols-1"
                    : hasSpan
                      ? "grid-cols-1 sm:grid-cols-2"
                      : project.gallery.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";
                return (
                  <div className={`grid gap-6 ${gridCols}`}>
                    {project.gallery.map((item) => {
                      const spanClass =
                        item.span?.rows === 2
                          ? "sm:col-start-2 sm:row-start-1 sm:row-span-2"
                          : item.span?.cols === 2
                            ? "sm:col-start-1 sm:row-start-1 sm:col-span-2"
                            : "";
                      return (
                        <figure
                          key={item.src}
                          className={`flex flex-col h-full gap-3 ${spanClass}`}
                        >
                          {item.kind === "phone" ? (
                            <PhoneMockup
                              item={item}
                              sizes="(max-width: 640px) 260px, 300px"
                            />
                          ) : (
                            <div className="flex items-start justify-center min-h-0">
                              <div
                                className="relative w-full max-w-[85%]"
                                style={{ aspectRatio: item.aspect ?? "16/10" }}
                              >
                                <Image
                                  src={item.src}
                                  alt={item.alt[locale]}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 50vw"
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                            </div>
                          )}
                          {item.caption && (
                            <figcaption
                              className={`font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 ${
                                item.kind === "phone" ? "text-center" : ""
                              }`}
                            >
                              {item.caption[locale]}
                            </figcaption>
                          )}
                        </figure>
                      );
                    })}
                  </div>
                );
              })()}
          </section>
        )}

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-16">
            <Section title={t.projectDetail.overview}>
              {project.overview[locale]}
            </Section>
            <Section title={t.projectDetail.challenge}>
              {project.challenge[locale]}
            </Section>
            <Section title={t.projectDetail.technicalSolution}>
              {project.solution[locale]}
              {project.codeSnippets?.map((snippet, i) => (
                <figure
                  key={i}
                  className="mt-6 rounded-sm border border-hairline bg-surface-inset overflow-hidden"
                >
                  <figcaption className="px-4 py-2 border-b border-hairline font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 flex items-center justify-between">
                    <span>{snippet.title}</span>
                    <span className="text-ink-4">{snippet.language}</span>
                  </figcaption>
                  <pre className="px-4 py-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-ink">
                    <code>{snippet.code}</code>
                  </pre>
                </figure>
              ))}
            </Section>
            <Section title={t.projectDetail.keyFeatures}>
              <ul className="space-y-3 text-ink-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 inline-block size-1 rounded-full bg-accent flex-shrink-0"
                    />
                    <span>{feature[locale]}</span>
                  </li>
                ))}
              </ul>
            </Section>
            <Section title={t.projectDetail.results}>
              {project.results[locale]}
            </Section>
            <Section title={t.projectDetail.lessonsLearned}>
              {project.lessonsLearned[locale]}
            </Section>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 hidden lg:block" />
        </div>

        <div className="mt-20 pt-8 border-t border-hairline">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 eyebrow text-ink-3 hover:text-ink transition-colors"
          >
            <span aria-hidden>←</span>
            {t.projectDetail.backToAll}
          </Link>
        </div>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="eyebrow text-ink-3">{label}</p>
      <p className="text-sm text-ink leading-relaxed">{value}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="eyebrow text-ink-3">
        <span className="text-accent mr-2">{"//"}</span>
        {title}
      </h2>
      <div className="text-ink-2 leading-relaxed text-[17px]">{children}</div>
    </section>
  );
}
