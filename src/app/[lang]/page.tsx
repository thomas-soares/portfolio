import {
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedMain } from "@/components/ui/animated-main";
import { Reveal } from "@/components/ui/reveal";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

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

  return (
    <AnimatedMain className="min-h-screen bg-background pb-16 pt-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-wrap justify-end gap-3">
          <LanguageSwitch
            currentLocale={lang}
            label={dict.language.switchLabel}
          />
          <ThemeSwitch label={dict.theme.toggleLabel} />
        </div>
        <Reveal>
          <section className="rounded-4xl border border-(--border) bg-(--surface)/95 p-8 shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-5">
                <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-(--surface-elevated) px-4 py-2 text-sm font-semibold text-(--primary) shadow-lg shadow-(color:--shadow-soft)">
                  {dict.hero.badge}
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {dict.hero.name}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-(--muted)">
                    {dict.hero.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={dict.hero.resumeHref}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) transition-colors hover:bg-(--primary-hover) hover:text-(--primary-hover-foreground)"
                  >
                    <Download className="h-4 w-4" />
                    <span>{dict.hero.resume}</span>
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
                  {dict.hero.specialtiesTitle}
                </p>
                <div className="mt-6 grid gap-2 text-sm leading-6 text-(--muted)">
                  {dict.hero.specialties.map((specialty) => (
                    <span key={specialty}>{specialty}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-(--primary)" />
                    <CardTitle>{dict.sections.summary.title}</CardTitle>
                  </div>
                  <CardDescription className="text-(--muted)">
                    {dict.sections.summary.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-(--muted)">
                  {dict.sections.summary.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="space-y-6 border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-(--primary-glow)" />
                    <CardTitle>{dict.sections.experience.title}</CardTitle>
                  </div>
                  <CardDescription className="text-(--muted)">
                    {dict.sections.experience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {dict.experience.map((item, index) => {
                    const content = (
                      <article className="space-y-3 rounded-3xl border border-(--border) bg-(--surface) p-5">
                        <h3 className="text-lg font-semibold">
                          {item.company}
                        </h3>
                        <p className="text-sm text-(--metadata)">
                          {item.role}
                        </p>
                        <p className="text-sm text-(--primary-soft)">
                          {item.period}
                        </p>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-(--muted)">
                            {detail}
                          </p>
                        ))}
                      </article>
                    );

                    if (index === dict.experience.length - 1) {
                      return <div key={`${item.company}-${item.period}`}>{content}</div>;
                    }

                    return (
                      <Reveal
                        key={`${item.company}-${item.period}`}
                        delay={index * 0.06}
                      >
                        {content}
                      </Reveal>
                    );
                  })}
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-(--primary-glow)" />
                  <CardTitle>{dict.sections.education.title}</CardTitle>
                </div>
                <CardDescription className="text-(--muted)">
                  {dict.sections.education.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-(--muted)">
                {dict.education.map((item) => (
                  <div
                    key={item.school}
                    className="space-y-3 rounded-3xl border border-(--border) bg-(--surface) p-5"
                  >
                    <h3 className="font-semibold">{item.school}</h3>
                    <p className="text-sm text-(--primary-soft)">
                      {item.degree}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </section>
        <footer className="mt-12 rounded-4xl border border-(--border) bg-(--surface)/95 p-8 text-(--muted) shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl">
          <p className="text-sm text-(--muted)">{dict.footer.copyright}</p>
          <p className="mt-2 text-sm font-medium text-(--metadata)">
            {dict.footer.availability}
          </p>
        </footer>
      </div>
    </AnimatedMain>
  );
}
