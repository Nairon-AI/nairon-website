import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	BodyText,
	colors,
} from "@/components/landing/primitives";
import type { StatData } from "@/data/programs";

function StatItem({ stat }: { stat: StatData }) {
	return (
		<div className="py-6 border-b border-white/8 last:border-b-0">
			<div className="flex items-baseline gap-2">
				<span className="stat-number text-4xl md:text-6xl text-gradient-green">
					{stat.value}
				</span>
				{stat.suffix && (
					<span className="text-lg text-white/40">{stat.suffix}</span>
				)}
			</div>
			<p className="text-sm md:text-base text-white/40 mt-1">
				{stat.label}
			</p>
		</div>
	);
}

export function Outcomes({
	data,
}: {
	data: {
		heading: string;
		dimHeading?: string;
		stats: StatData[];
		description: string[];
	};
}) {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="After the Program" />
			<SectionHeading>
				{data.heading}{" "}
				{data.dimHeading && <DimText>{data.dimHeading}</DimText>}
			</SectionHeading>

			<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
				{/* Stats column */}
				<div>
					{data.stats.map((stat) => (
						<StatItem key={stat.label} stat={stat} />
					))}
				</div>

				{/* Description column */}
				<div className="space-y-4">
					{data.description.map((paragraph) => (
						<BodyText key={paragraph.slice(0, 30)}>
							{paragraph}
						</BodyText>
					))}
				</div>
			</div>
		</Section>
	);
}
