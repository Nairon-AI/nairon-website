const steps = [
	{
		number: "01",
		title: "Discovery Call",
		description:
			"We learn your company's stage, tech stack, culture, and what kind of CTO you actually need — not what a job description template says.",
	},
	{
		number: "02",
		title: "Candidate Sourcing",
		description:
			"Our network of 2,000+ vetted technical leaders is cross-referenced with your requirements. We present 3–5 curated candidates within two weeks.",
	},
	{
		number: "03",
		title: "NBench Assessment",
		description:
			"Each candidate goes through our proprietary benchmark — evaluating AI-nativeness, architecture decisions, team scaling experience, and technical debt philosophy.",
	},
	{
		number: "04",
		title: "Interview & Close",
		description:
			"We facilitate the interview process, handle offer negotiations, and support onboarding. 90-day placement guarantee included.",
	},
];

export function Process() {
	return (
		<section className="py-24 md:py-32 bg-[#0C0C0C]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Eyebrow */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
					<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
						How it works
					</span>
				</div>

				{/* Heading */}
				<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-16">
					From brief to{" "}
					<span className="font-serif italic text-[#C9A96E]">placement</span>{" "}
					in 30 days
				</h2>

				{/* Steps */}
				<div className="space-y-0">
					{steps.map((step) => (
						<div
							key={step.number}
							className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10 border-t border-white/6"
						>
							<span className="text-[#C9A96E] text-sm font-medium tracking-[0.16em]">
								{step.number}
							</span>
							<div>
								<h3 className="text-2xl font-normal text-[#E8E4DE] mb-3">
									{step.title}
								</h3>
								<p className="text-[#A39E96] text-base leading-relaxed max-w-xl">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
