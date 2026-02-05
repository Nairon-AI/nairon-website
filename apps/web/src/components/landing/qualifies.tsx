import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	OutlineButton,
	colors,
} from "./primitives";
import { REQUIREMENTS } from "@/data/landing";

const CARD_ICONS: Record<
	string,
	{ path: string; size: number; color: string }
> = {
	code: {
		path: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-56,176a6,6,0,0,0,11.29,3.59l56-176A6,6,0,0,0,162.05,34.36Z",
		size: 45,
		color: "rgb(255, 255, 255)",
	},
	brain: {
		path: "M246,124a54.13,54.13,0,0,0-32-49.33V72a46,46,0,0,0-86-22.67A46,46,0,0,0,42,72v2.67a54,54,0,0,0,0,98.66V176a46,46,0,0,0,86,22.67A46,46,0,0,0,214,176v-2.67A54.13,54.13,0,0,0,246,124ZM128,222a34,34,0,0,1-34-34v-6.2a53.77,53.77,0,0,0,28-12.15A53.77,53.77,0,0,0,150,181.8V188A34,34,0,0,1,128,222ZM90,176a42,42,0,0,1-2.21-84,6,6,0,0,0,5.79-6V72a34,34,0,0,1,68,0V86a6,6,0,0,0,5.79,6A42,42,0,0,1,166,176a6,6,0,0,0-5.79,6v6a34,34,0,0,1-64.42,0v-6A6,6,0,0,0,90,176Z",
		size: 60,
		color: "rgba(255, 255, 255, 0.55)",
	},
	award: {
		path: "M200,50H134V16a6,6,0,0,0-12,0V50H56A30,30,0,0,0,26,80V192a30,30,0,0,0,30,30H200a30,30,0,0,0,30-30V80A30,30,0,0,0,200,50Zm18,142a18,18,0,0,1-18,18H56a18,18,0,0,1-18-18V80A18,18,0,0,1,56,62H200a18,18,0,0,1,18,18Zm-52-56a38,38,0,1,0-38,38A38,38,0,0,0,166,136Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,136Z",
		size: 60,
		color: "rgba(255, 255, 255, 0.55)",
	},
	mic: {
		path: "M246,120a46.05,46.05,0,0,0-46-46H160.15c-2.58-.15-54.1-3.57-103.15-44.71A14,14,0,0,0,34,40V200a13.85,13.85,0,0,0,7.94,12.58A14.17,14.17,0,0,0,48,214a13.87,13.87,0,0,0,9.2-3.48c32.84-27.54,67.48-38.52,86.8-42V192a46,46,0,0,0,92,0V120ZM46,202.35V37.66a2,2,0,0,1,1.14-1.81A2,2,0,0,1,49.35,36C101.3,79.44,154.17,82,156,82v76c-1.82,0-54.69,2.57-106.65,46a2.06,2.06,0,0,1-2.21.18A2,2,0,0,1,46,202.35ZM234,192a34,34,0,0,1-68,0V170h68Zm0-34H166V86h34a34,34,0,0,1,34,34Z",
		size: 60,
		color: "rgba(255, 255, 255, 0.55)",
	},
};

function RequirementCard({
	iconName,
	text,
	isFirst,
}: { iconName: string; text: string; isFirst: boolean }) {
	const icon = CARD_ICONS[iconName];

	return (
		<>
			{/* Mobile card - simple line icon style */}
			<div className="md:hidden flex flex-col items-center justify-center p-5 rounded-[24px] border border-white/10 bg-black aspect-square">
				{icon && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
						className="w-10 h-10 mb-3"
						style={{
							fill: "rgba(255, 255, 255, 0.6)",
							color: "rgba(255, 255, 255, 0.6)",
						}}
					>
						<g>
							<path d={icon.path} />
						</g>
					</svg>
				)}
				<h4 className="text-sm font-normal text-center leading-[1.4] text-white/80">
					{text}
				</h4>
			</div>

			{/* Desktop card - original large style with background images */}
			<div className="hidden md:block relative w-[269px] h-[269px]">
				<div
					className={`relative w-[269px] h-[269px] flex flex-col items-center justify-center gap-2.5 p-5 overflow-hidden ${
						isFirst ? "rounded-full" : "rounded-[70px] border-2 border-[#262626]"
					}`}
				>
					{/* Background image */}
					<img
						src={
							isFirst
								? "https://framerusercontent.com/images/xLrjdpNQ6eOOdla0YNUQo6jMIY.png"
								: "https://framerusercontent.com/images/wX62SMRMN1v1X6SFoJaoNdwo.webp"
						}
						alt=""
						className={`absolute object-cover ${
							isFirst
								? "w-[135%] h-[135%] -top-[17.5%] -left-[17.5%]"
								: "w-[84%] h-[84%] top-[8%] left-[8%]"
						}`}
					/>
					{/* SVG Icon */}
					{icon && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							className="relative z-10"
							style={{
								width: icon.size,
								height: icon.size,
								fill: icon.color,
								color: icon.color,
							}}
						>
							<g>
								<path d={icon.path} />
							</g>
						</svg>
					)}
					{/* Text inside the card */}
					<h4
						className={`relative z-10 text-lg font-normal text-center leading-[1.4] ${
							isFirst ? "text-white" : "text-white/55"
						}`}
					>
						{text}
					</h4>
				</div>
			</div>
		</>
	);
}

export function Qualifies() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="For Whom?" />
			<SectionHeading className="mb-16">
				Who Qualifies <DimText>for the Program?</DimText>
			</SectionHeading>

			{/* Cards - 2x2 grid on mobile, row on desktop */}
			<div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:justify-start md:gap-12">
				{REQUIREMENTS.map((r, i) => (
					<RequirementCard
						key={r.text}
						iconName={r.iconName}
						text={r.text}
						isFirst={i === 0}
					/>
				))}
			</div>

			{/* Description box */}
			<div className="mt-6 rounded-3xl bg-black border-2 border-[#262626] py-6 px-8">
				<p className={`text-base leading-normal ${colors.text}`}>
					We're looking for engineers who've shipped code to production and
					understand the full development lifecycle. Experience with real users,
					deployment, and maintenance helps you get the most from the program.
				</p>
			</div>

			{/* Bottom bar */}
			<div className="mt-8 md:mt-[43px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2.5">
				<span className={`text-sm md:text-base ${colors.text}`}>
					Forever Free for engineers
				</span>
				<OutlineButton href="/program">
					Learn more about the program
				</OutlineButton>
				<a
					href="https://apply.naironai.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2.5 bg-[#22DB18] text-white font-semibold text-base pl-4 pr-1.5 py-1.5 rounded-full hover:bg-[#1fc516] transition-colors"
				>
					Apply
					<span className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
						<span className="w-4 h-4 block text-[#22DB18]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								className="w-full h-full"
								fill="currentColor"
							>
								<path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
							</svg>
						</span>
					</span>
				</a>
			</div>
		</Section>
	);
}
