import type { BetterAuthOptions } from "better-auth";

const convexUrl = process.env.VITE_CONVEX_URL;
const siteUrl =
	process.env.VITE_CONVEX_SITE_URL || "http://localhost:3001";

/**
 * Shared Better-Auth configuration.
 * The actual auth instance is created inside Convex actions via
 * `@convex-dev/better-auth`'s `createClient()` component pattern.
 *
 * This config is used by both the Convex backend and the web client
 * to keep settings in sync.
 */
export const authConfig = {
	basePath: "/api/auth",
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
	},
	trustedOrigins: [siteUrl, "http://localhost:*"],
} satisfies Partial<BetterAuthOptions>;

export type AuthConfig = typeof authConfig;
