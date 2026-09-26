import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import ContactForm from "@/components/ContactForm";
import { PinIcon, PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon } from "@/components/Icons";
import { SITE, whatsappLink, pexelsImg } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name} — used vehicle and machinery exporter based in Imizu, Toyama, Japan.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-banner page-banner--photo">
        <div className="page-banner__bg">
          <SafeImage src={pexelsImg(5975528, 1600)} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1>Contact Peshawar Trading Co.</h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / Contact</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-card">
              <div className="contact-card__icon"><PinIcon width={22} height={22} /></div>
              <div>
                <h4>Address</h4>
                <p>{SITE.address.full}</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><PhoneIcon width={22} height={22} /></div>
              <div>
                <h4>Phone / Fax</h4>
                <p>
                  <a href={`tel:${SITE.phone}`}>Tel: {SITE.phoneDisplay}</a>
                  <br />Fax: {SITE.faxDisplay}
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><WhatsAppIcon width={22} height={22} /></div>
              <div>
                <h4>WhatsApp / Mobile</h4>
                <p><a target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to get in touch.")}>{SITE.whatsappDisplay}</a></p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><MailIcon width={22} height={22} /></div>
              <div>
                <h4>Email</h4>
                <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><ClockIcon width={22} height={22} /></div>
              <div>
                <h4>Business Hours</h4>
                <p>{SITE.hours}<br />Available on WhatsApp anytime</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Find Us</span>
            <h2>Our Location in Toyama, Japan</h2>
          </div>
          <div className="map-wrap">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${SITE.name} location map`}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a className="btn btn--outline-dark" href={SITE.mapsUrl} target="_blank" rel="noopener">
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
