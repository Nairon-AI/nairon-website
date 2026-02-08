import { NBENCH_HERO, NBENCH_HERO_TERMINAL } from "@/data/nbench";
import {
	GradientHeading,
	NBenchSection,
	TerminalWindow,
} from "@/components/landing/nbench/primitives";

export function NBenchHero() {
	return (
		<NBenchSection className="overflow-hidden pb-0 pt-36 md:pt-44">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[rgb(8,8,8)]" />
			<div className="pointer-events-none absolute inset-x-0 top-[-24rem] -z-10 mx-auto h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(49,255,103,0.08)_0%,rgba(49,255,103,0.03)_28%,transparent_72%)] blur-3xl" />
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,219,24,0.05),transparent_34%)]" />

			<div className="md:px-4">
				<div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-1.5 font-inter text-[11px] uppercase tracking-[0.16em] text-white/70">
				{NBENCH_HERO.badge}
				</div>
				<GradientHeading className="mt-8 max-w-[15ch] overflow-visible pb-[0.08em] text-center text-[2rem] leading-[1.06] sm:max-w-none sm:text-[2.65rem] md:text-left md:text-[3.5rem] lg:text-[3.75rem]">
					NBench is a purpose-built tool for<br />
					planning and building AI-native engineers
				</GradientHeading>
				<p className="mt-6 max-w-xl text-center font-inter text-[17px] leading-[1.6] text-[#8f8f8f] md:max-w-none md:text-left md:whitespace-nowrap">
				{NBENCH_HERO.description}
				</p>
			</div>

			<div className="relative mt-16 md:mt-36">
				<div className="pointer-events-none absolute inset-x-[10%] top-[0%] h-28 bg-[radial-gradient(ellipse_at_center,rgba(102,255,143,0.10),rgba(102,255,143,0)_72%)] blur-2xl" />
				<div className="md:-ml-16">
					<div className="relative md:h-[760px] md:w-[1800px]">
						<div className="relative h-full w-full md:[perspective-origin:100%_0px] md:[perspective:4000px] md:[transform-style:preserve-3d]">
							<div className="relative md:absolute md:inset-0 md:w-[1600px] md:origin-top-left md:[backface-visibility:hidden] md:[transform:translate(-6%)_scale(1.15)_rotateX(47deg)_rotateY(31deg)_rotate(324deg)]">
								<TerminalWindow
									title={NBENCH_HERO_TERMINAL.title}
									lines={NBENCH_HERO_TERMINAL.lines}
									className="before:pointer-events-none before:absolute before:inset-0 before:rounded-[10px] before:bg-[linear-gradient(160deg,rgba(255,255,255,0.10)_0%,transparent_30%)] before:content-['']"
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_40%,rgba(8,8,8,0.6)_65%,rgb(8,8,8)_100%)]" />
					</div>
				</div>
			</div>
		</NBenchSection>
	);
}
