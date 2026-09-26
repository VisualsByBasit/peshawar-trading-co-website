"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper. Renders `as` (default "div") with the given
 * className plus "reveal" (fades/slides itself in) or, with `stagger`,
 * "reveal-stagger" (its direct children fade in one after another —
 * see the .reveal-stagger rules in globals.css).
 */
export default function Reveal({ as: Tag = "div", className = "", stagger = false, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" }
    );
    io.observe(el);
    // Safety net: never let content stay invisible forever if the observer
    // is somehow skipped (fast programmatic scroll, odd browser behaviour).
    const fallback = setTimeout(() => setVisible(true), 3000);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";
  const cls = [base, className, visible ? "is-visible" : ""].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
