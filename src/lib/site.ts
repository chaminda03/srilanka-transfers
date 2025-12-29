import { pages, type PageSpec } from "@/site/spec";

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
 * Finds a page by its ID. Throws error if not found to catch data typos.
 */
export function getPageById(id: string): PageSpec {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`Page not found: ${id}`);
  return page;
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