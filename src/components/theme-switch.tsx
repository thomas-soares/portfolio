"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export function ThemeSwitch() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <div className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface)/95 px-3 py-2 text-(--muted) shadow-lg shadow-(color:--shadow-soft) backdrop-blur-xl">
      <Moon
        aria-hidden="true"
        className="size-4 text-(--metadata) opacity-90"
      />
      <Switch
        checked={isLight}
        aria-label="Alternar tema"
        onCheckedChange={(checked) => {
          setTheme(checked ? "light" : "dark");
        }}
      />
      <Sun
        aria-hidden="true"
        className="size-4 text-(--primary-glow) opacity-90"
      />
    </div>
  );
}
