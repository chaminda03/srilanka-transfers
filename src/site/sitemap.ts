import { MetadataRoute } from "next";
import { getAllPages } from "@/lib/site";
import { siteConfig } from "@/site/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;
  const pages = getAllPages();

  return pages.map((page) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "monthly";

    switch (page.type) {
      case "home":
        priority = 1.0;
        changeFrequency = "daily";
        break;
      case "hub":
      case "service":
      case "route": // High-value SEO routes
        priority = 0.9;
        changeFrequency = "weekly";
        break;
      default:
        priority = 0.8;
        changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}