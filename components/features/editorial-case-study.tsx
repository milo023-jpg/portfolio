"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionCard } from "@/components/features/motion-card";
import { MockupCover } from "@/components/features/mockup-cover";
import { useLanguage } from "@/components/providers/language-provider";
import type { Project } from "@/types";

interface EditorialCaseStudyProps {
  project: Project;
  index: number;
  total: number;
  reverse: boolean;
}

export function EditorialCaseStudy({
  project,
  index,
  total,
  reverse,
}: EditorialCaseStudyProps) {
  const { locale, t } = useLanguage();
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div
        className={`lg:col-span-5 space-y-5 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-ink-3 whitespace-nowrap">
            {num} <span className="text-ink-4">/ {totalStr}</span>
          </span>
          <span className="text-ink-4 whitespace-nowrap">·</span>
          <span className="text-ink-4 whitespace-nowrap">{project.date}</span>
          <span className="text-ink-4 whitespace-nowrap">·</span>
          <span className="text-ink-4">{project.role[locale]}</span>
        </div>

        <h3 className="text-2xl md:text-[28px] leading-[1.15] tracking-[-0.01em] font-medium text-ink">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent transition-colors"
          >
            {project.name}
          </Link>
        </h3>

        <p className="text-ink-2 leading-relaxed">
          {project.oneLiner[locale]}
        </p>

        <dl className="grid grid-cols-3 gap-4 pt-4 border-t border-hairline">
          {project.metrics.map((m) => (
            <div key={m.label[locale]} className="space-y-1">
              <dt className="eyebrow text-ink-3">{m.label[locale]}</dt>
              <dd className="font-mono text-lg text-ink tabular-nums">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2 border border-hairline rounded-sm px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 eyebrow text-ink hover:text-accent transition-colors pt-2"
        >
          {t.projects.caseStudy}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
        <MotionCard>
          <Link
            href={`/projects/${project.slug}`}
            className="block group"
            aria-label={t.projects.caseStudy}
          >
            {project.coverLayout === "mockup" && project.gallery && project.gallery.length > 0 ? (
              <MockupCover
                items={project.gallery}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={project.coverAspect ?? "aspect-[16/10]"}
              />
            ) : (
              <div
                className={`relative w-full overflow-hidden rounded-sm border border-hairline bg-surface-raised shadow-soft ${
                  project.coverAspect ?? "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.cover}
                  alt={`${project.name} cover`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--background) 25%, transparent), transparent 35%)",
                  }}
                />
              </div>
            )}
          </Link>
        </MotionCard>
      </div>
    </article>
  );
}
