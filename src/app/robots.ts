import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://chispito.mx'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/mi-cuenta/', '/api/'],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
