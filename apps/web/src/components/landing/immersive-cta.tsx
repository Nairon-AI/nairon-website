import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { FINAL_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

/**
 * Boomerang video: plays forward, then smoothly reverses back to the start, repeat.
 * Uses requestAnimationFrame to step currentTime backward for a seamless loop.
 */
function useBoomerangVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const reversing = useRef(false);
	const rafId = useRef<number>(0);
	const lastTime = useRef<number>(0);

	const stepReverse = useCallback((timestamp: number) => {
		const video = videoRef.current;
		if (!video) return;

		if (lastTime.current === 0) lastTime.current = timestamp;
		const delta = (timestamp - lastTime.current) / 1000; // seconds elapsed
		lastTime.current = timestamp;

		video.currentTime = Math.max(0, video.currentTime - delta * video.playbackRate);

		if (video.currentTime <= 0.05) {
			// Reached the start — switch back to forward
			reversing.current = false;
			lastTime.current = 0;
			video.currentTime = 0;
			video.play();
			return;
		}

		rafId.current = requestAnimationFrame(stepReverse);
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const onEnded = () => {
			reversing.current = true;
			lastTime.current = 0;
			video.pause();
			rafId.current = requestAnimationFrame(stepReverse);
		};

		video.addEventListener("ended", onEnded);
		return () => {
			video.removeEventListener("ended", onEnded);
			cancelAnimationFrame(rafId.current);
		};
	}, [stepReverse]);

	return videoRef;
}

function CTAContent() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = FINAL_CTA[view];

	return (
		<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
			{/* Pulsing badge */}
			<div className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
				<span className="relative flex h-2 w-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
				</span>
				<span className="text-sm text-white/80">{data.badge}</span>
			</div>

			{/* Heading with mixed typography */}
			<h2 className="text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white mb-5">
				{data.headlineParts.map((part, i) =>
					part.italic ? (
						<span key={i} className="font-serif italic font-normal">
							{part.text}
						</span>
					) : (
						<span key={i}>{part.text}</span>
					),
				)}
			</h2>

			{/* Subtext */}
			<p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl">
				{data.subtext}
			</p>

			{/* Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 items-center">
				<a
					href={data.primaryCta.href}
					className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black font-semibold text-base px-8 py-4 rounded-full transition-colors"
				>
					{data.primaryCta.label}
					<ArrowUpRight className="w-4 h-4" />
				</a>
				<a
					href={data.secondaryCta.href}
					className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-sm border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-full transition-colors"
				>
					{data.secondaryCta.label}
					<ArrowUpRight className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
}

/**
 * Immersive CTA — fixed behind the page content.
 * As the user scrolls past the last section (which has rounded bottom corners),
 * this CTA is revealed underneath with an animated video background.
 */
export function ImmersiveCTA() {
	const ctaRef = useRef<HTMLDivElement>(null);
	const videoRef = useBoomerangVideo();
	const [ctaHeight, setCtaHeight] = useState(0);

	useEffect(() => {
		if (!ctaRef.current) return;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setCtaHeight(entry.contentRect.height);
			}
		});
		observer.observe(ctaRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* Fixed CTA layer — sits behind the scrolling content */}
			<div
				ref={ctaRef}
				className="fixed inset-x-0 bottom-0 z-[1]"
				style={{ minHeight: "100dvh" }}
			>
				{/* Video background — boomerang loop (forward → reverse → forward…) */}
				<video
					ref={videoRef}
					autoPlay
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="/cta-bg.mp4" type="video/mp4" />
				</video>

				{/* Dark overlay for legibility */}
				<div className="absolute inset-0 bg-black/40" />

				{/* Gradient fade at top */}
				<div
					className="absolute inset-x-0 top-0 z-[2] pointer-events-none"
					style={{
						height: "25%",
						background:
							"linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
					}}
				/>

				{/* Gradient fade at bottom */}
				<div
					className="absolute inset-x-0 bottom-0 z-[2] pointer-events-none"
					style={{
						height: "20%",
						background:
							"linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
					}}
				/>

				{/* CTA content — shifted slightly above center */}
				<div className="relative z-10 flex items-center justify-center h-full min-h-[100dvh] pt-16 pb-[6%]">
					<CTAContent />
				</div>
			</div>

			{/* Spacer — pushes scrollable area so the fixed CTA can be fully revealed */}
			<div
				className="relative"
				style={{ height: ctaHeight || "100dvh" }}
				aria-hidden="true"
			/>
		</>
	);
}
