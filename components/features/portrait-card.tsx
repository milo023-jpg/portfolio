"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function PortraitCard() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : -10]);

  return (
    <motion.div
      style={{ y }}
      className="relative w-full max-w-sm ml-auto"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-hairline bg-surface-raised shadow-soft">
        <Image
          src="/portrait.svg"
          alt="Camilo Artunduaga"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--background) 30%, transparent), transparent 30%)",
          }}
        />
      </div>
      <div className="mt-3 flex items-center gap-2 text-ink-4 font-mono text-[11px] tracking-wider">
        <span className="inline-block size-1 rounded-full bg-accent" />
        <span>camiloartunduaga.vercel.app</span>
      </div>
    </motion.div>
  );
}
