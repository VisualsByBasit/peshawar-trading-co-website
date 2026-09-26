import { SITE } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = ["", "/inventory", "/about", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicleRoutes = VEHICLES.map((v) => ({
    url: `${SITE.url}/inventory/${v.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
