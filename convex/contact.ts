import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

// Store contact submission in database (internal only)
export const storeSubmission = internalMutation({
	args: {
		firstName: v.string(),
		lastName: v.string(),
		email: v.string(),
		phone: v.string(),
		message: v.string(),
	},
	handler: async (ctx, args) => {
		const submissionId = await ctx.db.insert("contactSubmissions", {
			...args,
			createdAt: Date.now(),
		});
		return submissionId;
	},
});

// Send Slack notification and store submission
export const submitContactForm = action({
	args: {
		firstName: v.string(),
		lastName: v.string(),
		email: v.string(),
		phone: v.string(),
		message: v.string(),
	},
	handler: async (ctx, args) => {
		const { firstName, lastName, email, phone, message } = args;

		// Store in database
		await ctx.runMutation(internal.contact.storeSubmission, args);

		// Send Slack notification
		const webhookUrl =
			(globalThis as { process?: { env?: Record<string, string | undefined> } }).process
				?.env?.SLACK_WEBHOOK_URL;

		if (!webhookUrl) {
			console.warn("SLACK_WEBHOOK_URL not configured");
			return { success: true, slackNotified: false };
		}

		const slackMessage = {
			blocks: [
				{
					type: "header",
					text: {
						type: "plain_text",
						text: "📬 New Contact Form Submission",
						emoji: true,
					},
				},
				{
					type: "section",
					fields: [
						{
							type: "mrkdwn",
							text: `*Name:*\n${firstName} ${lastName}`,
						},
						{
							type: "mrkdwn",
							text: `*Email:*\n${email}`,
						},
						{
							type: "mrkdwn",
							text: `*Phone:*\n${phone || "Not provided"}`,
						},
					],
				},
				{
					type: "section",
					text: {
						type: "mrkdwn",
						text: `*Message:*\n${message}`,
					},
				},
				{
					type: "context",
					elements: [
						{
							type: "mrkdwn",
							text: `Submitted at ${new Date().toISOString()}`,
						},
					],
				},
			],
		};

		try {
			const response = await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(slackMessage),
			});

			if (!response.ok) {
				console.error("Slack webhook failed:", response.status);
				return { success: true, slackNotified: false };
			}

			return { success: true, slackNotified: true };
		} catch (error) {
			console.error("Slack webhook error:", error);
			return { success: true, slackNotified: false };
		}
	},
});
