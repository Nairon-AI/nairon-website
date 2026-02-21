import "@/styles/nbench.css";
import { createFileRoute } from "@tanstack/react-router";
import { Footer, Navbar } from "@/components/landing";
import {
	NBenchFeatureSplit,
	NBenchHero,
	NBenchModels,
	NBenchReports,
	NBenchShowcase,
	NBenchTrustPlaceholder,
	NBenchWhatWeTrack,
} from "@/components/landing/nbench";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/nbench")({
	component: NBenchPage,
	head: () =>
		seoHead({
			title: "NBench - AI Nativeness Benchmark CLI",
			description:
				"Benchmark how AI-native your product stack is. Measure architecture, eval discipline, token spend, and tooling freshness with the NBench CLI.",
			path: "/nbench",
		}),
});

function NBenchPage() {
	return (
		<div className="min-h-screen bg-[rgb(8,8,8)] font-inter text-white">
			<Navbar />
			<NBenchHero />
			<NBenchShowcase />
			<NBenchFeatureSplit />
			<NBenchModels />
			<NBenchWhatWeTrack />
			<NBenchReports />
			<NBenchTrustPlaceholder />
			<Footer />
		</div>
	);
}
