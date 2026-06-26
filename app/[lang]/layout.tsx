import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Backdrop } from "@/components/ui/backdrop";
import { hasLocale, LOCALES, DEFAULT_LOCALE } from "@/lib/locale";
import type { Locale } from "@/types/i18n";
import "../globals.css";

const SITE_URL = "https://camiloartunduaga.vercel.app";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

const META: Record<
  (typeof LOCALES)[number],
  {
    title: string;
    description: string;
    ogDescription: string;
    twitterDescription: string;
    ogLocale: "en_US" | "es_CO";
  }
> = {
  en: {
    title: "Camilo Artunduaga — Frontend Engineer",
    description:
      "Frontend engineer building premium product interfaces with Next.js, React 19, and TypeScript. Remote, EST/CET.",
    ogDescription:
      "Frontend engineer building premium product interfaces. Next.js, React 19, TypeScript. Remote, EST/CET.",
    twitterDescription: "Frontend engineer building premium product interfaces.",
    ogLocale: "en_US",
  },
  es: {
    title: "Camilo Artunduaga — Ingeniero Frontend",
    description:
      "Ingeniero frontend construyendo interfaces de producto premium con Next.js, React 19 y TypeScript. Remoto, EST/CET.",
    ogDescription:
      "Ingeniero frontend construyendo interfaces de producto premium. Next.js, React 19, TypeScript. Remoto, EST/CET.",
    twitterDescription:
      "Ingeniero frontend construyendo interfaces de producto premium.",
    ogLocale: "es_CO",
  },
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return { title: META[DEFAULT_LOCALE].title };
  }

  const m = META[lang];
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}`]),
  ) as Record<(typeof LOCALES)[number], string> & {
    "x-default": string;
  };
  languages["x-default"] = `${SITE_URL}/${DEFAULT_LOCALE}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: m.title,
      template: `%s · Camilo Artunduaga`,
    },
    description: m.description,
    keywords: [
      "Frontend Engineer",
      "React Developer",
      "Next.js Expert",
      "TypeScript",
      "Web Development",
      "USA Remote",
      "Spain Remote",
      "Frontend Architecture",
      "Performance Optimization",
    ],
    authors: [{ name: "Camilo Artunduaga" }],
    creator: "Camilo Artunduaga",
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: m.ogLocale,
      url: `${SITE_URL}/${lang}`,
      title: m.title,
      description: m.ogDescription,
      siteName: "Camilo Artunduaga",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.twitterDescription,
      creator: "@camiloartunduaga",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider locale={lang as Locale}>
            <Backdrop />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
