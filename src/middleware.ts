import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NOINDEX_PATTERNS = [
  /^\/api\//,
  /^\/admin\//,
  /^\/dashboard\//,
  /^\/checkout\//,
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol;

  // Force HTTPS for non-localhost
  if (!hostname.includes('localhost') && protocol !== 'https' && protocol !== 'https:') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  // Trailing slash normalization (strip trailing slash except root /)
  const url = request.nextUrl.clone();
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (hostname.includes('.vercel.app') || hostname.includes('.netlify.app') || NOINDEX_PATTERNS.some(p => p.test(pathname))) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
