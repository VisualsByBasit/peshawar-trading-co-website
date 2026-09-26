/* ==========================================================================
   Peshawar Trading Co., Ltd. — site data & behaviour
   Edit VEHICLES below to update stock shown on the Home & Inventory pages.
   ========================================================================== */

const WHATSAPP_NUMBER = "819043254004"; // +81 90-4325-4004

/** Builds a Wikimedia Commons image URL at a given width. Swap for your own
 *  photo URLs (or local files under assets/images/inventory/) as real stock
 *  photos become available — the <img> tag doesn't care where it comes from. */
function wikiImg(file, width) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`;
}

/**
 * Sample stock, illustrated with real reference photos (Wikimedia Commons,
 * freely licensed) of the same make/model until real yard photos are supplied.
 * category must be one of: cars, trucks, buses, machinery, generators, tractors
 * icon is the fallback shown if the photo fails to load.
 */
const VEHICLES = [
  {
    id: "v1",
    title: "Toyota Land Cruiser Prado",
    category: "cars",
    year: "2016",
    mileage: "78,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "Contact for Price",
    icon: "car",
    img: wikiImg("Toyota_Land_Cruiser_Prado_90_005.JPG", 900),
  },
  {
    id: "v2",
    title: "Toyota Hiace Van (Super GL)",
    category: "cars",
    year: "2015",
    mileage: "95,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "van",
    img: wikiImg("Toyota_Hiace_H200_501.JPG", 900),
  },
  {
    id: "v11",
    title: "Nissan Caravan Cargo Van",
    category: "cars",
    year: "2017",
    mileage: "61,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "Contact for Price",
    icon: "van",
    img: wikiImg("Nissan_Caravan_E25_001.JPG", 900),
  },
  {
    id: "v3",
    title: "Isuzu Elf Dropside Cargo Truck",
    category: "trucks",
    year: "2014",
    mileage: "110,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "truck",
    img: wikiImg("Isuzu_Elf_NPR_Dropside_Cargo_Truck_2019.jpg", 900),
  },
  {
    id: "v4",
    title: "Mitsubishi Fuso Canter Box Truck",
    category: "trucks",
    year: "2013",
    mileage: "128,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "dumptruck",
    img: wikiImg("Mitsubishi_Fuso_Canter._Box_rigid_truck._Spielvogel.jpg", 900),
  },
  {
    id: "v12",
    title: "UD Trucks (Nissan Diesel) Cargo Truck",
    category: "trucks",
    year: "2012",
    mileage: "135,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "truck",
    img: wikiImg("Nissan.CW.340.Diesel.Truck.1.Cambodge.jpg", 900),
  },
  {
    id: "v5",
    title: "Hino Liesse II Mini Bus",
    category: "buses",
    year: "2012",
    mileage: "142,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "Contact for Price",
    icon: "bus",
    img: wikiImg("Hino_Liesse_II_103.JPG", 900),
  },
  {
    id: "v6",
    title: "Komatsu Hydraulic Excavator",
    category: "machinery",
    year: "2011",
    mileage: "6,200 hrs",
    fuel: "Diesel",
    transmission: "-",
    price: "Contact for Price",
    icon: "excavator",
    img: wikiImg("Komatsu_excavator.jpg", 900),
  },
  {
    id: "v7",
    title: "Kubota Wheel Loader / Backhoe",
    category: "machinery",
    year: "2013",
    mileage: "4,800 hrs",
    fuel: "Diesel",
    transmission: "-",
    price: "Contact for Price",
    icon: "loader",
    img: wikiImg("Kubota_tractor_with_front_loader_and_backhoe.jpg", 900),
  },
  {
    id: "v8",
    title: "Industrial Diesel Generator Set",
    category: "generators",
    year: "2015",
    mileage: "3,100 hrs",
    fuel: "Diesel",
    transmission: "-",
    price: "Contact for Price",
    icon: "generator",
    img: wikiImg("Diesel_generator.jpg", 900),
  },
  {
    id: "v9",
    title: "Yanmar Agricultural Tractor",
    category: "tractors",
    year: "2012",
    mileage: "3,900 hrs",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "tractor",
    img: wikiImg("Yanmar_YM_1601_D.jpg", 900),
  },
  {
    id: "v10",
    title: "Rice Combine Harvester",
    category: "tractors",
    year: "2010",
    mileage: "2,600 hrs",
    fuel: "Diesel",
    transmission: "Manual",
    price: "Contact for Price",
    icon: "tractor",
    img: wikiImg("Rice-combine-harvester%2C_Katori-city%2C_Japan.jpg", 900),
  },
];

const CATEGORY_LABELS = {
  all: "All Vehicles",
  cars: "Cars & Vans",
  trucks: "Trucks",
  buses: "Buses",
  machinery: "Construction Machinery",
  generators: "Generators",
  tractors: "Agricultural Tractors",
};

const ICONS = {
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13l1.5-5A2 2 0 0 1 6.4 6.5h11.2a2 2 0 0 1 1.9 1.5L21 13" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.5" y="13" width="19" height="6" rx="1.5"/><circle cx="7" cy="19.5" r="1.6"/><circle cx="17" cy="19.5" r="1.6"/></svg>`,
  van: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 16V8.5A1.5 1.5 0 0 1 4 7h9l4.5 4.5H21a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2.5z" stroke-linejoin="round"/><path d="M13 7v4.5h6.5" stroke-linejoin="round"/><circle cx="6.5" cy="16.5" r="1.7"/><circle cx="17" cy="16.5" r="1.7"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 6.5h10v9h-10z" stroke-linejoin="round"/><path d="M12.5 10.5H17l4 3v2h-8.5z" stroke-linejoin="round"/><circle cx="6" cy="17.5" r="1.7"/><circle cx="17.5" cy="17.5" r="1.7"/></svg>`,
  dumptruck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 14.5 5 8h6l2.5 6.5z" stroke-linejoin="round"/><path d="M13.5 10.5H17l4 3v2h-3.5" stroke-linejoin="round"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="16" cy="17.5" r="1.7"/></svg>`,
  bus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M3 11h18M7 5v12M17 5v12" /><circle cx="7" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>`,
  excavator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18h9" stroke-linecap="round"/><rect x="2.5" y="13" width="9" height="5" rx="1"/><path d="M7 13V8l9-3 3 2-7 4" stroke-linejoin="round"/><path d="M19 7l2 2-3 3" stroke-linejoin="round"/><circle cx="4.5" cy="19.7" r="1.2"/><circle cx="9" cy="19.7" r="1.2"/></svg>`,
  loader: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="9" width="8" height="6" rx="1"/><path d="M2.5 15 6 9h2M16 12h3l2.5 2v3H16" stroke-linejoin="round"/><circle cx="6" cy="18" r="2"/><circle cx="18.5" cy="18" r="2"/></svg>`,
  generator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="18" height="11" rx="1.5"/><circle cx="8" cy="11.5" r="2.3"/><path d="M13 9h5M13 12h5M13 15h3" stroke-linecap="round"/></svg>`,
  tractor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6.5" cy="17.5" r="3.2"/><circle cx="17" cy="18.2" r="2.2"/><path d="M6.5 14.3V8h6l3 4.5h2.5v3.5" stroke-linejoin="round"/><path d="M12.5 8V5.5h3" stroke-linecap="round"/></svg>`,
};

