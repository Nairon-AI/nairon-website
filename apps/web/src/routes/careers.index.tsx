import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { CareersHero, JobListings } from "@/components/careers";

export const Route = createFileRoute("/careers/")({
	component: CareersPage,
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
	)
}
