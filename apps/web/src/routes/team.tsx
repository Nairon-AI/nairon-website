import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { TeamHero, Mentors } from "@/components/team";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
	component: TeamPage,
	head: () =>
		seoHead({
			title: "Our Team — Nairon",
			description:
				"Meet the team behind Nairon. Experienced recruiters and technologists driving data-driven CTO placements.",
			path: "/team",
		}),
});

function TeamPage() {
	return (
		<div className="bg-[#0C0C0C] text-[#E8E4DE] min-h-screen font-inter">
			<Navbar />
			<TeamHero />
			<Mentors />
			<CTA />
			<Footer />
		</div>
	);
}
