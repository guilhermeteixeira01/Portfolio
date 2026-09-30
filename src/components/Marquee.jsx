import { skillGroups } from "../data/profile";

const items = skillGroups.flatMap((g) => g.items);

// Faixa infinita com as tecnologias, entre o hero e o "Sobre".
export default function Marquee() {
  const row = (hidden) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((s) => (
        <li key={s.name}>
          <img src={s.icon} alt="" className={s.invert ? "invert-dark" : ""} loading="lazy" />
          {s.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label="Tecnologias">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
