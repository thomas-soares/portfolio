import { defaultLocale, type Locale } from "./config";

const ptBR = {
  metadata: {
    title: "Home | Thomas Soares",
    description: "Perfil profissional de Thomas Soares",
  },
  theme: {
    toggleLabel: "Alternar tema",
  },
  language: {
    switchLabel: "Selecionar idioma",
  },
  hero: {
    badge: "Front-end Senior • Next.js • UI Design",
    name: "Thomas Soares",
    summary:
      "Desenvolvedor front-end com mais de 12 anos de experiência. Especializado em React, Next.js e design de sistemas escaláveis. Entrego interfaces modernas com foco em usabilidade, performance e acessibilidade.",
    resume: "Baixar currículo",
    resumeHref: "/thomas-soares-resume.pdf",
    specialtiesTitle: "Especialidades",
    specialties: [
      "React • Next.js • TypeScript",
      "Tailwind CSS • Design System",
      "Performance • Acessibilidade",
    ],
  },
  sections: {
    summary: {
      title: "Resumo Profissional",
      description: "Visão geral do perfil e do estilo de trabalho.",
      paragraphs: [
        "Como desenvolvedor front-end, trabalho em conjunto com outros membros do time de desenvolvimento, incluindo designers e desenvolvedores back-end, para criar interfaces de usuário atraentes e funcionais para aplicativos da web. Utilizo tecnologias HTML, CSS, Javascript, Typescript, React, Next.js, React Native, Graphql, Node.js, Zustand, Redux, Tailwind CSS, Styled Components, Jest, entre outras.",
        "Dentro de um time ágil, sigo rotinas Scrum que incluem reuniões diárias de stand-up, planejamento de sprint, revisão de sprint e retrospectiva. Trabalho em estreita colaboração com outros membros do time para garantir que os requisitos do usuário sejam atendidos em cada iteração.",
        "Em resumo, como desenvolvedor front-end com mais de 12 anos de experiência, meu trabalho inclui desenvolver interfaces de usuário usando tecnologias como React, trabalhando em colaboração com outros membros do time de desenvolvimento para atender às necessidades do usuário e seguindo rotinas Scrum para garantir a entrega do produto de forma ágil e eficiente.",
      ],
    },
    experience: {
      title: "Experiência",
      description: "Projetos mais recentes e principais responsabilidades.",
    },
    education: {
      title: "Formação",
      description: "Escolaridade formal e técnica.",
    },
  },
  experience: [
    {
      company: "Nexperti",
      role: "Desenvolvedor Frontend Senior | React.js | Next.js | NestJS | TypeScript",
      period: "novembro de 2025 - Presente (6 meses)",
      details: [
        "Atuação como Desenvolvedor Frontend Sênior em um sistema financeiro multi-tenant para gestão e controle de notas fiscais, atendendo múltiplos clientes corporativos.",
        "Responsável pela arquitetura, desenvolvimento e evolução do frontend utilizando React, Next.js e TypeScript, com integração a NestJS e Protheus (TOTVS).",
        "Criação de Design System próprio com Storybook, padronização de componentes reutilizáveis e foco em acessibilidade e escalabilidade.",
        "Implementação de testes unitários, integração e E2E, além de práticas de observabilidade, monitoramento e rastreamento de erros.",
        "Otimizações contínuas de performance e Web Core Vitals (code splitting, lazy loading, cache estratégico), garantindo alta confiabilidade e experiência do usuário em ambiente crítico de negócio.",
      ],
    },
    {
      company: "Leega",
      role: "Desenvolvedor Front-end",
      period: "outubro de 2024 - novembro de 2025 (1 ano 2 meses)",
      details: [
        "Trabalhei como desenvolvedor Front-end em um projeto para um cliente do setor financeiro, focado na migração de uma aplicação de internet banking originalmente feita em Flutter Web. Desenvolvemos também o Design System, de acordo com o que foi proposto através do Figma. O sistema foi reescrito utilizando tecnologias modernas, incluindo: React, Vite, Tailwind CSS, Zustand, Storybook, Jest, TanStack Query (React Query), ESLint e Prettier.",
      ],
    },
    {
      company: "IBM",
      role: "Desenvolvedor Front-end",
      period: "maio de 2023 - setembro de 2024 (1 ano 5 meses)",
      details: [
        "Atuei como outsourcing para um cliente do ramo de petróleo e gás, trabalhando na migração de um sistema legado em ASP para uma solução moderna em Angular. Foi utilizado Angular Material, o back-end foi desenvolvido em .NET e o gerenciamento de dados é feito no Oracle utilizando Dapper e Entity Framework. Além disso, segui estudando React e Next.js, que são as tecnologias em que sou mais especializado.",
      ],
    },
    {
      company: "CI&T",
      role: "Desenvolvedor Front-end",
      period: "julho de 2022 - maio de 2023 (11 meses)",
      details: [
        "Trabalhava como outsourcing para um cliente do ramo farmacêutico, atuava em um projeto de e-commerce feito em Next.js e no app das duas marcas do cliente que foi feito em React Native. Utilizávamos também Typescript, React, Next.js, React Native, Graphql, Node.js, Redux, Styled Components, Jest, além de outras tecnologias.",
      ],
    },
    {
      company: "americanas s.a.",
      role: "Desenvolvedor Front-end",
      period: "abril de 2021 - julho de 2022 (1 ano 4 meses)",
      details: [
        "Atuava em um time com outros desenvolvedores front-end, trabalhando na marca Americanas Empresas. Desenvolvíamos novas features além de modernizar as soluções que já existiam no e-commerce, desenvolvido com tecnologias como Typescript, React, Next.js, Node.js, Redux, Styled Components, Jest, GraphQL, entre outras.",
      ],
    },
    {
      company: "Huia",
      role: "Desenvolvedor Front-end",
      period: "agosto de 2018 - abril de 2021 (2 anos 9 meses)",
      details: [
        "Trabalhei no desenvolvimento front-end de plugins para DjangoCMS, atuando com metodologia ágil, rodando scrum em times compostos por Product Owner, Scrum Master e desenvolvedores. Trabalhamos com tecnologias como Django, DjangoCMS, SASS, REST, Docker, Git, Gitlab e Micro serviços.",
        "Também já trabalhei anteriormente em projetos que utilizavam diversas tecnologias como Drupal 8, Wordpress, Laravel, Lumen, Embedded JavaScript templating, Jenkins, Gulp, Grunt, NPM, Yarn, HTML, CSS, Javascript, Jquery, MySql, SQLite, PHP, Python.",
        "Além disso, estive estudando ReactJS e React Native para estar apto a assumir projetos nessas tecnologias.",
      ],
    },
    {
      company: "Zeta Informática Ltda.",
      role: "Desenvolvedor Front-end",
      period: "julho de 2017 - agosto de 2018 (1 ano 2 meses)",
      details: [
        "Atuei na versão web de um sistema legado, esse sistema é desenvolvido em NodeJS e AngularJS, além de outras dependências que visam facilitar o desenvolvimento e/ou a implementação de funcionalidades. Trabalhei conforme necessário em um site com diversos indicadores para os nossos clientes que utilizam o ERP que foi desenvolvido em Ruby.",
        "Trabalhei brevemente no desenvolvimento da emissão de novos documentos eletrônicos como MDFE (manifesto de documento eletrônico) e CTE (conhecimento de transporte) por integrador do ERP desenvolvido em Java.",
      ],
    },
    {
      company: "Huia",
      role: "Desenvolvedor Front-end",
      period: "março de 2015 - fevereiro de 2017 (2 anos)",
      details: [
        "Tecnologias que tive contato: HTML, CSS, SASS, LESS, Stylus, Bootstrap 3, Foundation, BEM (Block, Element, Modifier), Javascript, Jquery, Gulp, Grunt, Backbone, PHP, Kohana, Wordpress, C#, .Net, SQL Server, MySQL, Jenkins, Composer, NPM, Bower, GIT.",
      ],
    },
    {
      company: "Ferragem Thony",
      role: "Assistente de TI",
      period: "março de 2014 - março de 2015 (1 ano 1 mês)",
      details: [
        "Tecnologias que tive contato: HTML, CSS, Javascript, Jquery, MySQL, PHP, Opencart na versão 1.5.x, Migração para Magento.",
      ],
    },
  ],
  education: [
    {
      school: "UniRitter",
      degree: "Bacharelado em Ciência da Computação (2015 - 2021)",
    },
    {
      school: "Alcides Maya Tecnologia",
      degree: "Técnico em Informática (2013 - 2014)",
    },
    {
      school: "Micros & Methodos Informática",
      degree: "Técnico em Informática (2011 - 2012)",
    },
  ],
  footer: {
    copyright: "© 2026 - Perfil Profissional de Thomas Soares",
    availability: "Disponível para novos projetos e colaborações.",
  },
};