function whatsappLink(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

function vehicleCard(v) {
  const icon = ICONS[v.icon] || ICONS.car;
  const msg = `Hello Peshawar Trading Co., I'm interested in the ${v.title} (Ref: ${v.id.toUpperCase()}). Could you share more details and the price?`;
  return `
    <article class="veh-card" data-category="${v.category}" data-title="${v.title.toLowerCase()}">
      <div class="veh-card__media">
        <span class="veh-card__fallback">${icon}</span>
        <img src="${v.img}" alt="${v.title}" loading="lazy" onerror="this.remove()" />
        <span class="veh-card__tag">${CATEGORY_LABELS[v.category] || v.category}</span>
      </div>
      <div class="veh-card__body">
        <h3 class="veh-card__title">${v.title}</h3>
        <div class="veh-card__specs">
          <span>${v.year}</span>
          <span>${v.mileage}</span>
          <span>${v.fuel}</span>
          <span>${v.transmission}</span>
        </div>
        <div class="veh-card__price"><small>Price</small>${v.price}</div>
        <div class="veh-card__foot">
          <a class="btn btn--whatsapp btn--sm" target="_blank" rel="noopener" href="${whatsappLink(msg)}">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.4.5.2 1 .4 1.3.5.6.2 1 .1 1.4-.1.4-.2 1.4-.6 1.6-1.1.2-.5.2-.9.1-1l-.4-.2Z"/></svg>
            Enquire
          </a>
        </div>
      </div>
    </article>`;
}

function renderVehicles(list, mount) {
  const el = document.querySelector(mount);
  if (!el) return;
  if (!list.length) {
    el.innerHTML = `
      <div class="results-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3" stroke-linecap="round"/></svg>
        <p>No matching vehicles right now. Message us on WhatsApp — we likely have it in our full stock list.</p>
      </div>`;
    return;
  }
  el.innerHTML = list.map(vehicleCard).join("");
}

function initHomeFeatured() {
  const mount = document.querySelector("#featured-vehicles");
  if (!mount) return;
  renderVehicles(VEHICLES.slice(0, 6), "#featured-vehicles");
}

function initInventoryPage() {
  const mount = document.querySelector("#inventory-grid");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("cat") || "all";
  let query = "";

  const chips = document.querySelectorAll(".filter-chip");
  const searchInput = document.querySelector("#inventory-search");

  function apply() {
    chips.forEach((c) => c.classList.toggle("active", c.dataset.category === activeCategory));
    const filtered = VEHICLES.filter((v) => {
      const matchCat = activeCategory === "all" || v.category === activeCategory;
      const matchQuery = !query || v.title.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
    renderVehicles(filtered, "#inventory-grid");
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      apply();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      apply();
    });
  }

  apply();
}

function initNavToggle() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const msg = el.getAttribute("data-whatsapp");
    el.setAttribute("href", whatsappLink(msg || ""));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const success = document.querySelector("#form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const interest = data.get("interest") || "General enquiry";
    const message = data.get("message") || "";

    const subject = `Website enquiry — ${interest}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`;
    const mailto = `mailto:peshawar2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    if (success) success.classList.add("show");
    form.reset();
  });
}

function setActiveNav() {
  const page = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });
}

function initRevealAnimations() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = el.getAttribute("data-count").includes(".") ? 1 : 0;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  // The stat bar sits right below the hero, effectively always on-screen at
  // load, so animate immediately rather than gating on IntersectionObserver.
  counters.forEach(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initWhatsappLinks();
  initHomeFeatured();
  initInventoryPage();
  initContactForm();
  setActiveNav();
  initRevealAnimations();
  initCounters();

  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
