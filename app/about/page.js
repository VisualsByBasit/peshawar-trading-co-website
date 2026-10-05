import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon, CheckIcon, ShieldIcon, FileIcon, GlobeIcon, SearchIcon } from "@/components/Icons";
import { SITE, whatsappLink } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

export const metadata = {
  title: "About Us",
  description: `${SITE.name} is a licensed used-car exporter based in Imizu, Toyama, Japan, shipping inspected Japanese cars worldwide.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: SearchIcon, title: "Total transparency", text: "Full photo sets, auction sheets and honest condition notes, including repairs." },
  { icon: ShieldIcon, title: "Licensed & accountable", text: "A registered Japanese company with a physical address, permit and named director." },
  { icon: FileIcon, title: "Clean paperwork", text: "Clear invoices and export documents so customs clearance is smooth." },
  { icon: GlobeIcon, title: "Global reach", text: "We ship to buyers around the world and stay in touch until the car arrives." },
];

export default function AboutPage() {
  const cover = VEHICLES[0].photos[0];

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Home</Link> / About Us</p>
          <h1>A trusted exporter, direct from Japan</h1>
          <p>{SITE.name} finds, inspects and ships quality used cars from Toyama to customers worldwide.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <Reveal className="about__media ph">
            <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 980px) 100vw, 540px" />
          </Reveal>
          <Reveal className="about__copy">
            <span className="eyebrow eyebrow--dark">Our Story</span>
            <h2>{SITE.name}</h2>
            <p>
              Based in Imizu City, Toyama Prefecture, {SITE.name} ({SITE.legalNameJa}) exports used vehicles and auto parts to customers around the world. Our showroom focuses on well-kept Japanese cars, and we also supply trucks, buses, construction machinery, generators and agricultural tractors.
            </p>
            <p>
              Every car is sourced directly in Japan from auctions, dealers and private sellers. We photograph it thoroughly, read the inspection sheet, and tell you plainly what we see, so you can buy with confidence from anywhere.
            </p>
            <ul className="checks">
              <li><CheckIcon width={18} height={18} /> Licensed business in Toyama, Japan</li>
              <li><CheckIcon width={18} height={18} /> Direct sourcing, no middlemen</li>
              <li><CheckIcon width={18} height={18} /> Worldwide export and shipping</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">What we stand for</span>
            <h2>Built on trust</h2>
          </Reveal>
          <Reveal stagger className="values">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div className="value" key={title}>
                <span className="step__icon"><Icon width={26} height={26} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="license">
            <ShieldIcon width={38} height={38} />
            <div>
              <h3>Licensed Vehicle Dismantling Business</h3>
              <p>
                {SITE.name} operates under the {SITE.license.label}, No. <code>{SITE.license.number}</code>, registered in Japan. Director: {SITE.director}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta">
            <div>
              <h2>Ready to find your next car?</h2>
              <p>Browse the showroom, or tell us what you are looking for and we will source it.</p>
            </div>
            <div className="cta__actions">
              <Link className="btn btn--gold btn--lg" href="/inventory">View the showroom</Link>
              <a className="btn btn--ghost btn--lg" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your company.")}>
                <WhatsAppIcon width={20} height={20} /> WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
