import { notFound } from "next/navigation";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { GitHubSection } from "@/components/github-section";
import { HeroSection } from "@/components/hero-section";
import { LanguageSwitch } from "@/components/language-switch";
import { SummarySection } from "@/components/summary-section";
import { ThemeSwitch } from "@/components/theme-switch";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getGitHubData } from "@/lib/github";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const githubData = await getGitHubData();

  return (
    <main className="min-h-screen bg-background pb-16 pt-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-wrap justify-end gap-3">
          <LanguageSwitch
            currentLocale={lang}
            label={dict.language.switchLabel}
          />
          <ThemeSwitch label={dict.theme.toggleLabel} />
        </div>

        <HeroSection content={dict.hero} />

        <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <SummarySection content={dict.sections.summary} />
            <ExperienceSection
              content={dict.sections.experience}
              items={dict.experience}
            />
          </div>

          <EducationSection
            content={dict.sections.education}
            items={dict.education}
          />
        </section>

        <GitHubSection
          data={githubData}
          labels={dict.sections.github}
          locale={lang}
        />

        <footer className="mt-12 rounded-4xl border border-(--border) bg-(--surface)/95 p-8 text-(--muted) shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl">
          <p className="text-sm text-(--muted)">{dict.footer.copyright}</p>
          <p className="mt-2 text-sm font-medium text-(--metadata)">
            {dict.footer.availability}
          </p>
        </footer>
      </div>
    </main>
  );
}
