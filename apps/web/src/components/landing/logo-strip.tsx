import { useCallback, useEffect, useRef, useState } from "react";
import { PARTNERS } from "@/data/landing";

export function LogoStrip() {
	const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS];
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoveredName, setHoveredName] = useState<string | null>(null);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const logoRefs = useRef<Map<string, HTMLDivElement>>(new Map());
	const [tooltipPos, setTooltipPos] = useState<{ x: number } | null>(null);

	const visibleName = hoveredName ?? PARTNERS[activeIndex].name;
	const visibleTagline = PARTNERS.find((p) => p.name === visibleName)?.tagline;

	const startCycling = useCallback(() => {
		intervalRef.current = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % PARTNERS.length);
		}, 3000);
	}, []);

	useEffect(() => {
		startCycling();
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [startCycling]);

	// Track the active logo's position every frame
	useEffect(() => {
		let raf: number;
		const track = () => {
			const container = containerRef.current;
			if (!container) return;

			// Find the first visible instance of the active logo
			const entries = Array.from(logoRefs.current.entries());
			const containerRect = container.getBoundingClientRect();

			for (const [key, el] of entries) {
				if (!key.startsWith(`${visibleName}-`)) continue;
				const rect = el.getBoundingClientRect();
				const center = rect.left + rect.width / 2;
				// Pick the first instance that's within the visible container area
				if (center > containerRect.left && center < containerRect.right) {
					setTooltipPos({ x: center - containerRect.left });
					break;
				}
			}
			raf = requestAnimationFrame(track);
		};
		raf = requestAnimationFrame(track);
		return () => cancelAnimationFrame(raf);
	}, [visibleName]);

	const handleHover = (name: string) => {
		setHoveredName(name);
		if (intervalRef.current) clearInterval(intervalRef.current);
	};

	const handleLeave = () => {
		setHoveredName(null);
		startCycling();
	};

	return (
		<div className="py-10">
			<div className="px-12 mb-6">
				<p className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
					Trusted by leading companies
				</p>
			</div>
			<div ref={containerRef} className="relative">
				{/* Tooltip — positioned above the marquee, tracks the active logo */}
				{tooltipPos && visibleTagline && (
					<div
						key={visibleName}
						className="absolute -top-8 z-10 pointer-events-none animate-fade-in"
						style={{
							left: tooltipPos.x,
							transform: "translateX(-50%)",
						}}
					>
						<div className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-[#E8E4DE] text-xs whitespace-nowrap">
							{visibleTagline}
						</div>
					</div>
				)}

				{/* Marquee with overflow hidden + mask */}
				<div
					className="overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
					}}
				>
					<div className="flex animate-marquee">
						{logos.map((partner, i) => (
							<div
								key={`${partner.name}-${i}`}
								ref={(el) => {
									if (el)
										logoRefs.current.set(
											`${partner.name}-${i}`,
											el,
										);
								}}
								className="relative flex-shrink-0 px-8 flex items-center justify-center"
								onMouseEnter={() => handleHover(partner.name)}
								onMouseLeave={handleLeave}
							>
								<img
									src={partner.logo}
									alt={partner.name}
									width={120}
									height={32}
									className={`h-8 w-auto transition-all duration-300 ${
										partner.name === visibleName
											? "opacity-80 grayscale-0"
											: "opacity-50 grayscale"
									}`}
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
