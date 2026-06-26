import type { Locale } from "@/types/i18n";

export const LOCALES = ["en", "es"] as const;
export const DEFAULT_LOCALE: Locale = "es";

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const hasLocale = (value: string | undefined): value is Locale =>
  typeof value === "string" && isLocale(value);
