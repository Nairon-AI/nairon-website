import { useState } from "react";
import { useViewMode } from "@/contexts/view-mode-context";

export function VideoSection() {
	const { isEngineer } = useViewMode();
	const [playing, setPlaying] = useState(false);

	const videoUrl = isEngineer
		? "https://www.youtube.com/embed/pjNI9K1D_xo"
		: "https://www.youtube.com/embed/pjNI9K1D_xo";

	return (
		<section
			className="relative z-10 px-6 pb-24"
			style={{
				/* Pull up into hero; scale the offset down on tall viewports so the video sits higher */
				marginTop: "calc(min(72rem, 100vw - 48px) * -9 / 32 + clamp(1rem, 4rem - 2vmin, 4rem))",
			}}
		>
			<div className="max-w-6xl mx-auto">
				<div className="relative rounded-2xl overflow-hidden aspect-video border border-white/12 shadow-2xl shadow-black/50 bg-black">
					{playing ? (
						<iframe
							src={`${videoUrl}?autoplay=1`}
							title="Nairon"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="absolute inset-0 w-full h-full"
						/>
					) : (
						<button
							type="button"
							onClick={() => setPlaying(true)}
							aria-label="Play Nairon introduction video"
							className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
						>
							<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
								<svg
									viewBox="0 0 24 24"
									fill="white"
									className="w-7 h-7 ml-1"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
