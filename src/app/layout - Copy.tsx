import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import { siteConfig } from "@/site/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Sitewide default metadata
 * Page-level metadata will override this automatically
 */
export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />

        {/* Header */}
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="font-semibold">
              {siteConfig.brand}
            </div>

            <nav className="hidden sm:flex gap-6 text-sm text-muted-foreground">
              <Link
                href="/colombo-airport-transfer/"
                className="hover:text-foreground"
              >
                Airport Transfer
              </Link>

              <Link
                href="/private-driver-sri-lanka/"
                className="hover:text-foreground"
              >
                Private Driver &amp; Tours
              </Link>

              <Link
                href="/prices/"
                className="hover:text-foreground"
              >
                Prices
              </Link>

              <Link
                href="/contact/"
                className="hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
