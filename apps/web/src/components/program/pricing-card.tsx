import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	GlassCard,
	BodyText,
	BulletPoint,
	PrimaryButton,
	colors,
} from "@/components/landing/primitives";

export function PricingCard({
	data,
}: {
	data: {
		heading: string;
		dimHeading?: string;
		price: string;
		priceSubtext?: string;
		included: string[];
		commitment?: string[];
		framing: string;
	};
}) {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Investment" />
			<SectionHeading>
				{data.heading}{" "}
				{data.dimHeading && <DimText>{data.dimHeading}</DimText>}
			</SectionHeading>

			<div className="mt-12 max-w-2xl mx-auto">
				<GlassCard className="p-8 md:p-10 lg:p-12">
					{/* Price */}
					<div className="stat-number text-6xl md:text-display-lg text-gradient-green">
						{data.price}
					</div>
					{data.priceSubtext && (
						<p className="text-sm text-white/40 mt-2">
							{data.priceSubtext}
						</p>
					)}

					{/* Included */}
					<p className="text-sm text-white/40 uppercase tracking-label mt-8 mb-4">
						What&apos;s covered:
					</p>
					<div className="space-y-3">
						{data.included.map((item) => (
							<BulletPoint key={item} color="green">
								{item}
							</BulletPoint>
						))}
					</div>

					{/* Commitment (Residence only) */}
					{data.commitment && data.commitment.length > 0 && (
						<>
							<div className="h-px bg-white/8 my-8" />
							<p className="text-sm text-white/40 uppercase tracking-label mb-4">
								What we ask in return:
							</p>
							<div className="space-y-3">
								{data.commitment.map((item) => (
									<BulletPoint key={item} color="gold">
										{item}
									</BulletPoint>
								))}
							</div>
						</>
					)}

					{/* Framing text */}
					<BodyText className="mt-8 text-center">
						{data.framing}
					</BodyText>

					{/* CTA */}
					<div className="mt-8 flex justify-center">
						<PrimaryButton
							href="https://apply.naironai.com"
							target="_blank"
							className="w-full justify-center"
						>
							Apply Now
						</PrimaryButton>
					</div>
				</GlassCard>
			</div>
		</Section>
	);
}
