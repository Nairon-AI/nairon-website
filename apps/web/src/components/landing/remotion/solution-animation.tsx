import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	spring,
	useVideoConfig,
} from "remotion";
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT } from "./shared";

const COUNTER_STEPS = [
	[0, 10000],
	[60, 10000],
	[100, 200],
	[140, 200],
	[170, 50],
	[200, 50],
	[230, 12],
] as const;

function getCounterValue(frame: number): number {
	for (let i = COUNTER_STEPS.length - 1; i >= 0; i--) {
		if (frame >= COUNTER_STEPS[i][0]) {
			if (i === COUNTER_STEPS.length - 1) return COUNTER_STEPS[i][1];
			const [startFrame, startVal] = COUNTER_STEPS[i];
			const [endFrame, endVal] = COUNTER_STEPS[i + 1];
			const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
				extrapolateRight: "clamp",
			});
			const eased = 1 - (1 - progress) ** 3;
			return Math.round(startVal + (endVal - startVal) * eased);
		}
	}
	return COUNTER_STEPS[0][1];
}

function DashedArc({
	cx,
	cy,
	r,
	startAngle,
	endAngle,
	color,
	opacity,
	dashLength = 12,
}: {
	cx: number;
	cy: number;
	r: number;
	startAngle: number;
	endAngle: number;
	color: string;
	opacity: number;
	dashLength?: number;
}) {
	const dashes: { x1: number; y1: number; x2: number; y2: number }[] = [];
	const steps = 40;
	const range = endAngle - startAngle;
	const half = dashLength / 2;
	for (let i = 0; i <= steps; i++) {
		const angle = startAngle + (range * i) / steps;
		const rad = (angle * Math.PI) / 180;
		const cos = Math.cos(rad);
		const sin = Math.sin(rad);
		dashes.push({
			x1: cx + (r - half) * cos,
			y1: cy + (r - half) * sin,
			x2: cx + (r + half) * cos,
			y2: cy + (r + half) * sin,
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

function ProgressRing({
	progress,
	cx,
	cy,
	r,
}: { progress: number; cx: number; cy: number; r: number }) {
	const circumference = 2 * Math.PI * r;
	const offset = circumference * (1 - progress);

	return (
		<>
			<circle cx={cx} cy={cy} r={r + 4} fill="none" stroke={COLORS.greenGlow} strokeWidth={1} opacity={progress * 0.5} />
			<circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth={5} />
			<circle
				cx={cx} cy={cy} r={r} fill="none" stroke={COLORS.green} strokeWidth={5}
				strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
				transform={`rotate(-90 ${cx} ${cy})`}
				style={{ filter: `drop-shadow(0 0 10px ${COLORS.greenGlow}) drop-shadow(0 0 20px ${COLORS.greenSoft})` }}
			/>
			<circle cx={cx} cy={cy} r={r - 4} fill="none" stroke={COLORS.greenGlow} strokeWidth={0.5} opacity={progress * 0.3} />
		</>
	);
}

function GlassOrb({ x, y, size, opacity, frame, speed = 0.02 }: {
	x: number; y: number; size: number; opacity: number; frame: number; speed?: number;
}) {
	const float = Math.sin(frame * speed) * 6;
	return (
		<div
			style={{
				position: "absolute",
				left: x - size / 2,
				top: y - size / 2 + float,
				width: size,
				height: size,
				borderRadius: "50%",
				background: `radial-gradient(ellipse at 30% 30%, rgba(34, 219, 24, ${opacity * 0.3}), rgba(34, 219, 24, ${opacity * 0.05}) 60%, transparent)`,
				border: `1px solid rgba(34, 219, 24, ${opacity * 0.15})`,
				boxShadow: `inset 0 1px 0 rgba(255,255,255,${opacity * 0.06})`,
			}}
		/>
	);
}

export function SolutionAnimation() {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const counterValue = getCounterValue(frame);
	const isFinal = counterValue === 12 && frame >= 230;
	const cx = CANVAS_WIDTH / 2;
	const cy = CANVAS_HEIGHT / 2 - 10;

	const ringProgress = interpolate(frame, [60, 230], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const finalBounce = isFinal
		? spring({ frame: frame - 230, fps, config: { damping: 8, stiffness: 200, mass: 0.6 } })
		: 1;

	const badgeProgress = spring({ frame: frame - 250, fps, config: { damping: 10, stiffness: 180, mass: 0.5 } });

	const glowIntensity = isFinal
		? interpolate(Math.sin((frame - 230) * 0.06), [-1, 1], [0.2, 0.5])
		: interpolate(ringProgress, [0, 1], [0, 0.15]);

	const arcRotation = interpolate(frame, [0, 300], [0, 40]);

	const displayValue =
		counterValue >= 1000
			? `${(counterValue / 1000).toFixed(counterValue >= 10000 ? 0 : 1)}k`
			: counterValue.toLocaleString();

	return (
		<AbsoluteFill
			style={{
				background: `
					radial-gradient(ellipse 70% 55% at 50% 45%, rgba(34, 219, 24, ${glowIntensity * 0.15}) 0%, transparent 70%),
					radial-gradient(ellipse 90% 70% at 50% 110%, ${COLORS.greenDark} 0%, transparent 55%),
					radial-gradient(ellipse 50% 40% at 80% 10%, rgba(34, 219, 24, 0.04) 0%, transparent 50%),
					linear-gradient(180deg, #080a08 0%, ${COLORS.bgDeep} 100%)
				`,
				overflow: "hidden",
				fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
			}}
		>
			<svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ position: "absolute", top: 0, left: 0 }}>
				<DashedArc cx={cx} cy={cy} r={170} startAngle={-160 + arcRotation} endAngle={-20 + arcRotation} color={`rgba(34, 219, 24, ${0.08 + ringProgress * 0.08})`} opacity={0.7} dashLength={10} />
				<DashedArc cx={cx} cy={cy} r={140} startAngle={200 - arcRotation * 0.6} endAngle={340 - arcRotation * 0.6} color="rgba(255, 255, 255, 0.04)" opacity={0.5} dashLength={8} />
				<DashedArc cx={cx} cy={CANVAS_HEIGHT + 60} r={280} startAngle={-150 + arcRotation * 0.5} endAngle={-30 + arcRotation * 0.5} color={`rgba(34, 219, 24, ${0.06 + ringProgress * 0.06})`} opacity={0.4} dashLength={14} />
				<ProgressRing progress={ringProgress} cx={cx} cy={cy} r={100} />
			</svg>

			<div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: `linear-gradient(90deg, transparent, rgba(34, 219, 24, ${0.1 + ringProgress * 0.1}), transparent)` }} />

			<GlassOrb x={100} y={90} size={60} opacity={0.3 + ringProgress * 0.2} frame={frame} speed={0.025} />
			<GlassOrb x={CANVAS_WIDTH - 90} y={120} size={48} opacity={0.2 + ringProgress * 0.15} frame={frame} speed={0.03} />
			<GlassOrb x={130} y={CANVAS_HEIGHT - 100} size={36} opacity={0.15 + ringProgress * 0.1} frame={frame} speed={0.02} />
			<GlassOrb x={CANVAS_WIDTH - 120} y={CANVAS_HEIGHT - 80} size={42} opacity={0.2 + ringProgress * 0.12} frame={frame} speed={0.018} />

			<div
				style={{
					position: "absolute", top: cy, left: cx,
					transform: `translate(-50%, -50%) scale(${finalBounce})`,
					display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					width: 140, height: isFinal ? 140 : 120,
					borderRadius: isFinal ? "50%" : 60,
					background: isFinal
						? `radial-gradient(ellipse at 40% 30%, rgba(34, 219, 24, 0.12), rgba(34, 219, 24, 0.03) 70%, transparent)`
						: `radial-gradient(ellipse at 40% 30%, rgba(255,255,255,0.05), rgba(255,255,255,0.01) 70%, transparent)`,
					border: `1px solid ${isFinal ? "rgba(34, 219, 24, 0.2)" : COLORS.glassBorderLight}`,
					backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
					boxShadow: isFinal ? `0 0 40px ${COLORS.greenSoft}, inset 0 1px 0 rgba(255,255,255,0.06)` : "inset 0 1px 0 rgba(255,255,255,0.06)",
					transition: "border-radius 0.4s, height 0.4s",
				}}
			>
				<div style={{
					fontSize: isFinal ? 52 : 44, fontWeight: 800,
					color: isFinal ? COLORS.green : COLORS.textPrimary,
					fontVariantNumeric: "tabular-nums", letterSpacing: -2, lineHeight: 1,
					filter: isFinal ? `drop-shadow(0 0 16px ${COLORS.greenGlow})` : "none",
				}}>
					{displayValue}
				</div>
				<div style={{
					fontSize: 9, color: isFinal ? COLORS.greenMid : COLORS.textDim,
					textTransform: "uppercase", letterSpacing: 2.5, marginTop: 6,
				}}>
					{isFinal ? "Selected" : "Remaining"}
				</div>
			</div>

			{frame >= 250 && (
				<div style={{ position: "absolute", bottom: 28, left: 0, right: 0, display: "flex", justifyContent: "center", transform: `scale(${badgeProgress})`, opacity: badgeProgress }}>
					<div style={{
						display: "flex", alignItems: "center", gap: 8, padding: "8px 22px",
						background: `linear-gradient(135deg, ${COLORS.greenSoft}, rgba(34, 219, 24, 0.03))`,
						border: `1px solid rgba(34, 219, 24, 0.18)`, borderRadius: 24,
						backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
						boxShadow: `0 0 20px ${COLORS.greenSoft}, inset 0 1px 0 rgba(255,255,255,0.04)`,
					}}>
						<svg width={16} height={16} viewBox="0 0 24 24" fill="none">
							<circle cx={12} cy={12} r={10} stroke={COLORS.green} strokeWidth={1.5} opacity={0.5} />
							<path d="M9 12l2 2 4-4" stroke={COLORS.green} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 4px ${COLORS.greenGlow})` }} />
						</svg>
						<span style={{ color: COLORS.green, fontSize: 12, fontWeight: 600, letterSpacing: 1, filter: `drop-shadow(0 0 6px ${COLORS.greenGlow})` }}>
							Nairon Verified
						</span>
					</div>
				</div>
			)}
		</AbsoluteFill>
	);
}
