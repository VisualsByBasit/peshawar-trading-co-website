import Link from "next/link";
import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";
import { PinIcon, PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <Image src="/images/logo-emblem.png" alt={`${SITE.name} logo`} width={40} height={40} style={{ height: 40, width: "auto" }} />
              <span>{SITE.name}</span>
            </div>
            <p>Exporting used cars, trucks, buses, construction machinery, generators and agricultural tractors from Toyama, Japan to buyers worldwide.</p>
            <div className="footer-socials">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon width={16} height={16} />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon width={16} height={16} />
              </a>
              <a href={SITE.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
                <TikTokIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/inventory">Inventory</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Categories</h5>
            <ul>
              <li><Link href="/inventory?cat=cars">Cars &amp; Vans</Link></li>
              <li><Link href="/inventory?cat=trucks">Trucks</Link></li>
              <li><Link href="/inventory?cat=machinery">Construction Machinery</Link></li>
              <li><Link href="/inventory?cat=generators">Generators</Link></li>
              <li><Link href="/inventory?cat=tractors">Agricultural Tractors</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener">
                  <PinIcon width={15} height={15} />
                  {SITE.address.full}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`}>
                  <PhoneIcon width={15} height={15} />
                  Tel: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  <WhatsAppIcon width={15} height={15} />
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <MailIcon width={15} height={15} />
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
