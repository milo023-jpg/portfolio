"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/services/contact";
import { useLanguage } from "@/components/providers/language-provider";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = {
  status: "idle",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const { t } = useLanguage();

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block eyebrow text-ink-3"
        >
          {t.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isPending}
          className="w-full h-11 rounded-sm border border-hairline bg-surface-inset px-3.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink-3 transition-colors disabled:opacity-50"
          placeholder={t.contact.namePlaceholder}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block eyebrow text-ink-3"
        >
          {t.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className="w-full h-11 rounded-sm border border-hairline bg-surface-inset px-3.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink-3 transition-colors disabled:opacity-50"
          placeholder={t.contact.emailPlaceholder}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block eyebrow text-ink-3"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isPending}
          className="w-full rounded-sm border border-hairline bg-surface-inset px-3.5 py-3 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink-3 transition-colors disabled:opacity-50 resize-none"
          placeholder={t.contact.messagePlaceholder}
        />
      </div>

      {state.status === "error" && state.errorKey && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-ink-3 font-mono"
        >
          <AlertCircle className="size-4" />
          {t.contact.errors[state.errorKey]}
        </motion.div>
      )}

      {state.status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-ink font-mono"
        >
          <CheckCircle className="size-4" />
          {t.contact.success}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isPending || state.status === "success"}
        className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-sm bg-accent text-accent-fg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <span className="size-3 rounded-full border-2 border-current border-r-transparent animate-spin" />
            {t.contact.sending}
          </>
        ) : state.status === "success" ? (
          <>
            <CheckCircle className="size-4" />
            {t.contact.sent}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {t.contact.send}
          </>
        )}
      </button>
    </form>
  );
}
