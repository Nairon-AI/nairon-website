import { AnimatedGradient } from "../landing/animated-gradient";

export function HireHero() {
	return (
		<header className="relative min-h-screen flex flex-col justify-center items-center hero-gradient overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 z-0">
				<AnimatedGradient />
			</div>
			<div className="relative z-10 w-full flex flex-col items-center justify-center px-6">
				<h1
					className="font-semibold text-white text-center"
					style={{
						fontSize: "clamp(80px, 10vw, 120px)",
						letterSpacing: "-6px",
						lineHeight: 0.85,
					}}
				>
					<span className="block">Hiring</span>
					<span className="block">Nairon</span>
					<span className="block">Engineers</span>
				</h1>
			</div>
		</header>
	);
}
