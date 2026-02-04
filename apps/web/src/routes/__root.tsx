import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
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
			{ title: "Nairon" },
		],
	}),
});

function RootComponent() {
	const { convex } = Route.useRouteContext();

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen bg-background font-sans antialiased">
				<ConvexProvider client={convex}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<SidebarProvider>
							<AppSidebar />
							<SidebarInset>
								<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
									<SidebarTrigger className="-ml-1" />
								</header>
								<main className="flex-1">
									<Outlet />
								</main>
							</SidebarInset>
						</SidebarProvider>
						<Toaster />
					</ThemeProvider>
				</ConvexProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
