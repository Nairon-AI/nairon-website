import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	spring,
	useVideoConfig,
} from "remotion";
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT } from "./shared";

/**
 * "Falling Behind" — Skills becoming obsolete while AI advances.
 * Amber/orange theme. Glass skill pills fade and drift down while
 * "AI" pulses unreachably at the top.
 */

const AMBER = {
	base: "#F59E0B",
	glow: "rgba(245, 158, 11, 0.35)",
	soft: "rgba(245, 158, 11, 0.08)",
	dark: "#2d1a00",
} as const;

// Skills that are fading / becoming insufficient
const FADING_SKILLS = [
	{ label: "REST APIs", x: 80, y: 100 },
	{ label: "SQL", x: 260, y: 80 },
	{ label: "React", x: 440, y: 110 },
	{ label: "Docker", x: 160, y: 190 },
	{ label: "Node.js", x: 370, y: 180 },
	{ label: "Python", x: 520, y: 200 },
];

// Skills that are needed but unreachable
const NEEDED_SKILLS = [
	{ label: "AI Agents", x: 160, y: 40 },
	{ label: "RAG Systems", x: 320, y: 30 },
	{ label: "Fine-Tuning", x: 480, y: 45 },
];

function DashedArc({
	cx, cy, r, startAngle, endAngle, color, opacity,
}: {
	cx: number; cy: number; r: number; startAngle: number; endAngle: number; color: string; opacity: number;
}) {
	const dashes: { x1: number; y1: number; x2: number; y2: number }[] = [];
	const steps = 32;
	const range = endAngle - startAngle;
	for (let i = 0; i <= steps; i++) {
		const angle = startAngle + (range * i) / steps;
		const rad = (angle * Math.PI) / 180;
		dashes.push({
			x1: cx + (r - 6) * Math.cos(rad),
			y1: cy + (r - 6) * Math.sin(rad),
			x2: cx + (r + 6) * Math.cos(rad),
			y2: cy + (r + 6) * Math.sin(rad),
		});
	}
	return (
		<g opacity={opacity}>
			{dashes.map((d, i) => (
				<line key={i} x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2} stroke={color} strokeWidth={2} strokeLinecap="round" />
			))}
		</g>
	);
}

