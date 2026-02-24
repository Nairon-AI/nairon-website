import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell } from "./grid-system";

const steps = [
	{
		number: "01",
		title: "Discovery Call",
		description:
			"We learn your company's stage, tech stack, culture, and what kind of AI-native engineer you actually need — not what a job description template says.",
	},
	{
		number: "02",
		title: "Candidate Sourcing",
		description:
			"Our network of 2,000+ vetted AI-native engineers is cross-referenced with your requirements. We present 10–15 curated candidates within 1 week.",
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
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visibleCount, setVisibleCount] = useState(0);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					for (let i = 0; i < steps.length; i++) {
						setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 150);
					}
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div id="process" ref={sectionRef}>
			{/* Two-column layout: heading left, steps right */}
			<GridSection columns="5fr 7fr">
				{/* Left: sticky heading */}
				<GridCell borderRight className="px-12 py-12">
					<div className="sticky top-24">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
							<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
								How it works
							</span>
						</div>
						<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE]">
							From brief to{" "}
							<span className="font-serif italic text-[#C9A96E]">placement</span>{" "}
							in 30 days
						</h2>
					</div>
				</GridCell>

				{/* Right: steps */}
				<GridCell className="px-12 py-12">
					{steps.map((step, i) => (
						<div
							key={step.number}
							className={`py-8 ${i > 0 ? "border-t border-white/6" : ""} transition-all duration-500 ease-out ${
								i < visibleCount
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<span className="text-[#C9A96E] text-sm font-medium tracking-[0.16em] block mb-3">
								{step.number}
							</span>
							<h3 className="text-2xl font-normal text-[#E8E4DE] mb-3">
								{step.title}
							</h3>
							<p className="text-[#A39E96] text-base leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</GridCell>
			</GridSection>
		</div>
	);
}
