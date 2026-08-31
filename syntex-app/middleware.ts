import { NextResponse } from 'next/server'
import { i18n } from 'next-intl'

export function middleware(request) {
  // `request.nextUrl.locale` is automatically available
  const path = request.nextUrl.pathname

  // Determine the locale from the URL or default
  const locale = request.nextUrl.locale || 'en'

  // Optional: redirect to default locale if no locale is set
  if (path === '/' && locale === 'en') {
    // Example redirect, not mandatory
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // Otherwise, just continue
  return NextResponse.next()
}

// Apply the middleware to all paths, optionally ignoring files
export const config = {
  matcher: [
    // Apply to all paths except static files, images, and API routes
    '/((?!api|/_next/static|_next/image|favicon.ico).*)',
  ],
}