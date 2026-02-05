import { AnimatedGradient } from "../landing/animated-gradient";

export function CareersHero() {
	return (
		<header className="relative h-[320px] flex items-center justify-center overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 z-0">
				<AnimatedGradient />
			</div>
			{/* Large "Careers" text */}
			<h1
				className="relative z-10 text-[100px] md:text-[160px] font-semibold text-white text-center"
				style={{ letterSpacing: "-19.2px" }}
			>
				Careers
			</h1>
		</header>
	);
}
