import { profile, skillGroups } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <>
      <section id="sobre" className="section">
        <div className="container">
          <SectionHeader index="01" eyebrow="sobre" title="Sobre mim" />
          <div className="about" data-reveal>
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section">
        <div className="container">
          <SectionHeader
            index="02"
            eyebrow="stack"
            title="Tecnologias"
            subtitle="Ferramentas que uso no dia a dia para construir e entregar projetos."
          />
          <div className="skills">
            {skillGroups.map((group, i) => (
              <div className="card skills__group" key={group.title} data-reveal style={{ "--delay": `${i * 80}ms` }}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((s) => (
                    <li key={s.name} className="skill">
                      <img src={s.icon} alt="" className={s.invert ? "invert-dark" : ""} loading="lazy" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
