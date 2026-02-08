import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CTA, Footer } from "@/components/landing";
import { TeamHero, Mentors } from "@/components/team";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
	component: TeamPage,
	head: () =>
		seoHead({
			title: "Our Team & Mentors — Nairon AI",
			description:
				"Meet the mentors and team behind Nairon AI. Industry veterans from top tech companies guiding the next generation of AI engineers.",
			path: "/team",
		}),
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
