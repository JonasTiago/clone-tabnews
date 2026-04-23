import { useState, useEffect } from "react";
import Head from "next/head";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const DATA = {
  name: "Jonas Tiago",
  surname: "Santos",
  headline:
    "Software Engineer | Full Stack | Back-end | Node.js · NestJS · TypeScript · PostgreSQL · MongoDB · React",
  location: "Fortaleza, Ceará, Brasil",
  company: "STB Tecnologias",
  connections: "127",
  bio: `Desenvolvedor Backend com quase 2 anos de experiência atuando em sistemas de Big Data em ambiente corporativo. Forte atuação com SQL, manipulação de dados em larga escala, arquitetura de APIs REST e integração com sistemas distribuídos.

Familiaridade com containers Docker, versionamento com Git e metodologias ágeis. Interesse em evoluir tecnicamente em ambientes desafiadores, com foco em backend, dados e escalabilidade.

Também desenvolvo projetos pessoais Full Stack com React, Node.js e MongoDB.`,
  experience: [
    {
      role: "Desenvolvedor Back-End Júnior",
      company: "STB Tecnologias",
      location: "Fortaleza, CE",
      period: "fev 2025 – presente",
      duration: "3 meses",
      items: [
        "Migração de sistemas legados Node.js (Express) para arquitetura modular em NestJS",
        "Manutenção e evolução de serviços com alto volume de requisições diárias",
        "Testes unitários e de integração com Jest e SuperTest",
        "Cache com Redis, reduzindo latência em endpoints críticos de alta volumetria",
        "Otimização avançada de queries SQL no PostgreSQL",
        "Code reviews e definição de padrões de arquitetura para o time",
      ],
    },
    {
      role: "Estagiário de Desenvolvimento Back-End",
      company: "STB Tecnologias",
      location: "Fortaleza, CE",
      period: "jun 2023 – fev 2025",
      duration: "1 ano e 8 meses",
      items: [
        "Manutenção de sistemas legados em Node.js com adição de novas funcionalidades",
        "Testes unitários e de integração com Jest e SuperTest",
        "Colaboração em metodologias ágeis (Scrum e Kanban)",
      ],
    },
  ],
  education: [
    {
      institution: "UNIFOR — Universidade de Fortaleza",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "Concluído em 2025",
      detail: "",
    },
    {
      institution: "Driven Education",
      degree: "Desenvolvimento Web Full Stack",
      period: "Concluído em 2023",
      detail:
        "Formação intensiva · +1.200 horas · 25+ projetos práticos · React.js e Node.js",
    },
  ],
  skills: {
    "Back-end": ["Node.js", "NestJS", "TypeScript", "Prisma", "TypeORM"],
    APIs: ["REST", "Integração de serviços", "Autenticação JWT"],
    "Banco de dados": ["PostgreSQL", "MongoDB", "Redis"],
    Testes: ["Jest", "SuperTest"],
    "Front-end": ["React", "Next.js", "HTML", "CSS"],
    "DevOps / Ferramentas": ["Git", "Docker", "Scrum", "Kanban"],
  },
  projects: [
    {
      name: "Parrots Card Game",
      desc: "Jogo de cartas interativo com temática de papagaios. Lógica de jogo completa, placar e interface animada.",
      tech: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/JonasTiago/parrotscardgame",
      emoji: "🦜",
    },
    {
      name: "Jogo da Forca",
      desc: "Clássico jogo da forca com palavras temáticas, contagem de tentativas e feedback visual em tempo real.",
      tech: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/JonasTiago/jogoforca",
      emoji: "🎯",
    },
    {
      name: "Decodificador de Texto",
      desc: "Aplicação que codifica e decodifica mensagens usando algoritmo próprio. Interface limpa e responsiva.",
      tech: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/JonasTiago/Decodificador",
      emoji: "🔐",
    },
  ],
  links: {
    github: "https://github.com/JonasTiago",
    linkedin: "https://www.linkedin.com/in/jonastiago/",
  },
  languages: ["Inglês — Técnico (leitura)", "Espanhol — Básico"],
};

/* ─────────────────────────────────────────
   THEME
───────────────────────────────────────── */
const T = {
  blue: "#0A66C2",
  bg: "#f3f2ef",
  card: "white",
  text: "#1d2226",
  muted: "#666666",
  border: "#e0dede",
};

