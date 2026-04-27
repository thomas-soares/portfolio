import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <>
        <header>
          <h1>Thomas Soares</h1>
          <p>Desenvolvedor Front-end na Nexperti</p>
          <p>Javascript • Typescript • React • Next.js • Node.js • NestJS</p>
        </header>

        <main>
          <section>
            <h2>Resumo</h2>
            <p>
              Como desenvolvedor front-end, trabalho em conjunto com designers e
              desenvolvedores back-end para criar interfaces de usuário
              atraentes e funcionais para aplicativos da web. Utilizo
              tecnologias como HTML, CSS, Javascript, Typescript, React,
              Next.js, React Native, Graphql, Node.js, Zustand, Redux, Tailwind
              CSS, Styled Components, Jest, entre outras.
            </p>
            <p>
              Dentro de um time ágil, sigo rotinas Scrum que incluem reuniões
              diárias, planejamento de sprint, revisão e retrospectiva. Colaboro
              para garantir que os requisitos do usuário sejam atendidos em cada
              iteração.
            </p>
            <p>
              Com mais de 12 anos de experiência, desenvolvo interfaces com foco
              em React e trabalho em equipes multidisciplinares para entregar
              produtos de forma ágil e eficiente. 🚀
            </p>
          </section>

          <section>
            <h2>Experiência</h2>

            <article>
              <h3>
                Nexperti — Desenvolvedor Frontend Senior | React.js | Next.js |
                NestJS | TypeScript
              </h3>
              <p>
                <strong>novembro de 2024 - até o momento</strong>
              </p>
              <p>
                Atuação como Desenvolvedor Frontend Sênior em um sistema
                financeiro multi-tenant para gestão e controle de notas fiscais,
                atendendo múltiplos clientes corporativos.
              </p>
              <p>
                Responsável pela arquitetura, desenvolvimento e evolução do
                frontend utilizando React, Next.js e TypeScript, com integração
                a NestJS e Protheus (TOTVS).
              </p>
              <p>
                Criação de Design System próprio com Storybook, padronização de
                componentes reutilizáveis e foco em acessibilidade e
                escalabilidade.
              </p>
              <p>
                Implementação de testes unitários, integração e E2E, além de
                práticas de observabilidade, monitoramento e rastreamento de
                erros.
              </p>
              <p>
                Otimizações contínuas de performance e Web Core Vitals (code
                splitting, lazy loading, cache estratégico), garantindo alta
                confiabilidade e experiência do usuário em ambiente crítico de
                negócio.
              </p>
            </article>

            <article>
              <h3>Leega — Desenvolvedor Front-end</h3>
              <p>
                <strong>outubro de 2024 - novembro de 2025</strong>
              </p>
              <p>
                Atuei em um projeto do setor financeiro, migrando uma aplicação
                de internet banking originalmente em Flutter Web. Também
                desenvolvemos o Design System baseado no Figma. O sistema foi
                reescrito com React, Vite, Tailwind CSS, Zustand, Storybook,
                Jest, TanStack Query, ESLint e Prettier.
              </p>
            </article>

            <article>
              <h3>IBM — Desenvolvedor Front-end</h3>
              <p>
                <strong>maio de 2023 - setembro de 2024</strong>
              </p>
              <p>
                Outsourcing para cliente de petróleo e gás, atuando na migração
                de um sistema legado em ASP para Angular. Utilização de Angular
                Material, back-end em .NET e Oracle com Dapper e Entity
                Framework. Paralelamente, estudei mais React e Next.js, minhas
                principais especialidades.
              </p>
            </article>

            <article>
              <h3>CI&T — Desenvolvedor Front-end</h3>
              <p>
                <strong>julho de 2022 - maio de 2023</strong>
              </p>
              <p>
                Outsourcing para cliente do ramo farmacêutico, trabalhando em
                e-commerce feito em Next.js e em apps das marcas utilizando
                React Native. Tecnologias: Typescript, React, Next.js, React
                Native, GraphQL, Node.js, Redux, Styled Components, Jest etc.
              </p>
            </article>

            <article>
              <h3>americanas s.a. — Desenvolvedor Front-end</h3>
              <p>
                <strong>abril de 2021 - julho de 2022</strong>
              </p>
              <p>
                Atuação na marca Americanas Empresas, desenvolvendo novas
                features e modernizando soluções do e-commerce usando
                Typescript, React, Next.js, Node.js, Redux, Styled Components,
                Jest, GraphQL.
              </p>
            </article>

            <article>
              <h3>Huia — Desenvolvedor Front-end</h3>
              <p>
                <strong>agosto de 2018 - abril de 2021</strong>
              </p>
              <p>
                Desenvolvimento front-end de plugins para DjangoCMS utilizando
                metodologias ágeis. Tecnologias: Django, DjangoCMS, SASS, REST,
                Docker, Git, Gitlab, micro serviços. Projetos anteriores com
                Drupal 8, Wordpress, Laravel, Lumen, EJS, Jenkins, Gulp, Grunt,
                NPM, Yarn, HTML, CSS, Javascript, Jquery, MySQL, SQLite, PHP,
                Python.
              </p>
            </article>

            <article>
              <h3>Zeta Informática Ltda. — Desenvolvedor Front-end</h3>
              <p>
                <strong>julho de 2017 - agosto de 2018</strong>
              </p>
              <p>
                Atuei na versão web de um sistema legado desenvolvido em NodeJS
                e AngularJS. Também trabalhei em um site com indicadores para
                clientes de ERP em Ruby. Participei brevemente do
                desenvolvimento de emissão de documentos eletrônicos (MDFE e
                CTE) via integrador Java.
              </p>
            </article>

            <article>
              <h3>Huia — Desenvolvedor Front-end</h3>
              <p>
                <strong>março de 2015 - fevereiro de 2017</strong>
              </p>
              <p>
                Tecnologias utilizadas: HTML, CSS, SASS, LESS, Stylus, Bootstrap
                3, Foundation, BEM, Javascript, Jquery, Gulp, Grunt, Backbone,
                PHP, Kohana, Wordpress, C#, .NET, SQL Server, MySQL, Jenkins,
                Composer, NPM, Bower, Git.
              </p>
            </article>

            <article>
              <h3>Ferragem Thony — Assistente de TI</h3>
              <p>
                <strong>março de 2014 - março de 2015</strong>
              </p>
              <p>
                Tecnologias utilizadas: HTML, CSS, Javascript, Jquery, MySQL,
                PHP, OpenCart 1.5.x e migração para Magento.
              </p>
            </article>
          </section>

          <section>
            <h2>Formação acadêmica</h2>

            <article>
              <h3>UniRitter</h3>
              <p>Bacharelado em Ciência da Computação (2015 - 2021)</p>
            </article>

            <article>
              <h3>Alcides Maya Tecnologia</h3>
              <p>Técnico em Informática (2013 - 2014)</p>
            </article>

            <article>
              <h3>Micros & Methodos Informática</h3>
              <p>Técnico em Informática (2011 - 2012)</p>
            </article>
          </section>
        </main>

        <footer>
          <p>© 2025 — Perfil Profissional de Thomas Soares</p>
        </footer>
      </>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
