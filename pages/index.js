import { useState } from "react";
import Head from "next/head";

/* ─── ACCENT ─── */
const A = "#3a6ea8";
const AL = "#7ab3e0";
const AD = "#1a3a5c";

/* ─── SECTIONS ─── */
const SECTIONS = [
  { id: "sobre",       label: "Sobre mim"   },
  { id: "projetos",    label: "Projetos"    },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao",    label: "Formação"    },
  { id: "skills",      label: "Skills"      },
  { id: "contato",     label: "Contato"     },
];

/* ─── DATA ─── */
const DATA = {
  bio: [
    "Desenvolvedor Backend com experiência em sistemas de Big Data em ambiente corporativo. Forte atuação com SQL, APIs REST e integração com sistemas distribuídos.",
    "Interesse em evoluir em ambientes desafiadores, com foco em backend, dados e escalabilidade. Também desenvolvo projetos pessoais Full Stack com React, Node.js e MongoDB.",
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
    "Back-end":       ["Node.js", "NestJS", "TypeScript", "Prisma", "TypeORM"],
    "Banco de dados": ["PostgreSQL", "MongoDB", "Redis"],
    "Testes":         ["Jest", "SuperTest"],
    "Front-end":      ["React", "Next.js", "HTML", "CSS"],
    "Ferramentas":    ["Git", "Docker", "Scrum", "Kanban"],
  },
  projects: [
    {
      name:  "Parrots Card Game",
      emoji: "🦜",
      tech:  "JavaScript · HTML · CSS",
      desc:  "Jogo de cartas interativo com lógica completa e interface animada.",
      repo:  "https://github.com/JonasTiago/parrotscardgame",
      live:  "https://jonastiago.github.io/parrotscardgame/",
    },
    {
      name:  "Jogo da Forca",
      emoji: "🎯",
      tech:  "JavaScript · HTML · CSS",
      desc:  "Clássico jogo da forca com feedback visual em tempo real.",
      repo:  "https://github.com/JonasTiago/jogoforca",
      live:  "https://projeto8-jogoforca-82uv.vercel.app/",
    },
    {
      name:  "Decodificador",
      emoji: "🔐",
      tech:  "JavaScript · HTML · CSS",
      desc:  "Codifica e decodifica mensagens com algoritmo próprio.",
      repo:  "https://github.com/JonasTiago/Decodificador",
      live:  "https://jonastiago.github.io/Decodificador/",
    },
  ],
  links: {
    github:    "https://github.com/JonasTiago",
    linkedin:  "https://www.linkedin.com/in/jonastiago/",
    email:     "mailto:jonastiago@email.com",
    instagram: "https://www.instagram.com/j.t.santos85/",
  },
};

