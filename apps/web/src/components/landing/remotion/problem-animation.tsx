import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	spring,
	useVideoConfig,
} from "remotion";
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT } from "./shared";

const RESUME_COUNT = 8;
const RESUME_STAGGER = 22;
const STAMP_DELAY = 14;
const EXIT_DELAY = 20;

/** Dashed arc SVG — decorative gauge */
function DashedArc({
	cx,
	cy,
	r,
	startAngle,
	endAngle,
	color,
	opacity,
}: {
	cx: number;
	cy: number;
	r: number;
	startAngle: number;
	endAngle: number;
	color: string;
	opacity: number;
}) {
	const dashes: { x1: number; y1: number; x2: number; y2: number }[] = [];
	const steps = 32;
	const range = endAngle - startAngle;
	for (let i = 0; i <= steps; i++) {
		const angle = startAngle + (range * i) / steps;
		const rad = (angle * Math.PI) / 180;
		const cos = Math.cos(rad);
		const sin = Math.sin(rad);
		dashes.push({
			x1: cx + (r - 6) * cos,
			y1: cy + (r - 6) * sin,
			x2: cx + (r + 6) * cos,
			y2: cy + (r + 6) * sin,
		});
	}
	return (
		<g opacity={opacity}>
			{dashes.map((d, i) => (
				<line
					key={i}
					x1={d.x1}
					y1={d.y1}
					x2={d.x2}
					y2={d.y2}
					stroke={color}
					strokeWidth={2}
					strokeLinecap="round"
				/>
			))}
		</g>
	);
}

