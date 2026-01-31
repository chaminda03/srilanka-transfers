import { MetadataRoute } from "next";
import { siteConfig } from "@/site/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/thank-you/", // Never index the thank you page (it messes up analytics goals)
        "/api/",
        "/admin/",
        "/private/",
      ],
    },
    sitemap: `https://${siteConfig.domain}/sitemap.xml`,
  };
}