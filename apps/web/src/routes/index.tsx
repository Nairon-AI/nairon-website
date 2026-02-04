import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	Hero,
	Philosophy,
	About,
	Qualifies,
	Marquee,
	Team,
	Agenda,
	Partners,
	FAQ,
	CTA,
	Footer,
} from "@/components/landing";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<Hero />
			<Philosophy />
			<About />
			<Qualifies />
			<Marquee />
			<Team />
			<Agenda />
			<Partners />
			<FAQ />
			<CTA />
			<Footer />
		</div>
	);
}