/** Glass resume card */
function ResumeCard({
	index,
	frame,
	fps,
}: { index: number; frame: number; fps: number }) {
	const enterStart = index * RESUME_STAGGER;
	const stampStart = enterStart + STAMP_DELAY;
	const exitStart = stampStart + EXIT_DELAY;

	const enterProgress = spring({
		frame: frame - enterStart,
		fps,
		config: { damping: 14, stiffness: 100, mass: 0.7 },
	});

	const exitProgress = spring({
		frame: frame - exitStart,
		fps,
		config: { damping: 18, stiffness: 80, mass: 0.6 },
	});

	const stampScale = spring({
		frame: frame - stampStart,
		fps,
		config: { damping: 8, stiffness: 200, mass: 0.4 },
	});

	const x =
		interpolate(enterProgress, [0, 1], [-280, 0]) +
		interpolate(exitProgress, [0, 1], [0, CANVAS_WIDTH + 120]);

	const col = index >= 4 ? 1 : 0;
	const row = index % 4;
	const xBase = col === 0 ? 40 : CANVAS_WIDTH / 2 + 10;
	const yBase = 55 + row * 68;

	if (frame < enterStart) return null;

	const isStamped = frame >= stampStart;
	const borderColor = isStamped
		? "rgba(239, 68, 68, 0.2)"
		: COLORS.glassBorder;

	return (
		<div
			style={{
				position: "absolute",
				left: xBase + x,
				top: yBase,
				width: 260,
				height: 54,
				background: isStamped
					? "rgba(239, 68, 68, 0.04)"
					: COLORS.glassFill,
				border: `1px solid ${borderColor}`,
				borderRadius: 14,
				display: "flex",
				alignItems: "center",
				padding: "0 14px",
				gap: 12,
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				boxShadow: isStamped
					? `inset 0 0 20px ${COLORS.redSoft}`
					: "inset 0 1px 0 rgba(255,255,255,0.04)",
			}}
		>
			<div
				style={{
					width: 32,
					height: 32,
					borderRadius: "50%",
					background:
						"linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
					border: `1px solid ${COLORS.glassBorder}`,
					flexShrink: 0,
				}}
			/>
			<div style={{ flex: 1 }}>
				<div
					style={{
						height: 8,
						width: "65%",
						background:
							"linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
						borderRadius: 4,
						marginBottom: 7,
					}}
				/>
				<div
					style={{
						height: 6,
						width: "45%",
						background:
							"linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
						borderRadius: 3,
					}}
				/>
			</div>

			{isStamped && (
				<div
					style={{
						position: "absolute",
						right: 16,
						top: "50%",
						transform: `translateY(-50%) scale(${stampScale})`,
						width: 26,
						height: 26,
						borderRadius: "50%",
						background: `radial-gradient(circle, ${COLORS.redGlow}, transparent)`,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<span
						style={{
							color: COLORS.red,
							fontSize: 16,
							fontWeight: 800,
							filter: `drop-shadow(0 0 6px ${COLORS.redGlow})`,
						}}
					>
						✕
					</span>
				</div>
			)}
		</div>
	);
}

export function ProblemAnimation() {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const counterProgress = interpolate(frame, [0, 260], [0, 1], {
		extrapolateRight: "clamp",
	});
	const counterValue = Math.floor(10000 * counterProgress * counterProgress);
	const blinkOn = Math.floor(frame / 30) % 2 === 0;
	const arcRotation = interpolate(frame, [0, 300], [0, 30]);

	return (
		<AbsoluteFill
			style={{
				background: `
					radial-gradient(ellipse 80% 60% at 50% 110%, ${COLORS.redDark} 0%, transparent 60%),
					radial-gradient(ellipse 60% 50% at 20% 0%, rgba(239, 68, 68, 0.06) 0%, transparent 50%),
					linear-gradient(180deg, #0a0a0e 0%, ${COLORS.bgDeep} 100%)
				`,
				overflow: "hidden",
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
			}}
		>
			<svg
				width={CANVAS_WIDTH}
				height={CANVAS_HEIGHT}
				style={{ position: "absolute", top: 0, left: 0 }}
			>
				<DashedArc
					cx={CANVAS_WIDTH / 2}
					cy={CANVAS_HEIGHT + 80}
					r={340}
					startAngle={-140 + arcRotation}
					endAngle={-40 + arcRotation}
					color="rgba(239, 68, 68, 0.12)"
					opacity={0.6}
				/>
				<DashedArc
					cx={CANVAS_WIDTH / 2}
					cy={CANVAS_HEIGHT + 80}
					r={300}
					startAngle={-150 + arcRotation * 0.7}
					endAngle={-30 + arcRotation * 0.7}
					color="rgba(255, 255, 255, 0.05)"
					opacity={0.4}
				/>
			</svg>

			<div
				style={{
					position: "absolute",
					top: 0,
					left: "20%",
					right: "20%",
					height: 1,
					background:
						"linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.15), transparent)",
				}}
			/>

			{Array.from({ length: RESUME_COUNT }).map((_, i) => (
				<ResumeCard key={i} index={i} frame={frame} fps={fps} />
			))}

			<div
				style={{
					position: "absolute",
					bottom: 20,
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					gap: 2,
					background: COLORS.glassFill,
					border: `1px solid ${COLORS.glassBorder}`,
					borderRadius: 20,
					padding: "10px 8px",
					backdropFilter: "blur(16px)",
					WebkitBackdropFilter: "blur(16px)",
				}}
			>
				<div
					style={{
						textAlign: "center",
						padding: "0 24px",
						borderRight: `1px solid ${COLORS.glassBorder}`,
					}}
				>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: COLORS.textPrimary,
							fontVariantNumeric: "tabular-nums",
							letterSpacing: -1,
						}}
					>
						{counterValue.toLocaleString()}+
					</div>
					<div
						style={{
							fontSize: 10,
							color: COLORS.textDim,
							textTransform: "uppercase",
							letterSpacing: 2,
							marginTop: 1,
						}}
					>
						Applications
					</div>
				</div>
				<div style={{ textAlign: "center", padding: "0 24px" }}>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: blinkOn ? COLORS.red : "rgba(239, 68, 68, 0.2)",
							fontVariantNumeric: "tabular-nums",
							letterSpacing: -1,
							filter: blinkOn
								? `drop-shadow(0 0 10px ${COLORS.redGlow})`
								: "none",
							transition: "color 0.3s, filter 0.3s",
						}}
					>
						0
					</div>
					<div
						style={{
							fontSize: 10,
							color: COLORS.textDim,
							textTransform: "uppercase",
							letterSpacing: 2,
							marginTop: 1,
						}}
					>
						Interviews
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
