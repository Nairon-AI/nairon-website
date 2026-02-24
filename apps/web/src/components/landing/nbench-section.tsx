import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GridSection, GridCell, CornerNotches } from "./grid-system";

const COMMAND = "$ nbench run --engineer @kwao";

const outputLines = [
	{ type: "blank" },
	{ type: "output", text: "  Running NBench v2.4.1" },
	{ type: "output", text: "  Evaluating 3 dimensions..." },
	{ type: "blank" },
	{ type: "label", text: "  Agent-first thinking" },
	{ type: "bar", value: 92, score: "9.2" },
	{ type: "label", text: "  Eval discipline" },
	{ type: "bar", value: 87, score: "8.7" },
	{ type: "label", text: "  Token efficiency" },
	{ type: "bar", value: 84, score: "8.4" },
	{ type: "blank" },
	{ type: "result", text: "  Overall: 8.8 / 10  ▸ Top 4%" },
	{ type: "output", text: "  Report saved to ./reports/kwao.json" },
] as const;

const features = [
	{
		title: "Measures what interviews can't",
		description:
			"NBench evaluates the three dimensions of AI-nativeness through real-world tasks. Not whiteboard puzzles. Not take-home projects. Actual engineering work.",
	},
	{
		title: "Open source, verifiable",
		description:
			"The benchmark is fully open source. Every scoring rubric, every eval, every weight is inspectable. No black box.",
	},
	{
		title: "Trains, not just scores",
		description:
			"Engineers who go through NBench don't just get a number. They get a breakdown of where they are and a path to improve. We train the engineers we place.",
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
			className="h-full bg-[#0A0A0A] font-mono text-[13px] leading-relaxed overflow-hidden"
		>
			{/* Terminal header */}
			<div className="flex items-center gap-2 px-5 py-3 border-b border-white/6">
				<div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
				<div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
				<div className="w-3 h-3 rounded-full bg-[#28C840]" />
				<span className="ml-3 text-[11px] text-[#A39E96]/50">nbench</span>
			</div>

			{/* Terminal content */}
			<div className="px-5 py-4 space-y-0.5">
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
				<GridCell className="px-12 py-10">
					<div className="flex items-center justify-between">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
								<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
									How we measure
								</span>
							</div>
							<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-3">
								We built{" "}
								<span className="font-serif italic text-[#C9A96E]">
									NBench
								</span>{" "}
								to prove it
							</h2>
							<p className="text-[#A39E96] text-base max-w-xl">
								An open-source CLI that measures AI-nativeness across
								the three dimensions that matter. Every engineer in our
								network runs it.
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

			{/* Terminal left + features right */}
			<GridSection columns="1fr 1fr" border>
				{/* Terminal mockup */}
				<GridCell borderRight className="p-0">
					<TerminalMockup />
				</GridCell>

				{/* Features */}
				<GridCell className="flex flex-col">
					{features.map((feature, i) => (
						<div
							key={feature.title}
							className="relative flex-1 px-10 py-8 md:px-12 md:py-10 flex flex-col justify-center"
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
							<h3 className="text-xl md:text-2xl font-normal mb-3 text-[#E8E4DE]">
								{feature.title}
							</h3>
							<p className="text-base leading-relaxed text-[#A39E96]">
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
						href="https://github.com/nairon-ai/nbench"
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
						View NBench on GitHub
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
