"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { PortraitCard } from "@/components/features/portrait-card";
import { useLanguage } from "@/components/providers/language-provider";
import type { Locale } from "@/types/i18n";

const cvHref: Record<Locale, string> = {
  en: "/CV%20Camilo%20Artunduaga%20en.pdf",
  es: "/CV%20Camilo%20Artunduaga%20es.pdf",
};

export function HeroSection() {
  const { locale, t } = useLanguage();
  const updated = new Date().toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="hero"
      aria-label={t.a11y.sections.hero}
      className="border-b border-hairline"
    >
      <div className="section-shell py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              <span>{t.hero.eyebrow}</span>
            </p>

            <h1 className="display text-ink max-w-2xl">
              {t.hero.title[locale]}
            </h1>

            <p className="text-lg text-ink-2 max-w-xl leading-relaxed">
              {t.hero.subtitle[locale]}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-accent text-accent-fg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-sm border border-hairline-strong text-ink font-medium text-sm hover:border-ink-3 transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
              <a
                href={cvHref[locale]}
                download
                aria-label={t.hero.ctaDownload}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-sm border border-hairline-strong text-ink font-medium text-sm hover:border-ink-3 transition-colors"
              >
                <Download aria-hidden className="size-4" />
                {t.hero.ctaDownload}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <PortraitCard />
            <p className="mt-2 text-right font-mono text-[11px] text-ink-4 tracking-wider">
              {t.hero.lastUpdated} · {updated}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
