import { profile, projects } from "../data/profile";
import { useGithub } from "../hooks/useGithub";
import { ArrowUpRight, ForkIcon, GithubIcon, StarIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

function ProjectCard({ project, index }) {
  const url = `https://github.com/${profile.github}/${project.repo}`;
  const { data } = useGithub(`/repos/${profile.github}/${project.repo}`);

  return (
    <article
      className={`card project ${project.featured ? "project--featured" : ""}`}
      data-reveal
      style={{ "--delay": `${index * 80}ms` }}
    >
      <a href={url} target="_blank" rel="noreferrer" className="project__media" tabIndex={-1} aria-hidden="true">
        <img src={project.image} alt="" loading="lazy" />
      </a>
      <div className="project__body">
        <div className="project__top">
          {project.featured && <span className="tag tag--accent">Destaque</span>}
          <div className="project__stats mono">
            <span title="Estrelas">
              <StarIcon width={14} height={14} className="star-icon" /> {data?.stargazers_count ?? "—"}
            </span>
            <span title="Forks">
              <ForkIcon width={14} height={14} /> {data?.forks_count ?? "—"}
            </span>
          </div>
        </div>
        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="muted">{project.description}</p>
        <ul className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <a href={url} target="_blank" rel="noreferrer" className="link-arrow">
          <GithubIcon width={15} height={15} /> Ver código <ArrowUpRight width={14} height={14} />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="projetos"
          title="Projetos selecionados"
          subtitle="Alguns trabalhos que desenvolvi — de aplicações web a plugins e servidores de jogos."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <ProjectCard key={p.repo} project={p} index={i} />
          ))}
        </div>
        <div className="center" data-reveal>
          <a href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Ver todos os repositórios <ArrowUpRight width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
