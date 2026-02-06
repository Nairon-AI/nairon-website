import {
	ClipboardList,
	Trophy,
	Briefcase,
	Send,
	Search,
	Handshake,
} from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	GlassCard,
	CardTitle,
	BodyText,
	PrimaryButton,
	colors,
} from "./primitives";
import { STEPS, STEPS_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

const ICON_MAP: Record<string, typeof ClipboardList> = {
	ClipboardText: ClipboardList,
	Trophy: Trophy,
	Briefcase: Briefcase,
	PaperPlaneTilt: Send,
	MagnifyingGlass: Search,
	Handshake: Handshake,
};

export function HowItWorks() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const steps = STEPS[view];
	const cta = STEPS_CTA[view];

	return (
		<Section>
			<div className="text-center mb-16">
				<SectionTag label="Process" />
				<SectionHeading className="mt-4">How it works</SectionHeading>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{steps.map((step, i) => {
					const Icon = ICON_MAP[step.icon] ?? ClipboardList;
					return (
						<div key={step.title} className="flex flex-col items-center text-center">
							<GlassCard className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
								<Icon className="w-7 h-7 text-green-400" />
							</GlassCard>
							<span className={`text-sm font-medium mb-2 ${colors.textMuted}`}>
								Step {i + 1}
							</span>
							<CardTitle className="mb-3">{step.title}</CardTitle>
							<BodyText>{step.description}</BodyText>
						</div>
					);
				})}
			</div>

			<div className="mt-12 flex justify-center">
				<PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
			</div>
		</Section>
	);
}
