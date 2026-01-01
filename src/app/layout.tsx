import type { Metadata } from "next";
import { ClientLayout } from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Lanka Transfers",
  description: "Private airport transfers and driver hire in Sri Lanka.",
  icons: {
    icon: "/images/sri-lanka-private-airport-transfer-driver-logo.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white m-0 p-0 w-full overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}