import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Backdrop } from "@/components/ui/backdrop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://camiloartunduaga.dev"),
  title: {
    default: "Camilo Artunduaga — Frontend Engineer",
    template: "%s · Camilo Artunduaga",
  },
  description:
    "Frontend engineer building premium product interfaces with Next.js, React 19, and TypeScript. Remote, EST/CET.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://camiloartunduaga.dev",
    title: "Camilo Artunduaga — Frontend Engineer",
    description:
      "Frontend engineer building premium product interfaces. Next.js, React 19, TypeScript. Remote, EST/CET.",
    siteName: "Camilo Artunduaga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camilo Artunduaga — Frontend Engineer",
    description:
      "Frontend engineer building premium product interfaces.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Backdrop />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
