import { MetadataRoute } from &apos;next&apos;

// 1. Define your base URL
const baseUrl = &apos;https://www.srilankaairporttransfer.com&apos;

// 2. This function should represent ALL your dynamic routes 
// (In a real app, you&apos;d fetch these from your &apos;getDestinations&apos; data file or DB)
async function getDynamicRoutes() {
  // This is a placeholder for your 40+ destinations like &apos;colombo-to-mirissa&apos;
  // Make sure this list matches the 51 pages in your build logs
  return [
    { slug: &apos;colombo-airport-to-kandy&apos;, img: &apos;kandy.jpg&apos; },
    { slug: &apos;airport-to-galle-fort&apos;, img: &apos;galle.jpg&apos; },
    { slug: &apos;colombo-to-ella-chauffeur&apos;, img: &apos;ella.jpg&apos; },
    { slug: &apos;colombo-to-mirissa&apos;, img: &apos;mirissa.jpg&apos; },
    // ... add all other 40+ slugs here or fetch them dynamically
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicRoutes = await getDynamicRoutes();

  // Mapping dynamic routes to the sitemap format
  const transferPages = dynamicRoutes.map((route) => ({
    url: `${baseUrl}/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: &apos;weekly&apos; as const,
    priority: 0.8,
    images: [`${baseUrl}/images/${route.img}`],
  }));

  // Combine with your static pages (Home, Fleet, Contact, etc.)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: &apos;daily&apos;,
      priority: 1,
    },
    {
      url: `${baseUrl}/fleet`,
      lastModified: new Date(),
      changeFrequency: &apos;monthly&apos;,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: &apos;monthly&apos;,
      priority: 0.7,
    },
    ...transferPages, // This spreads all your 40+ dynamic pages into the XML
  ];
}