/* ─────────────────────────────────────────
   ICONS (inline SVG)
───────────────────────────────────────── */
function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   SHARED COMPONENTS
───────────────────────────────────────── */
function Card({ children, id, style = {} }) {
  return (
    <div
      id={id}
      style={{
        background: T.card,
        borderRadius: 8,
        border: `1px solid ${T.border}`,
        overflow: "hidden",
        marginBottom: 8,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 16,
        color: T.text,
      }}
    >
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────
   TOP NAV
───────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "sobre", label: "Sobre mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

function TopNav({ activeSection, onNav }) {
  return (
    <nav
      style={{
        background: "white",
        borderBottom: `1px solid ${T.border}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 0 0 1px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1128,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          height: 52,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              background: T.blue,
              borderRadius: 4,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              J
            </span>
          </div>
          <span style={{ fontWeight: 600, fontSize: 15 }}>Jonas Tiago</span>
        </div>

        {/* Nav items */}
        <div style={{ display: "flex", gap: 2 }}>
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  height: 52,
                  border: "none",
                  borderBottom: active
                    ? `2px solid ${T.text}`
                    : "2px solid transparent",
                  background: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  color: active ? T.text : T.muted,
                  transition: "all .15s",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <a
          href={DATA.links.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: T.blue,
            color: "white",
            borderRadius: 20,
            padding: "7px 18px",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background .15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#004182")}
          onMouseLeave={(e) => (e.currentTarget.style.background = T.blue)}
        >
          <GithubIcon size={14} />
          GitHub
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   LEFT SIDEBAR — Profile Card
───────────────────────────────────────── */
function ProfileCard() {
  return (
    <Card>
      <div
        style={{
          height: 60,
          background: `linear-gradient(135deg, ${T.blue} 0%, #0a4a8c 100%)`,
        }}
      />
      <div style={{ padding: "0 16px 16px" }}>
        <div style={{ marginTop: -30, marginBottom: 8 }}>
          {/* 
            ⚠️ INSTRUÇÕES DE FOTO:
            1. Coloque sua foto em: /public/foto.jpg
            2. A tag abaixo já aponta para esse caminho
          */}
          <img
            src="/foto.jpg"
            alt="Jonas Tiago"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "3px solid white",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>
          {DATA.name} {DATA.surname}
        </div>
        <div
          style={{
            fontSize: 12,
            color: T.muted,
            marginTop: 2,
            lineHeight: 1.4,
          }}
        >
          Software Engineer · Back-end · Full Stack
        </div>
        <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>
          {DATA.location}
        </div>
        <div
          style={{
            fontSize: 12,
            color: T.blue,
            fontWeight: 600,
            marginTop: 4,
          }}
        >
          {DATA.company}
        </div>

        <Divider />

        <div style={{ fontSize: 12, color: T.muted }}>
          <span style={{ color: T.blue, fontWeight: 600 }}>
            {DATA.connections}
          </span>{" "}
          conexões
        </div>

        <Divider />

        {[
          {
            label: "GitHub",
            icon: <GithubIcon size={15} />,
            url: DATA.links.github,
          },
          {
            label: "LinkedIn",
            icon: <LinkedInIcon size={15} />,
            url: DATA.links.linkedin,
          },
        ].map((link) => (
          <SidebarLink key={link.label} {...link} />
        ))}

        <Divider />

        <div
          style={{
            fontSize: 12,
            color: T.muted,
            fontWeight: 500,
            marginBottom: 6,
          }}
        >
          Idiomas
        </div>
        {DATA.languages.map((l) => (
          <div
            key={l}
            style={{ fontSize: 12, color: T.muted, padding: "2px 0" }}
          >
            {l}
          </div>
        ))}
      </div>
    </Card>
  );
}

function Divider() {
  return (
    <div style={{ borderTop: `1px solid ${T.border}`, margin: "12px 0" }} />
  );
}

function SidebarLink({ label, icon, url }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 0",
        fontSize: 13,
        color: hovered ? T.blue : T.text,
        fontWeight: 500,
        textDecoration: "none",
        transition: "color .15s",
      }}
    >
      <span
        style={{
          color: hovered ? T.blue : T.muted,
          transition: "color .15s",
        }}
      >
        {icon}
      </span>
      {label}
      <span style={{ marginLeft: "auto", fontSize: 11, color: T.muted }}>
        ↗
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */
function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = DATA.bio.split("\n\n");

  return (
    <Card id="sobre">
      <div style={{ padding: 16 }}>
        <SectionTitle>Sobre</SectionTitle>
        {expanded ? (
          paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "#333",
                marginBottom: i < paragraphs.length - 1 ? 12 : 0,
              }}
            >
              {p}
            </p>
          ))
        ) : (
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#333" }}>
            {paragraphs[0]}…
          </p>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            color: T.blue,
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 13,
            fontWeight: 600,
            padding: "8px 0 0",
          }}
        >
          {expanded ? "Ver menos ▲" : "Ver mais ▼"}
        </button>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
