import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['espanol', 'nahuatl', 'maya', 'tzotzil']

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname

    // Exclude static files, API routes, and standard Next.js paths
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') ||
        pathname === '/icon.svg' ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt' ||
        pathname === '/sitemap.xml'
    ) {
        return NextResponse.next()
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // If the pathname already contains a valid locale, proceed
    if (pathnameHasLocale) return NextResponse.next()

    // Otherwise, redirect purely to the `espanol` locale by default
    request.nextUrl.pathname = `/espanol${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Matches all paths except the ones starting with API or Next.js internals
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
