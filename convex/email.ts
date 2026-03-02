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
    <h1 style="font-size: 28px; font-weight: normal; margin-bottom: 32px;">
      You're on the <span style="color: #C9A96E; font-style: italic;">Observability</span> waitlist
    </h1>
    
    <p style="font-size: 16px; line-height: 1.7; color: #A39E96; margin-bottom: 32px;">
      We're building CTO-level dashboards for AI-native engineering teams—see which engineers are leveraging AI effectively, where friction clusters, and which workflows produce the highest quality output.
    </p>
    
    <p style="font-size: 16px; line-height: 1.7; color: #A39E96; margin-bottom: 32px;">
      In the meantime, you can use <a href="https://github.com/Nairon-AI/flux" style="color: #C9A96E; text-decoration: none;">Flux</a> (our free Claude Code plugin) to start improving your AI workflow today.
    </p>
    
    <p style="font-size: 16px; line-height: 1.7; color: #A39E96; margin-bottom: 32px;">
      We'll reach out when we're ready to onboard early users.
    </p>
    
    <p style="font-size: 14px; color: #666; margin-top: 48px;">
      — The Nairon team
    </p>
  </div>
</body>
</html>
		`;

		await resend.sendEmail(
			ctx,
			"Nairon <hello@naironai.com>",
			email,
			"You're on the Observability waitlist",
			emailHtml
		);
	},
});
