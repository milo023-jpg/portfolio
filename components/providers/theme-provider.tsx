"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
  systemTheme: ResolvedTheme;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";
const DEFAULT_THEME: Theme = "dark";

function isTheme(v: string | null): v is Theme {
  return v === "light" || v === "dark" || v === "system";
}

function readStoredTheme(): Theme {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (isTheme(v)) return v;
  } catch {}
  return DEFAULT_THEME;
}

function readSystemTheme(): ResolvedTheme {
  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

function applyTheme(theme: ResolvedTheme) {
  const d = document.documentElement;
  d.classList.remove("light", "dark");
  d.classList.add(theme);
  d.style.colorScheme = theme;
}

function resolveTheme(theme: Theme, systemTheme: ResolvedTheme): ResolvedTheme {
  return theme === "system" ? systemTheme : theme;
}

const themeSubscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getStoredThemeSnapshot = (): Theme => readStoredTheme();
const getServerThemeSnapshot = (): Theme => DEFAULT_THEME;

const systemSubscribe = (callback: () => void) => {
  const mq = window.matchMedia(MEDIA_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getSystemThemeSnapshot = (): ResolvedTheme => readSystemTheme();
const getServerSystemThemeSnapshot = (): ResolvedTheme => "dark";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    themeSubscribe,
    getStoredThemeSnapshot,
    getServerThemeSnapshot,
  );
  const systemTheme = useSyncExternalStore(
    systemSubscribe,
    getSystemThemeSnapshot,
    getServerSystemThemeSnapshot,
  );
  const resolvedTheme = resolveTheme(theme, systemTheme);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(resolveTheme(next, readSystemTheme()));
    try {
      localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        themes: ["light", "dark", "system"],
        systemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
