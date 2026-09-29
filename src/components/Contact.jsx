import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact() {
  const { links } = profile;

  return (
    <>
      <section id="contato" className="section">
        <div className="container">
          <div className="contact card" data-reveal>
            <span className="section-header__eyebrow mono">
              05 <span className="muted">/</span> contato
            </span>
            <h2>Vamos construir algo juntos?</h2>
            <p className="muted">
              Estou aberto a vagas, freelas e colaborações. Se você tem um projeto ou uma oportunidade, me chame — respondo
              rápido.
            </p>
            <div className="contact__actions">
              {links.email && (
                <a href={`mailto:${links.email}`} className="btn btn--primary">
                  <MailIcon width={16} height={16} /> {links.email}
                </a>
              )}
              <a href={links.linkedin} target="_blank" rel="noreferrer" className={`btn ${links.email ? "btn--ghost" : "btn--primary"}`}>
                <LinkedinIcon width={16} height={16} /> LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <GithubIcon width={16} height={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="muted small">
            © {new Date().getFullYear()} {profile.name}. Feito com React.
          </span>
          <a href="#inicio" className="muted small">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </>
  );
}