/* ─── GLOBAL CSS ─── */
const globalCss = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { min-height: 100%; }
  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #181818;
    color: #e8e8e8;
  }
  a { text-decoration: none; color: inherit; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ── Wrapper ── */
  .pf-wrap {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #181818;
    position: relative;
  }

  /* ── Centered container ── */
  .pf-inner {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px;
  }

  /* ── Header ── */
  .pf-header {
    flex-shrink: 0;
    padding: 22px 0;
    position: relative;
    z-index: 2;
  }
  .pf-header .pf-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ── Main grid ── */
  .pf-main { flex: 1; position: relative; z-index: 1; }
  .pf-main .pf-inner {
    display: grid;
    grid-template-columns: 1fr 220px;
    padding-bottom: 24px;
    min-height: calc(100vh - 88px);
  }

  /* ── Content column ── */
  .pf-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 56px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  /* ── Sidebar nav ── */
  .pf-sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #202020;
  }

  /* ── Bottom nav (mobile) ── */
  .pf-bottomnav {
    display: none;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: #111;
    border-top: 1px solid #222;
    z-index: 100;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .pf-bottomnav::-webkit-scrollbar { display: none; }
  .pf-bottomnav-inner {
    display: flex;
    min-width: max-content;
    padding: 0 4px;
  }
  .pf-bottomnav-btn {
    flex-shrink: 0;
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    padding: 11px 14px 9px;
    display: flex; flex-direction: column; align-items: center; gap: 3px;
    font-size: 11px;
    color: #555;
    border-bottom: 2px solid transparent;
    transition: color .2s, border-color .2s;
    white-space: nowrap;
  }
  .pf-bottomnav-btn.active {
    color: #7ab3e0;
    border-bottom-color: #3a6ea8;
  }

  /* ── Footer ── */
  .pf-footer {
    text-align: right;
    padding: 0 0 18px;
    font-size: 12px;
    color: #2a2a2a;
    flex-shrink: 0;
    z-index: 2;
    position: relative;
  }

  /* ── Corner brackets ── */
  .pf-bracket {
    position: fixed;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Section title ── */
  .pf-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 400;
    color: #f0f0f0;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    line-height: 1.05;
    flex-shrink: 0;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .pf-inner { padding: 0 24px; }
    .pf-main .pf-inner {
      grid-template-columns: 1fr;
      min-height: auto;
      padding-bottom: 80px;
    }
    .pf-content {
      padding-right: 0;
      justify-content: flex-start;
    }
    .pf-sidenav { display: none; }
    .pf-bottomnav { display: block; }
    .pf-footer { display: none; }
    .pf-bracket { display: none; }
  }

  @media (max-width: 600px) {
    .pf-inner { padding: 0 16px; }
    .pf-header { padding: 16px 0; }
  }
`;

/* ─── ICONS ─── */
function GithubIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─── CORNER BRACKET ─── */
function CornerBracket({ position }) {
  const size = 90, thick = 2;
  const pos = {
    tl: { top: 0, left: 0 }, tr: { top: 0, right: 0 },
    bl: { bottom: 0, left: 0 }, br: { bottom: 0, right: 0 },
  };
  const flip = {
    tl: "scale(1,1)", tr: "scale(-1,1)",
    bl: "scale(1,-1)", br: "scale(-1,-1)",
  };
  const id = `gg-${position}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="pf-bracket"
      style={{ ...pos[position] }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={A} />
          <stop offset="50%" stopColor={AL} />
          <stop offset="100%" stopColor={AD} />
        </linearGradient>
      </defs>
      <g transform={`translate(${position.includes("r") ? size : 0},${position.includes("b") ? size : 0}) ${flip[position]}`}>
        <rect x="0" y="0" width={thick} height={54} fill={`url(#${id})`} />
        <rect x="0" y="0" width={54} height={thick} fill={`url(#${id})`} />
      </g>
    </svg>
  );
}

/* ─── LOGO ─── */
function Logo() {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ display: "flex", alignItems: "center", gap: 8, cursor: "default", userSelect: "none" }}
    >
      <svg width={28} height={28} viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="9" height="22" rx="1.5" fill={A} />
        <rect x="13" y="2" width="11" height="11" rx="1.5" fill={A} opacity=".55" />
      </svg>
      <div style={{ display: "flex", alignItems: "center", overflow: "hidden", height: 22 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: h ? AL : "#ccc", transition: "color .5s", letterSpacing: "0.04em" }}>J</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: AL, letterSpacing: "0.02em", maxWidth: h ? "60px" : "0px", opacity: h ? 1 : 0, overflow: "hidden", whiteSpace: "nowrap", transition: "max-width .9s cubic-bezier(.4,0,.2,1), opacity .7s ease" }}>onas</span>
        <span style={{ fontSize: 14, fontWeight: 600, maxWidth: h ? "8px" : "0px", opacity: h ? 1 : 0, overflow: "hidden", whiteSpace: "nowrap", transition: "max-width .9s cubic-bezier(.4,0,.2,1), opacity .7s ease" }}>&nbsp;</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: h ? AL : "#ccc", transition: "color .5s", letterSpacing: "0.04em" }}>S</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: AL, letterSpacing: "0.02em", maxWidth: h ? "60px" : "0px", opacity: h ? 1 : 0, overflow: "hidden", whiteSpace: "nowrap", transition: "max-width .95s cubic-bezier(.4,0,.2,1) .08s, opacity .75s ease .08s" }}>antos</span>
      </div>
    </div>
  );
}

/* ─── HEADER LINK ─── */
function HeaderLink({ icon, url, label }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      title={label}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ color: h ? AL : "#444", transition: "color .2s", lineHeight: 0, display: "block" }}
    >
      {icon}
    </a>
  );
}

