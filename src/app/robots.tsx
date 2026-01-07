import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/', 
          '/_next/static/', // ✅ CRITICAL: Allows CSS and JS to load
          '/_next/image/',  // ✅ CRITICAL: Allows your optimized images to rank
        ],
        disallow: [
          '/api/',          // Protects your booking/lead endpoints
          '/_next/data/',   // ✅ Safe to block (internal data fetching)
          '/thank-you',     // Prevents conversion pages from appearing in search
          '/admin/',        // Protects potential admin areas
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      }
    ],
    sitemap: 'https://www.srilankaairporttransfer.com/sitemap.xml',
  }
}