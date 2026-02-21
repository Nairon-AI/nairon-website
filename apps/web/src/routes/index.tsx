import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	HeroNew,
	LogoStrip,
	WhatWeDo,
	Process,
	DataCredibility,
	AudienceSplit,
	Testimonials,
	CTASection,
	Footer,
} from "@/components/landing";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () =>
		seoHead({
			title: "Nairon — Data-Driven CTO Recruiting",
			description:
				"Nairon is a CTO recruiting agency that uses proprietary AI-nativeness benchmarks to match companies with technical leaders who ship. Find your next CTO with confidence.",
			path: "/",
		}),
});

function HomePage() {
	return (
		<div className="min-h-screen bg-[#0C0C0C] text-[#E8E4DE] font-inter">
			<Navbar />
			<HeroNew />
			<LogoStrip />
			<WhatWeDo />
			<Process />
			<DataCredibility />
			<AudienceSplit />
			<Testimonials />
			<CTASection />
			<Footer />
		</div>
	);
}
