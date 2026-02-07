import { useEffect, useState, useCallback, useRef } from "react";
import { X, Radar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/contexts/view-mode-context";

const APPEAR_DELAY = 15_000;
const VISIBLE_DURATION = 12_000;
const EXIT_DURATION = 400;
const STORAGE_KEY = "nairon-benchmark-widget-dismissed";
const BORDER_RADIUS = 16;

export function BenchmarkWidget() {
	const { isHiringManager } = useViewMode();
	const [visible, setVisible] = useState(false);
	const [closing, setClosing] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [dims, setDims] = useState({ w: 0, h: 0, perimeter: 0 });
	const strokeColor = isHiringManager ? "#CF9611" : "#22DB18";
	const strokeHighlight = isHiringManager ? "#F5C842" : "#4ade80";

	// Measure the card to compute the SVG stroke perimeter
	useEffect(() => {
		if (!visible || !containerRef.current) return;
		const { offsetWidth: w, offsetHeight: h } = containerRef.current;
		const perimeter = 2 * (w + h) - 8 * BORDER_RADIUS + 2 * Math.PI * BORDER_RADIUS;
		setDims({ w, h, perimeter });
	}, [visible]);

	// Show after delay
	useEffect(() => {
		if (sessionStorage.getItem(STORAGE_KEY)) return;
		const showTimer = setTimeout(() => setVisible(true), APPEAR_DELAY);
		return () => clearTimeout(showTimer);
	}, []);

	// Auto-dismiss after 12s
	useEffect(() => {
		if (!visible || closing) return;
		const autoClose = setTimeout(() => dismiss(), VISIBLE_DURATION);
		return () => clearTimeout(autoClose);
	}, [visible, closing]);

	const dismiss = useCallback(() => {
		setClosing(true);
		setTimeout(() => {
			setVisible(false);
			setClosing(false);
			sessionStorage.setItem(STORAGE_KEY, "1");
		}, EXIT_DURATION);
	}, []);

	if (!visible) return null;

	const inset = 2;
	const rw = dims.w - inset * 2;
	const rh = dims.h - inset * 2;

	return (
		<div
			ref={containerRef}
			className={cn(
				"fixed bottom-6 left-6 z-[100] max-w-[440px] w-[calc(100vw-3rem)]",
				"benchmark-widget-enter",
				closing && "benchmark-widget-exit",
			)}
		>
			{/* Animated glowing green border stroke */}
			{dims.perimeter > 0 && (
				<svg
					className="absolute inset-0 pointer-events-none"
					width={dims.w}
					height={dims.h}
					style={{ overflow: "visible" }}
				>
					<defs>
						<linearGradient id="bw-stroke-grad" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor={strokeColor} />
							<stop offset="50%" stopColor={strokeHighlight} />
							<stop offset="100%" stopColor={strokeColor} />
						</linearGradient>
						{/* Glow blur filter */}
						<filter id="bw-glow" x="-20%" y="-20%" width="140%" height="140%">
							<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
							<feComposite in="blur" in2="SourceGraphic" operator="over" />
						</filter>
					</defs>

					{/* Outer glow layer */}
					<rect
						x={inset}
						y={inset}
						width={rw}
						height={rh}
						rx={BORDER_RADIUS}
						ry={BORDER_RADIUS}
						fill="none"
						stroke={strokeColor}
						strokeOpacity="0.5"
						strokeWidth="4"
						strokeDasharray={dims.perimeter}
						strokeDashoffset={dims.perimeter}
						filter="url(#bw-glow)"
						className="benchmark-stroke-animate"
					/>

					{/* Core bright stroke */}
					<rect
						x={inset}
						y={inset}
						width={rw}
						height={rh}
						rx={BORDER_RADIUS}
						ry={BORDER_RADIUS}
						fill="none"
						stroke="url(#bw-stroke-grad)"
						strokeWidth="2"
						strokeDasharray={dims.perimeter}
						strokeDashoffset={dims.perimeter}
						className="benchmark-stroke-animate"
					/>
				</svg>
			)}

			{/* Glass card */}
			<div
				className={cn(
					"relative rounded-2xl overflow-hidden",
					"bg-[rgba(12,12,15,0.95)] backdrop-blur-2xl",
					"border border-white/[0.06]",
					"shadow-[0_32px_64px_rgba(0,0,0,0.5)]",
				)}
			>
				{/* Content */}
				<div className="p-5">
					{/* Header row */}
					<div className="flex items-start justify-between gap-3 mb-3">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand/[0.1] border border-brand/[0.15]">
								<Radar className="w-[18px] h-[18px] text-brand" />
							</div>
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-brand/[0.12] text-brand border border-brand/[0.15]">
								Coming Soon
							</span>
						</div>
						<button
							type="button"
							onClick={dismiss}
							className="flex items-center justify-center w-7 h-7 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-200 -mt-0.5 -mr-1"
						>
							<X className="w-3.5 h-3.5" />
						</button>
					</div>

					{/* Title */}
					<h3 className="text-[15px] font-semibold text-landing-text leading-snug tracking-tight mb-1.5">
						AI-Native Developer Assessment
					</h3>

					{/* Description */}
					<p className="text-[13px] leading-relaxed text-landing-text-body/80 mb-4">
						A proprietary benchmark for AI-native developer performance.
					</p>

					{/* Metric pills */}
					<div className="flex flex-wrap gap-1.5 mb-4">
						{["Planning", "Implementation", "Code Review", "Research"].map(
							(dim) => (
								<span
									key={dim}
									className="px-2 py-0.5 rounded-md text-[11px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.06]"
								>
									{dim}
								</span>
							),
						)}
					</div>

					{/* CTA */}
					<a
						href="/hire"
						className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-brand hover:text-brand-hover transition-colors duration-200"
					>
						Learn more
						<svg
							className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
							fill="none"
							viewBox="0 0 14 14"
						>
							<title>Arrow right</title>
							<path
								d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
