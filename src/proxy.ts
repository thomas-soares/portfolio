import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookieName, locales } from "@/i18n/config";

function detectLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLanguages = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const language of preferredLanguages) {
    if (language === "pt-br" || language.startsWith("pt")) {
      return "pt-BR";
    }

    if (language === "en" || language.startsWith("en-")) {
      return "en";
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = detectLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
