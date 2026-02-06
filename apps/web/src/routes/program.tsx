import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/program")({
	beforeLoad: () => {
		throw redirect({ to: "/residence" });
	},
});
