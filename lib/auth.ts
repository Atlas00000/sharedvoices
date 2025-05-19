import { UserRole } from "@/types/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  MODERATOR: "MODERATOR",
} as const;

export const ROLE_HIERARCHY = {
  [ROLES.USER]: 0,
  [ROLES.MODERATOR]: 1,
  [ROLES.ADMIN]: 2,
} as const;

export function hasRequiredRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function requireRole(requiredRole: UserRole) {
  const user = await getCurrentUser();
  
  if (!user) {
    throw new Error("Authentication required");
  }

  if (!hasRequiredRole(user.role as UserRole, requiredRole)) {
    throw new Error("Insufficient permissions");
  }

  return user;
}

export function isAdmin(userRole: UserRole): boolean {
  return userRole === ROLES.ADMIN;
}

export function isModerator(userRole: UserRole): boolean {
  return userRole === ROLES.MODERATOR || userRole === ROLES.ADMIN;
} 