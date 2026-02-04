import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexReactClient } from "convex/react";
import { routeTree } from "./routeTree.gen";

export async function getRouter() {
	const convexUrl = import.meta.env.VITE_CONVEX_URL;

	const queryClient = new QueryClient();
	let convex: ConvexReactClient;

	if (convexUrl) {
		convex = new ConvexReactClient(convexUrl);
		const convexQueryClient = new ConvexQueryClient(convex);
		queryClient.setDefaultOptions({
			queries: {
				queryKeyHashFn: convexQueryClient.hashFn(),
				queryFn: convexQueryClient.queryFn(),
			},
		});
		convexQueryClient.connect(queryClient);
	} else {
		// Use a placeholder client for routes that don't need Convex (e.g. landing page)
		convex = new ConvexReactClient("https://placeholder.convex.cloud");
	}

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
