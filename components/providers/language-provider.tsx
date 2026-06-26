"use client";

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";
import { dictionary } from "@/content/i18n";
import type { Locale } from "@/types/i18n";

type LanguageContextValue = {
  locale: Locale;
  t: (typeof dictionary)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  locale,
}: PropsWithChildren<{ locale: Locale }>) {
  const value = useMemo(
    () => ({ locale, t: dictionary[locale] }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
