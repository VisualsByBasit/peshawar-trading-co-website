import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { coverOf } from "@/lib/vehicles";
import { SpeedIcon, FuelIcon, GearIcon, CalendarIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";

export default function VehicleCard({ vehicle, priority = false }) {
  const cover = coverOf(vehicle);
  const message = `Hello Peshawar Trading Co., I'm interested in the ${vehicle.title} (Ref: ${vehicle.id}). Could you share the price and shipping options?`;

  return (
    <article className="card">
      <Link href={`/inventory/${vehicle.slug}`} className="card__media ph" aria-label={`View ${vehicle.title}`}>
        <Image src={cover.src} alt={cover.alt} fill priority={priority} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
        {vehicle.badge && <span className="tag tag--gold">{vehicle.badge}</span>}
        <span className="tag tag--ref">{vehicle.id}</span>
      </Link>
      <div className="card__body">
        <p className="card__make">{vehicle.make} &middot; {vehicle.type}</p>
        <h3 className="card__title">
          <Link href={`/inventory/${vehicle.slug}`}>{vehicle.title}</Link>
        </h3>
        <ul className="card__specs">
          <li><CalendarIcon width={16} height={16} />{vehicle.year}</li>
          <li><SpeedIcon width={16} height={16} />{vehicle.mileage}</li>
          <li><FuelIcon width={16} height={16} />{vehicle.fuel}</li>
          <li><GearIcon width={16} height={16} />{vehicle.transmission}</li>
        </ul>
        <div className="card__foot">
          <div className="price">
            <small>Price</small>
            {vehicle.price || "On request"}
          </div>
          <div className="card__actions">
            <a className="icon-btn icon-btn--wa" target="_blank" rel="noopener" href={whatsappLink(message)} aria-label={`Enquire about ${vehicle.title} on WhatsApp`}>
              <WhatsAppIcon width={20} height={20} />
            </a>
            <Link className="btn btn--dark btn--sm" href={`/inventory/${vehicle.slug}`}>
              Details <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
