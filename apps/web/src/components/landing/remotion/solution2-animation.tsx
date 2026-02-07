import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	spring,
	useVideoConfig,
} from "remotion";
import { COLORS, CANVAS_WIDTH, CANVAS_HEIGHT } from "./shared";

/**
 * "Level Up" — Engineer transformation. Skills light up in sequence,
 * central badge fills, glass orbs float. Green theme matching brand.
 */

const SKILLS = [
	{ label: "AI-Native", icon: "⚡", delay: 40 },
	{ label: "Systems Thinking", icon: "◎", delay: 90 },
	{ label: "Ship Under Pressure", icon: "▲", delay: 140 },
	{ label: "CTO Communication", icon: "◆", delay: 190 },
];

function DashedArc({
	cx, cy, r, startAngle, endAngle, color, opacity, dashLength = 12,
}: {
	cx: number; cy: number; r: number; startAngle: number; endAngle: number;
	color: string; opacity: number; dashLength?: number;
}) {
	const dashes: { x1: number; y1: number; x2: number; y2: number }[] = [];
	const steps = 36;
	const range = endAngle - startAngle;
	const half = dashLength / 2;
	for (let i = 0; i <= steps; i++) {
		const angle = startAngle + (range * i) / steps;
		const rad = (angle * Math.PI) / 180;
		dashes.push({
			x1: cx + (r - half) * Math.cos(rad),
			y1: cy + (r - half) * Math.sin(rad),
			x2: cx + (r + half) * Math.cos(rad),
			y2: cy + (r + half) * Math.sin(rad),
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

function GlassOrb({ x, y, size, opacity, frame, speed = 0.02 }: {
	x: number; y: number; size: number; opacity: number; frame: number; speed?: number;
}) {
	const float = Math.sin(frame * speed) * 6;
	return (
		<div style={{
			position: "absolute", left: x - size / 2, top: y - size / 2 + float,
			width: size, height: size, borderRadius: "50%",
			background: `radial-gradient(ellipse at 30% 30%, rgba(34, 219, 24, ${opacity * 0.3}), rgba(34, 219, 24, ${opacity * 0.05}) 60%, transparent)`,
			border: `1px solid rgba(34, 219, 24, ${opacity * 0.15})`,
			boxShadow: `inset 0 1px 0 rgba(255,255,255,${opacity * 0.06})`,
		}} />
	);
}

/** Skill card that lights up green when activated */
function SkillCard({
	skill, index, frame, fps, isActive,
}: {
	skill: (typeof SKILLS)[number]; index: number; frame: number; fps: number; isActive: boolean;
}) {
	const enter = spring({
		frame: frame - skill.delay,
		fps,
		config: { damping: 12, stiffness: 100, mass: 0.6 },
	});

	if (frame < skill.delay) return null;

	const isLit = isActive && frame >= skill.delay + 15;
	const glowPulse = isLit
		? interpolate(Math.sin((frame - skill.delay) * 0.08), [-1, 1], [0.6, 1])
		: 0;

	// Position in a 2x2 grid around center
	const col = index % 2;
	const row = Math.floor(index / 2);
	const gridX = CANVAS_WIDTH / 2 - 150 + col * 170;
	const gridY = 60 + row * 130;

	return (
		<div
			style={{
				position: "absolute",
				left: gridX,
				top: gridY,
				width: 140,
				opacity: enter,
				transform: `scale(${interpolate(enter, [0, 1], [0.8, 1])})`,
			}}
		>
			{/* Icon circle */}
			<div
				style={{
					width: 44,
					height: 44,
					borderRadius: "50%",
					margin: "0 auto 8px",
					background: isLit
						? `radial-gradient(circle, rgba(34, 219, 24, 0.15), rgba(34, 219, 24, 0.04))`
						: "radial-gradient(circle, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
					border: `1.5px solid ${isLit ? "rgba(34, 219, 24, 0.25)" : COLORS.glassBorder}`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 18,
					boxShadow: isLit
						? `0 0 20px rgba(34, 219, 24, ${0.15 * glowPulse}), inset 0 1px 0 rgba(255,255,255,0.05)`
						: "inset 0 1px 0 rgba(255,255,255,0.04)",
					transition: "border-color 0.3s, box-shadow 0.3s",
					filter: isLit ? `drop-shadow(0 0 6px ${COLORS.greenGlow})` : "none",
				}}
			>
				<span style={{ opacity: isLit ? 1 : 0.4 }}>{skill.icon}</span>
			</div>
			{/* Label pill */}
			<div
				style={{
					padding: "5px 14px",
					borderRadius: 16,
					background: isLit
						? `linear-gradient(135deg, ${COLORS.greenSoft}, rgba(34, 219, 24, 0.03))`
						: COLORS.glassFill,
					border: `1px solid ${isLit ? "rgba(34, 219, 24, 0.18)" : COLORS.glassBorder}`,
					backdropFilter: "blur(12px)",
					WebkitBackdropFilter: "blur(12px)",
					textAlign: "center" as const,
					fontSize: 11,
					fontWeight: 600,
					color: isLit ? COLORS.green : COLORS.textDim,
					whiteSpace: "nowrap" as const,
					boxShadow: isLit ? `0 0 12px ${COLORS.greenSoft}` : "none",
					filter: isLit ? `drop-shadow(0 0 4px ${COLORS.greenGlow})` : "none",
				}}
			>
				{skill.label}
			</div>
		</div>
	);
}

export function Solution2Animation() {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const arcRotation = interpolate(frame, [0, 300], [0, 35]);

	// How many skills are active
	const activeCount = SKILLS.filter((s) => frame >= s.delay + 15).length;
	const allActive = activeCount === SKILLS.length;

	// Central shield progress
	const shieldProgress = interpolate(activeCount, [0, SKILLS.length], [0, 1]);
	const shieldBounce = allActive
		? spring({ frame: frame - 220, fps, config: { damping: 8, stiffness: 180, mass: 0.6 } })
		: 1;

	// Badge at end
	const badgeEnter = spring({ frame: frame - 250, fps, config: { damping: 10, stiffness: 160, mass: 0.5 } });

	const glowIntensity = allActive
		? interpolate(Math.sin((frame - 220) * 0.06), [-1, 1], [0.15, 0.35])
		: interpolate(shieldProgress, [0, 1], [0, 0.1]);

	return (
		<AbsoluteFill
			style={{
				background: `
					radial-gradient(ellipse 70% 55% at 50% 45%, rgba(34, 219, 24, ${glowIntensity * 0.12}) 0%, transparent 70%),
					radial-gradient(ellipse 90% 70% at 50% 110%, ${COLORS.greenDark} 0%, transparent 55%),
					radial-gradient(ellipse 40% 30% at 15% 10%, rgba(34, 219, 24, 0.03) 0%, transparent 50%),
					linear-gradient(180deg, #080a08 0%, ${COLORS.bgDeep} 100%)
				`,
				overflow: "hidden",
				fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
			}}
		>
			{/* Dashed arcs */}
			<svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ position: "absolute", top: 0, left: 0 }}>
				<DashedArc cx={CANVAS_WIDTH / 2} cy={CANVAS_HEIGHT / 2} r={190} startAngle={-170 + arcRotation} endAngle={-10 + arcRotation} color={`rgba(34, 219, 24, ${0.06 + shieldProgress * 0.08})`} opacity={0.6} dashLength={10} />
				<DashedArc cx={CANVAS_WIDTH / 2} cy={CANVAS_HEIGHT / 2} r={160} startAngle={190 - arcRotation * 0.6} endAngle={350 - arcRotation * 0.6} color="rgba(255, 255, 255, 0.035)" opacity={0.4} dashLength={8} />
			</svg>

			{/* Top highlight */}
			<div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: `linear-gradient(90deg, transparent, rgba(34, 219, 24, ${0.08 + shieldProgress * 0.08}), transparent)` }} />

			{/* Floating glass orbs */}
			<GlassOrb x={55} y={70} size={50} opacity={0.25 + shieldProgress * 0.15} frame={frame} speed={0.022} />
			<GlassOrb x={CANVAS_WIDTH - 50} y={90} size={40} opacity={0.2 + shieldProgress * 0.12} frame={frame} speed={0.028} />
			<GlassOrb x={70} y={CANVAS_HEIGHT - 70} size={32} opacity={0.15 + shieldProgress * 0.1} frame={frame} speed={0.018} />
			<GlassOrb x={CANVAS_WIDTH - 65} y={CANVAS_HEIGHT - 60} size={36} opacity={0.18 + shieldProgress * 0.1} frame={frame} speed={0.024} />

			{/* Skill cards — 2x2 grid */}
			{SKILLS.map((skill, i) => (
				<SkillCard
					key={skill.label}
					skill={skill}
					index={i}
					frame={frame}
					fps={fps}
					isActive={frame >= skill.delay + 15}
				/>
			))}

			{/* Central shield / badge — overlapping the skills grid */}
			<div
				style={{
					position: "absolute",
					top: CANVAS_HEIGHT / 2 + 10,
					left: CANVAS_WIDTH / 2,
					transform: `translate(-50%, -50%) scale(${shieldBounce})`,
					width: 80,
					height: 80,
					borderRadius: "50%",
					background: allActive
						? `radial-gradient(ellipse at 40% 30%, rgba(34, 219, 24, 0.15), rgba(34, 219, 24, 0.04) 70%, transparent)`
						: "radial-gradient(ellipse at 40% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 70%, transparent)",
					border: `1.5px solid ${allActive ? "rgba(34, 219, 24, 0.25)" : COLORS.glassBorderLight}`,
					backdropFilter: "blur(20px)",
					WebkitBackdropFilter: "blur(20px)",
					boxShadow: allActive
						? `0 0 40px ${COLORS.greenSoft}, inset 0 1px 0 rgba(255,255,255,0.06)`
						: "inset 0 1px 0 rgba(255,255,255,0.06)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					zIndex: 10,
				}}
			>
				<div style={{
					fontSize: allActive ? 28 : 22,
					fontWeight: 800,
					color: allActive ? COLORS.green : COLORS.textPrimary,
					lineHeight: 1,
					filter: allActive ? `drop-shadow(0 0 12px ${COLORS.greenGlow})` : "none",
				}}>
					{activeCount}/{SKILLS.length}
				</div>
				<div style={{ fontSize: 7, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>
					Unlocked
				</div>
			</div>

			{/* Bottom badge — "Top 1%" */}
			{frame >= 250 && (
				<div style={{
					position: "absolute", bottom: 24, left: 0, right: 0,
					display: "flex", justifyContent: "center",
					transform: `scale(${badgeEnter})`, opacity: badgeEnter,
				}}>
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
							Top 1% Engineer
						</span>
					</div>
				</div>
			)}
		</AbsoluteFill>
	);
}
