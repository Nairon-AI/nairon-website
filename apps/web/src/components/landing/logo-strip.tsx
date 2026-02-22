import { PARTNERS } from "@/data/landing";

export function LogoStrip() {
	const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS];

	return (
		<div className="py-10">
			<div className="px-12 mb-6">
				<p className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
					Trusted by leading companies
				</p>
			</div>
			<div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
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
		</div>
	);
}
