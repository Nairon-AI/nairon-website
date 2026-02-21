import { BarChart3, Brain, Search, Shield } from "lucide-react";

const features = [
	{
		icon: Search,
		title: "Executive Search",
		description:
			"We source CTO candidates from our vetted network of 2,000+ technical leaders across the Gulf and globally.",
	},
	{
		icon: BarChart3,
		title: "NBench Assessment",
		description:
			"Every candidate is scored with our proprietary AI-nativeness benchmark — measuring architecture, tooling, and engineering culture.",
	},
	{
		icon: Brain,
		title: "Culture Matching",
		description:
			"Beyond technical skill, we map leadership style, communication patterns, and team-building philosophy.",
	},
	{
		icon: Shield,
		title: "Risk Mitigation",
		description:
			"Reference deep-dives, background verification, and 90-day placement guarantee. We stand behind every hire.",
	},
];

export function WhatWeDo() {
	return (
		<section className="py-24 md:py-32 bg-[#0C0C0C]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Eyebrow */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
					<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
						What we do
					</span>
				</div>

				{/* Heading */}
				<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-16">
					Data-driven CTO recruiting,{" "}
					<span className="text-[#C9A96E]">not guesswork</span>
				</h2>

				{/* Bento grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="glass-card rounded-2xl p-8 group hover:bg-white/[0.05] transition-colors"
						>
							<feature.icon className="w-6 h-6 text-[#C9A96E] mb-5" strokeWidth={1.5} />
							<h3 className="text-xl font-medium text-[#E8E4DE] mb-3">
								{feature.title}
							</h3>
							<p className="text-[#A39E96] text-base leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
