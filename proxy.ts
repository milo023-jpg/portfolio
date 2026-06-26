import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const hasLocalePrefix =
    firstSegment !== undefined &&
    (LOCALES as readonly string[]).includes(firstSegment);

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${DEFAULT_LOCALE}${pathname}${request.nextUrl.search}`, request.url),
  );
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
