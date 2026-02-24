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
import { ModalProvider } from "@/components/landing/modal-provider";
import { HireModal } from "@/components/landing/hire-modal";
import { CandidateModal } from "@/components/landing/candidate-modal";
import { seoHead, nbenchProductJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const nbenchJsonLd = JSON.stringify(nbenchProductJsonLd());
const breadcrumbsJsonLd = JSON.stringify(
	breadcrumbJsonLd([
		{ name: "Home", path: "/" },
		{ name: "NBench", path: "/nbench" },
	]),
);

export const Route = createFileRoute("/nbench")({
	component: NBenchPage,
	head: () => {
		const base = seoHead({
			title: "NBench — AI Nativeness Benchmark CLI | Nairon AI",
			description:
				"Open-source CLI that benchmarks AI-nativeness. Measure agent-first thinking, eval discipline, and token efficiency.",
			path: "/nbench",
		});
		return {
			...base,
			scripts: [
				{ type: "application/ld+json", children: nbenchJsonLd },
				{ type: "application/ld+json", children: breadcrumbsJsonLd },
			],
		};
	},
});

function NBenchPage() {
	return (
		<ModalProvider>
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
			<HireModal />
			<CandidateModal />
		</ModalProvider>
	);
}
