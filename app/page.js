import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import VehicleCard from "@/components/VehicleCard";
import { VEHICLES } from "@/lib/vehicles";
import { SITE, whatsappLink } from "@/lib/site";
import {
  ShieldIcon,
  FileIcon,
  GlobeIcon,
  CheckIcon,
  KeyIcon,
  SearchIcon,
  ShipIcon,
  PinIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const TRUST = [
  { icon: ShieldIcon, title: "Licensed in Japan", text: `Vehicle Dismantling Business Permit No. ${SITE.license.number}.` },
  { icon: FileIcon, title: "Auction sheet included", text: "Original Japanese inspection sheet shown for every car that has one." },
  { icon: SearchIcon, title: "Every angle photographed", text: "Exterior, interior, boot, wheels and underbody, before you commit." },
  { icon: GlobeIcon, title: "Shipped worldwide", text: "Export paperwork and shipping arranged from Toyama to your port." },
];

const STEPS = [
  { icon: SearchIcon, title: "Choose your car", text: "Browse the showroom or tell us what you want and we will source it from Japanese auctions." },
  { icon: FileIcon, title: "Review the details", text: "Study the full photo set, specs and the original inspection sheet, with our honest notes." },
  { icon: KeyIcon, title: "Confirm and pay", text: "We send a clear invoice, you pay, and we prepare the export documents." },
  { icon: ShipIcon, title: "We ship it", text: "Your car is loaded and shipped to your destination port with tracking." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="trust">
        <div className="container trust__grid">
          {TRUST.map(({ icon: Icon, title, text }) => (
            <div className="trust__item" key={title}>
              <span className="trust__icon"><Icon width={26} height={26} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--row">
            <div>
              <span className="eyebrow eyebrow--dark">The Showroom</span>
              <h2>Cars ready to ship</h2>
              <p>Real vehicles, real photos, real inspection sheets. No stock images.</p>
            </div>
            <Link className="btn btn--outline" href="/inventory">
              View all cars <ArrowRightIcon width={17} height={17} />
            </Link>
          </Reveal>
          <Reveal stagger className="grid grid--cars">
            {VEHICLES.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} priority={i < 2} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">How It Works</span>
            <h2>From Japan to your driveway in four steps</h2>
          </Reveal>
          <Reveal stagger className="steps">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <div className="step" key={title}>
                <span className="step__num">0{i + 1}</span>
                <span className="step__icon"><Icon width={26} height={26} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container why">
          <Reveal className="why__copy">
            <span className="eyebrow eyebrow--dark">Why Peshawar Trading</span>
            <h2>A showroom you can trust from anywhere in the world</h2>
            <p>
              Buying a car overseas takes confidence. That is why we show you everything: the good, the cosmetic and the repaired, so the car that arrives is the car you expected.
            </p>
            <ul className="checks">
              <li><CheckIcon width={18} height={18} /> Honest condition notes, including repair history</li>
              <li><CheckIcon width={18} height={18} /> Direct sourcing from Japanese dealers and auctions</li>
              <li><CheckIcon width={18} height={18} /> Clear paperwork for smooth customs clearance</li>
              <li><CheckIcon width={18} height={18} /> A real, licensed company with a real address in Toyama</li>
            </ul>
            <Link className="btn btn--dark" href="/about">
              About our company <ArrowRightIcon width={17} height={17} />
            </Link>
          </Reveal>
          <Reveal className="why__card">
            <h3>Visit the showroom</h3>
            <ul>
              <li><PinIcon width={20} height={20} /><span>{SITE.address.full}</span></li>
              <li><ClockIcon width={20} height={20} /><span>{SITE.hours}</span></li>
              <li><PhoneIcon width={20} height={20} /><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
            </ul>
            <a className="btn btn--gold btn--block" href={SITE.mapsUrl} target="_blank" rel="noopener">Get directions</a>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta">
            <div>
              <h2>Don&apos;t see the car you want?</h2>
              <p>We also export trucks, buses, construction machinery, generators and tractors. Tell us what you need and we will find it.</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--whatsapp btn--lg" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'm looking for a vehicle that isn't listed. Can you help?")}>
                <WhatsAppIcon width={20} height={20} /> Message us on WhatsApp
              </a>
              <Link className="btn btn--ghost btn--lg" href="/contact">Send an enquiry</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
