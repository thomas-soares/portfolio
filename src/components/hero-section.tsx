import { Download, Github, Linkedin } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="rounded-4xl border border-(--border) bg-(--surface)/95 p-8 shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-(--surface-elevated) px-4 py-2 text-sm font-semibold text-(--primary) shadow-lg shadow-(color:--shadow-soft)">
            {content.badge}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {content.name}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-(--muted)">
              {content.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={content.resumeHref}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) transition-colors hover:bg-(--primary-hover) hover:text-(--primary-hover-foreground)"
            >
              <Download className="h-4 w-4" />
              <span>{content.resume}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-soares-frontend/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--secondary) px-6 py-3 text-sm font-semibold text-(--secondary-foreground) transition-colors hover:bg-(--primary-soft) hover:text-(--primary-hover-foreground)"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/thomas-soares"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-(--border) bg-(--surface) px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-(--surface-elevated)"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="rounded-4xl border border-(--border) bg-(--surface-elevated) px-6 py-8 text-foreground shadow-xl shadow-(color:--shadow-medium)">
          <p className="text-sm uppercase tracking-[0.28em] text-(--metadata)">
            {content.specialtiesTitle}
          </p>
          <div className="mt-6 grid gap-2 text-sm leading-6 text-(--muted)">
            {content.specialties.map((specialty) => (
              <span key={specialty}>{specialty}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
