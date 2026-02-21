import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { CareersHero, JobListings } from "@/components/careers";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/")({
	component: CareersPage,
	head: () =>
		seoHead({
			title: "Careers at Nairon",
			description:
				"Join the Nairon team. Explore open positions and help shape the future of data-driven CTO recruiting.",
			path: "/careers",
		}),
});

function CareersPage() {
	return (
		<div className="bg-[#0C0C0C] text-[#E8E4DE] min-h-screen font-inter">
			<Navbar />
			<CareersHero />
			<JobListings />
			<CTA />
			<Footer />
		</div>
	);
}
