import { MetadataRoute } from 'next'

const baseUrl = 'https://www.srilankaairporttransfer.com'

// Mocking your data source - In production, fetch this from your DB/CMS
function getDestinations() {
  return [
    { slug: 'colombo-airport-to-kandy', image: '/images/kandy-transfer.jpg' },
    { slug: 'airport-to-galle-fort', image: '/images/galle-transfer.jpg' },
    { slug: 'colombo-to-ella-chauffeur', image: '/images/ella-transfer.jpg' },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const destinations = getDestinations();

  // 1. Core Service Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // High priority because this is the conversion goal
    }
  ];

  // 2. High-Value Route Pages (The "Money" Pages)
  const routePages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${baseUrl}/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    // Technical SEO Secret: Images in sitemaps help AI "visualize" your service
    images: [dest.image], 
  }));

  return [...corePages, ...routePages];
}