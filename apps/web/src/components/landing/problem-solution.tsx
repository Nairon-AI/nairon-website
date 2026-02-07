import {
	Section,
	GlassCard,
	SectionHeading,
	BodyText,
	PrimaryButton,
} from "./primitives";
import { PROBLEMS, PROBLEM_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";
import {
	LazyPlayer,
	ProblemAnimation,
	SolutionAnimation,
	Problem2Animation,
	Solution2Animation,
} from "./remotion";

const ANIMATIONS = {
	0: { problem: ProblemAnimation, solution: SolutionAnimation },
	1: { problem: Problem2Animation, solution: Solution2Animation },
} as const;

export function ProblemSolution({ index }: { index: 0 | 1 }) {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const block = PROBLEMS[view][index];
	const showCta = index === 1;
	const cta = PROBLEM_CTA[view];
	const anim = ANIMATIONS[index];

	return (
		<Section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Problem card */}
				<GlassCard className="p-0 overflow-hidden">
					<div className="aspect-[16/10]">
						<LazyPlayer component={anim.problem} />
					</div>
					<div className="p-8 md:p-10">
						<SectionHeading className="text-2xl md:text-4xl mb-4">
							{block.problemHeadline}
						</SectionHeading>
						<BodyText>{block.problemBody}</BodyText>
					</div>
				</GlassCard>

				{/* Solution card — green accent border */}
				<GlassCard className="p-0 overflow-hidden border-l-2 border-l-green-500/40">
					<div className="aspect-[16/10]">
						<LazyPlayer component={anim.solution} />
					</div>
					<div className="p-8 md:p-10">
						<SectionHeading className="text-2xl md:text-4xl mb-4">
							{block.solutionHeadline}
						</SectionHeading>
						<BodyText>{block.solutionBody}</BodyText>
					</div>
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
