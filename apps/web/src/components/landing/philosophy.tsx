import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	OutlineButton,
	colors,
} from "./primitives";

function PhilosophyParagraph({
	bold,
	rest,
}: { bold: string; rest: string }) {
	return (
		<h4 className={`${colors.text} text-lg`} style={{ lineHeight: "1.4" }}>
			<strong className="font-bold">{bold}</strong>{" "}
			<span className="font-normal">{rest}</span>
		</h4>
	);
}

export function Philosophy() {
	return (
		<Section className={colors.pageBg}>
			<div className="flex flex-row justify-center">
				<div className="w-full max-w-[660px] flex flex-col gap-12">
					{/* Heading group */}
					<div className="flex flex-col gap-8">
						<SectionTag label="Our Philosophy" />
						<SectionHeading>
							The Great <DimText>AI Illusion</DimText>
						</SectionHeading>
					</div>

					{/* Content group */}
					<div className="flex flex-col gap-6">
						<PhilosophyParagraph
							bold="Most AI engineers are prompt engineers with ambition."
							rest="They can build demos, but production systems break them."
						/>
						<PhilosophyParagraph
							bold="The best companies know this. That's why they struggle to hire."
							rest="They need builders who understand systems, not just frameworks. They need engineers who solve problems, not just implement features."
						/>
						<PhilosophyParagraph
							bold="We build different. Engineers who think first, ship fast, and solve real problems."
							rest="Not because we teach tools, but because we teach them to think under real pressure."
						/>

						{/* Attribution section */}
						<div className="flex flex-col gap-1">
							<div className="flex flex-row items-center justify-between">
								<div>
									<p className={colors.text}>
										<strong className="font-bold">Luka Eric</strong>
									</p>
									<p className={`${colors.text} text-base`}>Founder | Nairon AI</p>
								</div>
								<OutlineButton href="/program">About the Program</OutlineButton>
							</div>
							<img
								src="/assets/framer/II2AoNr3T28LTiP1KS4xWQn80.png"
								alt="Luka Eric signature"
								className="h-[75px] w-[108px] object-contain"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
