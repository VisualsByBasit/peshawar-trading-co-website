import Link from "next/link";
import InventoryClient from "@/components/InventoryClient";

export const metadata = {
  title: "Showroom",
  description: "Browse used Japanese cars ready for export: Toyota Land Cruiser Prado, Prius, Yaris Hybrid and Sienta Hybrid, with full photos and auction sheets.",
  alternates: { canonical: "/inventory" },
};

export default function InventoryPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Home</Link> / Showroom</p>
          <h1>The Showroom</h1>
          <p>Every car below is in Japan and ready to export. Open any listing for the full photo set, specifications and inspection sheet.</p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <InventoryClient />
        </div>
      </section>
    </>
  );
}
