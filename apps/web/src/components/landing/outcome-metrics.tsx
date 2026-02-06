import {
	Section,
	SectionTag,
	GlassCard,
	GreenText,
	BodyText,
	colors,
} from "./primitives";
import { METRICS } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function OutcomeMetrics() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = METRICS[view];

	return (
		<Section>
			<SectionTag label="Results" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
				{/* Large card — spans 2 columns */}
				<GlassCard className="p-8 md:p-10 md:col-span-2 lg:col-span-2 flex flex-col justify-center">
					<p className={`text-sm uppercase tracking-widest mb-4 ${colors.textMuted}`}>
						{data.largeCard.description}
					</p>
					<h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2">
						<GreenText>{data.largeCard.headline}</GreenText>
					</h3>
					<BodyText className="text-lg">{data.largeCard.subtext}</BodyText>
				</GlassCard>

				{/* Stat cards */}
				{data.stats.map((stat) => (
					<GlassCard
						key={stat.label}
						className="p-6 md:p-8 flex flex-col items-center justify-center text-center"
					>
						<span className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-green">
							{stat.value}
						</span>
						<span className={`mt-2 text-sm ${colors.textBody}`}>
							{stat.label}
						</span>
					</GlassCard>
				))}
			</div>
		</Section>
	);
}
