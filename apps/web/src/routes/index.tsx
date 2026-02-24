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
	BuiltByBuilders,
	Testimonials,
	CTASection,
	Footer,
	GridSystem,
	GridSection,
} from "@/components/landing";
import { ModalProvider } from "@/components/landing/modal-provider";
import { HireModal } from "@/components/landing/hire-modal";
import { CandidateModal } from "@/components/landing/candidate-modal";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () =>
		seoHead({
			title: "Nairon — Data-Driven Technical Recruiting",
			description:
				"Data-driven recruiting powered by AI-nativeness benchmarks. We match companies with engineers who ship using NBench.",
			path: "/",
		}),
});

function HomePage() {
	return (
		<ModalProvider>
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

				{/* Built by builders */}
				<BuiltByBuilders />

				{/* Testimonials */}
				<Testimonials />

				{/* Blog — hidden for now */}
				{/* <BlogSection /> */}

				{/* CTA */}
				<GridSection columns="1fr" border={false}>
					<CTASection />
				</GridSection>
			</GridSystem>

			<Footer />
		</div>
		<HireModal />
		<CandidateModal />
		</ModalProvider>
	);
}
