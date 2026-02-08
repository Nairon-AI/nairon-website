import { NBENCH_WHAT_WE_TRACK } from "@/data/nbench";
import { LinearGlassCard, NBenchSection } from "@/components/landing/nbench/primitives";

export function NBenchWhatWeTrack() {
	return (
		<NBenchSection className="overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
			<div className="mx-auto max-w-4xl text-center">
				<div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 font-inter text-[11px] uppercase tracking-[0.12em] text-white/65">
					{NBENCH_WHAT_WE_TRACK.badge}
				</div>
				<h2 className="mt-5 font-inter text-[34px] font-[530] leading-[1.1] tracking-[-0.025em] text-white md:text-[44px]">
					{NBENCH_WHAT_WE_TRACK.title}
				</h2>
				<p className="mt-4 font-inter text-[16px] leading-[1.55] text-white/58 md:text-[18px]">
					{NBENCH_WHAT_WE_TRACK.description}
				</p>
			</div>

			<div className="relative mt-10 border border-white/[0.08] md:mt-12">
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
				<div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.08] lg:block" />
				<div className="grid lg:grid-cols-2">
					{NBENCH_WHAT_WE_TRACK.cards.map((card, index) => (
						<div key={card.title} className="px-6 py-10 md:px-8 md:py-12 lg:px-10">
							<h3 className="max-w-[14ch] font-inter text-[42px] font-[530] leading-[0.98] tracking-[-0.03em] text-white md:text-[56px]">
								{card.title}
							</h3>
							<p className="mt-4 max-w-[34ch] font-inter text-[17px] leading-[1.5] text-white/55">
								{index === 0
									? "Understand where token spend is driving output versus waste, and where model choices are overpaying for routine work."
									: "Track if workflow changes actually improve delivery speed and quality across planning, implementation, and review."}
							</p>

							<LinearGlassCard
								className="relative mt-8 overflow-hidden"
								innerClassName="relative overflow-hidden bg-[linear-gradient(180deg,rgba(16,16,16,0.98)_0%,rgba(8,8,8,0.98)_100%)] p-5"
							>
								<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_36%)]" />
								<div className="relative space-y-3">
									{card.items.map((item) => (
										<div
											key={item}
											className="inline-flex w-fit items-center rounded-md border border-white/[0.1] bg-white/[0.02] px-3 py-1.5 font-inter text-[15px] text-white/72"
										>
											{item}
										</div>
									))}
								</div>
							</LinearGlassCard>
						</div>
					))}
				</div>
			</div>
		</NBenchSection>
	);
}
