"use client";

import { useLanguage } from "@/components/providers/language-provider";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <p className="eyebrow text-ink-3">{label}</p>
      <p className="text-sm text-ink leading-relaxed">{value}</p>
    </div>
  );
}

export function AboutSection() {
  const { locale, t } = useLanguage();
  return (
    <section
      id="about"
      aria-label={t.a11y.sections.about}
      className="border-t border-hairline"
    >
      <div className="section-shell py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 max-w-prose">
            <p className="eyebrow">
              <span className="text-accent mr-2">{"//"}</span>
              01
            </p>
            <h2 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium text-ink">
              {t.about.title[locale]}
            </h2>
            <div className="space-y-4 text-ink-2 leading-relaxed text-[17px]">
              <p>{t.about.p1[locale]}</p>
              <p>{t.about.p2[locale]}</p>
              <p>{t.about.p3[locale]}</p>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-hairline rounded-sm bg-surface-raised p-5 md:p-6 space-y-5">
              <p className="eyebrow text-ink-3">
                <span className="text-accent mr-2">{"//"}</span>
                {t.about.rightNow.label}
              </p>
              <Field
                label={t.about.rightNow.fields.reading}
                value={t.about.rightNow.reading[locale]}
              />
              <Field
                label={t.about.rightNow.fields.tooling}
                value={t.about.rightNow.tooling[locale]}
              />
              <Field
                label={t.about.rightNow.fields.interests}
                value={t.about.rightNow.interests[locale]}
              />
              <Field
                label={t.about.rightNow.fields.openTo}
                value={t.about.rightNow.openTo[locale]}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
