import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	// Better-Auth tables
	users: defineTable({
		name: v.string(),
		email: v.string(),
		emailVerified: v.boolean(),
		image: v.optional(v.string()),
		createdAt: v.number(),
		updatedAt: v.number(),
	}).index("by_email", ["email"]),

	sessions: defineTable({
		userId: v.id("users"),
		token: v.string(),
		expiresAt: v.number(),
		ipAddress: v.optional(v.string()),
		userAgent: v.optional(v.string()),
		createdAt: v.number(),
		updatedAt: v.number(),
	})
		.index("by_token", ["token"])
		.index("by_userId", ["userId"]),

	accounts: defineTable({
		userId: v.id("users"),
		accountId: v.string(),
		providerId: v.string(),
		accessToken: v.optional(v.string()),
		refreshToken: v.optional(v.string()),
		accessTokenExpiresAt: v.optional(v.number()),
		refreshTokenExpiresAt: v.optional(v.number()),
		scope: v.optional(v.string()),
		idToken: v.optional(v.string()),
		password: v.optional(v.string()),
		createdAt: v.number(),
		updatedAt: v.number(),
	})
		.index("by_userId", ["userId"])
		.index("by_providerId_accountId", ["providerId", "accountId"]),

	verifications: defineTable({
		identifier: v.string(),
		value: v.string(),
		expiresAt: v.number(),
		createdAt: v.optional(v.number()),
		updatedAt: v.optional(v.number()),
	}).index("by_identifier", ["identifier"]),

	// Example table
	tasks: defineTable({
		text: v.string(),
		isCompleted: v.boolean(),
		userId: v.optional(v.id("users")),
		createdAt: v.number(),
	}),

	// Contact form submissions
	contactSubmissions: defineTable({
		firstName: v.string(),
		lastName: v.string(),
		email: v.string(),
		phone: v.string(),
		message: v.string(),
		createdAt: v.number(),
	}).index("by_email", ["email"]),

	// Flux CTO observability waitlist
	fluxWaitlist: defineTable({
		email: v.string(),
		source: v.optional(v.string()), // e.g., "cto-observability", "landing-page"
		createdAt: v.number(),
	}).index("by_email", ["email"]),
});
