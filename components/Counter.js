"use client";

import { useEffect, useRef } from "react";

/** Animated count-up used in the stat bar (always near the top of the page,
 * so it animates on mount rather than waiting on scroll visibility). */
export default function Counter({ value, suffix = "", decimals = 0, duration = 1200 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value.toFixed(decimals) + suffix;
      return;
    }
    const start = performance.now();
    let frame;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (value * eased).toFixed(decimals) + suffix;
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <strong ref={ref}>0{suffix}</strong>;
}
