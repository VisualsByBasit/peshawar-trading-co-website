import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import VehicleCard from "@/components/VehicleCard";
import { WhatsAppIcon, VEHICLE_ICONS } from "@/components/Icons";
import { CATEGORY_LABELS, SITE, whatsappLink } from "@/lib/site";
import { VEHICLES, getVehicleBySlug } from "@/lib/vehicles";

export function generateStaticParams() {
  return VEHICLES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  const title = `${vehicle.title} — Used ${CATEGORY_LABELS[vehicle.category]} for Export`;
  const description = `${vehicle.title}, ${vehicle.year}, ${vehicle.mileage}, ${vehicle.fuel}, ${vehicle.transmission}. Exported directly from Japan by ${SITE.name}. Contact us on WhatsApp for price and availability.`;
  return {
    title,
    description,
    alternates: { canonical: `/inventory/${vehicle.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: vehicle.img }],
    },
  };
}

function VehicleJsonLd({ vehicle }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: vehicle.title,
    image: vehicle.img,
    vehicleModelDate: vehicle.year,
    mileageFromOdometer: vehicle.mileage,
    fuelType: vehicle.fuel,
    vehicleTransmission: vehicle.transmission,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
      url: `${SITE.url}/inventory/${vehicle.slug}`,
      seller: { "@type": "Organization", name: SITE.name },
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function VehicleDetailPage({ params }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const Icon = VEHICLE_ICONS[vehicle.icon] || VEHICLE_ICONS.car;
  const message = `Hello Peshawar Trading Co., I'm interested in the ${vehicle.title} (Ref: ${vehicle.id.toUpperCase()}). Could you share more details and the price?`;
  const related = VEHICLES.filter((v) => v.category === vehicle.category && v.id !== vehicle.id).slice(0, 3);

  return (
    <>
      <VehicleJsonLd vehicle={vehicle} />

      <section className="page-banner page-banner--photo">
        <div className="page-banner__bg">
          <SafeImage src={vehicle.img} alt={vehicle.imgAlt || vehicle.title} fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container">
          <span className="eyebrow">{CATEGORY_LABELS[vehicle.category]}</span>
          <h1>{vehicle.title}</h1>
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/inventory">Inventory</Link> / {vehicle.title}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-media" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon width={88} height={88} style={{ color: "var(--gold-light)", opacity: 0.5 }} />
            <SafeImage src={vehicle.img} alt={vehicle.imgAlt || vehicle.title} fill sizes="(max-width: 980px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <span className="eyebrow">{CATEGORY_LABELS[vehicle.category]}</span>
            <h2>{vehicle.title}</h2>
            <div className="spotlight__specs" style={{ borderTop: "none", paddingTop: 0, marginTop: 18 }}>
              <div><strong style={{ color: "var(--navy)" }}>{vehicle.year}</strong><span style={{ color: "var(--muted)" }}>Year</span></div>
              <div><strong style={{ color: "var(--navy)" }}>{vehicle.mileage}</strong><span style={{ color: "var(--muted)" }}>Mileage</span></div>
              <div><strong style={{ color: "var(--navy)" }}>{vehicle.fuel}</strong><span style={{ color: "var(--muted)" }}>Fuel</span></div>
              <div><strong style={{ color: "var(--navy)" }}>{vehicle.transmission}</strong><span style={{ color: "var(--muted)" }}>Transmission</span></div>
            </div>
            <p style={{ marginTop: 24 }}>
              This {vehicle.title} is part of our current export stock, sourced directly in Japan and inspected before sale.
              Contact us for the latest price, additional photos and shipping estimate to your port.
            </p>
            <div className="hero__actions" style={{ marginTop: 28 }}>
              <a className="btn btn--whatsapp" target="_blank" rel="noopener" href={whatsappLink(message)}>
                <WhatsAppIcon width={18} height={18} />
                Enquire About This Vehicle
              </a>
              <Link className="btn btn--outline-dark" href="/inventory">Back to Inventory</Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">You May Also Like</span>
              <h2>More {CATEGORY_LABELS[vehicle.category]}</h2>
            </div>
            <div className="veh-grid">
              {related.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
