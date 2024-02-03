import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio | Thomas Soares</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Thomas Soares</h1>
        {/* <p>
          Como desenvolvedor front-end, trabalho em conjunto com outros membros
          do time de desenvolvimento, incluindo designers e desenvolvedores
          back-end, para criar interfaces de usuário atraentes e funcionais para
          aplicativos da web. Utilizo tecnologias HTML, CSS, Javascript,
          Typescript, React, Next.js, React Native, Graphql, Node.js, Redux,
          Styled Components, Jest, entre outras.
        </p>

        <p>
          Dentro de um time ágil, sigo rotinas Scrum que incluem reuniões
          diárias de stand-up, planejamento de sprint, revisão de sprint e
          retrospectiva. Trabalho em estreita colaboração com outros membros do
          time para garantir que os requisitos do usuário sejam atendidos em
          cada iteração.
        </p>

        <p>
          Em resumo, como desenvolvedor front-end com mais de 8 anos de
          experiência, meu trabalho inclui desenvolver interfaces de usuário
          usando tecnologias como React, trabalhando em colaboração com outros
          membros do time de desenvolvimento para atender às necessidades do
          usuário e seguindo rotinas Scrum para garantir a entrega do produto de
          forma ágil e eficiente.
        </p> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
