import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // Protect your backend routes
          '/_next/',     // No need to crawl internal Next.js files
          '/thank-you',  // Prevent "Thank You" from appearing in search
        ],
      },
      {
        userAgent: 'GPTBot', // Specific rule for OpenAI's crawler
        allow: '/',
      }
    ],
    sitemap: 'https://www.srilankaairporttransfer.com/sitemap.xml',
  }
}