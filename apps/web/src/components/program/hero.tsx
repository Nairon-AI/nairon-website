import { AnimatedGradient } from "@/components/landing/animated-gradient";

export function ProgramHero() {
	return (
		<section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0">
				<AnimatedGradient />
			</div>

			{/* Large "Program Details" heading */}
			<h1
				className="relative z-10 text-[clamp(3rem,10vw,9rem)] font-urbanist font-bold text-white leading-none text-center"
				style={{ letterSpacing: "-4px" }}
			>
				<span>Program</span>{" "}
				<span>Details</span>
			</h1>
		</section>
	);
}
