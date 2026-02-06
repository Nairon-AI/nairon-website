import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	BodyText,
	colors,
} from "@/components/landing/primitives";
import type { PhaseData, WeekData } from "@/data/programs";

function GuestCard({ guest, role }: { guest: string; role: string }) {
	return (
		<div className="flex items-start gap-3">
			<img
				src="https://framerusercontent.com/images/47jhKH0AA1f2ZNcovBPcmjTlLM.png"
				alt=""
				className="w-[100px] h-[100px] object-cover shrink-0"
			/>
			<div className="pt-3">
				<h4 className="text-lg font-normal text-white">{guest}</h4>
				<p className={`text-base font-normal ${colors.textBody}`}>
					{role}
				</p>
			</div>
		</div>
	);
}

function WeekCard({ week }: { week: WeekData }) {
	return (
		<div className="flex flex-col md:flex-row gap-6 md:gap-[74px]">
			<div className="min-w-[233px] shrink-0">
				<h4
					className={`text-2xl font-normal font-display ${colors.text} tracking-tighter`}
				>
					{week.week}
				</h4>
			</div>
			<div className="flex-1 rounded-3xl bg-landing-card p-6 md:py-6 md:px-8">
				<h3
					className={`font-display text-2xl md:text-display-sm font-medium mb-4 ${colors.text} tracking-tight-lg`}
					style={{ lineHeight: "1.3" }}
				>
					{week.title}
				</h3>
				<BodyText>{week.description}</BodyText>
				{week.guest && week.guestRole && (
					<div className="mt-6">
						<GuestCard guest={week.guest} role={week.guestRole} />
					</div>
				)}
			</div>
		</div>
	);
}

function PhaseHeader({ phase }: { phase: PhaseData }) {
	return (
		<div className="flex overflow-hidden">
			<div className="bg-brand-dark rounded-l-3xl px-6 py-[18px] min-w-[160px] md:min-w-[259px] flex items-center">
				<h3 className="text-2xl md:text-display-sm font-medium font-display text-white tracking-tight-lg">
					{phase.phase}
				</h3>
			</div>
			<div className="bg-white/12 rounded-r-3xl flex-1 flex items-center px-8 md:px-[74px]">
				<h3
					className={`text-2xl md:text-display-sm font-medium font-display ${colors.text} tracking-tight-lg`}
				>
					{phase.title}
				</h3>
			</div>
		</div>
	);
}

function PhaseBlock({ phase }: { phase: PhaseData }) {
	const hasPhaseHeader = phase.phase && phase.title;
	return (
		<div className="flex flex-col gap-16">
			{hasPhaseHeader && <PhaseHeader phase={phase} />}
			{phase.weeks.map((week) => (
				<WeekCard key={week.week} week={week} />
			))}
		</div>
	);
}

export function Curriculum({
	data,
}: {
	data: {
		heading: string;
		dimHeading?: string;
		subheading: string;
		phases: PhaseData[];
	};
}) {
	return (
		<Section className={colors.pageBg} id="curriculum">
			<SectionTag label="Program Agenda" />
			<SectionHeading>
				{data.heading}{" "}
				{data.dimHeading && <DimText>{data.dimHeading}</DimText>}
			</SectionHeading>
			<BodyText className="mt-4 max-w-2xl">{data.subheading}</BodyText>

			<div className="mt-16 flex flex-col gap-16">
				{data.phases.map((phase, i) => (
					<PhaseBlock key={phase.phase || i} phase={phase} />
				))}
			</div>
		</Section>
	);
}
