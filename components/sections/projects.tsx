"use client";

import { EditorialCaseStudy } from "@/components/features/editorial-case-study";
import { useLanguage } from "@/components/providers/language-provider";
import { projects } from "@/content/projects";
import { interpolate } from "@/content/i18n";

export function ProjectsSection() {
  const { locale, t } = useLanguage();
  const total = projects.length;

  return (
    <section
      id="projects"
      aria-label={t.a11y.sections.projects}
      className="border-t border-hairline"
    >
      <div className="section-shell py-20 md:py-28">
        <div className="max-w-2xl space-y-3 mb-16 md:mb-24">
          <p className="eyebrow">
            <span className="text-accent mr-2">{"//"}</span>
            03
          </p>
          <h2 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium text-ink">
            {t.sections.projects}
          </h2>
          <p className="text-ink-2 leading-relaxed">
            {interpolate(t.sections.projectsDescription[locale], { count: total })}
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <EditorialCaseStudy
              key={project.id}
              project={project}
              index={i}
              total={total}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
