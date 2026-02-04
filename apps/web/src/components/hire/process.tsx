import { ArrowUpRight } from "lucide-react";
import { Section, SectionTag, SectionHeading, DimText, GlassCard, colors } from "../landing/primitives";
import { HIRE_PROCESS_STEPS } from "@/data/hire";

function ProcessCard({
	number,
	title,
	description,
	image,
}: { number: number; title: string; description: string; image: string }) {
	return (
		<div className="flex flex-col">
			{/* Image card */}
			<GlassCard className="aspect-square flex items-center justify-center relative overflow-hidden mb-6">
				{/* Large number watermark */}
				<span
					className="absolute top-4 left-6 text-[80px] font-bold leading-none text-amber-600/15 select-none pointer-events-none"
				>
					{number}
				</span>
				<img
					src={image}
					alt={title}
					className="w-24 h-24 object-contain"
				/>
			</GlassCard>

			{/* Text */}
			<h4
				className={`text-lg font-semibold ${colors.text} mb-2`}
				style={{ letterSpacing: "-0.72px" }}
			>
				{title}
			</h4>
			<p className={`text-sm leading-relaxed ${colors.textBody}`}>{description}</p>
		</div>
	);
}

export function HireProcess() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Process" />
			<SectionHeading className="mt-4 mb-16">
				How Does <DimText>Hiring Work?</DimText>
			</SectionHeading>

			{/* 4-column grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{HIRE_PROCESS_STEPS.map((step) => (
					<ProcessCard
						key={step.number}
						number={step.number}
						title={step.title}
						description={step.description}
						image={step.image}
					/>
				))}
			</div>

			{/* Submit Real Projects callout */}
			<GlassCard className="mt-16 border-l-2 border-amber-500/50 pl-6 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
				<div>
					<h4
						className={`text-xl font-semibold ${colors.text} mb-2`}
						style={{ letterSpacing: "-0.72px" }}
					>
						Submit Real Projects to the Cohort
					</h4>
					<p className={`text-base leading-relaxed ${colors.textBody} max-w-2xl`}>
						Priority and Exclusive Partners can submit real product challenges or
						internal tasks for the cohort to work on. Your roadmap directly shapes
						their training — and you get early visibility into top performers.
					</p>
				</div>
				<a
					href="/bookacall"
					className="inline-flex items-center gap-2 bg-white/10 border border-white/12 text-white font-semibold text-base px-5 py-2.5 rounded-full hover:bg-white/15 transition-colors shrink-0"
				>
					Start Hiring Process
					<ArrowUpRight className="w-4 h-4" />
				</a>
			</GlassCard>
		</Section>
	);
}
