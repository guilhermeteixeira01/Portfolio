import { useEffect, useState } from "react";

// Troca as palavras deslizando na vertical. Todas ocupam a mesma célula do grid,
// então a altura é fixa e nada ao redor se mexe.
export default function RotatingWords({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const prev = (index - 1 + words.length) % words.length;

  return (
    <span className="rotating" aria-live="polite">
      {words.map((w, i) => (
        <span
          key={w}
          className={`rotating__word ${i === index ? "is-active" : i === prev ? "is-leaving" : ""}`}
          aria-hidden={i !== index}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
