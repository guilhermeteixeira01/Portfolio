import { useEffect } from "react";

// Faz um brilho seguir o mouse dentro de qualquer elemento .card (variáveis --mx / --my).
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia?.("(hover: hover)").matches) return;
    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
