import { useEffect, useState } from "react";

const reduceMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Anima um número de `from` até `target` quando o alvo fica disponível.
export function useCountUp(target, { duration = 1200, from = 0 } = {}) {
  const [value, setValue] = useState(target == null ? null : from);

  useEffect(() => {
    if (target == null) return;
    if (reduceMotion()) {
      setValue(target);
      return;
    }
    setValue(from);
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, from]);

  return value;
}
