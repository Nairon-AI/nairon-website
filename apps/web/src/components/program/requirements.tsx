import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	BulletPoint,
	colors,
} from "@/components/landing/primitives";

export function Requirements({
	data,
}: {
	data: {
		heading: string;
		dimHeading?: string;
		items: string[];
		subtext: string;
	};
}) {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Who Should Apply" />
			<SectionHeading>
				{data.heading}{" "}
				{data.dimHeading && <DimText>{data.dimHeading}</DimText>}
			</SectionHeading>

			<div className="mt-12 max-w-3xl space-y-4">
				{data.items.map((item) => (
					<BulletPoint key={item} color="green">
						{item}
					</BulletPoint>
				))}
			</div>

			<p
				className={`mt-8 text-lg font-medium italic ${colors.text}`}
			>
				{data.subtext}
			</p>
		</Section>
	);
}
