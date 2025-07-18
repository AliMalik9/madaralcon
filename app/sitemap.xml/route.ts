// app/sitemap.xml/route.ts

export const dynamic = 'force-static'; // Optional: makes it cacheable

export async function GET() {
  const baseUrl = 'https://madaralcon.com'; // Change to your domain

  const pages = ['', 'about', 'services', 'faq', 'contact', 'error', '500'];

  const urls = pages.map(
    (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
