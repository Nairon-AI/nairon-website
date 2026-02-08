import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { CareersHero, JobListings } from "@/components/careers";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/")({
	component: CareersPage,
	head: () =>
		seoHead({
			title: "Careers at Nairon AI",
			description:
				"Join the Nairon AI team. Explore open positions and help build the future of AI engineering education.",
			path: "/careers",
		}),
});

function CareersPage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<CareersHero />
			<JobListings />
			<CTA />
			<Footer />
		</div>
	);
}
