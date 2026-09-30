import { profile } from "../data/profile";
import { useCountUp } from "../hooks/useCountUp";
import { useGithub } from "../hooks/useGithub";
import { ArrowUpRight, DownloadIcon, GithubIcon, LinkedinIcon, MapPinIcon, WhatsappIcon } from "./Icons";
import RotatingWords from "./RotatingWords";

function Stat({ label, value, from }) {
  const shown = useCountUp(value, { from });
  return (
    <div>
      <dt>{label}</dt>
      <dd>{shown ?? "—"}</dd>
    </div>
  );
}

// Pequeno "syntax highlight" para o bloco de código do cartão.
const S = ({ children }) => <span className="tok-str">{children}</span>;
const K = ({ children }) => <span className="tok-key">{children}</span>;
const P = ({ children }) => <span className="tok-prop">{children}</span>;

export default function Hero() {
  const { user } = useGithub();
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="inicio" className="hero">
      <div className="hero__aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container hero__grid">
        <div className="hero__content hero-enter">
          {profile.available && (
            <span className="badge">
              <span className="badge__dot" />
              Disponível para novas oportunidades
            </span>
          )}
          <p className="hero__hello">Olá, eu sou</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__role">
            <span className="mono">&lt;</span>
            {profile.role}
            <span className="mono"> /&gt;</span>
          </p>
          <p className="hero__focus mono">
            <span className="muted">{"// especialista em"}</span> <RotatingWords words={profile.roles} />
          </p>
          <p className="hero__lead">{profile.headline}</p>

          <div className="hero__cta">
            <a href={`${profile.links.github}?tab=repositories`} className="btn btn--primary btn--shine" target="_blank" rel="noreferrer">
              Ver projetos <ArrowUpRight width={16} height={16} />
            </a>
            <a href={profile.resume} className="btn btn--ghost" target="_blank" rel="noreferrer">
              <DownloadIcon width={16} height={16} /> Currículo
            </a>
          </div>

          <div className="hero__meta">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
              <GithubIcon />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
              <LinkedinIcon />
            </a>
            {profile.links.whatsapp && (
              <a href={profile.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="icon-btn icon-btn--whatsapp">
                <WhatsappIcon />
              </a>
            )}
            <span className="hero__location">
              <MapPinIcon width={15} height={15} /> {profile.location}
            </span>
          </div>
        </div>

        <aside className="profile-card card float-in">
          <div className="profile-card__head">
            <span className="profile-card__avatar-ring">
              <img src={profile.avatar} alt={`Foto de ${profile.name}`} className="profile-card__avatar" />
            </span>
            <div>
              <strong>{profile.name}</strong>
              <span className="mono muted">@{profile.github}</span>
            </div>
          </div>

          <div className="code-window">
            <div className="code-window__bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span className="mono">dev.js</span>
            </div>
            <pre className="code-block" aria-label="Resumo em código">
              <K>const</K> dev = {"{"}
              {"\n  "}<P>nome</P>: <S>"{firstName}"</S>,
              {"\n  "}<P>foco</P>: [<S>"Web"</S>, <S>"Apps"</S>, <S>"Games"</S>],
              {"\n  "}<P>stack</P>: [<S>"React"</S>, <S>"Node"</S>, <S>"Java"</S>, <S>"C++"</S>],
              {"\n  "}<P>desenrola</P>: <S>"em tudo"</S>,
              {"\n"}{"};"}
              <span className="typewriter__cursor" />
            </pre>
          </div>

          <dl className="profile-card__stats">
            <Stat label="Repositórios" value={user?.public_repos} />
            <Stat label="Seguidores" value={user?.followers} />
            <Stat label="No GitHub desde" value={user.since} from={user.since - 20} />
          </dl>
        </aside>
      </div>
      <a href="#sobre" className="scroll-cue" aria-label="Rolar para a próxima seção">
        <span />
      </a>
    </section>
  );
}
