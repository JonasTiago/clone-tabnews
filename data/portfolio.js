/* ─── SECTIONS ─── */
export const SECTIONS = [
  { id: "sobre", label: "Sobre mim" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
];

/* ─── DATA ─── */
export const DATA = {
  bio: [
    "Desenvolvedor Backend graduado em Análise e Desenvolvimento de Sistemas, com cerca de três anos de experiência na construção de soluções para ambientes corporativos. Tenho forte atuação no desenvolvimento de APIs REST, modelagem SQL e integração de sistemas distribuídos, além de vivência com ecossistemas de Big Data.",
    "Meu foco é projetar arquiteturas escaláveis e eficientes, utilizando ferramentas como Node.js, TypeScript e frameworks modernos como NestJS. Movido por ambientes desafiadores, também aplico minha visão de ponta a ponta desenvolvendo projetos pessoais Full Stack com React e MongoDB.",
  ],
  experience: [
    {
      role: "Desenvolvedor Back-End Júnior",
      company: "STB Tecnologias",
      period: "fev 2025 – presente",
      items: [
        "Migração de Node.js (Express) para NestJS modular",
        "Serviços com alto volume de requisições diárias",
        "Testes com Jest e SuperTest",
        "Cache com Redis em endpoints críticos de alta volumetria",
        "Otimização de queries SQL no PostgreSQL",
        "Code reviews e padrões de arquitetura para o time",
      ],
    },
    {
      role: "Estagiário Back-End",
      company: "STB Tecnologias",
      period: "jun 2023 – fev 2025",
      items: [
        "Manutenção de sistemas legados em Node.js",
        "Testes unitários e de integração",
        "Colaboração em Scrum e Kanban",
      ],
    },
  ],
  education: [
    {
      inst: "UNIFOR — Universidade de Fortaleza",
      degree: "Análise e Desenvolvimento de Sistemas",
      year: "2025",
    },
    {
      inst: "Driven Education",
      degree: "Desenvolvimento Web Full Stack",
      year: "2023",
      note: "+1.200h · 25+ projetos práticos · React.js e Node.js",
    },
  ],
  skills: {
    "Back-end": ["Node.js", "NestJS", "TypeScript", "Prisma", "TypeORM"],
    "Banco de dados": ["PostgreSQL", "MongoDB", "Redis"],
    Testes: ["Jest", "SuperTest"],
    "Front-end": ["React", "Next.js", "HTML", "CSS"],
    Ferramentas: ["Git", "Docker", "Scrum", "Kanban"],
  },
  projects: [
    {
      name: "Parrots Card Game",
      emoji: "🦜",
      tech: "JavaScript · HTML · CSS",
      desc: "Jogo de cartas interativo com lógica completa e interface animada.",
      repo: "https://github.com/JonasTiago/parrotscardgame",
      live: "https://jonastiago.github.io/parrotscardgame/",
    },
    {
      name: "Jogo da Forca",
      emoji: "🎯",
      tech: "JavaScript · HTML · CSS",
      desc: "Clássico jogo da forca com feedback visual em tempo real.",
      repo: "https://github.com/JonasTiago/jogoforca",
      live: "https://projeto8-jogoforca-82uv.vercel.app/",
    },
    {
      name: "Decodificador",
      emoji: "🔐",
      tech: "JavaScript · HTML · CSS",
      desc: "Codifica e decodifica mensagens com algoritmo próprio.",
      repo: "https://github.com/JonasTiago/Decodificador",
      live: "https://jonastiago.github.io/Decodificador/",
    },
  ],
  links: {
    github: "https://github.com/JonasTiago",
    linkedin: "https://www.linkedin.com/in/jonastiago/",
    email: "mailto:jonastiago@email.com",
    instagram: "https://www.instagram.com/j.t.santos85/",
  },
};
