import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Agenda, CTA, Footer } from "@/components/landing";
import { ProgramHero } from "@/components/program/hero";
import { ProgramAbout } from "@/components/program/about";
import { ProgramBenefits } from "@/components/program/benefits";
import { HowToGetIn } from "@/components/program/how-to-get-in";

export const Route = createFileRoute("/program")({
	component: ProgramPage,
});

function ProgramPage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<ProgramHero />
			<ProgramAbout />
			<ProgramBenefits />
			<HowToGetIn />
			<Agenda />
			<CTA />
			<Footer />
		</div>
	);
}