/** Glass skill pill that fades and drifts down */
function FadingSkill({
	label, baseX, baseY, index, frame, fps,
}: {
	label: string; baseX: number; baseY: number; index: number; frame: number; fps: number;
}) {
	const enterStart = 20 + index * 15;
	const fadeStart = 100 + index * 25;

	const enter = spring({
		frame: frame - enterStart,
		fps,
		config: { damping: 14, stiffness: 100, mass: 0.6 },
	});

	// Slow drift downward + fade
	const drift = interpolate(frame, [fadeStart, 280], [0, 30 + index * 5], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const fadeOut = interpolate(frame, [fadeStart, 260], [1, 0.15], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	if (frame < enterStart) return null;

	return (
		<div
			style={{
				position: "absolute",
				left: baseX,
				top: baseY + drift,
				transform: `scale(${interpolate(enter, [0, 1], [0.7, 1])})`,
				opacity: enter * fadeOut,
				padding: "6px 16px",
				borderRadius: 20,
				background: COLORS.glassFill,
				border: `1px solid ${COLORS.glassBorder}`,
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
				fontSize: 12,
				fontWeight: 500,
				color: COLORS.textSecondary,
				whiteSpace: "nowrap" as const,
			}}
		>
			{label}
		</div>
	);
}

/** Unreachable AI skill — pulses but stays dim/distant */
function NeededSkill({
	label, baseX, baseY, index, frame, fps,
}: {
	label: string; baseX: number; baseY: number; index: number; frame: number; fps: number;
}) {
	const enterStart = 60 + index * 30;
	const enter = spring({
		frame: frame - enterStart,
		fps,
		config: { damping: 18, stiffness: 80, mass: 0.7 },
	});

	// Gentle pulse
	const pulse = interpolate(Math.sin(frame * 0.06 + index * 2), [-1, 1], [0.4, 0.7]);

	if (frame < enterStart) return null;

	return (
		<div
			style={{
				position: "absolute",
				left: baseX,
				top: baseY,
				transform: `scale(${interpolate(enter, [0, 1], [0.8, 1])})`,
				opacity: enter * pulse,
				padding: "6px 16px",
				borderRadius: 20,
				background: `linear-gradient(135deg, ${AMBER.soft}, rgba(245, 158, 11, 0.03))`,
				border: `1px solid rgba(245, 158, 11, 0.2)`,
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				boxShadow: `0 0 12px ${AMBER.soft}`,
				fontSize: 12,
				fontWeight: 600,
				color: AMBER.base,
				whiteSpace: "nowrap" as const,
				filter: `drop-shadow(0 0 4px ${AMBER.glow})`,
			}}
		>
			{label}
		</div>
	);
}

export function Problem2Animation() {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const arcRotation = interpolate(frame, [0, 300], [0, 25]);

	// Gap counter — percentage of engineers not AI-ready
	const gapPercent = interpolate(frame, [30, 200], [0, 96], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	// Countdown timer feel
	const yearProgress = interpolate(frame, [0, 280], [2026, 2028], {
		extrapolateRight: "clamp",
	});

	return (
		<AbsoluteFill
			style={{
				background: `
					radial-gradient(ellipse 80% 60% at 50% 110%, ${AMBER.dark} 0%, transparent 60%),
					radial-gradient(ellipse 50% 40% at 70% 0%, rgba(245, 158, 11, 0.04) 0%, transparent 50%),
					linear-gradient(180deg, #0c0a08 0%, ${COLORS.bgDeep} 100%)
				`,
				overflow: "hidden",
				fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
			}}
		>
			{/* Dashed arcs */}
			<svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ position: "absolute", top: 0, left: 0 }}>
				<DashedArc cx={CANVAS_WIDTH / 2} cy={-40} r={280} startAngle={20 + arcRotation} endAngle={160 + arcRotation} color="rgba(245, 158, 11, 0.1)" opacity={0.5} />
				<DashedArc cx={CANVAS_WIDTH / 2} cy={CANVAS_HEIGHT + 60} r={320} startAngle={-140 + arcRotation * 0.7} endAngle={-40 + arcRotation * 0.7} color="rgba(255, 255, 255, 0.04)" opacity={0.4} />
			</svg>

			{/* Top highlight */}
			<div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.12), transparent)" }} />

			{/* Needed skills — unreachable at top */}
			{NEEDED_SKILLS.map((skill, i) => (
				<NeededSkill key={skill.label} label={skill.label} baseX={skill.x} baseY={skill.y} index={i} frame={frame} fps={fps} />
			))}

			{/* Divider line — the gap */}
			<div
				style={{
					position: "absolute",
					top: 72,
					left: 60,
					right: 60,
					height: 1,
					background: `linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.15), transparent)`,
					opacity: interpolate(frame, [50, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
				}}
			/>

			{/* Fading skills — drifting down */}
			{FADING_SKILLS.map((skill, i) => (
				<FadingSkill key={skill.label} label={skill.label} baseX={skill.x} baseY={skill.y} index={i} frame={frame} fps={fps} />
			))}

			{/* Central glass capsule — gap meter */}
			<div
				style={{
					position: "absolute",
					top: CANVAS_HEIGHT / 2 + 20,
					left: CANVAS_WIDTH / 2,
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: 150,
					height: 110,
					borderRadius: 50,
					background: "radial-gradient(ellipse at 40% 30%, rgba(245, 158, 11, 0.06), rgba(255,255,255,0.02) 70%, transparent)",
					border: `1px solid rgba(245, 158, 11, 0.15)`,
					backdropFilter: "blur(20px)",
					WebkitBackdropFilter: "blur(20px)",
					boxShadow: `0 0 30px ${AMBER.soft}, inset 0 1px 0 rgba(255,255,255,0.04)`,
				}}
			>
				<div style={{ fontSize: 38, fontWeight: 800, color: AMBER.base, fontVariantNumeric: "tabular-nums", letterSpacing: -2, lineHeight: 1, filter: `drop-shadow(0 0 10px ${AMBER.glow})` }}>
					{Math.floor(gapPercent)}%
				</div>
				<div style={{ fontSize: 9, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 2, marginTop: 6 }}>
					Not AI-Ready
				</div>
			</div>

			{/* Bottom glass pill — timeline */}
			<div
				style={{
					position: "absolute",
					bottom: 24,
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					gap: 2,
					background: COLORS.glassFill,
					border: `1px solid ${COLORS.glassBorder}`,
					borderRadius: 20,
					padding: "8px 8px",
					backdropFilter: "blur(16px)",
					WebkitBackdropFilter: "blur(16px)",
				}}
			>
				<div style={{ textAlign: "center", padding: "0 20px", borderRight: `1px solid ${COLORS.glassBorder}` }}>
					<div style={{ fontSize: 22, fontWeight: 700, color: AMBER.base, fontVariantNumeric: "tabular-nums", letterSpacing: -1, filter: `drop-shadow(0 0 6px ${AMBER.glow})` }}>
						{yearProgress.toFixed(1)}
					</div>
					<div style={{ fontSize: 9, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 2, marginTop: 1 }}>
						Year
					</div>
				</div>
				<div style={{ textAlign: "center", padding: "0 20px" }}>
					<div style={{ fontSize: 22, fontWeight: 700, color: COLORS.textPrimary, letterSpacing: -1 }}>
						2 yrs
					</div>
					<div style={{ fontSize: 9, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 2, marginTop: 1 }}>
						Window Left
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
