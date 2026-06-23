"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { profile } from "@/content/profile";

export function CurrentlyBuildingSection() {
  const { locale, t } = useLanguage();
  const { currentlyBuilding } = profile;
  const total = currentlyBuilding.stack.length;

  return (
    <section
      id="currently-building"
      aria-label={t.a11y.sections.currentlyBuilding}
      className="border-t border-hairline"
    >
      <div className="section-shell py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
          <div className="lg:col-span-3">
            <p className="eyebrow">
              <span className="text-accent mr-2">{"//"}</span>
              04 — {t.currentlyBuilding.eyebrow}
            </p>
          </div>
          <div className="lg:col-span-9 space-y-3">
            <h3 className="text-xl md:text-2xl tracking-tight font-medium text-ink">
              {currentlyBuilding.title[locale]}
            </h3>
            <p className="text-ink-2 max-w-2xl leading-relaxed">
              {currentlyBuilding.body[locale]}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
              <Link
                href={currentlyBuilding.link}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-ink hover:text-accent transition-colors"
              >
                {t.currentlyBuilding.viewProject}
                <span aria-hidden className="ml-1">
                  →
                </span>
              </Link>
              <span aria-hidden className="text-ink-4">
                ·
              </span>
              <span className="eyebrow text-ink-3">
                {currentlyBuilding.stack.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i < total - 1 ? <span className="mx-1">·</span> : null}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
