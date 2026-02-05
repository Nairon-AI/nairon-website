import { createServerFn } from "@tanstack/react-start";

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}

export const submitContactForm = createServerFn({ method: "POST" })
	.inputValidator((data: ContactFormData) => data)
	.handler(async ({ data }) => {
		const { firstName, lastName, email, phone, message } = data;

		// Validate required fields
		if (!firstName || !lastName || !email || !message) {
			throw new Error("Missing required fields");
		}

		// Send Slack notification
		const webhookUrl = process.env.SLACK_WEBHOOK_URL;

		if (webhookUrl) {
			const slackMessage = {
				blocks: [
					{
						type: "header",
						text: {
							type: "plain_text",
							text: "New Contact Form Submission",
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
				}
			} catch (slackError) {
				console.error("Slack webhook error:", slackError);
			}
		} else {
			console.warn("SLACK_WEBHOOK_URL not configured");
		}

		return { success: true };
	});
