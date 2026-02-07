import {
	SectionHeading,
	BodyText,
	BulletPoint,
	PrimaryButton,
} from "./primitives";
import { RESIDENCE } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function Residence() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = RESIDENCE[view];

	return (
		<section className="py-24 md:py-32 relative overflow-hidden">
			{/* Radial glow — green/gold by view mode */}
			<div className={`absolute inset-0 ${isEngineer ? "green-glow-bg" : "gold-glow-bg"}`} />

			<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
				<SectionHeading className="text-4xl md:text-display-md mb-4">
					{data.title}
				</SectionHeading>
				<BodyText className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
					{data.subtitle}
				</BodyText>

				<div className="flex flex-col gap-3 items-start max-w-md mx-auto text-left mb-10">
					{data.points.map((point) => (
						<BulletPoint key={point}>{point}</BulletPoint>
					))}
				</div>

				<PrimaryButton href={data.cta.href}>{data.cta.label}</PrimaryButton>
			</div>
		</section>
	);
}
