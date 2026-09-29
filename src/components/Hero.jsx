import { profile } from "../data/profile";
import { useGithub } from "../hooks/useGithub";
import { ArrowUpRight, DownloadIcon, GithubIcon, LinkedinIcon, MapPinIcon } from "./Icons";

export default function Hero() {
  const { data: user } = useGithub(`/users/${profile.github}`);

  const stats = [
    { label: "Repositórios públicos", value: user?.public_repos },
    { label: "Seguidores", value: user?.followers },
    { label: "No GitHub desde", value: user ? new Date(user.created_at).getFullYear() : undefined },
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
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
          <p className="hero__lead">{profile.headline}</p>

          <div className="hero__cta">
            <a href={`${profile.links.github}?tab=repositories`} className="btn btn--primary" target="_blank" rel="noreferrer">
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
            <span className="hero__location">
              <MapPinIcon width={15} height={15} /> {profile.location}
            </span>
          </div>
        </div>

        <aside className="profile-card" data-reveal style={{ "--delay": "120ms" }}>
          <div className="profile-card__head">
            <img src={profile.avatar} alt={`Foto de ${profile.name}`} className="profile-card__avatar" />
            <div>
              <strong>{profile.name}</strong>
              <span className="mono muted">@{profile.github}</span>
            </div>
          </div>
          <pre className="code-block" aria-label="Resumo em código">
{`const dev = {
  nome: "${profile.name.split(" ")[0]}",
  foco: ["Web", "Apps", "Games"],
  stack: ["React", "Node", "Java", "C++"],
  desenrola: "em tudo",
};`}
          </pre>
          <dl className="profile-card__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value ?? "—"}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
