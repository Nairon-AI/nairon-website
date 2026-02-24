import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell, CornerNotches } from "./grid-system";

/* ─── Tool tiles — fill the wall (4 rows) ───────────────────── */
const tools: {
	name: string;
	description: string;
	col: string;
	row: string;
}[] = [
	// Row 1–2
	{ name: "Nairon CRM", description: "Full-cycle candidate & client pipeline", col: "1 / 3", row: "1 / 3" },
	{ name: "Outreach Agent", description: "Cold outreach on autopilot", col: "3 / 4", row: "1 / 2" },
	{ name: "Screening Agent", description: "Instant resume triage", col: "4 / 5", row: "1 / 2" },
	{ name: "Nairon Universe", description: "Living knowledge graph of every signal", col: "5 / 7", row: "1 / 3" },
	// Row 2
	{ name: "Admin Agent", description: "Ops busywork, automated", col: "3 / 4", row: "2 / 3" },
	{ name: "Nairon Slackapp", description: "Real-time team intel in Slack", col: "4 / 5", row: "2 / 3" },
	// Row 3–4
	{ name: "Match Engine", description: "Role-to-engineer fit scoring", col: "1 / 2", row: "3 / 4" },
	{ name: "Report Generator", description: "One-click placement reports", col: "2 / 3", row: "3 / 4" },
	{ name: "NBench", description: "Proprietary AI-nativeness benchmark", col: "3 / 5", row: "3 / 5" },
	{ name: "Pipeline Tracker", description: "Live hiring funnel analytics", col: "5 / 7", row: "3 / 4" },
	// Row 4
	{ name: "Talent Graph", description: "Engineer network mapping", col: "1 / 3", row: "4 / 5" },
	{ name: "Offer Engine", description: "Comp benchmarking & negotiation intel", col: "5 / 7", row: "4 / 5" },
];

const founders = [
	{
		name: "Luka Eric",
		title: "Founder & CEO",
		image: "/assets/framer/SSmGx1bjs3koY1aPdILAeuc.jpeg",
	},
	{
		name: "Obaid Ur-Rehman",
		title: "Founder & CTO",
		image: "/assets/framer/Xse9UYp1XHtcxoFdIq5x3WbveBc.png",
	},
];

export function BuiltByBuilders() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visibleCount, setVisibleCount] = useState(0);
	const [showFounders, setShowFounders] = useState(false);
	const [showTitle, setShowTitle] = useState(false);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					for (let i = 0; i < tools.length; i++) {
						setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 120);
					}
					const foundersDelay = tools.length * 120 + 200;
					setTimeout(() => setShowFounders(true), foundersDelay);
					setTimeout(() => setShowTitle(true), foundersDelay + 600);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={sectionRef}>
			{/* Mosaic wall + Founders + Title — all in one section */}
			<GridSection columns="1fr" border>
				<GridCell className="relative overflow-hidden">
					{/* ── Tool mosaic — 6-col, 4 rows ── */}
					<div
						className="grid gap-3 p-3 md:p-4"
						style={{
							gridTemplateColumns: "repeat(6, 1fr)",
							gridTemplateRows: "repeat(4, minmax(120px, 1fr))",
						}}
					>
						{tools.map((tool, i) => (
							<div
								key={tool.name}
								className={`relative bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col justify-between transition-all duration-500 ease-out ${
									i < visibleCount
										? "opacity-100 scale-100"
										: "opacity-0 scale-95"
								}`}
								style={{
									gridColumn: tool.col,
									gridRow: tool.row,
								}}
							>
								<CornerNotches size={8} color="rgba(255, 255, 255, 0.08)" />
								<div>
									<span className="text-[#E8E4DE] text-sm font-medium leading-tight">
										{tool.name}
									</span>
									<p className="text-[#A39E96] text-xs mt-1.5 leading-relaxed">
										{tool.description}
									</p>
								</div>
								<div className="mt-auto pt-4">
									<div className="w-6 h-0.5 bg-[#C9A96E]/30 rounded-full" />
								</div>
							</div>
						))}
					</div>

					{/* ── Founders + title — centered overlay ── */}
					<div
						className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
					>
						{/* Dark overlay from underneath for contrast */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.7) 35%, rgba(12,12,12,0.3) 60%, transparent 100%)",
							}}
						/>

						{/* Radial vignette behind founders */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"radial-gradient(ellipse 55% 60% at 50% 55%, rgba(12,12,12,0.85) 0%, transparent 100%)",
							}}
						/>

						{/* Founder cards */}
						<div
							className={`relative flex items-end gap-4 md:gap-6 transition-all duration-700 ease-out ${
								showFounders
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							{founders.map((founder) => (
								<div
									key={founder.name}
									className="relative w-44 md:w-56 bg-[#141414]/90 border border-white/[0.08] overflow-hidden pointer-events-auto backdrop-blur-sm"
								>
									<CornerNotches size={10} color="rgba(201, 169, 110, 0.2)" />
									<div
										className="w-full h-56 md:h-72"
										style={{
											maskImage:
												"linear-gradient(to bottom, black 70%, transparent 100%)",
											WebkitMaskImage:
												"linear-gradient(to bottom, black 70%, transparent 100%)",
										}}
									>
										<img
											src={founder.image}
											alt={founder.name}
											className="w-full h-full object-cover object-top"
										/>
									</div>
									<div className="px-4 pb-5 -mt-4 relative">
										<span className="block text-[#E8E4DE] text-base font-medium">
											{founder.name}
										</span>
										<span className="block text-[#C9A96E] text-xs font-medium tracking-wide mt-0.5">
											{founder.title}
										</span>
									</div>
								</div>
							))}
						</div>

						{/* Title — directly under cards */}
						<div
							className={`relative mt-6 text-center px-6 transition-all duration-700 ease-out ${
								showTitle
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<h2 className="text-2xl md:text-[40px] md:leading-[48px] font-normal tracking-[-0.48px] text-[#E8E4DE]">
								Built by two{" "}
								<span className="font-serif italic text-[#C9A96E]">builders</span>{" "}
								& tens of AI agents
							</h2>
						</div>
					</div>
				</GridCell>
			</GridSection>
		</div>
	);
}
