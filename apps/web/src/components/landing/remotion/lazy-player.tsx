import { type ComponentType, lazy, Suspense, useEffect, useState } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH, DURATION_FRAMES, FPS } from "./shared";

const RemotionPlayer = lazy(() =>
	import("@remotion/player").then((mod) => ({ default: mod.Player })),
);

export function LazyPlayer({
	component,
}: {
	component: ComponentType;
}) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return (
			<div
				style={{
					width: "100%",
					aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`,
					backgroundColor: "#111114",
					borderRadius: "0.75rem 0.75rem 0 0",
				}}
			/>
		);
	}

	return (
		<Suspense
			fallback={
				<div
					style={{
						width: "100%",
						aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`,
						backgroundColor: "#111114",
						borderRadius: "0.75rem 0.75rem 0 0",
					}}
				/>
			}
		>
			<RemotionPlayer
				component={component}
				compositionWidth={CANVAS_WIDTH}
				compositionHeight={CANVAS_HEIGHT}
				durationInFrames={DURATION_FRAMES}
				fps={FPS}
				autoPlay
				loop
				controls={false}
				style={{
					width: "100%",
					borderRadius: "0.75rem 0.75rem 0 0",
				}}
			/>
		</Suspense>
	);
}
