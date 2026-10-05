import Link from "next/link";
import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";
import { PinIcon, PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <span className="footer-logo">
                <Image src="/images/logo-emblem.png" alt="" width={48} height={48} style={{ height: 44, width: "auto" }} />
              </span>
              <span>{SITE.name}</span>
            </div>
            <p>Licensed Japanese used-car exporter. Every vehicle is inspected, photographed and documented before it ships to you.</p>
            <div className="footer-socials">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon width={17} height={17} />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon width={17} height={17} />
              </a>
              <a href={SITE.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
                <TikTokIcon width={17} height={17} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/inventory">Showroom</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>In the showroom</h5>
            <ul>
              {VEHICLES.map((v) => (
                <li key={v.id}>
                  <Link href={`/inventory/${v.slug}`}>{v.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Visit &amp; contact</h5>
            <ul>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener">
                  <PinIcon width={16} height={16} />
                  {SITE.address.full}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`}>
                  <PhoneIcon width={16} height={16} />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  <WhatsAppIcon width={16} height={16} />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <MailIcon width={16} height={16} />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} {SITE.name} All rights reserved.</span>
          <span>{SITE.license.label} No. {SITE.license.number}</span>
        </div>
      </div>
    </footer>
  );
}
