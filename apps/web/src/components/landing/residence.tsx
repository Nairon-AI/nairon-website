import {
	SectionTag,
	BulletPoint,
	PrimaryButton,
	OutlineButton,
} from "./primitives";
import { RESIDENCE } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function Residence() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = RESIDENCE[view];

	return (
		<div className="relative overflow-hidden pt-8 pb-8 md:pt-12 md:pb-10">
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-6xl">
					<SectionTag label="Programs" />

					<article className="glass-card relative mt-6 min-h-[460px] overflow-hidden rounded-[36px] p-6 md:mt-8 md:min-h-[560px] md:p-12">
						<div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
							<p className="text-xs uppercase tracking-[0.14em] text-white/45">Cohort 2</p>

							<div className="mt-6 max-w-3xl md:mt-8">
								<h2 className="font-serif text-[2.5rem] leading-[1.01] tracking-[-0.02em] text-landing-text md:text-[4.4rem]">
									{data.title}
								</h2>
								<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-landing-text-body md:text-lg">
									{data.subtitle}
								</p>
							</div>

							<div className="mt-8 md:mt-10">
								<div className="mx-auto max-w-2xl space-y-3 text-left">
									{data.points.map((point) => (
										<BulletPoint key={point}>{point}</BulletPoint>
									))}
								</div>
							</div>

							<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
								<PrimaryButton href={data.cta.href}>{data.cta.label}</PrimaryButton>
								<OutlineButton href="/program">Learn more about program</OutlineButton>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}
