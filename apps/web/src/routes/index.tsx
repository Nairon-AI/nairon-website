import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	Hero,
	ProblemSolution,
	OutcomeMetrics,
	HowItWorks,
	Residence,
	Apprenticeship,
	Partners,
	FAQ,
	FinalCTA,
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
			<ProblemSolution index={0} />
			<ProblemSolution index={1} />
			<OutcomeMetrics />
			<HowItWorks />
			<Residence />
			<Apprenticeship />
			<Partners />
			<FAQ />
			<FinalCTA />
			<Footer />
		</div>
	);
}
