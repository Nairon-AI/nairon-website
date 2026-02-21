import { ArrowUpRight } from "lucide-react";

export function HeroNew() {
	return (
		<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
			{/* Nature painting background */}
			<div className="absolute inset-0">
				<img
					src="/backgrounds/hero-painting.jpg"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to bottom, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.5) 40%, rgba(12,12,12,0.7) 70%, rgb(12,12,12) 100%)",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
					Find the CTO{" "}
					<span className="font-serif italic text-[#C9A96E]">
						who builds
					</span>{" "}
					your vision
				</h1>

				{/* Subtitle */}
				<p className="mt-6 text-lg md:text-xl text-[#A39E96] max-w-2xl leading-relaxed">
					Nairon is a data-driven CTO recruiting agency. We use proprietary
					benchmarks to match companies with technical leaders who ship.
				</p>

				{/* CTAs */}
				<div className="flex flex-wrap gap-4 mt-10">
					<a
						href="/contact"
						className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-base px-6 py-3 rounded-full transition-colors"
					>
						Hire a CTO
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
		</section>
	);
}
