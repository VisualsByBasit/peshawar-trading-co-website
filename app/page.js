import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import AnimatedGrid from "@/components/AnimatedGrid";
import Counter from "@/components/Counter";
import VehicleCard from "@/components/VehicleCard";
import SafeImage from "@/components/SafeImage";
import { WhatsAppIcon, PlayIcon, PinIcon, ShieldIcon, GlobeIcon, DollarIcon, ArrowRightIcon, VEHICLE_ICONS } from "@/components/Icons";
import { SITE, whatsappLink } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

export const metadata = {
  alternates: { canonical: "/" },
};

const CATEGORIES = [
  { key: "cars", label: "Cars & Vans", desc: "Sedans, SUVs and vans sourced from Japanese auctions and dealers." },
  { key: "trucks", label: "Trucks", desc: "Flatbed, dump and cargo trucks for commercial and industrial use." },
  { key: "buses", label: "Buses", desc: "Mini and mid-size buses, well maintained and export ready." },
  { key: "machinery", label: "Construction Machinery", desc: "Excavators, wheel loaders and heavy equipment for any project." },
  { key: "generators", label: "Generators", desc: "Reliable diesel generators for industrial and backup power." },
  { key: "tractors", label: "Agricultural Tractors", desc: "Tractors and farm equipment sourced from trusted Japanese sellers." },
];

