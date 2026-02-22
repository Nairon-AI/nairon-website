import { ArrowUpRight } from "lucide-react";

const NOTCH = 16;

function CornerNotches() {
	const corners = [
		{ pos: "top-0 left-0", rotate: "" },
		{ pos: "top-0 right-0", rotate: "rotate-90" },
		{ pos: "bottom-0 right-0", rotate: "rotate-180" },
		{ pos: "bottom-0 left-0", rotate: "-rotate-90" },
	];
	return (
		<>
			{corners.map(({ pos, rotate }) => (
				<div key={pos} className={`absolute ${pos} pointer-events-none`}>
					<svg
						width={NOTCH}
						height={NOTCH}
						viewBox={`0 0 ${NOTCH} ${NOTCH}`}
						className={rotate}
					>
						<path
							d={`M0,0 L${NOTCH},0 L0,${NOTCH} Z`}
							fill="none"
							stroke="rgba(255,255,255,0.15)"
							strokeWidth="1"
						/>
					</svg>
				</div>
			))}
		</>
	);
}

export function HeroNew() {
	return (
		<div className="relative flex flex-col justify-center items-center text-center px-12 py-20 md:py-24">
			<CornerNotches />
			{/* Social proof badge */}
			<div className="flex items-center gap-3 mb-8">
				<div className="flex -space-x-2">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#0C0C0C]"
						/>
					))}
				</div>
				<span className="text-[#A39E96] text-sm">
					Trusted by 50+ companies in the Gulf
				</span>
			</div>

			{/* Headline */}
			<h1 className="text-5xl md:text-[80px] md:leading-[80px] font-normal tracking-[-2.4px] text-[#E8E4DE] max-w-4xl">
				Find AI-native engineers{" "}
				<span className="font-serif italic text-[#C9A96E]">
					who ship
				</span>
			</h1>

			{/* Subtitle */}
			<p className="mt-6 text-lg md:text-xl text-[#A39E96] max-w-2xl leading-relaxed">
				Nairon is a data-driven technical recruiting agency. We use proprietary
				benchmarks to match companies with AI-native engineers who build.
			</p>

			{/* CTAs */}
			<div className="flex flex-wrap justify-center gap-4 mt-10">
				<a
					href="/contact"
					className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-base px-6 py-3 rounded-full transition-colors"
				>
					Hire engineers
					<ArrowUpRight className="w-4 h-4" />
				</a>
				<a
					href="/candidates"
					className="inline-flex items-center gap-2 border border-white/10 text-[#E8E4DE] font-medium text-base px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
				>
					I'm a candidate
					<ArrowUpRight className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
}
