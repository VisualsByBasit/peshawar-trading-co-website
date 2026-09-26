# Peshawar Trading Co., Ltd. — Website

A static website for Peshawar Trading Co., Ltd., a Japan-based exporter of used cars, trucks, buses, construction machinery, generators and agricultural tractors.

## Structure

- `index.html` — Home page (hero, categories, featured stock, why-us, CTA)
- `inventory.html` — Full inventory with category filters and search
- `about.html` — Company info, services, license details
- `contact.html` — Contact details, enquiry form, map
- `assets/css/style.css` — All styling
- `assets/js/main.js` — Vehicle data + inventory filtering/search + WhatsApp links
- `assets/js/footer.js` — Shared footer injected on every page
- `assets/images/` — Logo assets

No build step or framework — plain HTML/CSS/JS. Open `index.html` in a browser, or serve the folder with any static file server.

## Updating the vehicle stock

Edit the `VEHICLES` array at the top of `assets/js/main.js`. Each entry:

```js
{
  id: "v13",
  title: "Toyota Corolla",
  category: "cars", // cars | trucks | buses | machinery | generators | tractors
  year: "2018",
  mileage: "50,000 km",
  fuel: "Petrol",
  transmission: "Automatic",
  price: "Contact for Price", // or e.g. "$8,500 FOB"
  icon: "car", // see ICONS keys in the same file
}
```

The Home page shows the first 6 vehicles; the Inventory page shows all of them. These are currently **sample/placeholder listings** — replace with real stock and, ideally, real photos (swap the icon placeholder in `assets/js/main.js` → `vehicleCard()` for an `<img>` tag once photos are available).

## Contact details used on the site

- WhatsApp / Mobile: +81 90-4325-4004
- Tel: 0766-50-8749 / Fax: 0766-50-8747
- Email: peshawar2004@gmail.com
- Address: 2-8 Motomachi 1-chome, Imizu-shi, Toyama 934-0011, Japan
- Instagram: instagram.com/peshawartradingjapan
- Facebook: facebook.com/share/1Bv9q3dHKu
- TikTok: tiktok.com/@peshawar.trading.j

Update these in the header/footer markup (repeated on each page) and in `WHATSAPP_NUMBER` at the top of `assets/js/main.js` if they change.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, plain Apache/Nginx). No environment variables or backend are required — the contact form opens the visitor's email client via `mailto:`.
