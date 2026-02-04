import type { ReactNode } from "react";
import { Code, Brain, Award, Mic } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	GlassCard,
	OutlineButton,
	PrimaryButton,
	BodyText,
	colors,
} from "./primitives";
import { REQUIREMENTS } from "@/data/landing";

const ICON_MAP: Record<string, ReactNode> = {
	code: <Code className="w-8 h-8 text-green-400" />,
	brain: <Brain className="w-8 h-8 text-green-400" />,
	award: <Award className="w-8 h-8 text-green-400" />,
	mic: <Mic className="w-8 h-8 text-green-400" />,
};

function RequirementCard({
	iconName,
	text,
}: { iconName: string; text: string }) {
	return (
		<GlassCard hover className="p-8 flex flex-col items-center text-center">
			<div className="mb-6 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
				{ICON_MAP[iconName]}
			</div>
			<p className={`text-sm leading-relaxed ${colors.textBody}`}>{text}</p>
		</GlassCard>
	);
}

export function Qualifies() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="For Whom?" />
			<SectionHeading className="mb-16">
				Who Qualifies <DimText>for the Program?</DimText>
			</SectionHeading>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{REQUIREMENTS.map((r) => (
					<RequirementCard
						key={r.text}
						iconName={r.iconName}
						text={r.text}
					/>
				))}
			</div>

			<GlassCard className="mt-8 p-8">
				<BodyText>
					We're looking for engineers who've shipped code to production and
					understand the full development lifecycle. Experience with real users,
					deployment, and maintenance helps you get the most from the program.
				</BodyText>
			</GlassCard>

			<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
				<span className={`text-sm ${colors.textMuted}`}>
					Forever Free for engineers
				</span>
				<OutlineButton href="/program">
					Learn more about the program
				</OutlineButton>
				<PrimaryButton href="https://apply.naironai.com" target="_blank">
					Apply
				</PrimaryButton>
			</div>
		</Section>
	);
}
