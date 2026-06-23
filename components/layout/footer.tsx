"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/providers/language-provider";

const HIGHLIGHT_TOOLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "PostgreSQL",
  "Vercel",
];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const total = HIGHLIGHT_TOOLS.length;

  return (
    <footer className="border-t border-hairline">
      <div className="section-shell py-12 md:py-16 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span
                aria-hidden
                className="inline-flex items-center justify-center size-7 border border-hairline-strong rounded-sm font-mono text-[11px] text-ink group-hover:border-ink-3 transition-colors"
              >
                CA
              </span>
              <span className="font-medium text-sm tracking-tight text-ink">
                Camilo Artunduaga
              </span>
            </Link>
            <p className="font-mono text-[11px] text-ink-4 tracking-wider">
              © {year} {profile.name}. {t.footer.rights}
            </p>
            <p className="font-mono text-[11px] text-ink-4 tracking-wider">
              {t.footer.builtWith}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-ink-3 hover:text-ink transition-colors"
              aria-label={t.contact.socialAria.github}
            >
              {t.contact.navLinks.github}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="eyebrow text-ink-3 hover:text-ink transition-colors"
              aria-label={t.contact.socialAria.email}
            >
              {t.contact.navLinks.email}
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-hairline">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-4">
            {HIGHLIGHT_TOOLS.map((tool, i) => (
              <span key={tool}>
                {tool}
                {i < total - 1 ? (
                  <span className="mx-2 text-ink-4/50">·</span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
