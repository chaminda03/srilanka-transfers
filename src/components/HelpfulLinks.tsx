import Link from "next/link";
import type { PageSpec } from "@/site/spec";
import { getLinkedPages } from "@/lib/site";

export function HelpfulLinks({ page }: { page: PageSpec }) {
  const linked = getLinkedPages(page);
  if (!linked.length) return null;

  return (
    <section className="mt-10 border-t pt-6">
      <h2 className="text-base font-semibold">Helpful links</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {linked.map((p) => (
          <li key={p.id}>
            <Link className="text-sm text-muted-foreground hover:text-foreground" href={p.path}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
