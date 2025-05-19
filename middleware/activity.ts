import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Logger } from "@/lib/logger";

// List of paths that should be tracked
const TRACKED_PATHS = [
  "/api/stories",
  "/api/profile",
  "/api/admin",
  "/dashboard",
  "/admin",
];

// List of paths that should be ignored
const IGNORED_PATHS = [
  "/_next",
  "/static",
  "/favicon.ico",
  "/api/auth",
];

export async function activityMiddleware(
  request: NextRequest,
  response: NextResponse
) {
  try {
    const pathname = request.nextUrl.pathname;

    // Check if the path should be tracked
    if (
      !TRACKED_PATHS.some((path) => pathname.startsWith(path)) ||
      IGNORED_PATHS.some((path) => pathname.startsWith(path))
    ) {
      return response;
    }

    const token = await getToken({ req: request });
    if (!token?.sub) {
      return response;
    }

    // Get request details
    const method = request.method;
    const ipAddress = request.ip || request.headers.get("x-forwarded-for");
    const userAgent = request.headers.get("user-agent");

    // Log the activity
    await Logger.logUserActivity(
      token.sub,
      `${method} ${pathname}`,
      {
        method,
        pathname,
        query: Object.fromEntries(request.nextUrl.searchParams),
      },
      ipAddress || undefined,
      userAgent || undefined
    );

    return response;
  } catch (error) {
    console.error("[ACTIVITY_MIDDLEWARE]", error);
    return response;
  }
} 