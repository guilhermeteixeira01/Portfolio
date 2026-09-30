import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useGithub } from "../hooks/useGithub";
import { CloseIcon, GithubIcon, MenuIcon, MoonIcon, StarIcon, SunIcon } from "./Icons";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const repo = useGithub().repos[profile.portfolioRepo];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção que está na tela.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo" onClick={() => setOpen(false)} aria-label={`${profile.name} — início`}>
          <span className="nav__logo-bracket">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="nav__logo-bracket"> /&gt;</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={active === l.href ? "is-active" : ""}
              aria-current={active === l.href ? "true" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="chip"
            href={`https://github.com/${profile.github}/${profile.portfolioRepo}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Dar estrela no repositório do portfólio"
          >
            <GithubIcon width={15} height={15} />
            <StarIcon width={13} height={13} />
            <span>{repo?.stars ?? "—"}</span>
          </a>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <span className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
