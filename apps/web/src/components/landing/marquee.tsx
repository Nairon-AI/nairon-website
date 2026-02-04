export function Marquee() {
	return (
		<section className="py-12 bg-black overflow-hidden border-y border-white/5">
			<div className="animate-marquee flex whitespace-nowrap">
				{[1, 2, 3].map((i) => (
					<span
						key={i}
						className="text-5xl md:text-7xl lg:text-8xl font-urbanist font-bold text-white/10 mx-8"
					>
						Innovation. Obsession. Discipline. Intelligence. Passion.
					</span>
				))}
			</div>
		</section>
	);
}
