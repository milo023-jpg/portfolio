"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { LOCALES } from "@/lib/locale";
import type { Locale } from "@/types/i18n";

function buildAlternatePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const hasLocalePrefix =
    firstSegment !== undefined &&
    (LOCALES as readonly string[]).includes(firstSegment);

  const trailing = hasLocalePrefix ? segments.slice(1) : segments;
  const joined = trailing.length > 0 ? `/${trailing.join("/")}` : "";
  return `/${nextLocale}${joined}`;
}

export function LanguageToggle() {
  const { locale, t } = useLanguage();
  const pathname = usePathname() ?? "/";
  const nextLocale: Locale = locale === "en" ? "es" : "en";
  const ariaLabel =
    locale === "en" ? t.a11y.language.switchToSpanish : t.a11y.language.switchToEnglish;
  const newPath = buildAlternatePath(pathname, nextLocale);

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className="font-mono text-xs"
      aria-label={ariaLabel}
    >
      <Link href={newPath} hrefLang={nextLocale}>
        {locale === "en" ? "ES" : "EN"}
      </Link>
    </Button>
  );
}
