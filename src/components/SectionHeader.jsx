export default function SectionHeader({ index, eyebrow, title, subtitle }) {
  return (
    <header className="section-header" data-reveal>
      <span className="section-header__eyebrow mono">
        {index} <span className="muted">/</span> {eyebrow}
      </span>
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </header>
  );
}
