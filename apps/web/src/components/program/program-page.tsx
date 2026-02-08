import { Navbar, Footer, ImmersiveCTA } from "@/components/landing";
import { ProgramHero } from "./hero";
import { BentoGrid } from "./bento-grid";
import { SocialProof } from "./social-proof";
import { Curriculum } from "./curriculum";
import { Requirements } from "./requirements";
import { ApplicationTimeline } from "./application-timeline";
import { Outcomes } from "./outcomes";
import { ProgramPhilosophy } from "./philosophy";
import { PricingCard } from "./pricing-card";
import { ProgramFAQ } from "./faq";
import { ProgramCTA } from "./program-cta";
import type { ProgramData } from "@/data/programs";

export function ProgramPage({ data }: { data: ProgramData }) {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			{/* Main scrolling content — z-2 sits above the fixed CTA */}
			<div className="relative z-[2]">
				<div className="bg-black rounded-b-[48px] md:rounded-b-[80px] relative">
					<Navbar />
					<ProgramHero data={data.hero} />
					<BentoGrid cards={data.bentoCards} />
					<SocialProof data={data.testimonials} />
					<Curriculum data={data.curriculum} />
					<Requirements data={data.requirements} />
					<ApplicationTimeline data={data.applicationSteps} />
					<Outcomes data={data.outcomes} />
					<ProgramPhilosophy data={data.philosophy} />
					<PricingCard data={data.pricing} />
					<ProgramFAQ items={data.faq} />
					<ProgramCTA data={data.cta} />
				</div>

				{/* Gradient fade below content — overlaps rounded corners and fades into CTA */}
				<div
					className="pointer-events-none -mt-12 md:-mt-20 h-[280px] md:h-[400px]"
					style={{
						background:
							"linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 80%, transparent 100%)",
					}}
				/>
			</div>

			{/* Immersive CTA — fixed behind the content, revealed on scroll */}
			<ImmersiveCTA />

			{/* Footer — flows after the CTA spacer */}
			<div className="relative z-[2]">
				{/* Gradient fade above footer — fades from CTA into black */}
				<div
					className="pointer-events-none h-[280px] md:h-[400px]"
					style={{
						background:
							"linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 80%, transparent 100%)",
					}}
				/>
				<div className="bg-black">
					<Footer />
				</div>
			</div>
		</div>
	);
}
