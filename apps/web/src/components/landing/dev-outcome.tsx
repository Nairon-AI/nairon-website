import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell } from "./grid-system";

const columns = [
	{ label: "AI-native engineer", highlight: true },
	{ label: "Traditional + AI tools" },
	{ label: "Traditional developer" },
];

const metrics = [
	{
		label: "Shipping velocity",
		subtitle: "Features per sprint",
		values: ["11.8", "6.4", "3.2"],
		best: 0,
		badge: "3.7x \u2191",
	},
	{
		label: "Time to production",
		subtitle: "Avg. days, PR to deploy",
		values: ["1.2", "3.1", "4.7"],
		best: 0,
		badge: "3.9x \u2193",
	},
	{
		label: "Code review throughput",
		subtitle: "PRs reviewed per week",
		values: ["34", "18", "12"],
		best: 0,
		badge: "2.8x \u2191",
	},
	{
		label: "Bug resolution",
		subtitle: "Avg. hours to fix",
		values: ["1.8", "4.2", "6.4"],
		best: 0,
		badge: "3.6x \u2193",
	},
	{
		label: "Test coverage",
		subtitle: "Automated coverage",
		values: ["89%", "61%", "47%"],
		best: 0,
		badge: "1.9x \u2191",
	},
	{
		label: "Architecture quality",
		subtitle: "NBench arch score",
		values: ["8.7", "5.4", "4.1"],
		best: 0,
		badge: "2.1x \u2191",
	},
	{
		label: "Context utilization",
		subtitle: "Token efficiency score",
		values: ["9.2", "3.8", "\u2014"],
		best: 0,
	},
];

const ROW_STAGGER = 120; // ms between each row

export function DevOutcome() {
	const tableRef = useRef<HTMLTableElement>(null);
	const [visibleRows, setVisibleRows] = useState(-1);

	useEffect(() => {
		const el = tableRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					for (let i = 0; i <= metrics.length; i++) {
						setTimeout(() => setVisibleRows(i), i * ROW_STAGGER);
					}
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div>
			<GridSection columns="1fr" border>
				<GridCell className="px-12 py-10">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							The Data
						</span>
					</div>
					<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-3">
						The gap is measurable
					</h2>
					<p className="text-[#A39E96] text-base max-w-xl">
						Across 2,000+ engineers assessed with NBench, AI-native engineers consistently outperform on every metric that matters.
					</p>
				</GridCell>
			</GridSection>

			<GridSection columns="1fr" border>
				<GridCell className="px-12 py-8 overflow-x-auto">
					<table ref={tableRef} className="w-full border-collapse">
						<thead>
							<tr
								className="transition-all duration-500 ease-out"
								style={{
									opacity: visibleRows >= 0 ? 1 : 0,
									transform: visibleRows >= 0 ? "translateY(0)" : "translateY(12px)",
								}}
							>
								<th className="text-left w-[200px]" />
								{columns.map((col) => (
									<th
										key={col.label}
										className="text-center px-4 py-3 text-sm font-medium"
										style={{
											color: col.highlight ? "#E8E4DE" : "#A39E96",
											borderBottom: col.highlight
												? "2px solid #C9A96E"
												: "1px solid rgba(255,255,255,0.06)",
										}}
									>
										{col.label}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{metrics.map((metric, mi) => (
								<tr
									key={metric.label}
									className="transition-all duration-500 ease-out"
									style={{
										borderBottom: "1px solid rgba(255,255,255,0.06)",
										opacity: visibleRows > mi ? 1 : 0,
										transform: visibleRows > mi ? "translateY(0)" : "translateY(12px)",
									}}
								>
									<td className="py-4 pr-6 align-top">
										<span className="text-sm font-medium text-[#E8E4DE] block">
											{metric.label}
										</span>
										<span className="text-[11px] text-[#A39E96]/60">
											{metric.subtitle}
										</span>
									</td>
									{metric.values.map((value, i) => (
										<td
											key={columns[i].label}
											className="text-center py-4 px-4"
											style={{
												background:
													i === metric.best
														? "rgba(201, 169, 110, 0.08)"
														: "transparent",
											}}
										>
											<span
												className="text-sm tabular-nums font-semibold"
												style={{
													color:
														i === metric.best
															? "#C9A96E"
															: "#A39E96",
												}}
											>
												{value}
											</span>
											{i === metric.best && metric.badge && (
												<span className="ml-2 inline-block text-[10px] font-semibold text-[#C9A96E] bg-[#C9A96E]/10 px-1.5 py-0.5 rounded">
													{metric.badge}
												</span>
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>

					<p className="text-[10px] text-[#A39E96]/40 mt-6">
						Source: NBench aggregate data, 2,000+ assessed engineers, Q4 2025
					</p>
				</GridCell>
			</GridSection>
		</div>
	);
}
