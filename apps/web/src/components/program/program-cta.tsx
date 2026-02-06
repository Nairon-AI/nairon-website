import {
	Section,
	SectionHeading,
	BodyText,
	PrimaryButton,
	colors,
} from "@/components/landing/primitives";

export function ProgramCTA({
	data,
}: {
	data: {
		heading: string;
		subtext: string;
		buttonLabel: string;
		buttonHref: string;
	};
}) {
	return (
		<Section className={colors.pageBg}>
			<div className="text-center max-w-2xl mx-auto">
				<SectionHeading className="text-center">
					{data.heading}
				</SectionHeading>
				<BodyText className="mt-4 text-center">{data.subtext}</BodyText>
				<div className="mt-8 flex justify-center">
					<PrimaryButton href={data.buttonHref} target="_blank">
						{data.buttonLabel}
					</PrimaryButton>
				</div>
			</div>
		</Section>
	);
}
