import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  const response = NextResponse.next();

  // If the host is a Vercel deployment URL, set the X-Robots-Tag to block indexing
  if (host.includes('vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  } else {
      // By default, allow indexing on the production custom domain
      response.headers.set('X-Robots-Tag', 'all');
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};