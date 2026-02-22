import { GridSection, GridCell, CornerNotches } from "./grid-system";

const testimonials = [
	{
		quote:
			"Nairon found us an AI-native engineer who transformed our product in 90 days. The NBench data gave us confidence we'd never had with traditional recruiters.",
		name: "Sarah Al-Rashid",
		role: "CEO, TechVentures Dubai",
	},
	{
		quote:
			"The benchmark process was unlike anything I'd seen. It validated what I knew about my strengths and helped me find a company that valued AI-native thinking.",
		name: "Marcus Chen",
		role: "Senior Engineer, placed via Nairon",
	},
	{
		quote:
			"Three recruiters failed before Nairon. They understood what 'AI-native' actually means and delivered engineers who could prove it with data.",
		name: "Omar Khalid",
		role: "Founder, BuildStack",
	},
];

export function Testimonials() {
	return (
		<div>
			{/* Heading row */}
			<GridSection columns="1fr" border>
				<GridCell className="px-12 pt-12 pb-10">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							Testimonials
						</span>
					</div>
					<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl">
						What they say
					</h2>
				</GridCell>
			</GridSection>

			{/* 3 testimonial cells with dividers */}
			<GridSection columns="1fr 1fr 1fr" border>
				{testimonials.map((t, i) => (
					<GridCell
						key={t.name}
						borderRight={i < 2}
						className="p-10 md:p-12 flex flex-col justify-between"
					>
						<CornerNotches size={10} />
						<p className="text-[#E8E4DE] text-base leading-relaxed mb-8 font-serif italic">
							"{t.quote}"
						</p>
						<div>
							<p className="text-[#E8E4DE] text-sm font-medium">
								{t.name}
							</p>
							<p className="text-[#A39E96] text-sm">{t.role}</p>
						</div>
					</GridCell>
				))}
			</GridSection>
		</div>
	);
}
