import type { ReactNode } from "react";
import { House, Plane, UtensilsCrossed } from "lucide-react";
import { Section } from "./primitives";
import { BENEFITS_BENTO_SECTION } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

function Tag({ label }: { label: string }) {
	return (
		<span className="inline-flex w-fit rounded-full border border-white/16 bg-black/25 px-3 py-1 text-[11px] text-white/75">
			{label}
		</span>
	);
}

function BentoCard({
	children,
	className,
	accentGlow,
}: {
	children: ReactNode;
	className?: string;
	accentGlow: string;
}) {
	return (
		<div
			className={`relative overflow-hidden rounded-[26px] border border-white/12 p-7 md:p-8 ${className ?? ""}`}
			style={{
				background: `radial-gradient(circle at 100% 100%, ${accentGlow}, rgba(0,0,0,0) 46%), linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
			}}
		>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-black/35 to-black/60" />
			<div className="relative">{children}</div>
		</div>
	);
}

export function BenefitsBento() {
	const { isEngineer, isHiringManager } = useViewMode();
	const section = BENEFITS_BENTO_SECTION[isEngineer ? "engineer" : "hiringManager"];
	const accent = isEngineer ? "#22DB18" : "#CF9611";
	const orbAsset = isHiringManager ? "/nairon-orb-gold.webp" : "/nairon-orb.webp";
	const strobeAsset = isHiringManager ? "/nairon-strobe-gold.webp" : "/nairon-stobe.webp";
	const benefitIcons = {
		home: House,
		plane: Plane,
		food: UtensilsCrossed,
	} as const;

	return (
		<Section className="py-8 md:py-12">
			<div className="mx-auto max-w-5xl">
				<div className="mb-7 md:mb-8 text-center">
					<div className="text-xs uppercase tracking-[0.2em] text-white/55">{section.eyebrow}</div>
					<h2 className="mt-3 font-serif text-[2.35rem] leading-[1.02] tracking-[-0.02em] text-landing-text md:text-[3.7rem]">
						{section.title}
					</h2>
				</div>

				<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:grid-rows-2">
					<BentoCard className="lg:row-span-2" accentGlow={isEngineer ? "rgba(34,219,24,0.24)" : "rgba(207,150,17,0.28)"}>
						<img
							src={orbAsset}
							alt=""
							aria-hidden="true"
							loading="lazy"
							width={860}
							height={860}
							className="pointer-events-none absolute right-[-12rem] bottom-[-38rem] h-[860px] w-[860px] object-contain opacity-55 mix-blend-screen"
						/>
						<Tag label={section.cards.experience.tag} />
						<h3 className="mt-4 text-[1.9rem] leading-[1.07] tracking-tight text-landing-text md:text-[3rem]">
							{section.cards.experience.heading}
						</h3>
						<div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
							{section.cards.experience.items.map((item) => (
								<div key={item.text}>
									{(() => {
										const Icon = benefitIcons[item.icon];
										return <Icon className="h-6 w-6" style={{ color: accent }} />;
									})()}
									<div className="mt-3 text-[0.95rem] leading-relaxed text-landing-text-body">{item.text}</div>
								</div>
							))}
						</div>
					</BentoCard>

					<BentoCard accentGlow={isEngineer ? "rgba(34,219,24,0.24)" : "rgba(207,150,17,0.28)"}>
						<Tag label={section.cards.resources.tag} />
						<h3 className="mt-4 text-[1.6rem] leading-tight tracking-tight text-landing-text md:text-[1.75rem]">
							{section.cards.resources.heading}
						</h3>
						<div className="mt-5 space-y-3 text-base text-landing-text-body">
							{section.cards.resources.items.map((item) => (
								<div key={item}>{item}</div>
							))}
						</div>
					</BentoCard>

					<BentoCard accentGlow={isEngineer ? "rgba(34,219,24,0.24)" : "rgba(207,150,17,0.28)"}>
						<Tag label={section.cards.community.tag} />
						<h3 className="mt-4 text-[1.6rem] leading-tight tracking-tight text-landing-text md:text-[1.75rem]">
							{section.cards.community.heading}
						</h3>
						<div className="mt-5 space-y-3 text-base text-landing-text-body">
							{section.cards.community.items.map((item) => (
								<div key={item}>{item}</div>
							))}
						</div>
					</BentoCard>
				</div>

				<div className="mt-4">
					<div
						className="relative overflow-hidden rounded-[26px] border border-white/12 p-6 md:p-8"
						style={{
							background: `radial-gradient(circle at 100% 100%, ${isEngineer ? "rgba(34,219,24,0.52)" : "rgba(207,150,17,0.56)"}, rgba(0,0,0,0) 42%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
						}}
					>
						<img
							src={strobeAsset}
							alt=""
							aria-hidden="true"
							loading="lazy"
							width={1920}
							height={1440}
							className="pointer-events-none absolute right-[-8%] top-[-28%] h-[180%] w-[78%] object-cover opacity-48 mix-blend-screen"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-black/35 to-black/55" />
						<div className="relative">
							<Tag label={section.cards.guarantee.tag} />
							<div className="mt-4 text-5xl font-medium tracking-tight text-landing-text md:text-7xl">
								{section.cards.guarantee.value}
							</div>
							<div className="mt-3 text-lg text-landing-text-body">{section.cards.guarantee.note}</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
