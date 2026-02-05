import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	OutlineButton,
	colors,
} from "./primitives";
import { PARTNERS } from "@/data/landing";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
	return (
		<div className="rounded-3xl bg-[#111114] p-8 flex items-center justify-center h-[104px]">
			<img src={logo} alt={name} className="h-12 w-auto opacity-80" />
		</div>
	);
}

export function Partners() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Talent Partners" />
			<SectionHeading className="mb-16">
				Meet our talent partners who help bring{" "}
				<DimText>Nairon to life</DimText>
			</SectionHeading>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{PARTNERS.map((p) => (
					<PartnerLogo key={p.name} name={p.name} logo={p.logo} />
				))}
			</div>

			<div className="mt-8 flex justify-center">
				<OutlineButton href="/hire">Learn more about hiring</OutlineButton>
			</div>
		</Section>
	);
}
