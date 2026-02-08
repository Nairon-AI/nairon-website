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

function FeatureCard({
	icon,
	title,
	description,
}: { icon: string; title: string; description: string }) {
	return (
		<div className="p-2 text-center md:text-left">
			<div className="mb-6 flex justify-center md:justify-start">
				<img src={icon} alt="" className="w-[60px] h-[60px]" loading="lazy" />
			</div>
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

			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				{FEATURES.map((f) => (
					<FeatureCard
						key={f.title}
						icon={f.icon}
						title={f.title}
						description={f.description}
					/>
				))}
			</div>
		</Section>
	);
}
