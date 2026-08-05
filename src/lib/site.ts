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