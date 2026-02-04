import type { ReactNode } from "react";
import { Check, Brain, Cog, MessageSquare, Zap } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	CardTitle,
	BodyText,
	colors,
} from "./primitives";
import { FEATURES } from "@/data/landing";

const ICON_MAP: Record<string, ReactNode> = {
	check: <Check className="w-8 h-8 text-green-400" />,
	brain: <Brain className="w-8 h-8 text-green-400" />,
	cog: <Cog className="w-8 h-8 text-green-400" />,
	message: <MessageSquare className="w-8 h-8 text-green-400" />,
	zap: <Zap className="w-8 h-8 text-green-400" />,
};

function FeatureCard({
	iconName,
	title,
	description,
}: { iconName: string; title: string; description: string }) {
	return (
		<div className="p-2">
			<div className="mb-6">{ICON_MAP[iconName]}</div>
			<CardTitle className="mb-3">{title}</CardTitle>
			<BodyText>{description}</BodyText>
		</div>
	);
}

export function About() {
	return (
		<Section id="about" className={colors.pageBg}>
			<div className="max-w-4xl">
				<SectionTag label="About Nairon AI" />
				<SectionHeading>
					What Makes{" "}
					<DimText>Nairon's Engineers Different?</DimText>
				</SectionHeading>
			</div>

			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{FEATURES.map((f) => (
					<FeatureCard
						key={f.title}
						iconName={f.iconName}
						title={f.title}
						description={f.description}
					/>
				))}
			</div>
		</Section>
	);
}
