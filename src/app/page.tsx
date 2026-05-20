import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16 pt-10 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <section className="rounded-4xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 dark:bg-slate-50 dark:text-slate-950">
                Front-end Senior • Next.js • UI Design
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Thomas Soares
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  Desenvolvedor front-end com mais de 12 anos de experiência.
                  Especializado em React, Next.js e design de sistemas
                  escaláveis. Entrego interfaces modernas com foco em
                  usabilidade, performance e acessibilidade.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Entrar em contato</Button>
                <Button variant="secondary">Ver experiência</Button>
              </div>
            </div>

            <div className="rounded-4xl bg-slate-950/90 px-6 py-8 text-white shadow-xl shadow-slate-950/20 dark:bg-slate-900/95">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Especialidades
              </p>
              <div className="mt-6 grid gap-2 text-sm leading-6 text-slate-200">
                <span>React • Next.js • TypeScript</span>
                <span>Tailwind CSS • Design System</span>
                <span>Performance • Acessibilidade</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <CardTitle>Resumo Profissional</CardTitle>
                </div>
                <CardDescription>
                  Visão geral do perfil e do estilo de trabalho.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Como desenvolvedor front-end, trabalho em conjunto com outros
                  membros do time de desenvolvimento, incluindo designers e
                  desenvolvedores back-end, para criar interfaces de usuário
                  atraentes e funcionais para aplicativos da web. Utilizo
                  tecnologias HTML, CSS, Javascript, Typescript, React, Next.js,
                  React Native, Graphql, Node.js, Zustand, Redux, Tailwind CSS,
                  Styled Components, Jest, entre outras.
                </p>
                <p>
                  Dentro de um time ágil, sigo rotinas Scrum que incluem
                  reuniões diárias de stand-up, planejamento de sprint, revisão
                  de sprint e retrospectiva. Trabalho em estreita colaboração
                  com outros membros do time para garantir que os requisitos do
                  usuário sejam atendidos em cada iteração.
                </p>
                <p>
                  Em resumo, como desenvolvedor front-end com mais de 12 anos de
                  experiência, meu trabalho inclui desenvolver interfaces de
                  usuário usando tecnologias como React, trabalhando em
                  colaboração com outros membros do time de desenvolvimento para
                  atender às necessidades do usuário e seguindo rotinas Scrum
                  para garantir a entrega do produto de forma ágil e eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="space-y-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <CardTitle>Experiência</CardTitle>
                </div>
                <CardDescription>
                  Projetos mais recentes e principais responsabilidades.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">Nexperti</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Frontend Senior | React.js | Next.js | NestJS
                    | TypeScript
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    novembro de 2025 - Present (6 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Atuação como Desenvolvedor Frontend Sênior em um sistema
                    financeiro multi-tenant para gestão e controle de notas
                    fiscais, atendendo múltiplos clientes corporativos.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Responsável pela arquitetura, desenvolvimento e evolução do
                    frontend utilizando React, Next.js e TypeScript, com
                    integração a NestJS e Protheus (TOTVS).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Criação de Design System próprio com Storybook, padronização
                    de componentes reutilizáveis e foco em acessibilidade e
                    escalabilidade.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Implementação de testes unitários, integração e E2E, além de
                    práticas de observabilidade, monitoramento e rastreamento de
                    erros.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Otimizações contínuas de performance e Web Core Vitals (code
                    splitting, lazy loading, cache estratégico), garantindo alta
                    confiabilidade e experiência do usuário em ambiente crítico
                    de negócio.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">Leega</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    outubro de 2024 - novembro de 2025 (1 ano 2 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Trabalhei como desenvolvedor Front-end em um projeto para um
                    cliente do setor financeiro, focado na migração de uma
                    aplicação de internet banking originalmente feita em Flutter
                    Web. Desenvolvemos também o Design System, de acordo com o
                    que foi proposto através do Figma. O sistema foi reescrito
                    utilizando tecnologias modernas, incluindo: React, Vite,
                    Tailwind CSS, Zustand, Storybook, Jest, TanStack Query
                    (React Query), ESLint e Prettier.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">IBM</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    maio de 2023 - setembro de 2024 (1 ano 5 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Atuei como outsourcing para um cliente do ramo de petróleo e
                    gás, trabalhando na migração de um sistema legado em ASP
                    para uma solução moderna em Angular, foi utilizado Angular
                    Material, back-end foi desenvolvido em .NET e o
                    gerenciamento de dados é feito no Oracle utilizando Dapper e
                    Entity Framework. Além disso, segui estudando React e
                    Next.js, que são as tecnologia em que sou mais
                    especializado.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">CI&T</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    julho de 2022 - maio de 2023 (11 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Trabalhava como outsourcing para um cliente do ramo
                    farmacêutico, atuava em um projeto de e-commerce feito em
                    Next.js e no app das duas marcas do cliente que foi feito em
                    React Native, utilizavamos também Typescript, React,
                    Next.js, React Native, Graphql, Node.js, Redux, Styled
                    Components, Jest, além de outras tecnologias.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">americanas s.a.</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    abril de 2021 - julho de 2022 (1 ano 4 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Atuava em um time com outros desenvolvedores front-end,
                    trabalhando na marca Americanas Empresas, desenvolviamos
                    novas features além de modernizar as soluções que já
                    existiam no e-commerce que foi desenvolvido com tecnologias
                    como Typescript, React, Next.js, Node.js, Redux, Styled
                    Components, Jest, GraphQL, entre outras.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">Huia</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    agosto de 2018 - abril de 2021 (2 anos 9 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Trabalhei no desenvolvimento front-end de plugins para
                    DjangoCMS, atuando com metodologia ágil, rodando scrum em
                    times compostos por Product Owner, Scrum Master e
                    desenvolvedores, trabalhamos com tecnologias como Django,
                    DjangoCMS, SASS, REST, Docker, Git, Gitlab e Micro serviços.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Também já trabalhei anteriormente em projetos que utilizavam
                    diversas tecnologias como Drupal 8, Wordpress, Laravel,
                    Lumen, Embedded JavaScript templating, Jenkins, Gulp, Grunt,
                    NPM, Yarn, HTML, CSS, Javascript, Jquery, MySql, SQLite,
                    PHP, Python.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Além disso, estive estudando ReactJS e React Native para
                    estar apto a assumir projetos nessas tecnologias.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">
                    Zeta Informática Ltda.
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    julho de 2017 - agosto de 2018 (1 ano 2 meses)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Atuei na versão web de um sistema legado, esse sistema é
                    desenvolvido em NodeJS e AngularJS, além de outras
                    dependências que visam facilitar o desenvolvimento e/ou a
                    implementação de funcionalidades. Trabalhei conforme
                    necessário em um site com diversos indicadores para os
                    nossos clientes que utilizam o ERP que foi desenvolvido em
                    Ruby.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Trabalhei brevemente no desenvolvimento da emissão de novos
                    documentos eletrônicos como MDFE (manifesto de documento
                    eletrônico) e CTE (conhecimento de transporte) por
                    integrador do ERP desenvolvido em Java.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">Huia</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    março de 2015 - fevereiro de 2017 (2 anos)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tecnologias que tive contato: HTML, CSS, SASS, LESS, Stylus,
                    Bootstrap 3, Foundation, BEM (Block, Element, Modifier),
                    Javascript, Jquery, Gulp, Grunt, Backbone, PHP, Kohana,
                    Wordpress, C#, .Net, SQL Server, MySQL, Jenkins, Composer,
                    NPM, Bower, GIT.
                  </p>
                </article>

                <article className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                  <h3 className="text-lg font-semibold">Ferragem Thony</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Assistente de TI
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    março de 2014 - março de 2015 (1 ano 1 mês)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tecnologias que tive contato: HTML, CSS, Javascript, Jquery,
                    MySQL, PHP, Opencart na versão 1.5.x, Migração para Magento.
                  </p>
                </article>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                <CardTitle>Formação</CardTitle>
              </div>
              <CardDescription>Escolaridade formal e técnica.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                <h3 className="font-semibold">UniRitter</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Bacharelado em Ciência da Computação (2015 - 2021)
                </p>
              </div>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                <h3 className="font-semibold">Alcides Maya Tecnologia</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Técnico em Informática (2013 - 2014)
                </p>
              </div>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/80">
                <h3 className="font-semibold">Micros & Methodos Informática</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Técnico em Informática (2011 - 2012)
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        <footer className="mt-12 rounded-4xl border border-slate-200 bg-white/90 p-8 text-slate-700 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2025 — Perfil Profissional de Thomas Soares
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Disponível para novos projetos e colaborações.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
