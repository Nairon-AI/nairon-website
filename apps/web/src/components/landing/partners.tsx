import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	OutlineButton,
	GlassCard,
	colors,
} from "./primitives";
import { PARTNERS } from "@/data/landing";

const PARTNER_LOGOS: Record<string, string> = {
	Keylead:
		"https://framerusercontent.com/images/8iawpdspB7oNrbkg9yVbuNsT7lU.png",
	"Question Base":
		"https://framerusercontent.com/images/3yRGTa8SbDMNcHD0Z9htHa4mti0.png",
	CodeGPT:
		"https://framerusercontent.com/images/XXv1BKrLDM97th8HhgjBiFfeeUo.png",
	NEOM: "https://framerusercontent.com/images/7c0S1a6D6BW6O548tD40fZDqDg.png",
};

function PartnerLogo({ name }: { name: string }) {
	const logo = PARTNER_LOGOS[name];
	return (
		<GlassCard className="p-8 flex items-center justify-center h-28">
			{logo ? (
				<img src={logo} alt={name} className="h-12 w-auto opacity-80" />
			) : (
				<span className={`font-urbanist text-xl font-bold ${colors.textMuted}`}>
					{name}
				</span>
			)}
		</GlassCard>
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
					<PartnerLogo key={p} name={p} />
				))}
			</div>

			<div className="mt-8 flex justify-center">
				<OutlineButton href="/hire">Learn more about hiring</OutlineButton>
			</div>
		</Section>
	);
}
