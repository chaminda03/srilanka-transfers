import { MetadataRoute } from "next";
import { siteConfig } from "@/site/config";
import { glob } from "glob";

const baseUrl = `https://${siteConfig.domain}`;

// 🛑 SEO EXCLUSION LIST: Never include these in the Sitemap
const EXCLUDED_ROUTES = [
  "/thank-you",
  "/api",
  "/admin",
  "/components",
  "/favicon.ico",
  "/icon.png",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Find all physical pages
  const pages = await glob("src/app/**/page.tsx", {
    cwd: process.cwd(),
  });

  const entries = pages
    .map((filePath) => {
      // Clean up the path
      let path = filePath
        .replace(/^src\/app/, "")
        .replace(/\/page.tsx$/, "")
        .replace(/\/\([^)]+\)/g, ""); // Remove (groups)

      // Handle Homepage
      if (path === "") {
        return {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 1.0, // HOME IS KING
        };
      }

      // 🛑 SKIP DYNAMIC ROUTES (We can't guess [slug] URLs automatically)
      if (path.includes("[")) return null;

      // 🛑 SKIP EXCLUDED ROUTES (Thank you pages, etc.)
      if (EXCLUDED_ROUTES.some((exclude) => path.startsWith(exclude))) {
        return null;
      }

      // 🎯 SEO PRIORITY LOGIC
      let priority = 0.7;
      
      // ✅ FIXED: Explicitly allow these 3 specific strings
      let changeFreq: "weekly" | "monthly" | "yearly" = "monthly"; 

      // MONEY PAGES: Itineraries & Tours (High Priority)
      if (
        path.includes("/private-driver-sri-lanka") ||
        path.includes("/tours") ||
        path.includes("/airport-transfer")
      ) {
        priority = 0.9;
        changeFreq = "weekly";
      }
      
      // SEO LANDING PAGES: Taxi Routes (High Priority)
      else if (path.includes("taxi")) {
        priority = 0.8; 
        changeFreq = "weekly";
      }

      // BLOG/GUIDES: Good for traffic (Medium Priority)
      else if (path.includes("/travel-guide")) {
        priority = 0.8;
        changeFreq = "monthly"; 
      }

      // LEGAL/UTILITY: Terms, Privacy (Low Priority)
      else if (path.includes("privacy") || path.includes("terms")) {
        priority = 0.3;
        changeFreq = "yearly";
      }

      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: priority,
      };
    })
    .filter(Boolean); // Remove null entries

  return entries as MetadataRoute.Sitemap;
}