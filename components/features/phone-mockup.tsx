"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import type { GalleryItem } from "@/types";

interface PhoneMockupProps {
  item: GalleryItem;
  sizes: string;
  priority?: boolean;
  className?: string;
}

export function PhoneMockup({
  item,
  sizes,
  priority = false,
  className = "",
}: PhoneMockupProps) {
  const { locale } = useLanguage();

  return (
    <div
      className={`relative mx-auto w-full max-w-[260px] sm:max-w-[300px] ${className}`}
    >
      <div
        className="relative aspect-[9/19] rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_25px_60px_-20px_rgba(0,0,0,0.65)]"
        style={{ backgroundColor: "#0d0d0d" }}
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
    </div>
  );
}
