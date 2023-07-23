import type { z } from "zod";
import type { schemaEnv, schemaEnvPrivate } from "~/schemas";

/**
 * Public functionality that will expose all selected variables within global ENV
 * The values are only used for client-side env
 * Never expose the REMIX_SESSION_SECRET or any server/node/non-browser env
 */

export function getEnv(): z.infer<typeof schemaEnv> {
  return {
    NODE_ENV: process.env.NODE_ENV || "development", // development | test | production
    APP_ENV: process.env.APP_ENV || "unknown", // local | development | test | staging | production
    VERCEL: Boolean(process.env.VERCEL) || false,
  };
}

export function getEnvPrivate(): z.infer<typeof schemaEnvPrivate> {
  return {
    REMIX_SESSION_SECRET: getEnvServer("REMIX_SESSION_SECRET"),
    REMIX_APP_NAME: getEnvServer("REMIX_APP_NAME"),
  };
}

/**
 * Only use for server-side env
 */

export function getEnvServer(key: string) {
  return getEnvRequired(process.env, key);
}

export function getEnvRequired(
  obj: Record<string, string | undefined>,
  key: string
) {
  const envVal = obj[key];

  if (!envVal) {
    throw new Error(`${key} is a required env variable`);
  }

  return envVal;
}
