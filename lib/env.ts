import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),
  
  // Authentication
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  
  // API Keys
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  
  // Optional environment variables
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
});

export const env = envSchema.parse(process.env);

// Type for environment variables
export type Env = z.infer<typeof envSchema>;

// Validate environment variables on startup
export function validateEnv() {
  try {
    envSchema.parse(process.env);
    return true;
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    return false;
  }
} 