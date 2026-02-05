import { ArrowUpRight } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
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
			className="mt-8 flex items-center justify-between bg-white/12 hover:bg-white/20 text-white text-base pl-4 pr-1.5 py-1.5 rounded-full transition-colors w-full h-12"
		>
			<span>{label}</span>
			<span className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center shrink-0">
				<ArrowUpRight className="w-4 h-4" />
			</span>
		</a>
	);
}

function PricingLabel({ label }: { label: string }) {
	return (
		<div className="mb-6">
			<span className="text-base text-white bg-black/20 rounded-lg px-2 py-1">
				{label}
			</span>
		</div>
	);
}

function BarBullet({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-2.5">
			<div className="w-1 h-6 bg-white/20 shrink-0" />
			<span className={`text-base ${colors.text}`}>{children}</span>
		</div>
	);
}

// Engineer CTA Row - Left dark, Right green gradient
function EngineerCTARow() {
	return (
		<div className="flex flex-col lg:flex-row gap-2.5">
			{/* Left: Dark card with content */}
			<div className="rounded-3xl bg-black border border-white/10 p-8 md:p-10 lg:w-[60%]">
				<h4
					className={`font-semibold text-2xl mb-2 ${colors.text}`}
					style={{ letterSpacing: "-0.72px" }}
				>
					Start the Application
				</h4>
				<p className="text-base leading-relaxed text-white/70 mb-8">
					Upload your CV and take the first step toward joining the most
					selective AI engineering program in the Middle East.
				</p>
				<div className="space-y-3">
					{ENGINEER_BENEFITS.map((point) => (
						<BarBullet key={point}>{point}</BarBullet>
					))}
				</div>
			</div>

			{/* Right: Green gradient card with pricing */}
			<div className="relative rounded-3xl overflow-hidden lg:w-[40%] min-h-[300px]">
				{/* Green gradient background image */}
				<img
					src="https://framerusercontent.com/images/cCL2QZFtjBzhpu3HuM4JaLndar8.png"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
					<div>
						<PricingLabel label="For Engineers" />
						<h2
							className="text-[60px] font-urbanist font-medium text-[#ededed] mb-2"
							style={{ letterSpacing: "-2.4px" }}
						>
							Free
						</h2>
						<p className="text-white/40">Only your commitment</p>
					</div>
					<PricingAction
						href="https://apply.naironai.com"
						label="Apply Now"
						target="_blank"
					/>
				</div>
			</div>
		</div>
	);
}

// Client CTA Row - Left dark, Right gold gradient
function ClientCTARow() {
	return (
		<div className="flex flex-col lg:flex-row gap-2.5">
			{/* Left: Dark card with content */}
			<div className="rounded-3xl bg-black border border-white/10 p-8 md:p-10 lg:w-[60%]">
				<h4
					className={`font-semibold text-2xl mb-2 ${colors.text}`}
					style={{ letterSpacing: "-0.72px" }}
				>
					Partner With Nairon's Hiring Network
				</h4>
				<p className="text-base leading-relaxed text-white/70 mb-8">
					Gain exclusive access to pre-vetted AI engineers who have survived one
					of the world's most demanding programs.
				</p>
				<div className="space-y-3">
					{CLIENT_BENEFITS.map((point) => (
						<BarBullet key={point}>{point}</BarBullet>
					))}
				</div>
			</div>

			{/* Right: Gold gradient card with pricing */}
			<div className="relative rounded-3xl overflow-hidden lg:w-[40%] min-h-[300px]">
				{/* Gold gradient background image */}
				<img
					src="https://framerusercontent.com/images/pshetKl5VEKwnAW1nwizR8675w.png"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
					<div>
						<PricingLabel label="For Clients" />
						<h2
							className="text-[60px] font-urbanist font-medium text-[#ededed] mb-2 leading-none"
							style={{ letterSpacing: "-2.4px" }}
						>
							Exclusive
							<br />
							Access
						</h2>
						<p className="text-white/40">Contact us for partnership</p>
					</div>
					<PricingAction href="/hire" label="Book a hiring call" />
				</div>
			</div>
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

			<div className="flex flex-col gap-[60px]">
				<EngineerCTARow />
				<ClientCTARow />
			</div>
		</Section>
	);
}
