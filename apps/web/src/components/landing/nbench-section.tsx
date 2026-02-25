import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell, CornerNotches } from "./grid-system";

const COMMAND = "> /nbench:improve";

const outputLines = [
	{ type: "blank" },
	{ type: "output", text: "  Analyzing 23 sessions..." },
	{ type: "blank" },
	{ type: "label", text: "  Interview Depth" },
	{ type: "bar", value: 82, score: "82" },
	{ type: "label", text: "  Pushback Ratio" },
	{ type: "bar", value: 71, score: "71" },
	{ type: "label", text: "  Prompt Quality" },
	{ type: "bar", value: 84, score: "84" },
	{ type: "blank" },
	{ type: "result", text: "  Score: 79/100 (Top 18%)" },
	{ type: "output", text: "  2 friction patterns detected" },
] as const;

const features = [
	{
		title: "Detects friction patterns",
		description:
			"Shallow prompts, blind acceptance, context loss, undo loops. N-bench finds the patterns that slow you down, then recommends fixes.",
	},
	{
		title: "Open source, verifiable",
		description:
			"Every scoring rubric, every eval, every weight is inspectable on GitHub. No black box. No magic numbers.",
	},
	{
		title: "Improves, not just scores",
		description:
			"You don't just get a number. You get friction-mapped recommendations: MCPs, skills, and patterns that top performers use.",
	},
];

function useTerminalAnimation() {
	const [typedChars, setTypedChars] = useState(0);
	const [visibleLines, setVisibleLines] = useState(0);
	const [barsAnimated, setBarsAnimated] = useState(false);
	const hasRun = useRef(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (hasRun.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || hasRun.current) return;
				hasRun.current = true;
				observer.disconnect();

				// Phase 1: Type command character by character
				let charIndex = 0;
				const typeInterval = setInterval(() => {
					charIndex++;
					setTypedChars(charIndex);
					if (charIndex >= COMMAND.length) {
						clearInterval(typeInterval);

						// Phase 2: Reveal output lines one by one
						let lineIndex = 0;
						const lineInterval = setInterval(() => {
							lineIndex++;
							setVisibleLines(lineIndex);
							if (lineIndex >= outputLines.length) {
								clearInterval(lineInterval);
								// Phase 3: Animate bars
								setTimeout(() => setBarsAnimated(true), 100);
							}
						}, 120);
					}
				}, 45);
			},
			{ threshold: 0.3 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return { ref, typedChars, visibleLines, barsAnimated };
}

function TerminalMockup() {
	const { ref, typedChars, visibleLines, barsAnimated } =
		useTerminalAnimation();

	const showCursor = typedChars < COMMAND.length;

	return (
		<div
			ref={ref}
			className="h-full bg-[#0A0A0A] font-mono text-[12px] md:text-[13px] leading-relaxed overflow-hidden"
		>
			{/* Terminal header */}
			<div className="flex items-center gap-2 px-4 md:px-5 py-3 border-b border-white/6">
				<div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
				<div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
				<div className="w-3 h-3 rounded-full bg-[#28C840]" />
				<span className="ml-3 text-[11px] text-[#A39E96]/50">nbench</span>
			</div>

			{/* Terminal content */}
			<div className="px-4 md:px-5 py-4 space-y-0.5">
				{/* Command line with typing effect */}
				<div className="text-[#E8E4DE]">
					{COMMAND.slice(0, typedChars)}
					{showCursor && (
						<span className="inline-block w-[7px] h-[15px] bg-[#E8E4DE] align-middle animate-pulse ml-px" />
					)}
				</div>

				{/* Output lines */}
				{outputLines.slice(0, visibleLines).map((line, i) => {
					if (line.type === "blank") {
						return (
							<div key={i} className="min-h-[1.5em]" />
						);
					}
					if (line.type === "label") {
						return (
							<div key={i} className="text-[#A39E96] pt-1">
								{line.text}
							</div>
						);
					}
					if (line.type === "bar") {
						return (
							<div
								key={i}
								className="flex items-center gap-3 pl-2"
							>
								<div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
									<div
										className="h-full rounded-full transition-all duration-700 ease-out"
										style={{
											width: barsAnimated
												? `${line.value}%`
												: "0%",
											background:
												"linear-gradient(90deg, #C9A96E, #E2C992)",
										}}
									/>
								</div>
								<span className="text-[#C9A96E] text-xs tabular-nums w-8 text-right">
									{barsAnimated ? line.score : ""}
								</span>
							</div>
						);
					}
					if (line.type === "result") {
						return (
							<div
								key={i}
								className="text-[#C9A96E] font-semibold"
							>
								{line.text}
							</div>
						);
					}
					return (
						<div key={i} className="text-[#A39E96]/60">
							{line.text}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function NBenchSection() {
	return (
		<div>
			{/* Heading row */}
			<GridSection columns="1fr" border>
				<GridCell className="px-6 md:px-12 py-8 md:py-10">
					<div className="flex items-center justify-between">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
								<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
									How we measure
								</span>
							</div>
						<h2 className="text-3xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-3">
							Your AI workflow has gaps.{" "}
							<span className="font-serif italic text-[#C9A96E]">
								N-bench
							</span>{" "}
							finds them.
						</h2>
						<p className="text-[#A39E96] text-sm md:text-base max-w-xl">
							Open-source plugin that analyzes your Claude Code sessions,
							detects friction patterns, and recommends fixes that work.
						</p>
						</div>
						<a
							href="/nbench"
							className="hidden md:inline-flex items-center gap-2 border border-[#C9A96E]/30 text-[#C9A96E] font-medium text-sm px-6 py-3 rounded-full hover:bg-[#C9A96E]/10 transition-colors shrink-0"
						>
							Try NBench
							<ArrowUpRight className="w-4 h-4" />
						</a>
					</div>
				</GridCell>
			</GridSection>

			{/* Terminal top (mobile) / left (desktop) + features bottom/right */}
			<GridSection columns="1fr 1fr" border>
				{/* Terminal mockup */}
				<GridCell borderRight className="p-0 min-h-[300px]">
					<TerminalMockup />
				</GridCell>

				{/* Features — stacked below terminal on mobile */}
				<GridCell className="flex flex-col">
					{features.map((feature, i) => (
						<div
							key={feature.title}
							className="relative flex-1 px-6 py-6 md:px-12 md:py-10 flex flex-col justify-center"
							style={{
								borderBottom:
									i < features.length - 1
										? "var(--guide-width) solid var(--guide-color)"
										: "none",
							}}
						>
							<CornerNotches
								size={8}
								corners={["top-right", "bottom-right"]}
								color="rgba(255, 255, 255, 0.08)"
							/>
							<h3 className="text-lg md:text-2xl font-normal mb-2 md:mb-3 text-[#E8E4DE]">
								{feature.title}
							</h3>
							<p className="text-sm md:text-base leading-relaxed text-[#A39E96]">
								{feature.description}
							</p>
						</div>
					))}
				</GridCell>
			</GridSection>

			{/* GitHub link row */}
			<GridSection columns="1fr" border>
				<GridCell className="py-5 text-center">
					<a
						href="https://github.com/Nairon-AI/n-bench"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2.5 text-[#A39E96] text-sm font-medium hover:text-[#E8E4DE] transition-colors"
					>
						<svg
							viewBox="0 0 16 16"
							className="w-4 h-4 fill-current"
							aria-hidden="true"
						>
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
						View N-bench on GitHub
						<svg
							width="14"
							height="14"
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
