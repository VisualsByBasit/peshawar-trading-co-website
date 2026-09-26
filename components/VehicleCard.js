import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { CATEGORY_LABELS, whatsappLink } from "@/lib/site";
import { VEHICLE_ICONS, WhatsAppIcon } from "@/components/Icons";

export default function VehicleCard({ vehicle }) {
  const Icon = VEHICLE_ICONS[vehicle.icon] || VEHICLE_ICONS.car;
  const message = `Hello Peshawar Trading Co., I'm interested in the ${vehicle.title} (Ref: ${vehicle.id.toUpperCase()}). Could you share more details and the price?`;

  return (
    <article className="veh-card glow-target">
      <Link href={`/inventory/${vehicle.slug}`} className="veh-card__media">
        <span className="veh-card__fallback">
          <Icon width={88} height={88} />
        </span>
        <SafeImage src={vehicle.img} alt={vehicle.imgAlt || vehicle.title} fill sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 380px" style={{ objectFit: "cover" }} />
        <span className="veh-card__tag">{CATEGORY_LABELS[vehicle.category] || vehicle.category}</span>
      </Link>
      <div className="veh-card__body">
        <h3 className="veh-card__title">
          <Link href={`/inventory/${vehicle.slug}`}>{vehicle.title}</Link>
        </h3>
        <div className="veh-card__specs">
          <span>{vehicle.year}</span>
          <span>{vehicle.mileage}</span>
          <span>{vehicle.fuel}</span>
          <span>{vehicle.transmission}</span>
        </div>
        <div className="veh-card__price">
          <small>Price</small>
          {vehicle.price}
        </div>
        <div className="veh-card__foot">
          <a className="btn btn--whatsapp btn--sm" target="_blank" rel="noopener" href={whatsappLink(message)}>
            <WhatsAppIcon width={18} height={18} />
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
