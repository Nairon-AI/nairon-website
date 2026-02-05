import { AnimatedGradient } from "../landing/animated-gradient";

export function CareersHero() {
	return (
		<header className="relative h-[250px] md:h-[320px] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
			{/* Animated gradient background */}
			<div className="absolute inset-0 z-0">
				<AnimatedGradient />
			</div>
			{/* Large "Careers" text */}
			<h1
				className="relative z-10 text-6xl md:text-[100px] lg:text-[160px] font-semibold text-white text-center"
				style={{ letterSpacing: "-4px" }}
			>
				Careers
			</h1>
		</header>
	);
}
