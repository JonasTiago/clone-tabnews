import { useState } from "react";
import Head from "next/head";

// Importando dados
import { SECTIONS, DATA } from "../data/portfolio";

// Importando componentes visuais e lógicos
import {
  A,
  AL,
  Logo,
  CornerBracket,
  HeaderLink,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  InstagramIcon,
  PANELS,
  NAV_ICONS,
} from "../components/Panels";

export default function Home() {
  const [active, setActive] = useState("sobre");
  const [animKey, setAnimKey] = useState(0);

  // Função para controlar a navegação
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
        <meta
          name="description"
          content="Desenvolvedor Back-End | Full Stack | Node.js · NestJS · React"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
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
              <HeaderLink
                icon={<MailIcon size={20} />}
                url={DATA.links.email}
                label="Email"
              />
              <HeaderLink
                icon={<GithubIcon size={20} />}
                url={DATA.links.github}
                label="GitHub"
              />
              <HeaderLink
                icon={<LinkedInIcon size={20} />}
                url={DATA.links.linkedin}
                label="LinkedIn"
              />
              <HeaderLink
                icon={<InstagramIcon size={20} />}
                url={DATA.links.instagram}
                label="Instagram"
              />
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="pf-main">
          <div className="pf-inner">
            {/* Content Area */}
            <div className="pf-content">
              <div className="pf-title">
                {activeLabel}
                <span
                  style={{
                    color: A,
                    display: "inline-block",
                    animation: "blink .9s step-end infinite",
                  }}
                >
                  .
                </span>
              </div>
              <div key={animKey} style={{ animation: "fadeIn .3s ease both" }}>
                {PANELS[active]}
              </div>
            </div>

            {/* Sidebar — desktop only */}
            <nav className="pf-sidenav" aria-label="Navegação principal">
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: A,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 18,
                    paddingLeft: 22,
                  }}
                >
                  Navegação
                </div>
                {SECTIONS.map((sec) => {
                  const isActive = active === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => goTo(sec.id)}
                      style={{
                        display: "block",
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        padding: "9px 0 9px 22px",
                        textAlign: "left",
                        borderLeft: `2px solid ${isActive ? A : "transparent"}`,
                        transition: "border-color .2s",
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? AL : "#555",
                          transition: "color .2s",
                          textDecoration: isActive ? "underline" : "none",
                          textUnderlineOffset: 4,
                          textDecorationColor: A,
                        }}
                      >
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
