import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.role === "ADMIN";
    console.log("Request URL:", req.nextUrl.pathname);
    console.log("Token:", token);
    console.log("Is Admin:", isAdmin);

    // Redirect non-admin users trying to access admin routes
    if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
      console.log("Redirecting non-admin user to homepage");
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Ensure admin users can access the admin page
    if (req.nextUrl.pathname.startsWith("/admin") && isAdmin) {
      console.log("Admin user accessing admin page");
      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Protect these routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/profile/:path*",
  ],
}; 