import { ArrowUpRight } from "lucide-react";

export function CTASection() {
	return (
		<section className="relative py-32 md:py-40 overflow-hidden">
			{/* Nature painting background */}
			<div className="absolute inset-0">
				<img
					src="/backgrounds/cta-painting.jpg"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse at center, rgba(12,12,12,0.6) 0%, rgba(12,12,12,0.85) 70%)",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-[56px] md:leading-[60px] font-normal tracking-[-1.5px] text-[#E8E4DE] mb-6">
					Ready to find your{" "}
					<span className="font-serif italic text-[#C9A96E]">
						next CTO
					</span>
					?
				</h2>
				<p className="text-[#A39E96] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
					Book a discovery call. We'll map your needs and show you
					exactly how our benchmark-driven process works.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<a
						href="/contact"
						className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-base px-8 py-3.5 rounded-full transition-colors"
					>
						Book a call
						<ArrowUpRight className="w-4 h-4" />
					</a>
					<a
						href="/nbench"
						className="inline-flex items-center gap-2 border border-white/10 text-[#E8E4DE] font-medium text-base px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors"
					>
						Explore NBench
						<ArrowUpRight className="w-4 h-4" />
					</a>
				</div>
			</div>
		</section>
	);
}
