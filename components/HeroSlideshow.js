"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, pexelsImg } from "@/lib/site";

const INTERVAL_MS = 5500;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState(() => new Set());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {HERO_SLIDES.map((slide, i) => (
        <Image
          key={slide.id}
          src={pexelsImg(slide.id, 1920)}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`hero__slide${i === active ? " is-active" : ""}`}
          style={{ objectFit: "cover" }}
          onError={() =>
            setBroken((prev) => {
              const next = new Set(prev);
              next.add(i);
              return next;
            })
          }
          hidden={broken.has(i)}
        />
      ))}
      <div className="hero__slide-dots" role="tablist" aria-label="Showroom photos">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show photo ${i + 1}`}
            className={i === active ? "is-active" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}
