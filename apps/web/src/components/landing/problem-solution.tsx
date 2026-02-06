import {
	Section,
	GlassCard,
	SectionHeading,
	BodyText,
	PrimaryButton,
} from "./primitives";
import { PROBLEMS, PROBLEM_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function ProblemSolution({ index }: { index: 0 | 1 }) {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const block = PROBLEMS[view][index];
	const showCta = index === 1;
	const cta = PROBLEM_CTA[view];

	return (
		<Section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Problem card */}
				<GlassCard className="p-8 md:p-10">
					<SectionHeading className="text-2xl md:text-4xl mb-4">
						{block.problemHeadline}
					</SectionHeading>
					<BodyText>{block.problemBody}</BodyText>
				</GlassCard>

				{/* Solution card — green accent border */}
				<GlassCard className="p-8 md:p-10 border-l-2 border-l-green-500/40">
					<SectionHeading className="text-2xl md:text-4xl mb-4">
						{block.solutionHeadline}
					</SectionHeading>
					<BodyText>{block.solutionBody}</BodyText>
				</GlassCard>
			</div>

			{showCta && (
				<div className="mt-10 flex justify-center">
					<PrimaryButton href={cta.primary.href}>
						{cta.primary.label}
					</PrimaryButton>
				</div>
			)}
		</Section>
	);
}
