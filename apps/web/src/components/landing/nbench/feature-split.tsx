import { NBENCH_FEATURE_SPLIT } from "@/data/nbench";
import { LinearGlassCard, NBenchSection } from "@/components/landing/nbench/primitives";

function barColor(score: number) {
	if (score >= 80) return "#4ade80";
	if (score >= 70) return "#eab308";
	return "#f97316";
}

function DashboardTerminal() {
	const { dashboard } = NBENCH_FEATURE_SPLIT.right;
	return (
		<LinearGlassCard
			className="relative max-w-[560px] shadow-[0_42px_120px_rgba(0,0,0,0.72)]"
			innerClassName="overflow-hidden"
		>
			<div className="flex items-center justify-between border-b border-white/[0.07] bg-black/30 px-5 py-3.5">
				<div className="flex items-center gap-2">
					<span className="size-3 rounded-full bg-[#ff5f57]" />
					<span className="size-3 rounded-full bg-[#febc2e]" />
					<span className="size-3 rounded-full bg-[#28c840]" />
				</div>
				<p className="font-inter text-[13px] text-white/45">nb dashboard</p>
				<div className="w-10" />
			</div>

			<div className="bg-[linear-gradient(180deg,#0b0b0b_0%,#090909_100%)] px-5 py-5 font-mono text-[14px] leading-[1.7] text-[#d2d2d2] md:px-6 md:text-[15px]">
				<p className="text-white/50">$ nb dashboard</p>
				<div className="mt-4">
					<p>
						<span className="text-[#4ade80]">
							Your Benchmark Score: {dashboard.score.value}/{dashboard.score.max}
						</span>
						<span className="ml-3 text-white/40">{dashboard.score.percentile}</span>
					</p>
					<p>
						<span className="text-[#4ade80]">
							Token Efficiency: {dashboard.tokenEfficiency.multiplier}
						</span>
						<span className="ml-3 text-white/40">
							({dashboard.tokenEfficiency.note})
						</span>
					</p>
				</div>

				<div className="mt-5 space-y-2.5">
					{dashboard.categories.map((cat) => (
						<div key={cat.name} className="flex items-center gap-2">
							<span className="w-[105px] shrink-0 text-[13px] text-white/75 md:text-[14px]">
								{cat.name}
							</span>
							<span
								className="w-[22px] shrink-0 text-right text-[13px] font-medium md:text-[14px]"
								style={{ color: barColor(cat.score) }}
							>
								{cat.score}
							</span>
							<span className="w-[46px] shrink-0 whitespace-nowrap text-[11px] text-white/35 md:text-[12px]">
								{cat.percentile}
							</span>
							<div className="relative h-[8px] flex-1 overflow-hidden rounded-full bg-white/[0.08]">
								<div
									className="absolute inset-y-0 left-0 rounded-full"
									style={{
										width: `${cat.score}%`,
										backgroundColor: barColor(cat.score),
									}}
								/>
							</div>
						</div>
					))}
				</div>

				<p className="mt-5 border-t border-white/[0.07] pt-4 text-[13px] text-white/45 md:text-[14px]">
					Tokens this week:{" "}
					<span className="text-white/70">{dashboard.footer.tokens}</span>
					<span className="mx-2 text-white/25">|</span>
					Waste:{" "}
					<span className="text-[#4ade80]">{dashboard.footer.waste}</span>
					<span className="mx-2 text-white/25">|</span>
					Cost:{" "}
					<span className="text-white/70">{dashboard.footer.cost}</span>
				</p>
			</div>
		</LinearGlassCard>
	);
}

