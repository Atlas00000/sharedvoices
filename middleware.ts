import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { activityMiddleware } from "./middleware/activity";

export default withAuth(
  async function middleware(req) {
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

    // Create the response
    const response = NextResponse.next();

    // Track user activity
    await activityMiddleware(req, response);

    return response;
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
    "/api/admin/:path*",
    "/api/stories/:path*",
    "/api/profile/:path*",
  ],
}; 