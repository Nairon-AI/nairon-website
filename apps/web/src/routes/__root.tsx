import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export interface RouterContext {
	queryClient: QueryClient;
	convex: ConvexReactClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Nairon AI — AI Bootcamp for the 1% Engineer" },
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
			},
		],
	}),
});

function RootComponent() {
	const { convex } = Route.useRouteContext();

	return (
		<html lang="en" suppressHydrationWarning className="dark">
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen bg-background font-sans antialiased">
				<ConvexProvider client={convex}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem={false}
						disableTransitionOnChange
					>
						<main>
							<Outlet />
						</main>
						<Toaster />
					</ThemeProvider>
				</ConvexProvider>
				<Scripts />
			</body>
		</html>
	);
}
