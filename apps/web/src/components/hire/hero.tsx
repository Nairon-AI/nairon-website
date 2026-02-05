import { AnimatedGradient } from "../landing/animated-gradient";

export function HireHero() {
	return (
		<header
			className="relative flex items-center justify-center overflow-hidden"
			style={{ height: "350px", padding: "260px 40px 0px" }}
		>
			{/* Animated gradient background */}
			<div className="absolute inset-0 z-0">
				<AnimatedGradient variant="gold" />
			</div>
			<div className="relative z-10 w-full max-w-[1440px]">
				<h1
					className="font-semibold text-white text-center"
					style={{
						fontSize: "120px",
						letterSpacing: "-8.4px",
						lineHeight: "90px",
					}}
				>
					Hiring Nairon Engineers
				</h1>
			</div>
		</header>
	);
}
