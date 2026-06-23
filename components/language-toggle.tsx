"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const nextLocale = locale === "en" ? "es" : "en";
  const ariaLabel =
    locale === "en" ? t.a11y.language.switchToSpanish : t.a11y.language.switchToEnglish;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(nextLocale)}
      className="font-mono text-xs"
      aria-label={ariaLabel}
    >
      {locale === "en" ? "ES" : "EN"}
    </Button>
  );
}
