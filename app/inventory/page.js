import { Suspense } from "react";
import SafeImage from "@/components/SafeImage";
import InventoryClient from "@/components/InventoryClient";
import { pexelsImg } from "@/lib/site";

export const metadata = {
  title: "Inventory",
  description: "Browse current stock of used Japanese cars, trucks, buses, construction machinery, generators and agricultural tractors from Peshawar Trading Co., Ltd.",
  alternates: { canonical: "/inventory" },
};

export default function InventoryPage() {
  return (
    <>
      <section className="page-banner page-banner--photo">
        <div className="page-banner__bg">
          <SafeImage src={pexelsImg(9115461, 1600)} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="container">
          <span className="eyebrow">Our Stock</span>
          <h1>Vehicle &amp; Machinery Inventory</h1>
          <p className="breadcrumb"><a href="/">Home</a> / Inventory</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Suspense fallback={null}>
            <InventoryClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
