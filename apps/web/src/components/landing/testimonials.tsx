import { GridSection, GridCell, CornerNotches } from "./grid-system";

const testimonials = [
	{
		quote:
			"Nairon found us an AI-native engineer who transformed our product in 90 days. The NBench data gave us confidence we'd never had with traditional recruiters.",
		name: "Sarah Al-Rashid",
		role: "CEO, TechVentures Dubai",
		avatar: "/avatars/avatar-4.jpg",
	},
	{
		quote:
			"The benchmark process was unlike anything I'd seen. It validated what I knew about my strengths and helped me find a company that valued AI-native thinking.",
		name: "Marcus Chen",
		role: "Senior Engineer, placed via Nairon",
		avatar: "/avatars/avatar-5.jpg",
	},
	{
		quote:
			"Three recruiters failed before Nairon. They understood what 'AI-native' actually means and delivered engineers who could prove it with data.",
		name: "Omar Khalid",
		role: "Founder, BuildStack",
		avatar: "/avatars/avatar-6.jpg",
	},
];

export function Testimonials() {
	return (
		<div>
			{/* Heading row */}
			<GridSection columns="1fr" border>
				<GridCell className="px-6 md:px-12 pt-10 md:pt-12 pb-8 md:pb-10">
					<div className="flex items-center gap-3 mb-4 md:mb-6">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							Testimonials
						</span>
					</div>
					<h2 className="text-3xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl">
						What they say
					</h2>
				</GridCell>
			</GridSection>

			{/* 3 testimonial cells — stacked on mobile, 3 columns on desktop */}
			<GridSection columns="1fr 1fr 1fr" border>
				{testimonials.map((t, i) => (
					<GridCell
						key={t.name}
						borderRight={i < 2}
						className="p-6 md:p-12 flex flex-col justify-between"
					>
						<CornerNotches size={10} />
						<p className="text-[#E8E4DE] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
							"{t.quote}"
						</p>
						<div className="flex items-center gap-3">
							<img
								src={t.avatar}
								alt={t.name}
								className="w-9 md:w-10 h-9 md:h-10 rounded-full object-cover"
							/>
							<div>
								<p className="text-[#E8E4DE] text-sm font-medium">
									{t.name}
								</p>
								<p className="text-[#A39E96] text-xs md:text-sm">{t.role}</p>
							</div>
						</div>
					</GridCell>
				))}
			</GridSection>
		</div>
	);
}
