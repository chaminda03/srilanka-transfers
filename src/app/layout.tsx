import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/site/config";
import { absoluteUrl } from "@/lib/site";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

/**
 * This file is a SERVER component on purpose.
 *
 * It used to be "use client" (for the mobile menu state), which meant Next.js
 * would not accept a `metadata` export here at all — so the site shipped with
 * no metadataBase (build warned, OG image URLs resolved to localhost:3000),
 * no title template, and no default share image on 18 of 20 pages.
 * The interactive parts now live in <SiteNav />.
 */

export const metadata: Metadata = {
  // Resolves every relative OG/Twitter image against the canonical www host.
  metadataBase: new URL(absoluteUrl("/")),

  title: {
    default: siteConfig.defaultSeo.title,
    // Pages set a bare title; this appends the brand automatically.
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.defaultSeo.description,
  applicationName: siteConfig.brand,

  alternates: {
    canonical: absoluteUrl("/"),
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.brand,
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: siteConfig.defaultOgImageWidth,
        height: siteConfig.defaultOgImageHeight,
        alt: siteConfig.brand,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    images: [siteConfig.defaultOgImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to emit the
  // <meta name="google-site-verification"> tag for Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617", // slate-950, matches the fixed header
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.lang}>
      <body className="antialiased bg-white m-0 p-0 w-full overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
        >
          Skip to content
        </a>

        <SiteNav />

        {/* NOTE: <div>, not <main>. Page components render their own <main>,
            and two <main> elements per page is invalid HTML that breaks
            screen-reader landmark navigation. */}
        <div id="main-content" className="relative w-full m-0 p-0 pt-20">
          {children}
        </div>

        <SiteFooter />

        <Analytics />
      </body>
    </html>
  );
}
