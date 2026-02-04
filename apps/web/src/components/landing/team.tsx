import { ArrowUpRight, Linkedin } from "lucide-react";
import { Section, SectionTag, SectionHeading, DimText, colors } from "./primitives";
import { AnimatedGradient } from "./animated-gradient";
import { TEAM_MEMBERS } from "@/data/landing";

function TeamMemberCard({
	name,
	role,
	image,
	linkedin,
}: { name: string; role: string; image?: string; linkedin?: string }) {
	return (
		<div className="group">
			<div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/8">
				{image ? (
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="w-full h-full bg-gradient-to-b from-gray-700/50 to-gray-900/50 flex items-center justify-center">
						<span className="text-6xl text-white/20 font-urbanist font-bold">
							{name.charAt(0)}
						</span>
					</div>
				)}
				{linkedin && (
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
						aria-label={`${name} LinkedIn`}
					>
						<Linkedin className="w-4 h-4 text-white" />
					</a>
				)}
			</div>
			<h4 className={`font-semibold text-lg ${colors.text}`}>{name}</h4>
			<p className={`text-sm ${colors.textMuted}`}>{role}</p>
		</div>
	);
}

function MentorBar() {
	return (
		<div className="mt-12 flex items-center justify-between">
			<span className={`text-sm ${colors.textMuted}`}>20+ Mentors</span>
			<div className="flex-1 mx-6 h-px bg-white/10" />
			<a
				href="/team"
				className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
			>
				See All
				<ArrowUpRight className="w-4 h-4" />
			</a>
		</div>
	);
}

export function Team() {
	return (
		<Section className={`${colors.pageBg} relative overflow-hidden`}>
			{/* Same animated gradient as hero, behind team photos */}
			<div className="absolute inset-0 pointer-events-none opacity-40">
				<AnimatedGradient />
			</div>

			<div className="relative">
				<SectionTag label="Team" />
				<SectionHeading className="mb-16">
					Meet the <DimText>Team</DimText>
				</SectionHeading>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{TEAM_MEMBERS.map((member) => (
						<TeamMemberCard
							key={member.name}
							name={member.name}
							role={member.role}
							image={member.image}
							linkedin={member.linkedin}
						/>
					))}
				</div>

				<MentorBar />
			</div>
		</Section>
	);
}
