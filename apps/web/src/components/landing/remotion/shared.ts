export const FPS = 30;
export const DURATION_FRAMES = 300; // 10s loop
export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 400;

export const COLORS = {
	// Backgrounds
	bgDeep: "#050508",
	bgCard: "rgba(255, 255, 255, 0.04)",
	bgCardHover: "rgba(255, 255, 255, 0.06)",

	// Greens
	green: "#22DB18",
	greenMid: "#16a34a",
	greenDark: "#052e16",
	greenGlow: "rgba(34, 219, 24, 0.35)",
	greenSoft: "rgba(34, 219, 24, 0.08)",

	// Reds
	red: "#EF4444",
	redDark: "#2d0a0a",
	redGlow: "rgba(239, 68, 68, 0.3)",
	redSoft: "rgba(239, 68, 68, 0.08)",

	// Glass
	glassBorder: "rgba(255, 255, 255, 0.08)",
	glassBorderLight: "rgba(255, 255, 255, 0.12)",
	glassFill: "rgba(255, 255, 255, 0.03)",

	// Text
	textPrimary: "#FFFFFF",
	textSecondary: "#a1a1aa",
	textDim: "#52525b",
} as const;
