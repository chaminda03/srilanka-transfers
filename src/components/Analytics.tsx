import Script from "next/script";

/**
 * GA4, loaded only when NEXT_PUBLIC_GA_ID is set.
 *
 * Set it in Vercel → Project → Settings → Environment Variables:
 *   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
 *
 * Absent the var this renders nothing, so local dev and preview deploys don't
 * pollute production analytics.
 *
 * `afterInteractive` keeps gtag off the critical path — it must not compete
 * with the LCP hero image for bandwidth.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
