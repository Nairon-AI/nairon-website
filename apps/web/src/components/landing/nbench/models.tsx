import { Check, ChevronRight } from "lucide-react";
import { NBENCH_MODELS } from "@/data/nbench";
import { NBenchSection } from "@/components/landing/nbench/primitives";

function ModelBadge() {
	return (
		<span className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-inter text-[11px] tracking-[0.02em] text-white/52">
			Model
		</span>
	);
}

function ModelAvatar({ index }: { index: number }) {
	const avatarStyles = [
		"from-[#4de6ff] to-[#63ffbf]",
		"from-[#b4b4b4] to-[#737373]",
		"from-[#4cb2ff] to-[#6487ff]",
		"from-[#bc85ff] to-[#6f66ff]",
		"from-[#ffb26a] to-[#ff8f7b]",
		"from-[#8c8c8c] to-[#4e4e4e]",
	] as const;

	return (
		<div className="relative h-6 w-6 shrink-0 rounded-full bg-[linear-gradient(135deg,#191b1f,#0d0f12)] ring-1 ring-white/12">
			<div
				className={`absolute inset-[5px] rounded-full bg-gradient-to-br ${avatarStyles[index] ?? avatarStyles[5]}`}
			/>
		</div>
	);
}

export function NBenchModels() {
	return (
		<NBenchSection className="overflow-hidden pb-24 pt-20 md:pb-32 md:pt-24">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_14%,rgba(255,255,255,0.07),transparent_38%),radial-gradient(circle_at_70%_16%,rgba(77,255,141,0.09),transparent_36%),linear-gradient(180deg,rgba(8,8,8,0),rgb(8,8,8)_70%)]" />

			<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
				<div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-3 py-1 font-inter text-[12px] text-white/72">
					<span className="h-2 w-2 rounded-full bg-[#2bdbff]" />
					{NBENCH_MODELS.badge}
				</div>
				<h2 className="mt-5 max-w-[16ch] font-inter text-[42px] font-[530] leading-[1.02] tracking-[-0.03em] text-white sm:max-w-none sm:text-[58px] md:text-[72px]">
					{NBENCH_MODELS.title}
				</h2>
				<p className="mt-4 max-w-3xl font-inter text-[18px] leading-[1.45] tracking-[-0.01em] text-white/52 md:text-[19px]">
					{NBENCH_MODELS.description}
				</p>
				<button
					type="button"
					className="mt-8 inline-flex items-center gap-2 rounded-[13px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] px-5 py-2.5 font-inter text-[18px] font-[520] tracking-[-0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_28px_rgba(0,0,0,0.42)]"
				>
					{NBENCH_MODELS.cta}
					<ChevronRight className="size-4 text-white/80" />
				</button>
			</div>

			<div className="relative mx-auto mt-12 w-full max-w-[1280px] px-1 pb-18 md:mt-14 md:px-4">
				<div className="pointer-events-none absolute inset-x-[14%] top-1 h-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)] blur-2xl" />
				<div className="pointer-events-none absolute inset-x-[12%] bottom-[-3%] h-22 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.66),transparent_78%)] blur-xl" />
				<div className="relative mx-auto h-[350px] w-full max-w-[1180px] overflow-hidden rounded-[16px] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(33,33,34,0.74)_0%,rgba(10,10,11,0.94)_36%,rgba(4,4,5,0.99)_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.82)] [transform:perspective(2200px)_rotateX(54deg)_scaleX(1)] [transform-origin:center_top] md:h-[410px] md:[transform:perspective(2450px)_rotateX(54deg)_scaleX(1)]">
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,transparent_14%,transparent_78%,rgba(0,0,0,0.9)_100%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_48%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.10)_0%,transparent_28%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0),rgba(0,0,0,0.1))]" />
					<div className="pointer-events-none absolute -bottom-px left-0 right-0 h-20 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.85)_65%,rgba(0,0,0,1))]" />

					<div className="relative px-5 pt-5 md:px-8 md:pt-6">
						<div className="rounded-[12px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-5 py-2.5 font-inter text-[28px] italic tracking-[-0.01em] text-white/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] md:text-[26px]">
							{NBENCH_MODELS.placeholder}
						</div>

						<div className="mt-3 overflow-hidden rounded-[14px] border border-white/[0.09] bg-[rgba(11,11,12,0.42)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
							<div className="relative px-3 py-1.5">
								{NBENCH_MODELS.rows.map((model, index) => {
									const isSelected = index === 1;
									return (
										<div
											key={model.name}
											className={`relative flex items-center gap-3 rounded-[10px] px-4 py-2.5 ${
												isSelected
													? "my-1 border border-white/[0.27] bg-[linear-gradient(90deg,rgba(255,255,255,0.22),rgba(255,255,255,0.09)_50%,rgba(255,255,255,0.20))] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_0_1px_rgba(255,255,255,0.05)]"
													: "text-white/72"
											}`}
										>
											<ModelAvatar index={index} />
											<p className={`font-inter text-[14px] tracking-[-0.01em] ${isSelected ? "text-white" : "text-white/80"}`}>
												{model.name}
											</p>
											<ModelBadge />
											{isSelected ? (
												<div className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/16 ring-1 ring-white/28">
													<Check className="size-3.5 text-white/86" />
												</div>
											) : null}
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] bg-[linear-gradient(180deg,transparent,rgba(3,3,4,0.72)_64%,rgba(3,3,4,0.96)_100%)]" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.78),rgba(0,0,0,0))]" />
				</div>
			</div>
		</NBenchSection>
	);
}
