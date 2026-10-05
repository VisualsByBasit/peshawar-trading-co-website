"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, ChevronIcon } from "@/components/Icons";

export default function Gallery({ photos, title }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const count = photos.length;
  const current = photos[index];

  const go = useCallback((d) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <div className="gallery">
      <div className="gallery__stage ph">
        <button type="button" className="gallery__zoom" onClick={() => setOpen(true)} aria-label="Open photo full screen">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 980px) 100vw, 720px"
            className={current.kind === "sheet" ? "contain" : ""}
          />
        </button>
        <button type="button" className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
          <ChevronIcon width={20} height={20} style={{ transform: "scaleX(-1)" }} />
        </button>
        <button type="button" className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label="Next photo">
          <ChevronIcon width={20} height={20} />
        </button>
        <span className="gallery__count">
          {index + 1} / {count}
          {current.kind === "sheet" ? " · Auction sheet" : ""}
        </span>
      </div>

      <div className="gallery__thumbs" role="tablist" aria-label={`${title} photos`}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1}`}
            className={`thumb ph${i === index ? " is-active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <Image src={p.src} alt="" fill sizes="110px" className={p.kind === "sheet" ? "contain" : ""} />
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo viewer`} onClick={() => setOpen(false)}>
          <button type="button" className="lightbox__close" onClick={() => setOpen(false)} aria-label="Close">
            <CloseIcon width={22} height={22} />
          </button>
          <button
            type="button"
            className="gallery__nav gallery__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous photo"
          >
            <ChevronIcon width={22} height={22} style={{ transform: "scaleX(-1)" }} />
          </button>
          <div className="lightbox__img ph" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="contain" />
          </div>
          <button
            type="button"
            className="gallery__nav gallery__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next photo"
          >
            <ChevronIcon width={22} height={22} />
          </button>
          <p className="lightbox__cap">{current.alt}</p>
        </div>
      )}
    </div>
  );
}