export function NBenchFeatureSplit() {
	const { left, right } = NBENCH_FEATURE_SPLIT;

	return (
		<NBenchSection className="overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
			<div className="relative">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.14)_78%,transparent)]" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.14)_78%,transparent)]" />
				<div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_72%)]" />
				<div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.08] lg:block" />
				<div className="grid lg:grid-cols-2">
					<div className="px-1 py-12 md:px-8 md:py-16 lg:pr-16">
						<h2 className="font-inter text-[34px] font-[530] leading-[1.12] tracking-[-0.022em] text-white md:text-[42px]">
							{left.title}
						</h2>
						<p className="mt-4 max-w-[34ch] font-inter text-[16px] leading-[1.52] text-[#8f8f8f]">
							{left.description}
						</p>

						<div className="relative mt-10">
							<div className="pointer-events-none absolute -inset-x-14 -top-12 h-36 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-2xl" />
							<LinearGlassCard
								className="relative max-w-[560px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.68)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px] after:bg-[linear-gradient(90deg,rgba(0,0,0,0)_26%,rgba(0,0,0,1)_100%)] after:content-['']"
								innerClassName="relative overflow-hidden border-white/[0.06] bg-[linear-gradient(165deg,rgba(16,16,16,0.98)_0%,rgba(11,11,11,0.98)_100%)] p-6"
							>
								<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.07),transparent_35%)]" />
								<p className="font-inter text-[18px] text-white/70">*</p>
								<p className="-mt-7 pl-8 font-inter text-[20px] font-[530] tracking-[-0.02em] text-white">
									{left.panelTitle}
								</p>

								<div className="mt-5 space-y-4 font-inter text-[14px] text-white/58">
									<div className="flex flex-wrap items-center gap-2">
										<span className="w-[112px] text-white/58">Phases</span>
										{left.suggestions.map((item) => (
											<span
												key={item}
												className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
											>
												{item}
											</span>
										))}
									</div>
									<div className="flex items-center gap-3">
										<span className="w-[112px] text-white/58">Score</span>
										<span className="text-white/65">{left.duplicateOf}</span>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-[112px] text-white/58">Friction</span>
										<span className="text-white/65">{left.relatedTo}</span>
									</div>
								</div>
							</LinearGlassCard>

							<LinearGlassCard
								className="relative -mt-3 ml-10 w-full max-w-[500px] overflow-hidden shadow-[0_36px_90px_rgba(0,0,0,0.76)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px] after:bg-[linear-gradient(90deg,rgba(0,0,0,0)_24%,rgba(0,0,0,1)_100%)] after:content-[''] md:-mt-32 md:ml-36"
								innerClassName="relative overflow-hidden border-white/[0.08] bg-[linear-gradient(165deg,#121212_0%,#0b0b0b_100%)] p-5"
							>
								<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_38%)]" />
								<p className="font-inter text-[16px] font-[520] tracking-[-0.02em] text-white">
									{left.popover.headline}
								</p>
								<div className="mt-3 border-t border-white/[0.08] pt-4">
									<p className="font-inter text-[14px] leading-[1.45] text-white/58">
										{left.popover.description}
									</p>
									<div className="mt-3 space-y-2">
										{left.popover.commands.map((command) => (
											<p
												key={command}
												className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[13px] text-white/72"
											>
												{command}
											</p>
										))}
									</div>
								</div>
								<div className="mt-4 border-t border-white/[0.08] pt-4">
									<p className="font-inter text-[15px] font-[520] text-white/85">Focus areas</p>
									<div className="mt-3 flex flex-wrap gap-2">
										{left.popover.alternatives.map((name) => (
											<span
												key={name}
												className="rounded-md border border-dashed border-white/[0.2] bg-white/[0.02] px-3 py-1.5 font-inter text-[13px] text-white/85"
											>
												{name}
											</span>
										))}
									</div>
								</div>
								<button
									type="button"
									className="mt-5 w-full rounded-xl border border-white/[0.1] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-4 py-2.5 font-inter text-[14px] font-[520] text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
								>
									{left.cta}
								</button>
							</LinearGlassCard>
						</div>
					</div>

					<div className="px-1 py-12 md:px-8 md:py-16 lg:pl-16">
						<h2 className="font-inter text-[34px] font-[530] leading-[1.12] tracking-[-0.022em] text-white md:text-[42px]">
							{right.title}
						</h2>
						<p className="mt-4 max-w-[34ch] font-inter text-[16px] leading-[1.52] text-[#8f8f8f]">
							{right.description}
						</p>

						<div className="relative mt-10 max-w-[560px] pb-3">
							<div className="pointer-events-none absolute -inset-x-14 -top-12 h-36 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-2xl" />
							<DashboardTerminal />
						</div>
					</div>
				</div>
			</div>
		</NBenchSection>
	);
}