/* ─── PANELS ─── */
function SobrePanel() {
  return (
    <div>
      {DATA.bio.map((p, i) => (
        <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "#999", marginBottom: 14 }}>{p}</p>
      ))}
      <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
        {["Fortaleza, CE", "Backend", "Full Stack"].map((c) => (
          <span key={c} style={{ fontSize: 13, padding: "5px 14px", borderRadius: 20, border: "1px solid #2e2e2e", color: "#666" }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function ProjBtn({ href, icon, label, outline, filled }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500,
        textDecoration: "none", transition: "all .15s",
        border: outline ? `1px solid ${h ? "#4a7ec0" : "#333"}` : "none",
        background: filled ? (h ? "#4a7ec0" : A) : (h ? "#1e1e1e" : "transparent"),
        color: filled ? "white" : (h ? AL : "#888"),
      }}
    >
      {icon}{label}
    </a>
  );
}

function ProjetosPanel() {
  const [h, setH] = useState(null);
  return (
    <div>
      {DATA.projects.map((proj, i) => (
        <div
          key={i}
          style={{ marginBottom: 14, padding: "14px 16px", border: `1px solid ${h === i ? A : "#222"}`, borderRadius: 8, background: h === i ? "#111820" : "transparent", transition: "all .2s" }}
          onMouseEnter={() => setH(i)}
          onMouseLeave={() => setH(null)}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: h === i ? AL : "#e0e0e0", transition: "color .2s", marginBottom: 4 }}>
            {proj.emoji} {proj.name}
          </div>
          <div style={{ fontSize: 12, color: A, marginBottom: 7 }}>{proj.tech}</div>
          <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5, marginBottom: 12 }}>{proj.desc}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <ProjBtn href={proj.repo} icon={<GithubIcon size={13} />} label="Repositório" outline />
            <ProjBtn href={proj.live} icon={<ExternalIcon size={13} />} label="Ver projeto" filled />
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienciaPanel() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {DATA.experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: 16, borderBottom: "1px solid #222", paddingBottom: 16 }}>
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#f0f0f0" }}>{exp.role}</div>
              <div style={{ fontSize: 14, color: A, marginTop: 3 }}>{exp.company} · {exp.period}</div>
            </div>
            <span style={{ color: "#555", fontSize: 13, marginTop: 2, flexShrink: 0, marginLeft: 8 }}>{open === idx ? "▲" : "▼"}</span>
          </button>
          {open === idx && (
            <ul style={{ marginTop: 10, paddingLeft: 0, listStyle: "none" }}>
              {exp.items.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 10, marginBottom: 7, fontSize: 14, color: "#888", lineHeight: 1.6 }}>
                  <span style={{ color: A, flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function FormacaoPanel() {
  return (
    <div>
      {DATA.education.map((edu, i) => (
        <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < DATA.education.length - 1 ? "1px solid #222" : "none" }}>
          <div style={{ fontWeight: 600, fontSize: 16, color: "#f0f0f0" }}>{edu.inst}</div>
          <div style={{ fontSize: 14, color: A, marginTop: 3 }}>{edu.degree}</div>
          <div style={{ fontSize: 13, color: "#555", marginTop: 2 }}>Concluído em {edu.year}</div>
          {edu.note && <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>{edu.note}</div>}
        </div>
      ))}
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 12, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, marginBottom: 8 }}>Idiomas</div>
        {["Inglês — Técnico (leitura)", "Espanhol — Básico"].map((l) => (
          <div key={l} style={{ fontSize: 14, color: "#888", marginBottom: 6 }}>· {l}</div>
        ))}
      </div>
    </div>
  );
}

function SkillTag({ children }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ fontSize: 13, padding: "5px 13px", borderRadius: 4, background: h ? "#111820" : "#1e1e1e", border: `1px solid ${h ? A : "#2a2a2a"}`, color: h ? AL : "#888", transition: "all .15s", cursor: "default" }}
    >
      {children}
    </span>
  );
}

function SkillsPanel() {
  return (
    <div>
      {Object.entries(DATA.skills).map(([group, items]) => (
        <div key={group} style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, color: A, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 9 }}>{group}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {items.map((s) => <SkillTag key={s}>{s}</SkillTag>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContatoRow({ label, icon, url, sub }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ display: "flex", alignItems: "center", gap: 16, padding: "13px 0", borderBottom: "1px solid #1e1e1e", textDecoration: "none", color: "inherit" }}
    >
      <span style={{ color: h ? A : "#444", transition: "color .15s" }}>{icon}</span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: h ? AL : "#ddd", transition: "color .15s" }}>{label}</div>
        <div style={{ fontSize: 12, color: "#555" }}>{sub}</div>
      </div>
      <span style={{ marginLeft: "auto", color: A, opacity: h ? 1 : 0, transition: "opacity .2s", fontSize: 15 }}>↗</span>
    </a>
  );
}

