"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/** A background photo (hero/spotlight) that drifts gently on scroll. */
export default function ParallaxImage({ src, alt, priority = false }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    function update() {
      const el = imgRef.current;
      if (el) {
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
          const offset = Math.max(-60, Math.min(60, window.scrollY * 0.12));
          el.style.transform = `translateY(${offset}px)`;
        }
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      style={{ objectFit: "cover", willChange: "transform" }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