const en = {
  metadata: {
    title: "Home | Thomas Soares",
    description: "Professional profile of Thomas Soares",
  },
  theme: {
    toggleLabel: "Toggle theme",
  },
  language: {
    switchLabel: "Select language",
  },
  hero: {
    badge: "Senior Front-end • Next.js • UI Design",
    name: "Thomas Soares",
    summary:
      "Front-end developer with more than 12 years of experience. Specialized in React, Next.js, and scalable design systems. I deliver modern interfaces focused on usability, performance, and accessibility.",
    resume: "Download resume",
    resumeHref: "/curriculo-thomas-soares.pdf",
    specialtiesTitle: "Specialties",
    specialties: [
      "React • Next.js • TypeScript",
      "Tailwind CSS • Design System",
      "Performance • Accessibility",
    ],
  },
  sections: {
    summary: {
      title: "Professional Summary",
      description: "Overview of profile and working style.",
      paragraphs: [
        "As a front-end developer, I work closely with development teams, including designers and back-end developers, to create attractive and functional user interfaces for web applications. I use technologies such as HTML, CSS, Javascript, Typescript, React, Next.js, React Native, Graphql, Node.js, Zustand, Redux, Tailwind CSS, Styled Components, Jest, and others.",
        "Within agile teams, I follow Scrum routines that include daily stand-ups, sprint planning, sprint reviews, and retrospectives. I collaborate closely with other team members to ensure user requirements are met in each iteration.",
        "In short, as a front-end developer with more than 12 years of experience, my work includes building user interfaces with technologies like React, collaborating with other development team members to meet user needs, and following Scrum routines to deliver products in an agile and efficient way.",
      ],
    },
    experience: {
      title: "Experience",
      description: "Most recent projects and key responsibilities.",
    },
    education: {
      title: "Education",
      description: "Formal and technical education.",
    },
  },
  experience: [
    {
      company: "Nexperti",
      role: "Senior Frontend Developer | React.js | Next.js | NestJS | TypeScript",
      period: "November 2025 - Present (6 months)",
      details: [
        "Worked as a Senior Frontend Developer on a multi-tenant financial system for invoice management and control, serving multiple corporate clients.",
        "Responsible for frontend architecture, development, and evolution using React, Next.js, and TypeScript, with integrations with NestJS and Protheus (TOTVS).",
        "Created an internal Design System with Storybook, standardized reusable components, and focused on accessibility and scalability.",
        "Implemented unit, integration, and E2E tests, as well as observability, monitoring, and error tracking practices.",
        "Led continuous performance and Web Core Vitals optimizations (code splitting, lazy loading, strategic caching), ensuring high reliability and user experience in a business-critical environment.",
      ],
    },
    {
      company: "Leega",
      role: "Front-end Developer",
      period: "October 2024 - November 2025 (1 year 2 months)",
      details: [
        "Worked as a Front-end Developer on a financial-sector project focused on migrating an internet banking application originally built with Flutter Web. We also developed the Design System based on Figma proposals. The system was rewritten with modern technologies including React, Vite, Tailwind CSS, Zustand, Storybook, Jest, TanStack Query (React Query), ESLint, and Prettier.",
      ],
    },
    {
      company: "IBM",
      role: "Front-end Developer",
      period: "May 2023 - September 2024 (1 year 5 months)",
      details: [
        "Worked as an outsourced developer for an oil and gas client, contributing to the migration of a legacy ASP system to a modern Angular solution. Angular Material was used on the frontend, the back end was built with .NET, and data management was handled in Oracle using Dapper and Entity Framework. I also continued studying React and Next.js, the technologies I specialize in most.",
      ],
    },
    {
      company: "CI&T",
      role: "Front-end Developer",
      period: "July 2022 - May 2023 (11 months)",
      details: [
        "Worked as an outsourced developer for a pharmaceutical client, contributing to a Next.js e-commerce project and to the mobile apps for two of the client's brands built with React Native. We also used Typescript, React, Next.js, React Native, Graphql, Node.js, Redux, Styled Components, Jest, and other technologies.",
      ],
    },
    {
      company: "americanas s.a.",
      role: "Front-end Developer",
      period: "April 2021 - July 2022 (1 year 4 months)",
      details: [
        "Worked on a team with other front-end developers for the Americanas Empresas brand. We built new features and modernized existing e-commerce solutions developed with technologies such as Typescript, React, Next.js, Node.js, Redux, Styled Components, Jest, GraphQL, and others.",
      ],
    },
    {
      company: "Huia",
      role: "Front-end Developer",
      period: "August 2018 - April 2021 (2 years 9 months)",
      details: [
        "Worked on the front-end development of plugins for DjangoCMS, using agile methodology and Scrum routines in teams composed of a Product Owner, Scrum Master, and developers. We worked with technologies such as Django, DjangoCMS, SASS, REST, Docker, Git, Gitlab, and microservices.",
        "I had also previously worked on projects using several technologies such as Drupal 8, Wordpress, Laravel, Lumen, Embedded JavaScript templating, Jenkins, Gulp, Grunt, NPM, Yarn, HTML, CSS, Javascript, Jquery, MySql, SQLite, PHP, and Python.",
        "I also studied ReactJS and React Native to be ready to take on projects using those technologies.",
      ],
    },
    {
      company: "Zeta Informática Ltda.",
      role: "Front-end Developer",
      period: "July 2017 - August 2018 (1 year 2 months)",
      details: [
        "Worked on the web version of a legacy system developed with NodeJS and AngularJS, along with other dependencies intended to support development and feature implementation. I also worked as needed on a dashboard site with several indicators for customers using the ERP developed in Ruby.",
        "Briefly worked on the development of new electronic document issuing features such as MDFE and CTE through an ERP integrator developed in Java.",
      ],
    },
    {
      company: "Huia",
      role: "Front-end Developer",
      period: "March 2015 - February 2017 (2 years)",
      details: [
        "Technologies I had contact with: HTML, CSS, SASS, LESS, Stylus, Bootstrap 3, Foundation, BEM (Block, Element, Modifier), Javascript, Jquery, Gulp, Grunt, Backbone, PHP, Kohana, Wordpress, C#, .Net, SQL Server, MySQL, Jenkins, Composer, NPM, Bower, and GIT.",
      ],
    },
    {
      company: "Ferragem Thony",
      role: "IT Assistant",
      period: "March 2014 - March 2015 (1 year 1 month)",
      details: [
        "Technologies I had contact with: HTML, CSS, Javascript, Jquery, MySQL, PHP, Opencart 1.5.x, and migration to Magento.",
      ],
    },
  ],
  education: [
    {
      school: "UniRitter",
      degree: "Bachelor's degree in Computer Science (2015 - 2021)",
    },
    {
      school: "Alcides Maya Tecnologia",
      degree: "Technical degree in Information Technology (2013 - 2014)",
    },
    {
      school: "Micros & Methodos Informática",
      degree: "Technical degree in Information Technology (2011 - 2012)",
    },
  ],
  footer: {
    copyright: "© 2026 - Professional Profile of Thomas Soares",
    availability: "Available for new projects and collaborations.",
  },
};

const dictionaries = {
  "pt-BR": ptBR,
  en,
} satisfies Record<Locale, typeof ptBR>;

export type Dictionary = typeof ptBR;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
