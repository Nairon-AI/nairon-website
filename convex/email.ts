import { Resend } from "@convex-dev/resend";
import { components } from "./_generated/api";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";

export const resend = new Resend(components.resend, {
	testMode: process.env.NODE_ENV !== "production",
});

export const sendWaitlistConfirmation = internalAction({
	args: {
		email: v.string(),
	},
	handler: async (ctx, { email }) => {
		const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0C0C0C; color: #E8E4DE; padding: 40px 20px; margin: 0;">
  <div style="max-width: 560px; margin: 0 auto;">
    <h1 style="font-size: 28px; font-weight: normal; margin-bottom: 24px;">
      You're on the <span style="color: #C9A96E; font-style: italic;">Flux</span> waitlist
    </h1>
    
    <p style="font-size: 16px; line-height: 1.6; color: #A39E96; margin-bottom: 24px;">
      Thanks for your interest in CTO-level observability for AI-native engineering teams.
    </p>
    
    <p style="font-size: 16px; line-height: 1.6; color: #A39E96; margin-bottom: 24px;">
      We're building dashboards that show which engineers are leveraging AI effectively, where friction clusters, and which workflows produce the highest quality output.
    </p>
    
    <p style="font-size: 16px; line-height: 1.6; color: #A39E96; margin-bottom: 32px;">
      We'll reach out when we're ready to onboard early users.
    </p>
    
    <div style="border-top: 1px solid #333; padding-top: 24px; margin-top: 32px;">
      <p style="font-size: 14px; color: #666; margin: 0;">
        — The Nairon team
      </p>
      <p style="font-size: 12px; color: #555; margin-top: 16px;">
        <a href="https://naironai.com/flux" style="color: #C9A96E; text-decoration: none;">naironai.com/flux</a>
      </p>
    </div>
  </div>
</body>
</html>
		`;

		await resend.sendEmail(
			ctx,
			"Flux by Nairon <flux@naironai.com>",
			email,
			"You're on the Flux waitlist!",
			emailHtml
		);
	},
});
