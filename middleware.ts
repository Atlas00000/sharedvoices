import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { activityMiddleware } from "./middleware/activity";
import { UserRole } from "@/types/auth";
import { hasRequiredRole } from "@/lib/auth";

// Define public routes that don't require authentication
const publicRoutes = ["/", "/login", "/register", "/api/auth"];

export async function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    
    // Allow access to public routes
    if (publicRoutes.some(route => path.startsWith(route))) {
      return NextResponse.next();
    }

    // Get the token
    const token = await getToken({ 
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const userRole = token.role as string;
    
    console.log("Middleware - Request URL:", path);
    console.log("Middleware - User Role:", userRole);

    // Handle admin routes
    if (path.startsWith("/admin")) {
      if (userRole !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return NextResponse.next();
    }

    // Handle moderator routes
    if (path.startsWith("/moderator")) {
      if (userRole !== "MODERATOR" && userRole !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return NextResponse.next();
    }

    // Handle dashboard routes
    if (path.startsWith("/dashboard")) {
      return NextResponse.next();
    }

    // Create the response
    const response = NextResponse.next();

    // Track user activity
    await activityMiddleware(request, response);

    return response;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Protect these routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/moderator/:path*",
    "/api/admin/:path*",
    "/api/moderator/:path*",
    "/api/stories/:path*",
    "/api/profile/:path*",
  ],
}; 