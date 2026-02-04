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
		<h4 className={`${colors.text} text-lg leading-relaxed`}>
			<strong className="font-bold">{bold}</strong>{" "}
			<span className="font-normal">{rest}</span>
		</h4>
	);
}

export function Philosophy() {
	return (
		<Section className={colors.pageBg}>
			<div className="max-w-4xl">
				<SectionTag label="Our Philosophy" />
				<SectionHeading>
					The Great <DimText>AI Illusion</DimText>
				</SectionHeading>
			</div>

			<div className="mt-16 max-w-3xl ml-auto">
				<div className="space-y-6">
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
				</div>

				<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
					<div>
						<div>
							<p className={colors.text}>
								<span className="font-bold">Luka Eric</span>
							</p>
							<p className={`${colors.text} text-base`}>Founder | Nairon AI</p>
						</div>
						<img
							src="https://framerusercontent.com/images/II2AoNr3T28LTiP1KS4xWQn80.png"
							alt="Luka Eric signature"
							className="mt-4 h-[75px] w-auto opacity-80"
						/>
					</div>
					<OutlineButton href="/program">About the Program</OutlineButton>
				</div>
			</div>
		</Section>
	);
}
