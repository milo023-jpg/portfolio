"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { ContactForm } from "@/components/features/contact-form";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/providers/language-provider";

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleEmailClick = async () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-label={t.a11y.sections.contact}
      className="border-t border-hairline"
    >
      <div className="section-shell py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="eyebrow">
            <span className="text-accent mr-2">{"//"}</span>
            06
            </p>
            <h2 className="text-3xl md:text-4xl tracking-[-0.02em] font-medium text-ink">
              {t.contact.title[locale]}
            </h2>
            <p className="text-ink-2 leading-relaxed text-[17px] max-w-md">
              {t.contact.body[locale]}
            </p>

            <div className="space-y-3 pt-4">
              <button
                type="button"
                onClick={handleEmailClick}
                className="group inline-flex items-center gap-2 font-mono text-sm text-ink hover:text-accent transition-colors"
                aria-label={t.contact.copyEmail[locale]}
              >
                <span className="inline-flex items-center justify-center size-7 rounded-sm border border-hairline-strong text-ink-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  {copied ? (
                    <Check className="size-3.5" />
                  ) : revealed ? (
                    <Copy className="size-3.5" />
                  ) : (
                    <Mail className="size-3.5" />
                  )}
                </span>
                <span>
                  {copied
                    ? t.contact.emailCopied[locale]
                    : revealed
                      ? profile.email
                      : t.contact.emailHiddenHint[locale]}
                </span>
              </button>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow text-ink-3 hover:text-ink transition-colors"
                  aria-label={t.contact.socialAria.github}
                >
                  {t.contact.navLinks.github} →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
