import { GridSection, GridCell, CornerNotches } from "./grid-system";

const stats = [
	{ value: "2,000+", label: "Engineers in our network" },
	{ value: "94%", label: "Placement success rate" },
	{ value: "30", label: "Average days to placement" },
	{ value: "4.8", label: "Average NBench score" },
];

export function DataCredibility() {
	return (
		<div>
			{/* Heading row */}
			<GridSection columns="5fr 7fr" border>
				<GridCell borderRight className="px-12 py-12">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							The numbers
						</span>
					</div>
					<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE]">
						Backed by{" "}
						<span className="text-gradient-gold">NBench</span> data
					</h2>
				</GridCell>
				<GridCell className="px-12 py-12 flex items-end">
					<p className="text-[#A39E96] text-lg leading-relaxed">
						Our proprietary AI-nativeness benchmark scores every candidate on
						architecture, eval discipline, token spend, and tooling freshness.
					</p>
				</GridCell>
			</GridSection>

			{/* 4 stat cells in a row with dividers */}
			<GridSection columns="1fr 1fr 1fr 1fr" border>
				{stats.map((stat, i) => (
					<GridCell
						key={stat.label}
						borderRight={i < 3}
						className="px-8 py-10 md:py-14 text-center"
					>
						<CornerNotches size={10} />
						<div className="text-3xl md:text-4xl font-normal tracking-[-1px] text-[#C9A96E] mb-2 font-urbanist">
							{stat.value}
						</div>
						<p className="text-[#A39E96] text-sm leading-snug">
							{stat.label}
						</p>
					</GridCell>
				))}
			</GridSection>

			{/* NBench link row */}
			<GridSection columns="1fr" border>
				<GridCell className="py-6 text-center">
					<a
						href="/nbench"
						className="inline-flex items-center gap-2 text-[#C9A96E] text-sm font-medium hover:text-[#D4B87A] transition-colors"
					>
						Learn more about NBench
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-y-px">
							<path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>
				</GridCell>
			</GridSection>
		</div>
	);
}
