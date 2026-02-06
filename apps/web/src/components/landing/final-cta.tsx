import {
	SectionHeading,
	BodyText,
	PrimaryButton,
	OutlineButton,
} from "./primitives";
import { FINAL_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function FinalCTA() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = FINAL_CTA[view];

	return (
		<section className="py-24 md:py-32 relative overflow-hidden">
			{/* Green radial glow — bookend matching Residence */}
			<div className="absolute inset-0 green-glow-bg" />

			<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
				<SectionHeading className="text-4xl md:text-display-md mb-4">
					{data.headline}
				</SectionHeading>
				<BodyText className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
					{data.subtext}
				</BodyText>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<PrimaryButton href={data.primaryCta.href}>
						{data.primaryCta.label}
					</PrimaryButton>
					<OutlineButton href={data.secondaryCta.href}>
						{data.secondaryCta.label}
					</OutlineButton>
				</div>
			</div>
		</section>
	);
}
