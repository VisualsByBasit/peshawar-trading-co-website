"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar__left">
            <a href={`tel:${SITE.phone}`}>
              <PhoneIcon width={16} height={16} />
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>
              <MailIcon width={16} height={16} />
              {SITE.email}
            </a>
            <span>
              <PinIcon width={14} height={14} style={{ display: "inline-block", verticalAlign: "-2px", marginRight: 4 }} />
              Toyama, Japan
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
          <Link href="/" className="brand">
            <Image src="/images/logo-emblem.png" alt={`${SITE.name} logo`} width={52} height={52} style={{ height: 52, width: "auto" }} priority />
            <span className="brand__text">
              <span className="brand__name">{SITE.name}</span>
              <span className="brand__tag">{SITE.tagline}</span>
            </span>
          </Link>

          <nav className={`nav__links${open ? " open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__cta">
            <a
              className="btn btn--whatsapp btn--sm"
              target="_blank"
              rel="noopener"
              href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your vehicles.")}
            >
              <WhatsAppIcon width={18} height={18} />
              <span className="btn-text-full">WhatsApp</span>
            </a>
            <button className="nav__toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
