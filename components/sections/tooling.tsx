"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { tooling } from "@/content/tooling";

export function ToolingSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="tooling"
      aria-label={t.a11y.sections.tooling}
      className="border-t border-hairline"
    >
      <div className="section-shell py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <p className="eyebrow">
              <span className="text-accent mr-2">{"//"}</span>
              02
            </p>
            <h2 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium text-ink">
              {t.sections.tooling}
            </h2>
            <p className="text-ink-2 leading-relaxed max-w-md">
              {t.sections.toolingDescription[locale]}
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="space-y-6">
              {tooling.map((cat) => (
                <div
                  key={cat.name[locale]}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline border-b border-hairline pb-5 last:border-b-0"
                >
                  <dt className="md:col-span-3 eyebrow text-ink-3">
                    {cat.name[locale]}
                  </dt>
                  <dd className="md:col-span-9 flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-ink-2">
                    {cat.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
