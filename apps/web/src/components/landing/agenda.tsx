import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	BodyText,
	colors,
} from "./primitives";
import { PROGRAM_PHASES } from "@/data/landing";
import type { WeekData, PhaseData } from "@/data/landing";

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
				<p className={`text-base font-normal ${colors.textBody}`}>{role}</p>
			</div>
		</div>
	);
}

function WeekCard({ week }: { week: WeekData }) {
	return (
		<div className="flex flex-col md:flex-row gap-6 md:gap-[74px]">
			<div className="min-w-[233px] shrink-0">
				<h4
					className={`text-2xl font-normal font-urbanist ${colors.text}`}
					style={{ letterSpacing: "-0.72px" }}
				>
					{week.week}
				</h4>
			</div>
			<div className="flex-1 rounded-3xl bg-[#111114] p-6 md:py-6 md:px-8">
				<h3
					className={`font-urbanist text-2xl md:text-[34px] font-medium mb-4 ${colors.text}`}
					style={{ letterSpacing: "-1.36px", lineHeight: "1.3" }}
				>
					{week.title}
				</h3>
				<BodyText>{week.description}</BodyText>
				{week.guest && week.guestRole && (
					<div className="mt-6">
						<GuestCard guest={week.guest} role={week.guestRole} />
					</div>
				)}
				{week.guests && week.guests.length > 0 && (
					<div className="mt-6 flex flex-col sm:flex-row gap-6">
						{week.guests.map((g) => (
							<GuestCard key={g.role} guest={g.name} role={g.role} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

function PhaseHeader({ phase }: { phase: PhaseData }) {
	return (
		<div className="flex overflow-hidden">
			<div className="bg-[#2db22a] rounded-l-3xl px-6 py-[18px] min-w-[160px] md:min-w-[259px] flex items-center">
				<h3
					className="text-2xl md:text-[34px] font-medium font-urbanist text-white"
					style={{ letterSpacing: "-1.36px" }}
				>
					{phase.phase}
				</h3>
			</div>
			<div className="bg-white/12 rounded-r-3xl flex-1 flex items-center px-8 md:px-[74px]">
				<h3
					className={`text-2xl md:text-[34px] font-medium font-urbanist ${colors.text}`}
					style={{ letterSpacing: "-1.36px" }}
				>
					{phase.title}
				</h3>
			</div>
		</div>
	);
}

function PhaseBlock({ phase }: { phase: PhaseData }) {
	return (
		<div className="flex flex-col gap-16">
			<PhaseHeader phase={phase} />
			{phase.weeks.map((week) => (
				<WeekCard key={week.week} week={week} />
			))}
		</div>
	);
}

export function Agenda() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Program agenda" />
			<SectionHeading>
				The Nairon 8-Week Program{" "}
				<DimText>Every week is engineered for intensity</DimText>
			</SectionHeading>

			<div className="mt-16 flex flex-col gap-16">
				{PROGRAM_PHASES.map((phase) => (
					<PhaseBlock key={phase.phase} phase={phase} />
				))}
			</div>
		</Section>
	);
}
