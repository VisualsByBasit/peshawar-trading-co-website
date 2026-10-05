"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";
import { PhoneIcon, MailIcon, ClockIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container topbar__in">
          <div className="topbar__left">
            <a href={`tel:${SITE.phone}`}>
              <PhoneIcon width={15} height={15} />
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="hide-sm">
              <MailIcon width={15} height={15} />
              {SITE.email}
            </a>
            <span className="hide-md">
              <ClockIcon width={15} height={15} />
              {SITE.hours}
            </span>
          </div>
          <div className="topbar__socials">
            <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon width={15} height={15} />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <FacebookIcon width={15} height={15} />
            </a>
            <a href={SITE.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
              <TikTokIcon width={15} height={15} />
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand" aria-label={`${SITE.name} home`}>
            <Image src="/images/logo-emblem.png" alt="" width={56} height={56} style={{ height: 52, width: "auto" }} priority />
            <span className="brand__text">
              <span className="brand__name">Peshawar Trading</span>
              <span className="brand__tag">Co., Ltd. &middot; Japan</span>
            </span>
          </Link>

          <nav className={`nav__links${open ? " is-open" : ""}`} aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
                {l.label}
              </Link>
            ))}
            <a className="btn btn--whatsapp nav__wa-mobile" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your cars.")}>
              <WhatsAppIcon width={18} height={18} /> WhatsApp us
            </a>
          </nav>

          <div className="nav__cta">
            <a className="btn btn--whatsapp btn--sm nav__wa" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your cars.")}>
              <WhatsAppIcon width={18} height={18} /> WhatsApp
            </a>
            <button type="button" className={`nav__toggle${open ? " is-open" : ""}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
