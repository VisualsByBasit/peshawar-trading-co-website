// Central place for brand/contact/site constants used across metadata,
// structured data, header/footer and CTAs. Update here to update everywhere.

export const SITE = {
  name: "Peshawar Trading Co., Ltd.",
  nameShort: "Peshawar Trading",
  legalNameJa: "ピシャワールトレーディング有限会社",
  tagline: "Japan Used Vehicle & Machinery Exporter",
  description:
    "Peshawar Trading Co., Ltd. exports used Japanese cars, trucks, buses, construction machinery, generators and agricultural tractors from Toyama, Japan to buyers worldwide.",
  // TODO: replace with the real production domain once one is chosen/purchased.
  url: "https://peshawartradingjapan.com",
  phone: "+81766508749",
  phoneDisplay: "+81 766-50-8749",
  fax: "+81766508747",
  faxDisplay: "+81 766-50-8747",
  whatsappNumber: "819043254004",
  whatsappDisplay: "+81 90-4325-4004",
  email: "peshawar2004@gmail.com",
  address: {
    streetAddress: "2-8 Motomachi 1-chome",
    addressLocality: "Imizu-shi",
    addressRegion: "Toyama",
    postalCode: "934-0011",
    addressCountry: "JP",
    full: "2-8 Motomachi 1-chome, Imizu-shi, Toyama 934-0011, Japan",
  },
  geo: {
    // Approximate coordinates for Imizu-shi, Toyama, Japan.
    latitude: 36.7514,
    longitude: 137.0631,
  },
  mapsUrl: "https://maps.app.goo.gl/p3ddrfi97GDvEFzk9",
  license: {
    label: "Vehicle Dismantling Business Permit",
    number: "20163000000982",
  },
  director: "Khan Nouman",
  social: {
    instagram: "https://www.instagram.com/peshawartradingjapan",
    facebook: "https://www.facebook.com/share/1Bv9q3dHKu/",
    tiktok: "https://www.tiktok.com/@peshawar.trading.j",
  },
  hours: "Mon – Sat: 9:00 AM – 6:00 PM (JST)",
};

export function whatsappLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const CATEGORY_LABELS = {
  all: "All Vehicles",
  cars: "Cars & Vans",
  trucks: "Trucks",
  buses: "Buses",
  machinery: "Construction Machinery",
  generators: "Generators",
  tractors: "Agricultural Tractors",
};
