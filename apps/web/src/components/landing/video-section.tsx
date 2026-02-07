import { useViewMode } from "@/contexts/view-mode-context";

export function VideoSection() {
	const { isEngineer } = useViewMode();

	const videoUrl = isEngineer
		? "https://www.youtube.com/embed/dQw4w9WgXcQ"
		: "https://www.youtube.com/embed/dQw4w9WgXcQ";

	return (
		<section
			className="relative z-10 px-6 pb-24"
			style={{
				/* Pull up by half the video height: video is 16:9 aspect inside max-w-6xl (72rem) with px-6 (48px) */
				marginTop: "calc(min(72rem, 100vw - 48px) * -9 / 32 + 4rem)",
			}}
		>
			<div className="max-w-6xl mx-auto">
				<div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-black/50">
					<iframe
						src={videoUrl}
						title="Nairon"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="absolute inset-0 w-full h-full"
					/>
				</div>
			</div>
		</section>
	);
}
