import { MetadataRoute } from 'next'

// 1. Define your base URL
const baseUrl = 'https://www.srilankaairporttransfer.com'

// 2. This function should represent ALL your dynamic routes 
// (In a real app, you'd fetch these from your 'getDestinations' data file or DB)
async function getDynamicRoutes() {
  // This is a placeholder for your 40+ destinations like 'colombo-to-mirissa'
  // Make sure this list matches the 51 pages in your build logs
  return [
    { slug: 'colombo-airport-to-kandy', img: 'kandy.jpg' },
    { slug: 'airport-to-galle-fort', img: 'galle.jpg' },
    { slug: 'colombo-to-ella-chauffeur', img: 'ella.jpg' },
    { slug: 'colombo-to-mirissa', img: 'mirissa.jpg' },
    // ... add all other 40+ slugs here or fetch them dynamically
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicRoutes = await getDynamicRoutes();

  // Mapping dynamic routes to the sitemap format
  const transferPages = dynamicRoutes.map((route) => ({
    url: `${baseUrl}/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    images: [`${baseUrl}/images/${route.img}`],
  }));

  // Combine with your static pages (Home, Fleet, Contact, etc.)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/fleet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...transferPages, // This spreads all your 40+ dynamic pages into the XML
  ];
}