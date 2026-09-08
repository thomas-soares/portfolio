"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import {
  getLocaleLabel,
  localeCookieName,
  locales,
  type Locale,
} from "@/i18n/config";

type LanguageSwitchProps = {
  currentLocale: Locale;
  label: string;
};

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (locales.includes(currentLocale as Locale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitch({ currentLocale, label }: LanguageSwitchProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface)/95 px-3 py-2 text-sm font-semibold text-(--muted) shadow-lg shadow-(color:--shadow-soft) backdrop-blur-xl"
    >
      <Globe2 aria-hidden="true" className="size-4 text-(--metadata)" />
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(pathname, locale)}
            hrefLang={locale}
            aria-current={isActive ? "page" : undefined}
            onClick={() => {
              document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={
              isActive
                ? "rounded-full bg-(--primary) px-3 py-1 text-(--primary-foreground)"
                : "rounded-full px-3 py-1 transition-colors hover:bg-(--surface-elevated) hover:text-foreground"
            }
          >
            {getLocaleLabel(locale)}
          </Link>
        );
      })}
    </nav>
  );
}
