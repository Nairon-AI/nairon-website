import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { TeamHero, Mentors } from "@/components/team";

export const Route = createFileRoute("/team")({
	component: TeamPage,
});

function TeamPage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<TeamHero />
			<Mentors />
			<CTA />
			<Footer />
		</div>
	);
}
