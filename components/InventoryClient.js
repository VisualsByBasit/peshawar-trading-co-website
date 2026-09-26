"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import VehicleCard from "@/components/VehicleCard";
import { SearchIcon } from "@/components/Icons";
import { CATEGORY_LABELS, whatsappLink } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

const CHIPS = Object.keys(CATEGORY_LABELS);

export default function InventoryClient() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [category, setCategory] = useState(CHIPS.includes(initialCat) ? initialCat : "all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && CHIPS.includes(cat)) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VEHICLES.filter((v) => {
      const matchCat = category === "all" || v.category === category;
      const matchQuery = !q || v.title.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-chips">
          {CHIPS.map((key) => (
            <button
              key={key}
              type="button"
              className={`filter-chip${category === key ? " active" : ""}`}
              onClick={() => setCategory(key)}
            >
              {CATEGORY_LABELS[key]}
            </button>
          ))}
        </div>
        <div className="search-box">
          <SearchIcon width={16} height={16} />
          <input
            type="text"
            placeholder="Search by make or model..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {filtered.length ? (
        <div className="veh-grid">
          {filtered.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      ) : (
        <div className="results-empty">
          <SearchIcon width={48} height={48} />
          <p>No matching vehicles right now. Message us on WhatsApp &mdash; we likely have it in our full stock list.</p>
        </div>
      )}

      <div className="inventory-note">
        <p>Our stock changes frequently and not everything is listed online yet. Tell us what you&apos;re looking for and we&apos;ll check our full yard &amp; auction access for you.</p>
        <a className="btn btn--whatsapp" target="_blank" rel="noopener" href={whatsappLink("Hello Peshawar Trading Co., I couldn't find what I need on your website. Here's what I'm looking for:")}>
          Ask About a Vehicle
        </a>
      </div>
    </>
  );
}
