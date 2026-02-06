import { AnimatedGradient } from "@/components/landing/animated-gradient";

export function ProgramHero() {
	return (
		<section className="relative h-[250px] md:h-[50vh] md:min-h-[400px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
			{/* Animated gradient background */}
			<div className="absolute inset-0">
				<AnimatedGradient />
			</div>

			{/* Large "Program Details" heading */}
			<h1
				className="relative z-10 text-5xl md:text-[clamp(3rem,10vw,9rem)] font-display font-bold text-white leading-none text-center px-4 tracking-tight-2xl"
			>
				<span className="block md:inline">Program</span>{" "}
				<span className="block md:inline">Details</span>
			</h1>
		</section>
	);
}
