import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import AnimatedGrid from "@/components/AnimatedGrid";
import { WhatsAppIcon, CheckIcon, ShieldIcon, VEHICLE_ICONS } from "@/components/Icons";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name}, a licensed used vehicle and machinery exporter based in Imizu, Toyama, Japan.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-banner page-banner--photo">
        <div className="page-banner__bg">
          <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Komatsu_excavator.jpg?width=1600" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Trusted Exporter, Direct from Japan</h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / About Us</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-media">
            <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_city_%26_Alps.jpg?width=1000" alt="Toyama city with the Japanese Alps" fill sizes="(max-width: 980px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>{SITE.name}</h2>
            <p>Based in Imizu City, Toyama Prefecture, Japan, {SITE.name} ({SITE.legalNameJa}) specializes in the export of used vehicles and auto parts to customers around the world. We deal in cars, trucks, buses, construction machinery, generators and agricultural tractors, alongside vehicle dismantling and scrap metal services.</p>
            <p>Every vehicle we export is sourced directly in Japan &mdash; from auctions, dealers and private sellers &mdash; so buyers get genuine, well-maintained stock at fair prices, backed by clear documentation for smooth export and shipping.</p>
            <div className="badge-row">
              <span className="badge-pill"><CheckIcon width={15} height={15} /> Licensed Business</span>
              <span className="badge-pill"><CheckIcon width={15} height={15} /> Based in Toyama, Japan</span>
              <span className="badge-pill"><CheckIcon width={15} height={15} /> Worldwide Export</span>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className="split split--reverse">
        <div className="split__media">
          <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Hiace_H200_501.JPG?width=1200" alt="Toyota Hiace van, one of our export categories" fill sizes="(max-width: 980px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          <span className="split__media-caption">Sourced, inspected, exported</span>
        </div>
        <div className="split__copy">
          <span className="eyebrow">Our Approach</span>
          <h2>Quality checked before it ever reaches the port</h2>
          <p>We don&apos;t just broker vehicles &mdash; we inspect them. Every car, truck and machine that passes through our yard is checked for condition, mileage accuracy and mechanical soundness before we confirm a sale, so what you see is what arrives.</p>
          <p className="pull-line">&quot;Buyers overseas can&apos;t inspect the vehicle themselves &mdash; so we do it as if we were buying it for ourselves.&quot;</p>
        </div>
      </Reveal>

      <section className="section section--navy">
        <div className="container">
          <div className="timeline-stat">
            <div><strong>6+</strong><span>Vehicle &amp; Machinery Categories</span></div>
            <div><strong>934-0011</strong><span>Toyama, Japan HQ</span></div>
            <div><strong>Worldwide</strong><span>Export Reach</span></div>
            <div><strong>Direct</strong><span>Japan Sourcing</span></div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Our Services</h2>
          </Reveal>
          <AnimatedGrid className="value-grid">
            <div className="value-card glow-target">
              <VEHICLE_ICONS.car width={30} height={30} />
              <h3>Used Car &amp; Auto Parts Export</h3>
              <p>Sourcing and exporting used cars, vans and genuine auto parts.</p>
            </div>
            <div className="value-card glow-target">
              <VEHICLE_ICONS.excavator width={30} height={30} />
              <h3>Construction Machinery</h3>
              <p>Excavators, loaders and heavy equipment for project needs.</p>
            </div>
            <div className="value-card glow-target">
              <VEHICLE_ICONS.tractor width={30} height={30} />
              <h3>Agricultural Tractors</h3>
              <p>Farm tractors and equipment sourced from trusted Japanese sellers.</p>
            </div>
            <div className="value-card glow-target">
              <ShieldIcon width={30} height={30} />
              <h3>Vehicle Dismantling &amp; Scrap</h3>
              <p>Licensed dismantling services and iron scrap processing.</p>
            </div>
          </AnimatedGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="license-card">
            <ShieldIcon width={34} height={34} />
            <div>
              <h4>Licensed Vehicle Dismantling Business</h4>
              <p>
                {SITE.name} operates under {SITE.license.label} No. <code>{SITE.license.number}</code>, registered in Japan. Director: {SITE.director}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <Reveal as="div" className="cta-banner">
            <div>
              <h2>Want to know more about us?</h2>
              <p>Reach out any time &mdash; we&apos;re happy to answer questions about our stock, export process or shipping.</p>
            </div>
            <div className="cta-banner__actions">
              <Link className="btn btn--gold" href="/contact">Contact Us</Link>
              <a className="btn btn--outline" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your company.")}>
                <WhatsAppIcon width={18} height={18} />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
