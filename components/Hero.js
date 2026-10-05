"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { VEHICLES, coverOf } from "@/lib/vehicles";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";

const INTERVAL_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % VEHICLES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused]);

  const v = VEHICLES[active];

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Toyama, Japan &middot; Worldwide Export</span>
          <h1>
            Japan&apos;s finest used cars, <em>delivered to your door.</em>
          </h1>
          <p className="hero__lead">
            Hand-picked, inspected and fully documented. Browse our showroom, review every photo and the original auction sheet, then we handle shipping anywhere in the world.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--gold btn--lg" href="/inventory">
              Browse the Showroom <ArrowRightIcon width={18} height={18} />
            </Link>
            <a className="btn btn--ghost btn--lg" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to talk about buying a car.")}>
              <WhatsAppIcon width={18} height={18} /> Talk to a Specialist
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>{VEHICLES.length}</dt>
              <dd>Cars in showroom</dd>
            </div>
            <div>
              <dt>Real</dt>
              <dd>Photos &amp; auction sheets</dd>
            </div>
            <div>
              <dt>Worldwide</dt>
              <dd>Shipping</dd>
            </div>
          </dl>
        </div>

        <div className="hero__stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Link href={`/inventory/${v.slug}`} className="hero__car ph" aria-label={`View ${v.title}`}>
            {VEHICLES.map((car, i) => (
              <Image
                key={car.slug}
                src={coverOf(car).src}
                alt={coverOf(car).alt}
                fill
                priority={i === 0}
                sizes="(max-width: 980px) 100vw, 600px"
                className={`hero__slide${i === active ? " is-active" : ""}`}
              />
            ))}
          </Link>
          <div className="hero__plate">
            <div>
              <small>
                {v.year} &middot; {v.mileage} &middot; {v.fuel}
              </small>
              <strong>{v.title}</strong>
            </div>
            <Link className="btn btn--gold btn--sm" href={`/inventory/${v.slug}`}>
              View
            </Link>
          </div>
          <div className="hero__dots" role="tablist" aria-label="Featured cars">
            {VEHICLES.map((car, i) => (
              <button
                key={car.slug}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={car.title}
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
