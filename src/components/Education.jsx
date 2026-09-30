import { achievements, education, profile } from "../data/profile";
import { ArrowUpRight, GradIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

const graph = (variant) =>
  `https://raw.githubusercontent.com/${profile.github}/${profile.github}/output/pacman-contribution-graph${variant}.svg`;

export default function Education({ theme }) {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeader index="04" eyebrow="formação" title="Formação & GitHub" />

        <div className="edu-grid">
          <ol className="timeline">
            {education.map((e, i) => (
              <li key={e.title} className="timeline__item" data-reveal style={{ "--delay": `${i * 80}ms` }}>
                <span className="timeline__icon">
                  <GradIcon width={16} height={16} />
                </span>
                <div className="card timeline__card">
                  {e.period && <span className="mono muted small">{e.period}</span>}
                  <h3>{e.title}</h3>
                  <p>
                    {e.href ? (
                      <a href={e.href} target="_blank" rel="noreferrer" className="timeline__link">
                        {e.institution} <ArrowUpRight width={13} height={13} />
                      </a>
                    ) : (
                      e.institution
                    )}
                  </p>
                  {e.detail && <p className="muted small">{e.detail}</p>}
                </div>
              </li>
            ))}
          </ol>

          <div className="card github-card" data-reveal style={{ "--delay": "120ms" }}>
            <h3>Conquistas no GitHub</h3>
            <ul className="achievements">
              {achievements.map((a) => {
                const content = (
                  <>
                    <img src={a.image} alt="" loading="lazy" />
                    <span className="achievement__tip">
                      <strong>{a.name}</strong>
                      {a.description}
                    </span>
                  </>
                );
                return (
                  <li key={a.name} className="achievement">
                    {a.href ? (
                      <a href={a.href} target="_blank" rel="noreferrer" aria-label={a.name}>
                        {content}
                      </a>
                    ) : (
                      <span tabIndex={0} aria-label={a.name}>
                        {content}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="github-card__graph">
              <img src={graph(theme === "dark" ? "-dark" : "")} alt="Gráfico de contribuições no GitHub" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
