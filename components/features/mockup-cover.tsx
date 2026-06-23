"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import type { GalleryItem } from "@/types";

interface MockupCoverProps {
  items: GalleryItem[];
  sizes: string;
  className?: string;
  priority?: boolean;
}

export function MockupCover({
  items,
  sizes,
  className = "",
  priority = false,
}: MockupCoverProps) {
  const { locale } = useLanguage();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-hairline shadow-soft ${className}`}
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "center center",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(200,169,130,0.10), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-5 md:gap-8 p-5 sm:p-7 md:p-12">
        {items.map((item) => (
          <div
            key={item.src}
            className="relative w-auto aspect-[9/19] max-h-[85%] max-w-[42%] rounded-[22px] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <Image
              src={item.src}
              alt={item.alt[locale]}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
