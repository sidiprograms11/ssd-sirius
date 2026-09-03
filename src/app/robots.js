import { SITE } from "@/data/site";

export default function robots() {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
