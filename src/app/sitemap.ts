import { MetadataRoute } from "next";
import { glob } from "glob";
import { getAllPages, toUrlPath, absoluteUrl } from "@/lib/site";

/**
 * WHY THIS IS NOT A FILESYSTEM GLOB ANYMORE
 *
 * The previous version globbed src/app/ ** /page.tsx and skipped any path
 * containing "[", which silently excluded every page served by the [...slug]
 * catch-all — including all six /airport-to-*-taxi/ money pages, our highest
 * commercial-intent content. They were live and internally linked but absent
 * from the sitemap.
 *
 * Now: spec.ts is the source of truth, unioned with physical routes (which
 * catches pages that exist as files but aren't in spec.ts, e.g. the itineraries).
 * Adding a page either way gets it indexed.
 */

// Never index these
const EXCLUDED = ["/thank-you", "/api", "/admin", "/private"];

function isExcluded(path: string) {
  return EXCLUDED.some((e) => path === e || path.startsWith(`${e}/`));
}

/** Commercial intent drives priority — transactional > informational. */
function priorityFor(path: string): number {
  if (path === "/") return 1.0;

  // Money pages: direct booking intent
  if (/^\/airport-to-[a-z-]+-taxi$/.test(path)) return 0.9;
  if (path.startsWith("/airport-transfer")) return 0.9;
  if (path === "/colombo-airport-transfer") return 0.9;
  if (path === "/prices" || path === "/contact") return 0.9;

  // Service + tour pages
  if (path.startsWith("/private-driver-sri-lanka")) return 0.8;
  if (path.startsWith("/tours") || path === "/sri-lanka-tours") return 0.8;
  if (path === "/fleet" || path === "/vehicle-options") return 0.7;

  // Informational
  if (path.startsWith("/travel-guide")) return 0.6;
  if (path.startsWith("/blog")) return 0.6;

  return 0.5;
}

function changeFrequencyFor(path: string): "weekly" | "monthly" | "yearly" {
  if (path === "/") return "weekly";
  if (path.startsWith("/travel-guide") || path.startsWith("/blog")) return "monthly";
  if (priorityFor(path) >= 0.8) return "weekly";
  return "monthly";
}

async function physicalRoutes(): Promise<string[]> {
  const files = await glob("src/app/**/page.tsx", { cwd: process.cwd() });

  return files
    .map((f) =>
      f
        .replace(/\\/g, "/")            // Windows separators
        .replace(/^src\/app/, "")
        .replace(/\/page\.tsx$/, "")
        .replace(/\/\([^)]+\)/g, "")    // strip (route groups)
    )
    .filter((p) => !p.includes("["))    // dynamic segments can't be listed literally
    .map((p) => (p === "" ? "/" : p));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const specPaths = getAllPages().map((p) => toUrlPath(p.path));
  const filePaths = (await physicalRoutes()).map(toUrlPath);

  const paths = Array.from(new Set([...specPaths, ...filePaths]))
    .filter((p) => !isExcluded(p))
    .sort((a, b) => priorityFor(b) - priorityFor(a) || a.localeCompare(b));

  return paths.map((path) => ({
    url: absoluteUrl(path),
    // NOTE: deliberately no `lastModified`. The old version stamped every URL
    // with `new Date()` on each build, telling Google the entire site changed
    // on every deploy. Google discounts lastmod it finds unreliable, so an
    // absent value beats a false one. Wire it to real content dates if added.
    changeFrequency: changeFrequencyFor(path),
    priority: priorityFor(path),
  }));
}
