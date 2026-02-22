import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	HeroNew,
	LogoStrip,
	WhyNairon,
	DevComparison,
	DevOutcome,
	NBenchSection,
	Process,
	DataCredibility,
	AudienceSplit,
	Testimonials,
	CTASection,
	Footer,
	GridSystem,
	GridSection,
} from "@/components/landing";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () =>
		seoHead({
			title: "Nairon — Data-Driven Technical Recruiting",
			description:
				"Nairon is a data-driven recruiting agency that uses proprietary AI-nativeness benchmarks to match companies with engineers who ship. Find your next AI-native engineer with confidence.",
			path: "/",
		}),
});

function HomePage() {
	return (
		<div className="min-h-screen bg-[#0C0C0C] text-[#E8E4DE] font-inter">
			<Navbar />

			<GridSystem className="pt-16 mt-12 md:mt-16">
				{/* Hero */}
				<GridSection columns="1fr" border>
					<HeroNew />
				</GridSection>

				{/* Logo strip */}
				<GridSection columns="1fr" border>
					<LogoStrip />
				</GridSection>

				{/* AI-Nativeness — what it means */}
				<WhyNairon />

				{/* Dev comparison — traditional vs AI-native */}
				<DevComparison />

				{/* Dev outcome — data comparison chart */}
				<DevOutcome />

				{/* NBench — how we measure and train */}
				<NBenchSection />

				{/* Process */}
				<Process />

				{/* Data credibility */}
				<DataCredibility />

				{/* Audience split */}
				<AudienceSplit />

				{/* Testimonials */}
				<Testimonials />

				{/* CTA */}
				<GridSection columns="1fr" border={false}>
					<CTASection />
				</GridSection>
			</GridSystem>

			<Footer />
		</div>
	);
}
