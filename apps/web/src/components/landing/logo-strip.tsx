import { PARTNERS } from "@/data/landing";

export function LogoStrip() {
	// Triple the logos for seamless infinite scroll
	const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS];

	return (
		<section className="py-16 border-y border-white/6 bg-[#0C0C0C]">
			<div className="max-w-7xl mx-auto px-6 mb-8">
				<p className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
					Trusted by leading companies
				</p>
			</div>
			<div className="relative overflow-hidden">
				<div className="flex animate-marquee">
					{logos.map((partner, i) => (
						<div
							key={`${partner.name}-${i}`}
							className="flex-shrink-0 px-8 flex items-center justify-center"
						>
							<img
								src={partner.logo}
								alt={partner.name}
								className="h-8 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
