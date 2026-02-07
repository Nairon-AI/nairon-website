import { BulletPoint, GlassCard, OutlineButton } from "./primitives";
import { APPRENTICESHIP_CONTENT } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function Apprenticeship() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = APPRENTICESHIP_CONTENT[view];
	const eyebrow = "Broader Talent Path";

	return (
		<div className="pb-16 pt-0 md:pb-24 md:pt-0">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-6xl">
					<GlassCard className="w-full rounded-[28px] p-6 md:p-8">
					<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
						<div className="max-w-2xl md:flex-1">
							{isEngineer ? (
								<>
									<h3 className="text-[1.75rem] leading-tight tracking-tight text-landing-text md:text-[2.1rem]">
										Not residency-ready yet?
									</h3>
									<p className="mt-2 text-lg leading-tight text-landing-text">{data.title}</p>
									<p className="mt-3 text-base leading-relaxed text-landing-text-body">{data.description}</p>
								</>
							) : (
								<>
									<p className="text-xs uppercase tracking-[0.14em] text-white/45">{eyebrow}</p>
									<h3 className="mt-2 text-[1.75rem] leading-tight tracking-tight text-landing-text md:text-[2.1rem]">
										{data.title}
									</h3>
									<p className="mt-3 text-base leading-relaxed text-landing-text-body">{data.description}</p>
								</>
							)}

							<div className="mt-7 flex items-center gap-4">
								<OutlineButton href={data.cta.href}>{data.cta.label}</OutlineButton>
							</div>
						</div>

						<div className="max-w-md md:w-[40%]">
							<div className="space-y-3 text-left">
								{data.points.map((point) => (
									<BulletPoint key={point}>{point}</BulletPoint>
								))}
							</div>
						</div>
					</div>
					</GlassCard>
				</div>
			</div>
		</div>
	);
}
