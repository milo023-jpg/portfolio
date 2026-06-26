"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { LOCALES } from "@/lib/locale";
import type { Locale } from "@/types/i18n";

const COPY: Record<Locale, { title: string; body: string; cta: string }> = {
  en: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
  es: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o fue movida.",
    cta: "Volver al inicio",
  },
};

export function NotFoundContent() {
  const params = useParams<{ lang: string }>();
  const rawLang = params?.lang;
  const lang: Locale =
    rawLang !== undefined && (LOCALES as readonly string[]).includes(rawLang)
      ? (rawLang as Locale)
      : "es";
  const copy = COPY[lang];

  return (
    <div className="space-y-6 text-center">
      <p className="eyebrow text-accent">{"// 404"}</p>
      <h1 className="text-4xl md:text-5xl tracking-[-0.02em] font-medium text-ink">
        {copy.title}
      </h1>
      <p className="text-ink-2 max-w-md mx-auto">{copy.body}</p>
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-accent text-accent-fg font-medium text-sm hover:opacity-90 transition-opacity"
      >
        {copy.cta}
      </Link>
    </div>
  );
}
