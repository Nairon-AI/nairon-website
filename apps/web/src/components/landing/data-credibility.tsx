const stats = [
	{ value: "2,000+", label: "Technical leaders in our network" },
	{ value: "94%", label: "Placement success rate" },
	{ value: "30", label: "Average days to placement" },
	{ value: "4.8", label: "Average NBench score of placed CTOs" },
];

export function DataCredibility() {
	return (
		<section className="py-24 md:py-32 bg-[#0C0C0C]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Eyebrow */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
					<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
						The numbers
					</span>
				</div>

				{/* Heading */}
				<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-6">
					Backed by{" "}
					<span className="text-gradient-gold">NBench</span> data
				</h2>
				<p className="text-[#A39E96] text-lg leading-relaxed max-w-2xl mb-16">
					Our proprietary AI-nativeness benchmark scores every candidate on
					architecture, eval discipline, token spend, and tooling freshness.
				</p>

				{/* Stats grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="glass-card rounded-2xl p-6 md:p-8 text-center"
						>
							<div className="text-3xl md:text-4xl font-normal tracking-[-1px] text-[#C9A96E] mb-2 font-urbanist">
								{stat.value}
							</div>
							<p className="text-[#A39E96] text-sm leading-snug">
								{stat.label}
							</p>
						</div>
					))}
				</div>

				{/* NBench link */}
				<div className="mt-10 text-center">
					<a
						href="/nbench"
						className="inline-flex items-center gap-2 text-[#C9A96E] text-sm font-medium hover:text-[#D4B87A] transition-colors"
					>
						Learn more about NBench
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-y-px">
							<path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
