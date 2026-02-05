import { ArrowDown } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { useRotatingText } from "@/hooks/use-rotating-text";
import { AnimatedGradient } from "./animated-gradient";
import { colors } from "./primitives";
import { APPLICATION_DEADLINE, HERO_WORDS } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";
import { DigitalText } from "@/components/digital-text";

function CountdownUnit({ value, label }: { value: number; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<div className={`${colors.glassBg} border ${colors.border} rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center`}>
				<span className="text-3xl md:text-4xl font-semibold tabular-nums text-white tracking-tight">
					{String(value).padStart(2, "0")}
				</span>
			</div>
			<span className={`text-xs mt-2 ${colors.textMuted}`}>{label}</span>
		</div>
	);
}

function Countdown() {
	const countdown = useCountdown(APPLICATION_DEADLINE);

	return (
		<div className="mt-8 text-center">
			<h4
				className="text-white text-2xl mb-6 tracking-tight"
				style={{ letterSpacing: "-0.72px" }}
			>
				Applications close:
			</h4>
			<div className="flex gap-3 md:gap-4 justify-center">
				<CountdownUnit value={countdown.days} label="Days" />
				<CountdownUnit value={countdown.hours} label="Hours" />
				<CountdownUnit value={countdown.minutes} label="Minutes" />
				<CountdownUnit value={countdown.seconds} label="Seconds" />
			</div>
		</div>
	);
}

function InfoBar() {
	return (
		<div className="mt-16 w-full flex flex-col items-center md:flex-row md:items-center md:justify-between border-t border-white/10 pt-6">
			<div
				className="text-white text-xl md:text-2xl tracking-tight text-center md:text-left"
				style={{ letterSpacing: "-0.72px" }}
			>
				Q1 2026
			</div>
			<div
				className="text-white text-xl md:text-2xl tracking-tight overflow-hidden text-center md:text-left mt-4 md:mt-0"
				style={{ letterSpacing: "-0.72px" }}
			>
				Dubai, United Arab Emirates
			</div>
			<a
				href="#about"
				className={`w-10 h-10 rounded-full border ${colors.borderInteractive} flex items-center justify-center hover:bg-white/5 transition-colors shrink-0 mt-6 md:mt-0`}
			>
				<ArrowDown className="w-4 h-4 text-white/60" />
			</a>
		</div>
	);
}

export function Hero() {
	const currentWord = useRotatingText(HERO_WORDS);
	const { isEngineer } = useViewMode();

	// Different content based on view mode
	const heroContent = {
		engineer: {
			tagline: "AI Bootcamp for the",
			highlight: currentWord,
		},
		hiringManager: {
			tagline: "Where top companies hire the",
			highlight: "1% Engineer",
		},
	};

	const content = isEngineer ? heroContent.engineer : heroContent.hiringManager;

	return (
		<header className="relative min-h-screen flex flex-col justify-center hero-gradient overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 z-0">
				<AnimatedGradient />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12 w-full flex flex-col items-center">
				{/* Nairon logo image */}
				<img
					src="https://framerusercontent.com/images/VHRAdVMCwEE6Q9afizgYDgxitUU.png"
					alt="nairon."
					className="w-[40vw] max-w-[600px] h-auto"
				/>

				<div className="mt-2 text-center flex flex-col md:flex-row items-center justify-center md:gap-3">
					<h3
						className="text-xl md:text-[34px] font-medium text-white"
						style={{ letterSpacing: "-1.36px", lineHeight: "1.3" }}
					>
						<DigitalText text={content.tagline} duration={600} />
					</h3>
					<span
						className="text-3xl md:text-[44px] font-semibold italic text-white inline-block md:min-w-[220px] text-center md:text-left"
						style={{ letterSpacing: "-1.36px", lineHeight: "1.3" }}
					>
						<DigitalText text={content.highlight} duration={600} />
					</span>
				</div>

				<Countdown />
				<InfoBar />
			</div>
		</header>
	);
}
