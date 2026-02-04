import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexReactClient } from "convex/react";
import { routeTree } from "./routeTree.gen";

export async function getRouter() {
	const convexUrl = import.meta.env.VITE_CONVEX_URL;
	if (!convexUrl) {
		throw new Error("VITE_CONVEX_URL environment variable is required");
	}

	const convex = new ConvexReactClient(convexUrl);
	const convexQueryClient = new ConvexQueryClient(convex);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				queryKeyHashFn: convexQueryClient.hashFn(),
				queryFn: convexQueryClient.queryFn(),
			},
		},
	});
	convexQueryClient.connect(queryClient);

	return createTanStackRouter({
		routeTree,
		context: { queryClient, convex },
		defaultPreload: "intent",
		scrollRestoration: true,
	});
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
