"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Combines the two grid-level interactions used across the site so a grid of
 * cards only needs one wrapper (keeping cards as direct children, which the
 * .reveal-stagger CSS and CSS Grid both depend on):
 *  - staggered scroll-reveal (children fade/slide in one after another)
 *  - a cursor-follow glow on whichever descendant has class "glow-target"
 */
export default function AnimatedGrid({ as: Tag = "div", className = "", children, ...rest }) {
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

  function handleMouseMove(e) {
    const card = e.target.closest(".glow-target");
    if (!card || !ref.current || !ref.current.contains(card)) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  const cls = ["reveal-stagger", className, visible ? "is-visible" : ""].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={cls} onMouseMove={handleMouseMove} {...rest}>
      {children}
    </Tag>
  );
}
