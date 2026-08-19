import Link from "next/link";
import { PageSpec } from "@/site/spec";
import { getBreadcrumbTrail, toUrlPath } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/schema";

/**
 * Visible breadcrumb + BreadcrumbList JSON-LD, from one resolved trail.
 *
 * This used to render two fixed levels — Home / [full page title, pipe
 * character and all] — and emit no structured data, so a page like
 * /tours/wildlife-safari-yala-and-udawalawe never signalled that it sits
 * under the tours hub. Both problems came from the same place: the trail was
 * never actually derived. Now it is, once, and both outputs read from it.
 */
export function Breadcrumbs({
  page,
  className,
}: {
  page?: PageSpec;
  className?: string;
}) {
  if (!page) return null;

  const trail = getBreadcrumbTrail(page);

  // A lone "Home" crumb is not a hierarchy. Nothing to render on the homepage.
  if (trail.length < 2) return null;

  return (
    <nav className={`flex text-sm font-medium ${className}`} aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(trail)),
        }}
      />

      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;

          return (
            <li key={crumb.path} className="flex items-center gap-x-2">
              {isLast ? (
                // The current page is not a link — it's where you already are.
                <span className="font-bold" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={toUrlPath(crumb.path)}
                    className="opacity-80 transition-colors hover:opacity-100"
                  >
                    {crumb.name}
                  </Link>
                  <span className="opacity-40" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
