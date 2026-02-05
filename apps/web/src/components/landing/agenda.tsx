import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	GlassCard,
	BodyText,
	colors,
} from "./primitives";
import { PROGRAM_PHASES } from "@/data/landing";
import type { WeekData, PhaseData } from "@/data/landing";

function GuestCard({ guest, role }: { guest: string; role: string }) {
	return (
		<div className="mt-6 flex items-center gap-4">
			<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
				<span className="text-white/30 text-lg">?</span>
			</div>
			<div>
				<p className="text-white/70 text-sm font-medium">{guest}</p>
				<p className={`text-xs ${colors.textMuted}`}>{role}</p>
			</div>
		</div>
	);
}

function WeekCard({ week }: { week: WeekData }) {
	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className={`text-sm font-medium min-w-[80px] pt-6 ${colors.textMuted}`}>
				{week.week}
			</div>
			<GlassCard className="flex-1 p-8">
				<h3 className={`font-urbanist text-xl md:text-2xl font-bold mb-4 ${colors.text}`}>
					{week.title}
				</h3>
				<BodyText>{week.description}</BodyText>
				{week.guest && week.guestRole && (
					<GuestCard guest={week.guest} role={week.guestRole} />
				)}
				{week.guest2 && week.guest2Role && (
					<GuestCard guest={week.guest2} role={week.guest2Role} />
				)}
			</GlassCard>
		</div>
	);
}

function PhaseHeader({ phase }: { phase: PhaseData }) {
	return (
		<div className="flex rounded-xl overflow-hidden mb-6">
			<div
				className={`${phase.gradient} text-black font-urbanist font-bold text-xl md:text-2xl px-8 py-5 min-w-[160px]`}
			>
				{phase.phase}
			</div>
			<div className="bg-white/5 flex-1 flex items-center px-8">
				<h3 className="text-white text-xl md:text-2xl font-urbanist">
					{phase.title}
				</h3>
			</div>
		</div>
	);
}

function PhaseBlock({ phase }: { phase: PhaseData }) {
	return (
		<div>
			<PhaseHeader phase={phase} />
			<div className="space-y-4 pl-4 md:pl-8">
				{phase.weeks.map((week) => (
					<WeekCard key={week.week} week={week} />
				))}
			</div>
		</div>
	);
}

export function Agenda() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Program agenda" />
			<SectionHeading>The Nairon 8-Week Program</SectionHeading>
			<p className={`text-2xl md:text-4xl font-urbanist mt-2 ${colors.textDim}`}>
				Every week is <DimText>engineered for intensity</DimText>
			</p>

			<div className="mt-16 space-y-8">
				{PROGRAM_PHASES.map((phase) => (
					<PhaseBlock key={phase.phase} phase={phase} />
				))}
			</div>
		</Section>
	);
}
