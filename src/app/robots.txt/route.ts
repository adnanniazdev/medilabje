import { MetadataRoute } from 'next'

export function GET(): Response {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://medilab.je'
  
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
