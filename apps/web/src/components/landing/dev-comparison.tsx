import { useState, useRef, useCallback } from "react";
import { GridSection, GridCell } from "./grid-system";

export function DevComparison() {
	const [pos, setPos] = useState(50);
	const containerRef = useRef<HTMLDivElement>(null);

	const handlePointerDown = useCallback(
		(e: React.PointerEvent) => {
			e.preventDefault();
			const target = e.currentTarget as HTMLElement;
			target.setPointerCapture(e.pointerId);

			const onMove = (ev: PointerEvent) => {
				const rect = containerRef.current?.getBoundingClientRect();
				if (!rect) return;
				const pct = ((ev.clientX - rect.left) / rect.width) * 100;
				setPos(Math.min(95, Math.max(5, pct)));
			};

			const onUp = () => {
				target.removeEventListener("pointermove", onMove);
				target.removeEventListener("pointerup", onUp);
			};

			target.addEventListener("pointermove", onMove);
			target.addEventListener("pointerup", onUp);
		},
		[],
	);

	return (
		<div>
			{/* Heading row */}
			<GridSection columns="1fr" border>
				<GridCell className="px-6 md:px-12 pt-10 md:pt-12 pb-8 md:pb-10">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							The shift
						</span>
					</div>
					<h2 className="text-3xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-4xl">
						From manual coding to{" "}
						<span className="font-serif italic text-[#C9A96E]">
							AI-native orchestration
						</span>
					</h2>
				</GridCell>
			</GridSection>

			{/* Interactive comparison slider */}
			<GridSection columns="1fr" border>
				<GridCell>
					<div
						ref={containerRef}
						className="relative overflow-hidden select-none h-[360px] md:h-[620px]"
					>
						{/* Right panel — AI-native (clipped: slider → right edge) */}
						<div
							className="absolute inset-0"
							style={{
								clipPath: `inset(0 0 0 ${pos}%)`,
							}}
						>
							<img
								src="/backgrounds/pastoral-hills.webp"
								alt="Pastoral hills landscape representing AI-native engineering"
								className="absolute inset-0 w-full h-full object-cover"
								loading="lazy"
							/>
							<div
								className="absolute inset-0"
								style={{ background: "rgba(12, 12, 12, 0.45)" }}
							/>
							{/* moderndev — centered, fixed height */}
							<div
								className="absolute rounded-lg overflow-hidden shadow-2xl border-2 border-[#C9A96E]/20"
								style={{
									left: "50%",
									top: "50%",
									width: "85%",
									height: "75%",
									maxHeight: 460,
									transform: "translate(-50%, -50%)",
									zIndex: 2,
								}}
							>
								<img
									src="/moderndev.webp"
									alt="AI-native development environment"
									className="w-full h-full object-cover object-top"
									loading="lazy"
								/>
							</div>
							{/* Label */}
							<div className="absolute top-3 right-3 md:top-6 md:right-6 z-10">
								<span
									className="inline-block text-[10px] md:text-xs font-medium uppercase tracking-[0.12em] px-2 md:px-3 py-1 md:py-1.5 rounded-full"
									style={{
										background: "rgba(201, 169, 110, 0.12)",
										color: "#C9A96E",
										border: "1px solid rgba(201, 169, 110, 0.2)",
									}}
								>
									AI-native engineer
								</span>
							</div>
						</div>

						{/* Left panel — Traditional (clipped by slider, on top) */}
						<div
							className="absolute inset-0"
							style={{
								clipPath: `inset(0 ${100 - pos}% 0 0)`,
							}}
						>
							<img
								src="/backgrounds/hazy-landscape.webp"
								alt="Hazy landscape representing traditional development"
								className="absolute inset-0 w-full h-full object-cover"
								loading="lazy"
							/>
							<div
								className="absolute inset-0"
								style={{ background: "rgba(12, 12, 12, 0.45)" }}
							/>
							{/* VS Code — centered, fixed height */}
							<div
								className="absolute rounded-lg overflow-hidden shadow-2xl border border-white/10"
								style={{
									left: "50%",
									top: "50%",
									width: "85%",
									height: "75%",
									maxHeight: 460,
									transform: "translate(-50%, -50%)",
									zIndex: 2,
								}}
							>
								<img
									src="/vscode.webp"
									alt="VS Code traditional development environment"
									className="w-full h-full object-cover object-top"
									loading="lazy"
								/>
							</div>
							{/* Label */}
							<div className="absolute top-3 left-3 md:top-6 md:left-6 z-10">
								<span
									className="inline-block text-[10px] md:text-xs font-medium uppercase tracking-[0.12em] px-2 md:px-3 py-1 md:py-1.5 rounded-full"
									style={{
										background: "rgba(255, 255, 255, 0.08)",
										color: "#A39E96",
										border: "1px solid rgba(255, 255, 255, 0.06)",
									}}
								>
									Traditional developer
								</span>
							</div>
						</div>

						{/* Drag handle */}
						<div
							className="absolute top-0 bottom-0 z-20"
							style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
						>
							{/* Vertical line */}
							<div
								className="absolute top-0 bottom-0 left-1/2"
								style={{
									width: 1,
									transform: "translateX(-0.5px)",
									background: "rgba(255, 255, 255, 0.3)",
								}}
							/>
							{/* Circle handle */}
							<div
								className="absolute left-1/2 top-1/2 flex items-center justify-center"
								style={{
									width: 36,
									height: 36,
									transform: "translate(-50%, -50%)",
									borderRadius: "50%",
									background: "#0C0C0C",
									border: "2px solid #C9A96E",
									cursor: "ew-resize",
									touchAction: "none",
								}}
								onPointerDown={handlePointerDown}
							>
								<svg
									width={12}
									height={12}
									viewBox="0 0 12 12"
									fill="none"
									style={{ color: "#C9A96E" }}
								>
									<path
										d="M1 6L4 3M1 6L4 9M1 6H5M11 6L8 3M11 6L8 9M11 6H7"
										stroke="currentColor"
										strokeWidth={1.5}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</GridCell>
			</GridSection>

			{/* Captions row */}
			<GridSection columns="1fr 1fr" border>
				<GridCell borderRight className="px-4 md:px-8 py-4 md:py-6">
					<p className="text-[#A39E96] text-xs md:text-sm leading-relaxed">
						Juggling VS Code, Linear, Slack, and a terminal.
						Context-switching between tools, manually writing every line.
					</p>
				</GridCell>
				<GridCell className="px-4 md:px-8 py-4 md:py-6">
					<p className="text-[#A39E96] text-xs md:text-sm leading-relaxed">
						One orchestrator, multiple AI agents. Reviewing, directing,
						and shipping — 10x the output with focused intent.
					</p>
				</GridCell>
			</GridSection>
		</div>
	);
}