function ContatoPanel() {
  return (
    <div>
      <p style={{ fontSize: 15, color: "#777", marginBottom: 24, lineHeight: 1.7 }}>Aberto a novas oportunidades e colaborações. Entre em contato!</p>
      {[
        { label: "GitHub",    icon: <GithubIcon size={20} />,    url: DATA.links.github,    sub: "JonasTiago" },
        { label: "LinkedIn",  icon: <LinkedInIcon size={20} />,  url: DATA.links.linkedin,  sub: "jonastiago" },
        { label: "E-mail",    icon: <MailIcon size={20} />,      url: DATA.links.email,     sub: "jonastiago@email.com" },
        { label: "Instagram", icon: <InstagramIcon size={20} />, url: DATA.links.instagram, sub: "@j.t.santos85" },
      ].map((item) => <ContatoRow key={item.label} {...item} />)}
    </div>
  );
}

/* ─── NAV ICONS (bottom bar) ─── */
const NAV_ICONS = {
  sobre: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  projetos: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  experiencia: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  formacao: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 10l-10-7L2 10l10 7 10-7z" /><path d="M6 12v5c0 1.1 2.686 3 6 3s6-1.9 6-3v-5" />
    </svg>
  ),
  skills: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  contato: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
};

/* ─── PANELS MAP ─── */
const PANELS = {
  sobre:       <SobrePanel />,
  projetos:    <ProjetosPanel />,
  experiencia: <ExperienciaPanel />,
  formacao:    <FormacaoPanel />,
  skills:      <SkillsPanel />,
  contato:     <ContatoPanel />,
};

/* ─── HOME PAGE ─── */
export default function Home() {
  const [active, setActive] = useState("sobre");
  const [animKey, setAnimKey] = useState(0);

  const goTo = (id) => {
    if (id === active) return;
    setActive(id);
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0 });
  };

  const activeLabel = SECTIONS.find((s) => s.id === active)?.label;

  return (
    <>
      <Head>
        <title>Jonas Santos — Portfolio</title>
        <meta name="description" content="Desenvolvedor Back-End | Full Stack | Node.js · NestJS · React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      </Head>

      <div className="pf-wrap">
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* ── HEADER ── */}
        <header className="pf-header">
          <div className="pf-inner">
            <Logo />
            <div style={{ display: "flex", gap: 20 }}>
              <HeaderLink icon={<MailIcon size={20} />}      url={DATA.links.email}     label="Email" />
              <HeaderLink icon={<GithubIcon size={20} />}    url={DATA.links.github}    label="GitHub" />
              <HeaderLink icon={<LinkedInIcon size={20} />}  url={DATA.links.linkedin}  label="LinkedIn" />
              <HeaderLink icon={<InstagramIcon size={20} />} url={DATA.links.instagram} label="Instagram" />
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="pf-main">
          <div className="pf-inner">
            {/* Content */}
            <div className="pf-content">
              <div className="pf-title">
                {activeLabel}
                <span style={{ color: A, display: "inline-block", animation: "blink .9s step-end infinite" }}>.</span>
              </div>
              <div key={animKey} style={{ animation: "fadeIn .3s ease both" }}>
                {PANELS[active]}
              </div>
            </div>

            {/* Sidebar — desktop only */}
            <nav className="pf-sidenav" aria-label="Navegação principal">
              <div>
                <div style={{ fontSize: 11, color: A, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18, paddingLeft: 22 }}>
                  Navegação
                </div>
                {SECTIONS.map((sec) => {
                  const isActive = active === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => goTo(sec.id)}
                      style={{ display: "block", width: "100%", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: "9px 0 9px 22px", textAlign: "left", borderLeft: `2px solid ${isActive ? A : "transparent"}`, transition: "border-color .2s", marginBottom: 2 }}
                    >
                      <span style={{ fontSize: 15, fontWeight: isActive ? 500 : 400, color: isActive ? AL : "#555", transition: "color .2s", textDecoration: isActive ? "underline" : "none", textUnderlineOffset: 4, textDecorationColor: A }}>
                        {sec.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </main>

        {/* ── FOOTER ── */}
        <footer className="pf-footer">
          <div className="pf-inner">©2025 jonastiago.dev</div>
        </footer>

        {/* ── BOTTOM NAV — mobile only ── */}
        <nav className="pf-bottomnav" aria-label="Navegação mobile">
          <div className="pf-bottomnav-inner">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => goTo(sec.id)}
                className={`pf-bottomnav-btn${active === sec.id ? " active" : ""}`}
              >
                <span style={{ lineHeight: 0 }}>{NAV_ICONS[sec.id]}</span>
                {sec.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
