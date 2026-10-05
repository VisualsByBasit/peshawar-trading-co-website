import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { PinIcon, PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon } from "@/components/Icons";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name}, a used-car exporter based in Imizu, Toyama, Japan. Call, WhatsApp, email or visit.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const items = [
    { icon: PinIcon, title: "Showroom address", body: <a href={SITE.mapsUrl} target="_blank" rel="noopener">{SITE.address.full}</a> },
    {
      icon: PhoneIcon,
      title: "Phone / Fax",
      body: (
        <>
          <a href={`tel:${SITE.phone}`}>Tel: {SITE.phoneDisplay}</a>
          <br />
          Fax: {SITE.faxDisplay}
        </>
      ),
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp / Mobile",
      body: (
        <a target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to get in touch.")}>
          {SITE.whatsappDisplay}
        </a>
      ),
    },
    { icon: MailIcon, title: "Email", body: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
    {
      icon: ClockIcon,
      title: "Opening hours",
      body: (
        <>
          {SITE.hours}
          <br />
          WhatsApp answered around the clock
        </>
      ),
    },
  ];

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Home</Link> / Contact</p>
          <h1>Talk to our team</h1>
          <p>Questions about a car, a price, or shipping to your country? We usually reply within a few hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            {items.map(({ icon: Icon, title, body }) => (
              <div className="contact-card" key={title}>
                <span className="contact-card__icon"><Icon width={22} height={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--dark">Find us</span>
            <h2>Our showroom in Toyama, Japan</h2>
          </div>
          <div className="map-wrap">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${SITE.name} location map`}
            />
          </div>
          <p className="map-link">
            <a className="btn btn--outline" href={SITE.mapsUrl} target="_blank" rel="noopener">Get directions on Google Maps</a>
          </p>
        </div>
      </section>
    </>
  );
}
