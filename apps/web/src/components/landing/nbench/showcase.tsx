import { NBENCH_CAPABILITIES } from "@/data/nbench";
import { LinearGlassCard, NBenchSection } from "@/components/landing/nbench/primitives";

function CapabilityCard({
	title,
	copy,
	tag,
	index,
}: {
	title: string;
	copy: string;
	tag: string;
	index: number;
}) {
	return (
		<LinearGlassCard
			className="h-full shadow-[0_52px_120px_rgba(0,0,0,0.58),0_10px_24px_rgba(0,0,0,0.34)]"
			innerClassName="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(180deg,rgba(18,18,18,0.98)_0%,rgba(11,11,11,0.99)_100%)]"
		>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.04)_0%,transparent_32%,transparent_70%,rgba(255,255,255,0.03)_100%)]" />
			<div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-42px_84px_rgba(0,0,0,0.42)]" />
			<div className="absolute left-6 top-6 rounded-full border border-white/12 bg-white/5 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.12em] text-white/60">
				{tag}
			</div>

			<div className="relative h-[230px] border-b border-white/[0.07]">
				{index === 0 ? (
					<>
						<div className="absolute left-[20%] top-[30%] h-20 w-36 rounded-xl border border-white/10 bg-white/[0.02] [transform:skewY(-14deg)] shadow-[0_12px_28px_rgba(0,0,0,0.42)]" />
						<div className="absolute left-[29%] top-[36%] h-20 w-36 rounded-xl border border-white/10 bg-white/[0.02] [transform:skewY(-14deg)] shadow-[0_12px_28px_rgba(0,0,0,0.42)]" />
						<div className="absolute left-[38%] top-[42%] h-20 w-36 rounded-xl border border-white/10 bg-white/[0.02] [transform:skewY(-14deg)] shadow-[0_12px_28px_rgba(0,0,0,0.42)]" />
						<div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_44%,rgba(255,255,255,0.08)_100%)]" />
					</>
				) : null}

				{index === 1 ? (
					<>
						<div className="absolute left-[15%] top-[24%] w-[52%] rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.34)]">
							<p className="font-inter text-[10px] uppercase tracking-[0.1em] text-white/52">Week 1</p>
							<p className="mt-1 font-inter text-[13px] tracking-[-0.01em] text-white/76">Score 64</p>
						</div>
						<div className="absolute left-[31%] top-[40%] w-[52%] rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.34)]">
							<p className="font-inter text-[10px] uppercase tracking-[0.1em] text-white/52">Week 2</p>
							<p className="mt-1 font-inter text-[13px] tracking-[-0.01em] text-white/76">Score 71</p>
						</div>
						<div className="absolute left-[47%] top-[56%] w-[43%] rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.34)]">
							<p className="font-inter text-[10px] uppercase tracking-[0.1em] text-white/52">Week 3</p>
							<p className="mt-1 font-inter text-[13px] tracking-[-0.01em] text-white/76">Score 78</p>
						</div>
						<div className="absolute inset-0 bg-[linear-gradient(165deg,transparent_30%,rgba(255,255,255,0.09)_78%,transparent_100%)]" />
					</>
				) : null}

				{index === 2 ? (
					<>
						<div className="absolute left-[16%] top-[30%] h-3 w-[62%] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.22),rgba(255,255,255,0.06))]" />
						<div className="absolute left-[22%] top-[40%] h-3 w-[56%] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
						<div className="absolute left-[28%] top-[50%] h-3 w-[50%] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
						<div className="absolute left-[33%] top-[60%] h-3 w-[45%] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
						<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(255,255,255,0.08)_100%)]" />
					</>
				) : null}
			</div>

			<div className="relative flex-1 space-y-2 bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(9,9,9,0.58)_100%)] px-7 pb-7 pt-5">
				<h3 className="font-inter text-[24px] leading-[1.08] tracking-[-0.022em] text-white md:text-[30px]">
					{title}
				</h3>
				<p className="font-inter text-[13px] leading-[1.55] text-white/57 md:text-[14px]">{copy}</p>
			</div>
		</LinearGlassCard>
	);
}

export function NBenchShowcase() {
	return (
		<>
			<NBenchSection className="pb-18 pt-0 md:pb-24 md:pt-2">
				<div className="pointer-events-none absolute inset-x-8 top-16 -z-10 h-[420px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_48%,rgba(255,255,255,0.02))] blur-2xl" />
				<div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end md:gap-10">
					<h2 className="max-w-[14ch] font-inter text-[34px] font-[530] leading-[1.12] tracking-[-0.022em] text-white md:text-[42px]">
						{NBENCH_CAPABILITIES.title}
					</h2>
					<p className="max-w-lg font-inter text-[16px] leading-[1.5] tracking-[-0.004em] text-white/66 md:justify-self-end md:text-[18px]">
						{NBENCH_CAPABILITIES.description}
					</p>
				</div>
				<div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:[grid-auto-rows:1fr]">
					{NBENCH_CAPABILITIES.cards.map((card, index) => (
						<CapabilityCard
							key={card.title}
							title={card.title}
							copy={card.copy}
							tag={card.tag}
							index={index}
						/>
					))}
				</div>
			</NBenchSection>
		</>
	);
}
