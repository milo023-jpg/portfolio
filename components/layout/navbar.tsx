"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/components/providers/language-provider";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#tooling", key: "tooling" },
  { href: "#projects", key: "work" },
  { href: "#currently-building", key: "currentlyBuilding" },
  { href: "#education", key: "education" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, locale } = useLanguage();
  const active = useActiveSection([
    "about",
    "tooling",
    "projects",
    "currently-building",
    "education",
    "contact",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label={t.a11y.nav.primary}
        className="section-shell flex items-center justify-between h-16"
      >
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 group"
          aria-label={t.a11y.nav.home}
        >
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

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow transition-colors ${
                  isActive ? "text-ink" : "text-ink-3 hover:text-ink"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center size-9 rounded-sm border border-hairline text-ink-2"
          aria-label={open ? t.a11y.nav.closeMenu : t.a11y.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-hairline bg-background/95 backdrop-blur-md"
          >
            <div className="section-shell py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 eyebrow text-ink-3 hover:text-ink transition-colors"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-2 border-t border-hairline">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