export default function HomePage() {
  const featured = VEHICLES.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <ParallaxImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_New_Port_Toyama_Japan.jpg?width=1920" alt="Toyama New Port, Japan" priority />
        </div>
        <div className="container">
          <div className="hero__content">
            <span className="hero__kicker">Toyama, Japan &rarr; Worldwide</span>
            <h1>Genuine Japanese Vehicles, <span>Exported with Care</span></h1>
            <p className="lead">{SITE.name} sources and exports used cars, trucks, buses, construction machinery, generators and agricultural tractors directly from Japan &mdash; inspected, documented and shipped to buyers around the world.</p>
            <div className="hero__actions">
              <Link className="btn btn--gold" href="/inventory">
                <VEHICLE_ICONS.car width={18} height={18} />
                Browse Inventory
              </Link>
              <a className="btn btn--whatsapp" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'm looking for a vehicle. Can you help?")}>
                <WhatsAppIcon width={18} height={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      <div className="stat-bar">
        <div className="container">
          <div className="stat-bar__grid">
            <div className="stat-bar__item"><Counter value={6} suffix="+" /><span>Vehicle Categories</span></div>
            <div className="stat-bar__item"><Counter value={100} suffix="%" /><span>Direct from Japan</span></div>
            <div className="stat-bar__item"><Counter value={24} suffix="/7" /><span>WhatsApp Support</span></div>
            <div className="stat-bar__item"><strong>Worldwide</strong><span>Export &amp; Shipping</span></div>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Cars <span>Trucks</span> Buses <span>Construction Machinery</span> Generators <span>Agricultural Tractors</span>
            </span>
          ))}
        </div>
      </div>

      <Reveal as="section" className="split">
        <div className="split__media">
          <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_city_%26_Alps.jpg?width=1200" alt="Toyama city with the Japanese Alps" fill sizes="(max-width: 980px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          <span className="split__media-caption">Toyama, Japan — our home base</span>
        </div>
        <div className="split__copy">
          <span className="eyebrow">Who We Are</span>
          <h2>A trusted name in Japanese vehicle exports</h2>
          <p>Based in Imizu City, Toyama Prefecture, we specialize in sourcing quality used vehicles and machinery straight from Japan&apos;s auctions, dealers and private sellers &mdash; then handling every step of inspection, documentation and export ourselves.</p>
          <p className="pull-line">&quot;Every unit that leaves our yard is one we&apos;d be comfortable putting our own name on.&quot;</p>
          <Link className="btn btn--outline-dark" href="/about">More About Us</Link>
        </div>
      </Reveal>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">What We Export</span>
            <h2>Vehicles &amp; Machinery, Ready for Export</h2>
            <p>Browse by category &mdash; every unit is sourced, inspected and prepared for export directly from Japan.</p>
          </Reveal>
          <AnimatedGrid className="cat-grid">
            {CATEGORIES.map((cat) => {
              const Icon = VEHICLE_ICONS[cat.key === "cars" ? "car" : cat.key === "trucks" ? "truck" : cat.key === "buses" ? "bus" : cat.key === "machinery" ? "excavator" : cat.key === "generators" ? "generator" : "tractor"];
              return (
                <Link key={cat.key} className="cat-card glow-target" href={`/inventory?cat=${cat.key}`}>
                  <div className="cat-card__icon">
                    <Icon width={28} height={28} />
                  </div>
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                  <span className="cat-card__link">
                    View stock <ArrowRightIcon width={14} height={14} />
                  </span>
                </Link>
              );
            })}
          </AnimatedGrid>
        </div>
      </section>

      <section className="spotlight">
        <div className="spotlight__bg">
          <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Land_Cruiser_Prado_90_005.JPG?width=1920" alt="Toyota Land Cruiser Prado" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container">
          <span className="spotlight__tag">Stock Spotlight</span>
          <h2>Toyota Land Cruiser Prado</h2>
          <p>One of the most requested exports in our yard &mdash; a rugged, reliable SUV built for tough terrain and long service life. Fully inspected and export-documented before it ships.</p>
          <div className="spotlight__specs">
            <div><strong>2016</strong><span>Year</span></div>
            <div><strong>78,000 km</strong><span>Mileage</span></div>
            <div><strong>Diesel</strong><span>Fuel</span></div>
            <div><strong>Automatic</strong><span>Transmission</span></div>
          </div>
          <div className="spotlight__actions">
            <a className="btn btn--gold" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'm interested in the Toyota Land Cruiser Prado featured on your website.")}>
              Enquire About This Vehicle
            </a>
            <Link className="btn btn--outline" href="/inventory">See Full Inventory</Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Featured Stock</span>
            <h2>Recently Available Vehicles</h2>
            <p>A snapshot of our current stock. Full inventory changes frequently &mdash; message us for the latest list.</p>
          </Reveal>
          <AnimatedGrid className="veh-grid" as="div">
            {featured.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </AnimatedGrid>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn--outline-dark" href="/inventory">View Full Inventory</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">The Process</span>
            <h2>How Export Works, Start to Finish</h2>
            <p>A straightforward process, handled by us from first message to delivery at your port.</p>
          </Reveal>
        </div>
        <AnimatedGrid className="process-grid">
          <div className="process-step">
            <h3>Tell Us What You Need</h3>
            <p>Message us on WhatsApp or browse our inventory. Tell us the make, model, budget or specs you&apos;re after.</p>
          </div>
          <div className="process-step">
            <h3>We Source &amp; Inspect</h3>
            <p>We locate the vehicle through auctions or direct sellers in Japan and inspect it before confirming.</p>
          </div>
          <div className="process-step">
            <h3>Documentation &amp; Payment</h3>
            <p>We prepare export paperwork and share clear pricing &mdash; no hidden costs, no surprises.</p>
          </div>
          <div className="process-step">
            <h3>Shipping &amp; Delivery</h3>
            <p>Your vehicle is shipped from a Japanese port to your destination, with tracking updates along the way.</p>
          </div>
        </AnimatedGrid>
      </section>

      <section className="section section--cream">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Video Showroom</span>
            <h2>See Our Vehicles in Motion</h2>
            <p>Walk-arounds, yard tours and new arrivals &mdash; posted regularly on our social channels.</p>
          </Reveal>
          <Reveal as="div" className="video-grid">
            <a className="video-card" href={SITE.social.instagram} target="_blank" rel="noopener">
              <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_New_Port_Toyama_Japan.jpg?width=1000" alt="Watch vehicle videos on Instagram" fill sizes="(max-width: 980px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              <span className="video-card__play"><PlayIcon width={22} height={22} /></span>
              <div className="video-card__body">
                <span className="video-card__platform">Instagram</span>
                <h3>Yard Tours &amp; New Arrivals</h3>
              </div>
            </a>
            <a className="video-card" href={SITE.social.tiktok} target="_blank" rel="noopener">
              <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Hiace_H200_501.JPG?width=700" alt="Watch vehicle walk-arounds on TikTok" fill sizes="(max-width: 980px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <span className="video-card__play"><PlayIcon width={22} height={22} /></span>
              <div className="video-card__body">
                <span className="video-card__platform">TikTok</span>
                <h3>Vehicle Walk-Arounds</h3>
              </div>
            </a>
            <a className="video-card" href={SITE.social.facebook} target="_blank" rel="noopener">
              <SafeImage src="https://commons.wikimedia.org/wiki/Special:FilePath/Komatsu_excavator.jpg?width=700" alt="Watch machinery videos on Facebook" fill sizes="(max-width: 980px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <span className="video-card__play"><PlayIcon width={22} height={22} /></span>
              <div className="video-card__body">
                <span className="video-card__platform">Facebook</span>
                <h3>Machinery in Action</h3>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Trusted Sourcing, Worldwide Delivery</h2>
          </Reveal>
          <AnimatedGrid className="feature-grid">
            <div className="feature glow-target">
              <div className="feature__icon"><PinIcon width={28} height={28} /></div>
              <h3>Direct Japan Sourcing</h3>
              <p>Vehicles sourced directly from Japanese auctions, dealers and owners.</p>
            </div>
            <div className="feature glow-target">
              <div className="feature__icon"><ShieldIcon width={28} height={28} /></div>
              <h3>Licensed &amp; Trusted</h3>
              <p>Registered vehicle dismantling business, operating under Japanese law.</p>
            </div>
            <div className="feature glow-target">
              <div className="feature__icon"><GlobeIcon width={28} height={28} /></div>
              <h3>Worldwide Shipping</h3>
              <p>We handle export documentation and shipping to ports worldwide.</p>
            </div>
            <div className="feature glow-target">
              <div className="feature__icon"><DollarIcon width={28} height={28} /></div>
              <h3>Competitive Pricing</h3>
              <p>Fair, transparent pricing with no hidden costs on every deal.</p>
            </div>
          </AnimatedGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-banner">
            <div>
              <h2>Looking for a specific vehicle?</h2>
              <p>Tell us the make, model and specs you need &mdash; we&apos;ll search our network and get back to you with options and pricing.</p>
            </div>
            <div className="cta-banner__actions">
              <a className="btn btn--gold" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'm looking for a specific vehicle. Here are my requirements:")}>
                Request a Vehicle
              </a>
              <Link className="btn btn--outline" href="/contact">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
