import { NextResponse } from 'next/server';

export default function middleware(request) {
  // 1. Retrieve the "auth" cookie
  const authCookie = request.cookies.get('auth');
  
  // 2. Define the protected path (checking if URL starts with /admin)
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/admin');

  // 3. Logic: If trying to access Admin BUT no cookie found...
  if (isProtectedRoute && !authCookie) {
    // ...Kick them back to Login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Otherwise, let them pass
  return NextResponse.next();
}

// 5. Configuration: Apply this rule only to specific paths
export const config = {
  matcher: '/admin/:path*',
};