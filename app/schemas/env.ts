import { z } from "zod";

export const schemaEnv = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  APP_ENV: z.string().optional(),
  VERCEL: z.boolean().optional(),
});

export const schemaEnvPrivate = z.object({
  REMIX_SESSION_SECRET: z.string(),
  REMIX_APP_NAME: z.string(),
  CLOUD_NAME: z.string(),
  API_KEY: z.string(),
  API_SECRET: z.string(),
});
