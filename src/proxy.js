import { NextResponse } from 'next/server';

// CHANGED: Function name must be 'proxy' in Next.js 16+
export default function proxy(request) {
  // 1. Retrieve the "auth" cookie
  const authCookie = request.cookies.get('auth');
  
  // 2. Define the protected path
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/admin');

  // 3. Logic: If accessing Admin without cookie, redirect
  if (isProtectedRoute && !authCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Otherwise, continue
  return NextResponse.next();
}

// 5. Configuration remains the same
export const config = {
  matcher: '/admin/:path*',
};