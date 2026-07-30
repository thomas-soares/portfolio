import {
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    company: "Nexperti",
    role: "Desenvolvedor Front-end Sênior",
    period: "nov/2025 - atual",
    summary:
      "Atuacao em plataforma financeira multi-tenant para gestao de notas fiscais, liderando arquitetura front-end, evolucao de design system e otimizarcoes de performance em ambiente critico.",
    stack: ["React", "Next.js", "TypeScript", "Storybook", "NestJS"],
  },
  {
    company: "Leega",
    role: "Desenvolvedor Front-end",
    period: "out/2024 - nov/2025",
    summary:
      "Migracao de internet banking para stack moderna com foco em consistencia visual, estado global previsivel e padroes de qualidade com testes e linting.",
    stack: ["React", "Vite", "Tailwind", "Zustand", "Jest"],
  },
  {
    company: "IBM",
    role: "Desenvolvedor Front-end",
    period: "mai/2023 - set/2024",
    summary:
      "Migracao de sistema legado para Angular em projeto de oleo e gas, com integracao a backend .NET e persistencia Oracle.",
    stack: ["Angular", "Angular Material", ".NET", "Oracle"],
  },
  {
    company: "CI&T",
    role: "Desenvolvedor Front-end",
    period: "jul/2022 - mai/2023",
    summary:
      "Atuacao em e-commerce e app mobile para cliente farmaceutico, com foco em experiencia do usuario e entrega continua em time agil.",
    stack: ["Next.js", "React Native", "GraphQL", "Redux"],
  },
  {
    company: "americanas s.a.",
    role: "Desenvolvedor Front-end",
    period: "abr/2021 - jul/2022",
    summary:
      "Desenvolvimento de novas funcionalidades e modernizacao de fluxos no e-commerce B2B da marca Americanas Empresas.",
    stack: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    company: "Huia",
    role: "Desenvolvedor Front-end",
    period: "ago/2018 - abr/2021",
    summary:
      "Criacao de plugins para DjangoCMS e participacao em times Scrum multidisciplinares com forte base em web fundamentals e entregas orientadas a produto.",
    stack: ["DjangoCMS", "SASS", "Docker", "GitLab"],
  },
];

const education = [
  "UniRitter - Bacharelado em Ciencia da Computacao (2015 - 2021)",
  "Alcides Maya Tecnologia - Tecnico em Informatica (2013 - 2014)",
  "Micros & Methodos Informatica - Tecnico em Informatica (2011 - 2012)",
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Design System",
  "Storybook",
  "Jest",
  "Redux",
  "Zustand",
  "GraphQL",
  "Node.js",
  "Acessibilidade",
  "Web Performance",
];

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3">
      <span className="text-[var(--accent-cyan)]">{icon}</span>
      <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-green)]">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 text-[var(--foreground)] sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-6xl border border-[var(--border)] bg-[color:var(--surface)]/95">
        <header className="grid gap-8 border-b border-[var(--border)] px-6 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:py-10">
          <div>
            <h1 className="text-balance [font-family:var(--font-playfair-display)] text-5xl font-extrabold leading-[0.92] text-[var(--foreground)] sm:text-6xl">
              Thomas
              <span className="block text-[var(--accent-orange)]">Soares</span>
            </h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-yellow)] sm:text-sm">
              Front-end Senior • React • Next.js • TypeScript
            </p>
          </div>

          <div className="space-y-2 text-sm text-[var(--muted)] md:text-right">
            <p className="inline-flex items-center gap-2 md:justify-end">
              <MapPin className="h-4 w-4 text-[var(--accent-purple)]" />
              Porto Alegre, Brasil
            </p>
            <a
              href="/curriculo-thomas-soares.pdf"
              download
              className="flex items-center gap-2 text-[var(--accent-cyan)] transition-colors hover:text-[var(--accent-green)] md:justify-end"
            >
              <Download className="h-4 w-4" />
              Baixar curriculo
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-soares-339465a6/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[var(--accent-cyan)] transition-colors hover:text-[var(--accent-green)] md:justify-end"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/thomas-soares"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[var(--accent-cyan)] transition-colors hover:text-[var(--accent-green)] md:justify-end"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </header>

        <div className="grid md:grid-cols-[1.65fr_0.9fr]">
          <section className="space-y-10 border-b border-[var(--border)] px-6 py-8 sm:px-8 md:border-b-0 md:border-r md:border-[var(--border)]">
            <section className="space-y-5">
              <SectionTitle
                icon={<Briefcase className="h-4 w-4" />}
                title="Resumo"
              />
              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                Desenvolvedor front-end com mais de 12 anos de experiencia,
                especializado em interfaces escalaveis, design systems e
                performance web. Trabalho em colaboracao com produto, design e
                backend para entregar experiencias consistentes, acessiveis e
                focadas em resultado de negocio.
              </p>
            </section>

            <section className="space-y-5">
              <SectionTitle
                icon={<Briefcase className="h-4 w-4" />}
                title="Experiencia"
              />
              <div className="space-y-8">
                {experiences.map((item) => (
                  <article
                    key={item.company + item.period}
                    className="border-b border-[var(--border)] pb-8 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="[font-family:var(--font-playfair-display)] text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-[2rem]">
                        {item.role}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-purple)]">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-cyan)]">
                      {item.company}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {item.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-[var(--accent-orange)]/45 bg-[var(--surface-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--accent-yellow)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </section>

          <aside className="space-y-10 px-6 py-8 sm:px-8">
            <section className="space-y-4">
              <SectionTitle
                icon={<GraduationCap className="h-4 w-4" />}
                title="Formacao"
              />
              <ul>
                {education.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[var(--border)] py-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <SectionTitle
                icon={<Briefcase className="h-4 w-4" />}
                title="Skills"
              />
              <ul>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-[var(--border)] py-2 text-sm text-[var(--muted)]"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <footer className="border-t border-[var(--border)] px-6 py-5 text-xs text-[var(--accent-purple)] sm:px-8 sm:text-sm">
          © 2026 Thomas Soares · Disponivel para novos projetos e colaboracoes.
        </footer>
      </div>
    </main>
  );
}
