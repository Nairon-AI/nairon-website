import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell, CornerNotches } from "./grid-system";

const stats = [
	{ value: "2,000+", label: "Engineers in our network" },
	{ value: "94%", label: "Placement success rate" },
	{ value: "30", label: "Average days to placement" },
	{ value: "4.8", label: "Average NBench score" },
];

/** Parse a display string like "2,000+" into { number, prefix, suffix, decimals } */
function parseStatValue(value: string) {
	const match = value.match(/^([^\d]*?)([\d,.]+)(.*)$/);
	if (!match) return null;
	const prefix = match[1];
	const numStr = match[2];
	const suffix = match[3];
	const cleaned = numStr.replace(/,/g, "");
	const number = Number.parseFloat(cleaned);
	const decimalPart = cleaned.split(".")[1];
	const decimals = decimalPart ? decimalPart.length : 0;
	const hasCommas = numStr.includes(",");
	return { number, prefix, suffix, decimals, hasCommas };
}

function formatNumber(n: number, decimals: number, hasCommas: boolean) {
	const fixed = n.toFixed(decimals);
	if (!hasCommas) return fixed;
	const [int, dec] = fixed.split(".");
	const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return dec ? `${withCommas}.${dec}` : withCommas;
}

function AnimatedStat({ value, label, borderRight = false }: { value: string; label: string; borderRight?: boolean }) {
	const [display, setDisplay] = useState("0");
	const ref = useRef<HTMLDivElement>(null);
	const hasRun = useRef(false);
	const parsed = parseStatValue(value);

	useEffect(() => {
		if (!parsed || hasRun.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || hasRun.current) return;
				hasRun.current = true;
				observer.disconnect();

				const duration = 1200;
				const start = performance.now();
				const target = parsed.number;

				const animate = (now: number) => {
					const elapsed = now - start;
					const progress = Math.min(elapsed / duration, 1);
					// Ease-out cubic
					const eased = 1 - (1 - progress) ** 3;
					const current = eased * target;
					setDisplay(
						`${parsed.prefix}${formatNumber(current, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`,
					);
					if (progress < 1) requestAnimationFrame(animate);
				};
				requestAnimationFrame(animate);
			},
			{ threshold: 0.3 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [parsed]);

	return (
		<GridCell borderRight={borderRight} className="px-8 py-10 md:py-14 text-center">
			<CornerNotches size={10} />
			<div
				ref={ref}
				className="text-3xl md:text-4xl font-normal tracking-[-1px] text-[#C9A96E] mb-2 font-urbanist tabular-nums"
			>
				{hasRun.current || !parsed
					? display
					: `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`}
			</div>
			<p className="text-[#A39E96] text-sm leading-snug">{label}</p>
		</GridCell>
	);
}

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
						Our proprietary AI-nativeness benchmark scores every
						candidate on architecture, eval discipline, token spend,
						and tooling freshness.
					</p>
				</GridCell>
			</GridSection>

			{/* 4 stat cells in a row with dividers */}
			<GridSection columns="1fr 1fr 1fr 1fr" border>
				{stats.map((stat, i) => (
					<AnimatedStat
						key={stat.label}
						value={stat.value}
						label={stat.label}
						borderRight={i < stats.length - 1}
					/>
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
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							className="translate-y-px"
						>
							<path
								d="M6 12L10 8L6 4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</GridCell>
			</GridSection>
		</div>
	);
}
