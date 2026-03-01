import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Switch this to 'true' to put the entire site into Maintenance Mode
const IS_MAINTENANCE_MODE = true;

export function middleware(request: NextRequest) {
    // If we are in maintenance mode and not already on the maintenance page
    if (IS_MAINTENANCE_MODE && request.nextUrl.pathname !== '/mantenimiento') {
        // Only redirect standard pages, not static files or API routes
        if (
            !request.nextUrl.pathname.startsWith('/_next') &&
            !request.nextUrl.pathname.startsWith('/api') &&
            !request.nextUrl.pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/)
        ) {
            const url = request.nextUrl.clone()
            url.pathname = '/mantenimiento'
            return NextResponse.redirect(url)
        }
    }

    // If we are NOT in maintenance mode but someone tries to visit the maintenance page directly
    if (!IS_MAINTENANCE_MODE && request.nextUrl.pathname === '/mantenimiento') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