function ExperienceSection() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  return (
    <Card id="experiencia">
      <div style={{ padding: 16 }}>
        <SectionTitle>Experiência</SectionTitle>
        {DATA.experience.map((exp, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              gap: 12,
              marginBottom: idx < DATA.experience.length - 1 ? 24 : 0,
              paddingBottom: idx < DATA.experience.length - 1 ? 24 : 0,
              borderBottom:
                idx < DATA.experience.length - 1
                  ? `1px solid ${T.border}`
                  : "none",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: 4,
                background: "#e8f0fe",
                border: `1px solid ${T.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: T.blue,
              }}
            >
              ST
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{exp.role}</div>
              <div style={{ fontSize: 13, color: T.muted, marginTop: 1 }}>
                {exp.company} · {exp.location}
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 1 }}>
                {exp.period} · {exp.duration}
              </div>
              <div style={{ marginTop: 10 }}>
                {(expandedIdx === idx ? exp.items : exp.items.slice(0, 2)).map(
                  (item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        marginBottom: 6,
                        fontSize: 13,
                        color: "#333",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: T.blue,
                          marginTop: 3,
                          fontSize: 9,
                          flexShrink: 0,
                        }}
                      >
                        ▶
                      </span>
                      <span>{item}</span>
                    </div>
                  ),
                )}
                {exp.items.length > 2 && (
                  <button
                    onClick={() =>
                      setExpandedIdx(expandedIdx === idx ? -1 : idx)
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: T.blue,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 0",
                    }}
                  >
                    {expandedIdx === idx
                      ? "Ver menos ▲"
                      : `Ver mais ${exp.items.length - 2} itens ▼`}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────
   EDUCATION
───────────────────────────────────────── */
function EducationSection() {
  return (
    <Card id="formacao">
      <div style={{ padding: 16 }}>
        <SectionTitle>Formação</SectionTitle>
        {DATA.education.map((edu, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              gap: 12,
              marginBottom: idx < DATA.education.length - 1 ? 20 : 0,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: 4,
                background: "#fce8e6",
                border: `1px solid ${T.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              🎓
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>
                {edu.institution}
              </div>
              <div style={{ fontSize: 13, color: T.muted, marginTop: 1 }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 1 }}>
                {edu.period}
              </div>
              {edu.detail && (
                <div
                  style={{
                    fontSize: 12,
                    color: "#555",
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {edu.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────
   SKILLS
───────────────────────────────────────── */
function SkillBadge({ label }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-block",
        fontSize: 12,
        padding: "4px 12px",
        borderRadius: 12,
        background: h ? "#e8f0fe" : "#f3f2ef",
        color: h ? T.blue : T.text,
        border: `1px solid ${h ? T.blue : T.border}`,
        transition: "all .15s",
        cursor: "default",
        fontWeight: h ? 600 : 400,
      }}
    >
      {label}
    </span>
  );
}

function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(null);
  const groups = Object.entries(DATA.skills);

  return (
    <Card id="skills">
      <div style={{ padding: 16 }}>
        <SectionTitle>Competências</SectionTitle>
        {groups.map(([group, items]) => (
          <div key={group} style={{ marginBottom: 16 }}>
            <button
              onClick={() =>
                setActiveGroup(activeGroup === group ? null : group)
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                padding: "0 0 8px",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 13, color: T.text }}>
                {group}
              </span>
              <span style={{ fontSize: 11, color: T.muted }}>
                {activeGroup === group ? "▲" : "▼"}
              </span>
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {(activeGroup === group ? items : items.slice(0, 4)).map(
                (skill) => (
                  <SkillBadge key={skill} label={skill} />
                ),
              )}
              {activeGroup !== group && items.length > 4 && (
                <button
                  onClick={() => setActiveGroup(group)}
                  style={{
                    fontSize: 12,
                    color: T.blue,
                    background: "none",
                    border: `1px solid ${T.blue}`,
                    borderRadius: 12,
                    padding: "3px 10px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 500,
                  }}
                >
                  +{items.length - 4}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */
function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <Card id="projetos">
      <div style={{ padding: 16 }}>
        <SectionTitle>Projetos</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}
        >
          {DATA.projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "block",
                border: `1px solid ${hovered === idx ? T.blue : T.border}`,
                borderRadius: 8,
                overflow: "hidden",
                transition: "all .2s",
                transform: hovered === idx ? "translateY(-2px)" : "none",
                boxShadow:
                  hovered === idx ? "0 4px 16px rgba(10,102,194,.15)" : "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>
                  {proj.emoji}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    marginBottom: 6,
                    color: hovered === idx ? T.blue : T.text,
                    transition: "color .15s",
                  }}
                >
                  {proj.name}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    lineHeight: 1.5,
                    marginBottom: 10,
                  }}
                >
                  {proj.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 8,
                        background: "#f3f2ef",
                        color: T.muted,
                        border: `1px solid ${T.border}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  borderTop: `1px solid ${T.border}`,
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: hovered === idx ? "#f0f7ff" : "#fafafa",
                  transition: "background .15s",
                }}
              >
                <GithubIcon size={13} />
                <span style={{ fontSize: 11, color: T.muted }}>
                  Ver no GitHub
                </span>
                <span
                  style={{ marginLeft: "auto", fontSize: 11, color: T.blue }}
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function ContactSection() {
  return (
    <Card id="contato">
      <div style={{ padding: 16 }}>
        <SectionTitle>Contato</SectionTitle>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            {
              label: "GitHub",
              icon: <GithubIcon size={18} />,
              url: DATA.links.github,
              color: "#1d2226",
            },
            {
              label: "LinkedIn",
              icon: <LinkedInIcon size={18} />,
              url: DATA.links.linkedin,
              color: T.blue,
            },
          ].map((item) => (
            <ContactBtn key={item.label} {...item} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function ContactBtn({ label, icon, url, color }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 22px",
        borderRadius: 20,
        border: `1.5px solid ${h ? color : T.border}`,
        color: h ? color : T.text,
        background: h ? "#f0f7ff" : "white",
        transition: "all .15s",
        fontWeight: 600,
        fontSize: 13,
        textDecoration: "none",
      }}
    >
      <span style={{ color: h ? color : T.muted, transition: "color .15s" }}>
        {icon}
      </span>
      {label}
    </a>
  );
}

/* ─────────────────────────────────────────
   RIGHT SIDEBAR
───────────────────────────────────────── */
const TOP_SKILLS = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React",
  "Jest",
];

function RightSidebar() {
  return (
    <div>
      <Card>
        <div style={{ padding: 16 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 13,
              marginBottom: 12,
              color: T.text,
            }}
          >
            Top Skills
          </div>
          {TOP_SKILLS.map((s, i) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "6px 0",
                borderBottom:
                  i < TOP_SKILLS.length - 1 ? `1px solid ${T.border}` : "none",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#e8f0fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: T.blue,
                  flexShrink: 0,
                }}
              >
                {s[0]}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>
                {s}
              </span>
              <div
                style={{
                  height: 4,
                  width: 40,
                  background: "#f3f2ef",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${70 + ((i * 7) % 30)}%`,
                    background: T.blue,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginTop: 8 }}>
        <div style={{ padding: 16 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 13,
              marginBottom: 10,
              color: T.text,
            }}
          >
            Empresa atual
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 4,
                background: "#e8f0fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: T.blue,
              }}
            >
              ST
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>
                STB Tecnologias
              </div>
              <div style={{ fontSize: 11, color: T.muted }}>Fortaleza, CE</div>
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              color: T.muted,
              lineHeight: 1.5,
              padding: "8px 0",
              borderTop: `1px solid ${T.border}`,
            }}
          >
            Back-End Júnior · desde fev/2025
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ─────────────────────────────────────────
   SCROLL SPY HOOK
───────────────────────────────────────── */
function useScrollSpy(setActive) {
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const handler = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          setActive(id);
          return;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [setActive]);
}

/* ─────────────────────────────────────────
   GLOBAL STYLES (injected once)
───────────────────────────────────────── */
const globalCss = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'IBM Plex Sans', sans-serif;
    background: #f3f2ef;
    color: #1d2226;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f3f2ef; }
  ::-webkit-scrollbar-thumb { background: #b0b0b0; border-radius: 3px; }
  a { text-decoration: none; color: inherit; }
`;

/* ─────────────────────────────────────────
   HOME PAGE (default export)
───────────────────────────────────────── */
export default function Home() {
  const [activeSection, setActiveSection] = useState("sobre");

  useScrollSpy(setActiveSection);

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Jonas Tiago — Portfolio</title>
        <meta
          name="description"
          content="Software Engineer | Full Stack Developer | Back-end"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{globalCss}</style>
      </Head>

      <TopNav activeSection={activeSection} onNav={scrollTo} />

      <main
        style={{
          maxWidth: 1128,
          margin: "0 auto",
          padding: "24px 16px",
          display: "grid",
          gridTemplateColumns: "226px 1fr 226px",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div style={{ position: "sticky", top: 68 }}>
          <ProfileCard />
        </div>

        {/* CENTER */}
        <div>
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>

        {/* RIGHT */}
        <div style={{ position: "sticky", top: 68 }}>
          <RightSidebar />
        </div>
      </main>
    </>
  );
}
