import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import VehicleCard from "@/components/VehicleCard";
import { WhatsAppIcon, PhoneIcon, MailIcon, CheckIcon, SpeedIcon, FuelIcon, GearIcon, CalendarIcon, SeatIcon, ShieldIcon, FileIcon } from "@/components/Icons";
import { SITE, whatsappLink } from "@/lib/site";
import { VEHICLES, getVehicleBySlug, coverOf } from "@/lib/vehicles";

export function generateStaticParams() {
  return VEHICLES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const v = getVehicleBySlug(slug);
  if (!v) return {};
  const title = `${v.year} ${v.title} for Export from Japan`;
  const description = `${v.year} ${v.title}, ${v.mileage}, ${v.fuel}, ${v.transmission}, ${v.color}. Full photos and specs. Exported from Japan by ${SITE.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/inventory/${v.slug}` },
    openGraph: { title, description, images: [{ url: coverOf(v).src, alt: coverOf(v).alt }] },
  };
}

function VehicleJsonLd({ v }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: v.title,
    brand: { "@type": "Brand", name: v.make },
    model: v.model,
    vehicleModelDate: String(v.year),
    color: v.color,
    fuelType: v.fuel,
    vehicleTransmission: v.transmission,
    numberOfSeats: v.seats,
    image: v.photos.filter((p) => p.kind !== "sheet").map((p) => `${SITE.url}${p.src}`),
    ...(v.mileageKm ? { mileageFromOdometer: { "@type": "QuantitativeValue", value: v.mileageKm, unitCode: "KMT" } } : {}),
    url: `${SITE.url}/inventory/${v.slug}`,
    seller: { "@type": "Organization", name: SITE.name },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function VehicleDetailPage({ params }) {
  const { slug } = await params;
  const v = getVehicleBySlug(slug);
  if (!v) notFound();

  const message = `Hello Peshawar Trading Co., I'm interested in the ${v.year} ${v.title} (Ref: ${v.id}). Could you share the price and shipping options to my country?`;
  const related = VEHICLES.filter((x) => x.id !== v.id).slice(0, 3);
  const hasSheet = v.photos.some((p) => p.kind === "sheet");

  const quick = [
    [CalendarIcon, "Year", v.year],
    [SpeedIcon, "Mileage", v.mileage],
    [FuelIcon, "Fuel", v.fuel],
    [GearIcon, "Gearbox", v.transmission],
    [SeatIcon, "Seats", v.seats],
  ];

  return (
    <>
      <VehicleJsonLd v={v} />

      <section className="page-head page-head--slim">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/inventory">Showroom</Link> / {v.title}
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container detail">
          <div className="detail__main">
            <Gallery photos={v.photos} title={v.title} />

            <div className="panel">
              <h2>Overview</h2>
              <p>{v.summary}</p>
              <ul className="pills">
                {v.highlights.map((h) => (
                  <li key={h}><CheckIcon width={15} height={15} />{h}</li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <h2>Specifications</h2>
              <dl className="spec-table">
                {v.specs.map(([k, val]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{val}</dd>
                  </div>
                ))}
              </dl>
              <p className="fineprint">
                Details marked (sheet) are read from the original Japanese auction inspection sheet. Other figures are the manufacturer&apos;s published data for this model. Ask us to confirm anything before you buy.
              </p>
            </div>

            <div className="panel">
              <h2>Equipment &amp; features</h2>
              <ul className="feature-list">
                {v.features.map((f) => (
                  <li key={f}><CheckIcon width={16} height={16} />{f}</li>
                ))}
              </ul>
            </div>

            <div className="panel panel--note">
              <FileIcon width={28} height={28} />
              <div>
                <h3>{hasSheet ? "Original auction sheet included" : "Inspection sheet on request"}</h3>
                <p>
                  {hasSheet
                    ? "The last photo in the gallery is the car's original Japanese auction inspection sheet, covering grade, mileage, equipment and any marked body or repair notes. Message us if you would like it translated."
                    : "We can share the inspection details and extra photos for this car on request. Message us and we will send everything we have."}
                </p>
              </div>
            </div>
          </div>

          <aside className="detail__side">
            <div className="buybox">
              <span className="tag tag--gold tag--static">{v.badge}</span>
              <p className="buybox__make">{v.make} &middot; {v.type} &middot; Ref {v.id}</p>
              <h1>{v.title}</h1>
              <p className="buybox__grade">{v.grade}</p>

              <div className="buybox__price">
                <small>Price (FOB Japan)</small>
                <strong>{v.price || "Contact us for today's price"}</strong>
              </div>

              <ul className="quick">
                {quick.map(([Icon, label, value]) => (
                  <li key={label}>
                    <Icon width={18} height={18} />
                    <span>{label}</span>
                    <b>{value}</b>
                  </li>
                ))}
              </ul>

              <a className="btn btn--whatsapp btn--block btn--lg" target="_blank" rel="noopener" href={whatsappLink(message)}>
                <WhatsAppIcon width={20} height={20} /> Enquire on WhatsApp
              </a>
              <div className="buybox__row">
                <a className="btn btn--outline btn--block" href={`tel:${SITE.phone}`}>
                  <PhoneIcon width={17} height={17} /> Call
                </a>
                <a
                  className="btn btn--outline btn--block"
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${v.title} (${v.id})`)}`}
                >
                  <MailIcon width={17} height={17} /> Email
                </a>
              </div>
              <p className="buybox__assure">
                <ShieldIcon width={18} height={18} /> Licensed Japanese exporter &middot; shipped worldwide
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--dark">Keep browsing</span>
            <h2>More from the showroom</h2>
          </div>
          <div className="grid grid--cars">
            {related.map((r) => (
              <VehicleCard key={r.id} vehicle={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
