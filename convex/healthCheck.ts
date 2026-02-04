import { httpAction } from "./_generated/server";

export const healthCheck = httpAction(async () => {
	return new Response(
		JSON.stringify({ status: "ok", timestamp: Date.now() }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		},
	);
});
