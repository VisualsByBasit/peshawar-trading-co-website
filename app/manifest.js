import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.nameShort,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101d33",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
