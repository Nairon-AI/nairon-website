import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import { HireHero } from "@/components/hire/hero";
import { HirePhilosophy } from "@/components/hire/philosophy";
import { HireDifference } from "@/components/hire/difference";
import { HireProcess } from "@/components/hire/process";
import { HireTiers } from "@/components/hire/tiers";
import { HireFAQ } from "@/components/hire/faq";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/hire")({
	component: HirePage,
	head: () =>
		seoHead({
			title: "Hire AI Engineers — Nairon AI",
			description:
				"Access pre-vetted AI engineers trained through Nairon's intensive bootcamp. Find the top 1% of AI talent for your team.",
			path: "/hire",
		}),
});

function HirePage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<HireHero />
			<HirePhilosophy />
			<HireDifference />
			<HireProcess />
			<HireTiers />
			<HireFAQ />
			<Footer />
		</div>
	);
}
