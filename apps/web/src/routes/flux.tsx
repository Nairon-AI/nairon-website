import { createFileRoute } from "@tanstack/react-router";
import { Footer, Navbar } from "@/components/landing";
import { ModalProvider } from "@/components/landing/modal-provider";
import { HireModal } from "@/components/landing/hire-modal";
import { CandidateModal } from "@/components/landing/candidate-modal";
import { seoHead, fluxProductJsonLd, breadcrumbJsonLd } from "@/lib/seo";

// Tailark Pro components
import HeroSection from "@/components/hero-section";
import ExpandableFeatures from "@/components/expandable-features-10";
import BentoSeven from "@/components/bento-7";
import FeaturesSection from "@/components/how-it-works-1";
import ComparatorSection from "@/components/comparator-7";
import StatsSection from "@/components/stats-4";
import IntegrationsSection from "@/components/integrations-6";
import FAQs from "@/components/faqs-1";
import Testimonials from "@/components/testimonials-7";

const installCommand = "/plugin marketplace add Nairon-AI/flux";

const fluxJsonLd = JSON.stringify(fluxProductJsonLd());
const breadcrumbsJsonLd = JSON.stringify(
	breadcrumbJsonLd([
		{ name: "Home", path: "/" },
		{ name: "Flux", path: "/flux" },
	]),
);

export const Route = createFileRoute("/flux")({
	component: FluxPage,
	head: () => {
		const base = seoHead({
			title: "Flux — Find the gaps in your AI workflow | Nairon AI",
			description:
				"Open-source Claude Code plugin that analyzes your sessions, detects friction patterns, and recommends fixes. Interview, Plan, Build, Review, Improve.",
			path: "/flux",
		})
		return {
			...base,
			scripts: [
				{ type: "application/ld+json", children: fluxJsonLd },
				{ type: "application/ld+json", children: breadcrumbsJsonLd },
			],
		}
	},
});

function FluxPage() {
	return (
		<ModalProvider>
			<div className="min-h-screen bg-background font-inter text-foreground">
				<Navbar />

				{/* Hero Section - hero-section-16 */}
				<HeroSection />
				
				{/* Architecture - expandable-features-10 */}
				<ExpandableFeatures />
				
				{/* Features - bento-7 */}
				<BentoSeven />
				
				{/* Process/Steps - how-it-works-1 */}
				<FeaturesSection />
				
				{/* Comparator - comparator-7 */}
				<ComparatorSection />
				
				{/* Stats - stats-4 */}
				<StatsSection />
				
				{/* Platforms/Integrations - integrations-6 */}
				<IntegrationsSection />
				
				{/* Testimonials - testimonials-7 */}
				<Testimonials />
				
				{/* FAQ - faqs-1 */}
				<FAQs />

				<section className="bg-background py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="bg-card ring-border rounded-2xl p-8 text-center ring-1">
							<p className="text-muted-foreground text-sm">Install Flux in Claude Code</p>
							<h3 className="mt-3 text-2xl font-semibold md:text-3xl">Copy this command and run it in your agent</h3>
							<div className="bg-background mt-6 overflow-x-auto rounded-xl border px-4 py-3">
								<code className="text-sm">{installCommand}</code>
							</div>
						</div>
					</div>
				</section>
				
				<Footer />
			</div>
			<HireModal />
			<CandidateModal />
		</ModalProvider>
	)
}
