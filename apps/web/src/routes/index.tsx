import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	Hero,
	ProblemSolution,
	ValueProp,
	BenefitsBento,
	CertificateSection,
	HowItWorks,
	Residence,
	Apprenticeship,
	Partners,
	FAQ,
	ImmersiveCTA,
	VideoSection,
	Footer,
} from "@/components/landing";
import { seoHead, faqJsonLd } from "@/lib/seo";
import { FAQ_ENGINEER } from "@/data/landing";

const faqStructuredData = JSON.stringify(
	faqJsonLd(
		FAQ_ENGINEER.map((item) => ({
			question: item.question,
			answer: item.answer,
		})),
	),
);

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		...seoHead({
			title: "Nairon AI — AI Bootcamp for the 1% Engineer",
			description:
				"Join an intensive AI engineering bootcamp in Dubai. Build real AI products, earn a branded certificate, and get hired by top companies. Applications closing soon.",
			path: "/",
		}),
		scripts: [
			{
				type: "application/ld+json",
				children: faqStructuredData,
			},
		],
	}),
});

function HomePage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			{/* Main scrolling content — z-2 sits above the fixed CTA */}
			<div className="relative z-[2]">
				<div className="bg-black rounded-b-[48px] md:rounded-b-[80px] relative">
					<Navbar />
					<Hero />
					<VideoSection />
					<ProblemSolution />
					<ValueProp />
					<BenefitsBento />
					<CertificateSection />
					<section data-snap-align="start">
						<Residence />
						<Apprenticeship />
					</section>
					<HowItWorks />
					<Partners />
					<FAQ />
				</div>

				{/* Progressing gradient below the tab — overlaps rounded corners and fades into CTA */}
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

			{/* Footer — flows after the CTA spacer, dark bg blends with CTA bottom gradient */}
			<div className="relative z-[2]">
				{/* Progressing gradient above footer — fades from CTA into black */}
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
