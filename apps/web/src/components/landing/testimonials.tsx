const testimonials = [
	{
		quote:
			"Nairon found us a CTO who transformed our engineering culture in 90 days. The NBench data gave us confidence we'd never had with traditional recruiters.",
		name: "Sarah Al-Rashid",
		role: "CEO, TechVentures Dubai",
	},
	{
		quote:
			"The benchmark process was unlike anything I'd seen. It validated what I knew about my strengths and helped me find a company that valued them.",
		name: "Marcus Chen",
		role: "CTO, placed via Nairon",
	},
	{
		quote:
			"Three recruiters failed before Nairon. They understood what 'AI-native' actually means and delivered candidates who could prove it with data.",
		name: "Omar Khalid",
		role: "Founder, BuildStack",
	},
];

export function Testimonials() {
	return (
		<section className="relative py-24 md:py-32 overflow-hidden">
			{/* Nature painting background */}
			<div className="absolute inset-0">
				<img
					src="/backgrounds/testimonials-painting.jpg"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to bottom, rgb(12,12,12) 0%, rgba(12,12,12,0.75) 30%, rgba(12,12,12,0.75) 70%, rgb(12,12,12) 100%)",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Eyebrow */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
					<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
						Testimonials
					</span>
				</div>

				<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-16">
					What they say
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{testimonials.map((t) => (
						<div
							key={t.name}
							className="glass-card rounded-2xl p-8"
						>
							<p className="text-[#E8E4DE] text-base leading-relaxed mb-6 font-serif italic">
								"{t.quote}"
							</p>
							<div>
								<p className="text-[#E8E4DE] text-sm font-medium">
									{t.name}
								</p>
								<p className="text-[#A39E96] text-sm">{t.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
