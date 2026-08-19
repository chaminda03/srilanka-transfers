import { pages, type PageSpec } from "@/site/spec";
import { siteConfig } from "@/site/config";

/**
 * Normalizes paths to ensure consistency (trailing slashes, etc.)
 */
export function normalizePath(input: string) {
  if (input === "/") return "/";
  let p = input.startsWith("/") ? input : `/${input}`;
  p = p.replace(/\/+$/, "");
  return `${p}/`;
}

/**
 * The path form actually SERVED in production.
 *
 * next.config has no `trailingSlash`, so Next serves `/prices` and 308-redirects
 * `/prices/` → `/prices`. spec.ts stores paths WITH a trailing slash (they're used
 * as lookup keys), so anything that becomes a real URL — canonical, og:url, sitemap
 * entry, href — must go through this first, or it points at a redirect.
 *
 *   "/prices/" -> "/prices"      "/" -> "/"
 */
export function toUrlPath(input: string) {
  if (!input || input === "/") return "/";
  const p = input.startsWith("/") ? input : `/${input}`;
  return p.replace(/\/+$/, "") || "/";
}

/**
 * Absolute, canonical-safe URL for a spec path.
 * Uses the www host from siteConfig and the served (no-trailing-slash) path form.
 */
export function absoluteUrl(path: string) {
  const base = `https://${siteConfig.domain}`;
  const p = toUrlPath(path);
  return p === "/" ? base : `${base}${p}`;
}

/**
 * Finds a page by its ID. Throws error if not found to catch data typos.
 */
export function getPageById(id: string): PageSpec {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`Page not found: ${id}`);
  return page;
}

/**
 * Retrieves multiple pages by their IDs.
 */
export function getPagesByIds(ids: string[]): PageSpec[] {
  return ids.map(id => getPageById(id));
}

/**
 * Safely retrieves all pages linked in a PageSpec's linksTo array.
 * Prevents site crashes if a linked ID is missing from spec.ts.
 */
export function getLinkedPages(page: PageSpec): PageSpec[] {
  return page.linksTo
    .map((id) => {
      try {
        return getPageById(id);
      } catch (e) {
        console.warn(`Link Warning: ID "${id}" referenced by "${page.id}" was not found in spec.ts`);
        return null;
      }
    })
    .filter((p): p is PageSpec => p !== null);
}

export function getPageByPath(path: string): PageSpec | undefined {
  const needle = normalizePath(path);
  return pages.find((p) => normalizePath(p.path) === needle);
}

export function getAllPages(): PageSpec[] {
  return pages;
}

/** "cultural-triangle-sigiriya-anuradhapura" -> "Cultural Triangle Sigiriya Anuradhapura" */
function deslugify(segment: string) {
  return segment
    .split("-")
    .map((w) => (w.length <= 2 ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export type Crumb = { name: string; path: string };

/**
 * Some URL segments are organisational rather than navigable — /tours/ has no
 * page of its own; the hub lives at /sri-lanka-tours. Map those so the trail
 * points somewhere real instead of at a 404.
 */
const SEGMENT_ALIASES: Record<string, Crumb> = {
  "/tours": { name: "Sri Lanka Tours", path: "/sri-lanka-tours" },
  "/airport-transfer": {
    name: "Airport Transfers",
    path: "/colombo-airport-transfer",
  },
};

/**
 * The real breadcrumb trail for a page, derived from its URL segments.
 *
 * /tours/wildlife-safari-yala-and-udawalawe
 *   -> Home / Sri Lanka Tours / Wildlife Safari Tours
 *
 * Intermediate levels are looked up in spec.ts so they get the page's own
 * short label; segments with no spec entry fall back to a de-slugified
 * version rather than being skipped, because a BreadcrumbList with a gap in
 * it describes a hierarchy that doesn't exist.
 *
 * `crumbLabel` on a PageSpec overrides the label — page titles are written
 * for the SERP ("Sri Lanka Wildlife Safari Tours | Yala & Udawalawe") and are
 * far too long to sit in a breadcrumb.
 */
export function getBreadcrumbTrail(page: PageSpec): Crumb[] {
  const trail: Crumb[] = [{ name: "Home", path: "/" }];

  const segments = toUrlPath(page.path).split("/").filter(Boolean);
  let acc = "";

  for (const segment of segments) {
    acc += `/${segment}`;

    const alias = SEGMENT_ALIASES[acc];
    if (alias) {
      trail.push(alias);
      continue;
    }

    const match = getPageByPath(acc);
    trail.push({
      name:
        match?.crumbLabel ??
        // Never let a raw title with a pipe into a breadcrumb.
        match?.title.split("|")[0].trim() ??
        deslugify(segment),
      path: acc,
    });
  }

  return trail;
}