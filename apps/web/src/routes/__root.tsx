import { lazy, Suspense, useEffect, useState } from "react";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
	useMatch,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewModeProvider } from "@/contexts/view-mode-context";
import { Toaster } from "sonner";
import { organizationJsonLd, websiteJsonLd, serviceJsonLd } from "@/lib/seo";
import "@/styles/globals.css";

// Lazy-load dashboard components so they're excluded from landing page bundles
const AppSidebar = lazy(() =>
	import("@/components/app-sidebar").then((m) => ({ default: m.AppSidebar })),
);
const SidebarProvider = lazy(() =>
	import("@/components/ui/sidebar").then((m) => ({
		default: m.SidebarProvider,
	})),
);
const SidebarInset = lazy(() =>
	import("@/components/ui/sidebar").then((m) => ({
		default: m.SidebarInset,
	})),
);
const SidebarTrigger = lazy(() =>
	import("@/components/ui/sidebar").then((m) => ({
		default: m.SidebarTrigger,
	})),
);
const SmoothScroll = lazy(() =>
	import("@/components/smooth-scroll").then((m) => ({
		default: m.SmoothScroll,
	})),
);

export interface RouterContext {
	queryClient: QueryClient;
	convex: ConvexReactClient;
}

const jsonLdOrg = JSON.stringify(organizationJsonLd());
const jsonLdSite = JSON.stringify(websiteJsonLd());
const jsonLdService = JSON.stringify(serviceJsonLd());

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Nairon AI — Data-Driven Technical Recruiting" },
			{
				name: "description",
				content:
					"Data-driven technical recruiting powered by AI-nativeness benchmarks. Find engineers who ship with Nairon AI.",
			},
			{ name: "theme-color", content: "#000000" },
		],
		links: [
			{ rel: "icon", href: "/nairon-logo.png", type: "image/png" },
			{ rel: "apple-touch-icon", href: "/nairon-logo.png" },
			{
				rel: "preload",
				href: "/fonts/inter-latin.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/urbanist-latin.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/instrument-serif-latin-regular.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/instrument-serif-latin-italic.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				as: "image",
				href: "/nairon-logo.png",
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: jsonLdOrg,
			},
			{
				type: "application/ld+json",
				children: jsonLdSite,
			},
			{
				type: "application/ld+json",
				children: jsonLdService,
			},
		],
	}),
});

function RootComponent() {
	const { convex } = Route.useRouteContext();
	const isHomePage = useMatch({ from: "/", shouldThrow: false });
	const isNBenchPage = useMatch({ from: "/nbench", shouldThrow: false });
	const isUniversePage = useMatch({ from: "/universe", shouldThrow: false });
	const isLandingPage = isHomePage || isNBenchPage || isUniversePage;
	const [enableSmoothScroll, setEnableSmoothScroll] = useState(false);

	useEffect(() => {
		if (!isLandingPage) {
			setEnableSmoothScroll(false);
			return;
		}

		const smoothTimeoutId = window.setTimeout(() => setEnableSmoothScroll(true), 1200);
		return () => {
			window.clearTimeout(smoothTimeoutId);
		};
	}, [isLandingPage]);

	return (
		<html lang="en" suppressHydrationWarning className={isLandingPage ? "dark" : ""} style={isLandingPage ? { backgroundColor: "#0C0C0C" } : undefined}>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen bg-background font-sans antialiased" style={isLandingPage ? { backgroundColor: "#0C0C0C" } : undefined}>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-[#C9A96E] focus:px-4 focus:py-2 focus:text-[#0C0C0C] focus:font-medium"
				>
					Skip to content
				</a>
				<ConvexProvider client={convex}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{isLandingPage ? (
							<ViewModeProvider>
								{enableSmoothScroll ? (
									<Suspense
										fallback={
											<main id="main-content">
												<Outlet />
											</main>
										}
									>
										<SmoothScroll>
											<main id="main-content">
												<Outlet />
											</main>
										</SmoothScroll>
									</Suspense>
								) : (
									<main id="main-content">
										<Outlet />
									</main>
								)}
							{/* ViewModeToggle hidden for now */}
							</ViewModeProvider>
						) : (
							<Suspense
								fallback={
									<div className="flex min-h-screen items-center justify-center">
										Loading...
									</div>
								}
							>
								<SidebarProvider>
									<AppSidebar />
									<SidebarInset>
										<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
											<SidebarTrigger className="-ml-1" />
										</header>
										<main id="main-content" className="flex-1">
											<Outlet />
										</main>
									</SidebarInset>
								</SidebarProvider>
							</Suspense>
						)}
						<Toaster />
					</ThemeProvider>
				</ConvexProvider>
				<Scripts />
			</body>
		</html>
	);
}
