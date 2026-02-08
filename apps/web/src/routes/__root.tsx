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
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
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
const ViewModeToggle = lazy(() =>
	import("@/components/view-mode-toggle").then((m) => ({
		default: m.ViewModeToggle,
	})),
);
const BenchmarkWidget = lazy(() =>
	import("@/components/landing/benchmark-widget").then((m) => ({
		default: m.BenchmarkWidget,
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

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Nairon AI — AI Bootcamp for the 1% Engineer" },
			{
				name: "description",
				content:
					"Join an intensive AI engineering bootcamp in Dubai. Build real AI products, earn a branded certificate, and get hired by top companies.",
			},
			{ name: "theme-color", content: "#000000" },
		],
		links: [
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
		],
	}),
});

function RootComponent() {
	const { convex } = Route.useRouteContext();
	const isHomePage = useMatch({ from: "/", shouldThrow: false });
	const isHirePage = useMatch({ from: "/hire", shouldThrow: false });
	const isProgramPage = useMatch({ from: "/program", shouldThrow: false });
	const isResidencePage = useMatch({ from: "/residence", shouldThrow: false });
	const isApprenticeshipPage = useMatch({
		from: "/apprenticeship",
		shouldThrow: false,
	});
	const isContactPage = useMatch({ from: "/contact", shouldThrow: false });
	const isCareersPage = useMatch({ from: "/careers", shouldThrow: false });
	const isTeamPage = useMatch({ from: "/team", shouldThrow: false });
	const isNBenchPage = useMatch({ from: "/nbench", shouldThrow: false });
	const isLandingPage =
		isHomePage ||
		isHirePage ||
		isProgramPage ||
		isResidencePage ||
		isApprenticeshipPage ||
		isContactPage ||
		isCareersPage ||
		isTeamPage ||
		isNBenchPage;
	const [showDeferredUi, setShowDeferredUi] = useState(false);
	const [enableSmoothScroll, setEnableSmoothScroll] = useState(false);

	useEffect(() => {
		if (!isLandingPage) {
			setShowDeferredUi(false);
			setEnableSmoothScroll(false);
			return;
		}

		const timeoutId = window.setTimeout(() => setShowDeferredUi(true), 2500);
		const smoothTimeoutId = window.setTimeout(() => setEnableSmoothScroll(true), 1200);
		return () => {
			window.clearTimeout(timeoutId);
			window.clearTimeout(smoothTimeoutId);
		};
	}, [isLandingPage]);

	return (
		<html lang="en" suppressHydrationWarning className={isLandingPage ? "dark" : ""}>
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
						{isLandingPage ? (
							<ViewModeProvider>
								{enableSmoothScroll ? (
									<Suspense
										fallback={
											<main>
												<Outlet />
											</main>
										}
									>
										<SmoothScroll>
											<main>
												<Outlet />
											</main>
										</SmoothScroll>
									</Suspense>
								) : (
									<main>
										<Outlet />
									</main>
								)}
							{showDeferredUi && !isNBenchPage ? (
								<Suspense fallback={null}>
									<ViewModeToggle />
									<BenchmarkWidget />
								</Suspense>
							) : null}
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
										<main className="flex-1">
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
