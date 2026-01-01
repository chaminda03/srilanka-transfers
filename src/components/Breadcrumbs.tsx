import Link from 'next/link';
import { PageSpec } from "@/site/spec";

// Added a default empty object check to prevent the 'undefined' error
export function Breadcrumbs({ page, className }: { page?: PageSpec; className?: string }) {
  if (!page) return null; // Safety check

  return (
    <nav className={`flex text-sm font-medium ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-white transition-colors opacity-80">Home</Link>
        </li>
        <li><span className="opacity-40">/</span></li>
        <li className="text-white font-bold truncate">
          {page.title}
        </li>
      </ol>
    </nav>
  );
}