import { ArrowUpRight } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	GlassCard,
	BodyText,
	BulletPoint,
	colors,
} from "./primitives";
import { ENGINEER_BENEFITS, CLIENT_BENEFITS } from "@/data/landing";

function PricingAction({
	href,
	label,
	target,
}: { href: string; label: string; target?: string }) {
	return (
		<a
			href={href}
			target={target}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			className={`mt-8 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border ${colors.borderInteractive} text-white font-medium text-sm px-6 py-3 rounded-full transition-colors w-full`}
		>
			{label}
			<ArrowUpRight className="w-4 h-4" />
		</a>
	);
}

function PricingLabel({ label }: { label: string }) {
	return (
		<div className="mb-6">
			<span className={`text-xs text-white/70 border ${colors.borderInteractive} rounded-full px-3 py-1`}>
				{label}
			</span>
		</div>
	);
}

function ApplicationCard() {
	return (
		<GlassCard className="overflow-hidden p-8 md:p-10">
			<h4 className={`font-semibold text-xl mb-2 ${colors.text}`}>
				Start the Application
			</h4>
			<BodyText className="mb-8">
				Upload your CV and take the first step toward joining the most
				selective AI engineering program in the Middle East.
			</BodyText>
			<div className="space-y-3">
				{ENGINEER_BENEFITS.map((point) => (
					<BulletPoint key={point} color="green">
						{point}
					</BulletPoint>
				))}
			</div>
		</GlassCard>
	);
}

function FreeCard() {
	return (
		<div className="pricing-gradient-green rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col justify-between">
			<div>
				<PricingLabel label="For Engineers" />
				<h2 className="text-5xl md:text-6xl font-urbanist font-bold text-white mb-2">
					Free
				</h2>
				<p className={colors.textMuted}>Only your commitment</p>
			</div>
			<PricingAction
				href="https://apply.naironai.com"
				label="Apply Now"
				target="_blank"
			/>
		</div>
	);
}

function PartnerCard() {
	return (
		<GlassCard className="overflow-hidden p-8 md:p-10">
			<h4 className={`font-semibold text-xl mb-2 ${colors.text}`}>
				Partner With Nairon's Hiring Network
			</h4>
			<BodyText className="mb-8">
				Gain exclusive access to pre-vetted AI engineers who have survived one
				of the world's most demanding programs.
			</BodyText>
			<div className="space-y-3">
				{CLIENT_BENEFITS.map((point) => (
					<BulletPoint key={point} color="gold">
						{point}
					</BulletPoint>
				))}
			</div>
		</GlassCard>
	);
}

function ExclusiveAccessCard() {
	return (
		<div className="pricing-gradient-gold rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col justify-between">
			<div>
				<PricingLabel label="For Clients" />
				<h2 className="text-5xl md:text-6xl font-urbanist font-bold text-white mb-2">
					Exclusive Access
				</h2>
				<p className={colors.textMuted}>Contact us for partnership</p>
			</div>
			<PricingAction href="/hire" label="Book a hiring call" />
		</div>
	);
}

export function CTA() {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="Application" />
			<SectionHeading className="mb-16">
				Earn Your Place at <DimText>Nairon's AI Bootcamp Today!</DimText>
			</SectionHeading>

			<div className="space-y-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<ApplicationCard />
					<FreeCard />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<PartnerCard />
					<ExclusiveAccessCard />
				</div>
			</div>
		</Section>
	);
}
