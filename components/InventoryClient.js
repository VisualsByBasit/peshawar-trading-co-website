"use client";

import { useMemo, useState } from "react";
import VehicleCard from "@/components/VehicleCard";
import { SearchIcon } from "@/components/Icons";
import { VEHICLES, VEHICLE_TYPES } from "@/lib/vehicles";
import { whatsappLink } from "@/lib/site";

const SORTS = {
  newest: ["Newest first", (a, b) => b.year - a.year],
  lowkm: ["Lowest mileage", (a, b) => (a.mileageKm ?? Infinity) - (b.mileageKm ?? Infinity)],
  name: ["Name A–Z", (a, b) => a.title.localeCompare(b.title)],
};

export default function InventoryClient() {
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VEHICLES.filter(
      (v) => (type === "All" || v.type === type) && (!q || `${v.title} ${v.fuel} ${v.color} ${v.year}`.toLowerCase().includes(q))
    ).sort(SORTS[sort][1]);
  }, [type, query, sort]);

  return (
    <>
      <div className="filters">
        <div className="chips" role="group" aria-label="Filter by body type">
          {VEHICLE_TYPES.map((t) => (
            <button key={t} type="button" className={`chip${type === t ? " is-active" : ""}`} onClick={() => setType(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="filters__right">
          <label className="search">
            <SearchIcon width={17} height={17} />
            <input type="search" placeholder="Search make, model, colour…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search cars" />
          </label>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort cars">
            {Object.entries(SORTS).map(([k, [label]]) => (
              <option key={k} value={k}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="results-count">
        {list.length} {list.length === 1 ? "car" : "cars"} available
      </p>

      {list.length ? (
        <div className="grid grid--cars">
          {list.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <SearchIcon width={44} height={44} />
          <p>No cars match that search. Tell us what you want and we&apos;ll source it from the Japanese auctions.</p>
          <a className="btn btn--gold" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I'm looking for a specific car. Can you source it?")}>
            Request a car
          </a>
        </div>
      )}
    </>
  );
}
