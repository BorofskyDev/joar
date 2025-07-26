// middleware.ts  (Edge Runtime – keep it tiny)
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // Protect ONLY /admin*
  if (!req.nextUrl.pathname.startsWith('/admin')) return NextResponse.next()

  const token = req.cookies.get('token')?.value

  // Edge Runtime can’t verify; just check presence.
  if (!token) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // Token exists – let the request continue
  return NextResponse.next()
}

// Apply to /admin and its sub-routes
export const config = { matcher: ['/admin/:path*'] }
