"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { education } from "@/content/education";

export function EducationSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="education"
      aria-label={t.a11y.sections.education}
      className="border-t border-hairline"
    >
      <div className="section-shell py-20 md:py-28">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="eyebrow">
            <span className="text-accent mr-2">{"//"}</span>
            05
          </p>
          <h2 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium text-ink">
            {t.sections.education}
          </h2>
          <p className="text-ink-2 leading-relaxed">
            {t.sections.educationDescription[locale]}
          </p>
        </div>

        <div>
          {education.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-t border-hairline"
            >
              <div className="lg:col-span-3 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  {item.period[locale]}
                </p>
                <p className="text-sm text-ink-3">{item.location[locale]}</p>
              </div>

              <div className="lg:col-span-9 space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl tracking-[-0.01em] font-medium text-ink">
                    {item.institution}
                  </h3>
                  <p className="text-ink-2">{item.degree[locale]}</p>
                </div>

                <p className="text-ink-2 leading-relaxed">
                  {item.description[locale]}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.areas.map((area) => (
                    <span
                      key={area}
                      className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2 border border-hairline rounded-sm px-2 py-1"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
