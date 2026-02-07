import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/contexts/view-mode-context";

// ─── Design Tokens ──────────────────────────────────────────────
// Consistent color palette matching the live naironai.com
export const colors = {
	/** Primary text — near-white */
	text: "text-landing-text",
	/** Dimmed heading text — white at 55% */
	textDim: "text-white/55",
	/** Body / secondary text */
	textBody: "text-landing-text-body",
	/** Muted text — white at 40% */
	textMuted: "text-white/40",
	/** Card/glass border — white at 8% */
	border: "border-white/8",
	/** Interactive border — white at 12% */
	borderInteractive: "border-white/12",
	/** Glass background — white at 3% */
	glassBg: "bg-white/[0.03]",
	/** Page background */
	pageBg: "bg-black",
} as const;

// ─── Section Container ───────────────────────────────────────────
export function Section({
	children,
	className,
	id,
}: { children: ReactNode; className?: string; id?: string }) {
	return (
		<section id={id} className={cn("py-24 md:py-32", className)}>
			<div className="max-w-7xl mx-auto px-6">{children}</div>
		</section>
	);
}

// ─── Section Tag (line + text) ───────────────────────────────────
export function SectionTag({ label }: { label: string }) {
	return (
		<div className="flex items-center gap-4 mb-6">
			<div className="w-10 h-[2px] bg-white" />
			<span className="text-white text-lg">{label}</span>
		</div>
	);
}

// ─── Section Heading ─────────────────────────────────────────────
export function SectionHeading({
	children,
	className,
}: { children: ReactNode; className?: string }) {
	return (
		<h2
			className={cn(
				"text-4xl md:text-display-md font-medium leading-tight tracking-tight-xl",
				colors.text,
				className,
			)}
		>
			{children}
		</h2>
	);
}

// ─── Dimmed Text (for partial heading dimming) ───────────────────
export function DimText({ children }: { children: ReactNode }) {
	return <span className={colors.textDim}>{children}</span>;
}

// ─── Accent Gradient Text (green for engineer, gold for hiring-manager) ──
export function GreenText({ children }: { children: ReactNode }) {
	const { isHiringManager } = useViewMode();
	return (
		<span className={isHiringManager ? "text-gradient-gold" : "text-gradient-green"}>
			{children}
		</span>
	);
}

// ─── Glass Card ──────────────────────────────────────────────────
export function GlassCard({
	children,
	className,
	hover = false,
}: { children: ReactNode; className?: string; hover?: boolean }) {
	return (
		<div
			className={cn(
				"glass-card rounded-2xl",
				hover && "hover:bg-white/[0.04] transition-colors",
				className,
			)}
		>
			{children}
		</div>
	);
}

// ─── Outline Button (link-styled) ────────────────────────────────
export function OutlineButton({
	href,
	children,
	target,
	className,
}: {
	href: string;
	children: ReactNode;
	target?: string;
	className?: string;
}) {
	return (
		<a
			href={href}
			target={target}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			className={cn(
				"inline-flex items-center gap-2 border",
				colors.borderInteractive,
				"text-white font-semibold text-base px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors",
				className,
			)}
		>
			{children}
			<ArrowUpRight className="w-4 h-4" />
		</a>
	);
}

// ─── Primary Button (white CTA) ─────────────────────────────────
export function PrimaryButton({
	href,
	children,
	target,
	className,
}: {
	href: string;
	children: ReactNode;
	target?: string;
	className?: string;
}) {
	return (
		<a
			href={href}
			target={target}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			className={cn(
				"inline-flex items-center gap-2 bg-white hover:bg-white/90 text-landing-card-border font-semibold text-base px-5 py-2.5 rounded-full transition-colors",
				className,
			)}
		>
			{children}
			<ArrowUpRight className="w-4 h-4" />
		</a>
	);
}

// ─── Card Title ──────────────────────────────────────────────────
export function CardTitle({
	children,
	className,
}: { children: ReactNode; className?: string }) {
	return (
		<h4
			className={cn("text-2xl font-semibold tracking-tighter", colors.text, className)}
		>
			{children}
		</h4>
	);
}

// ─── Body Text ───────────────────────────────────────────────────
export function BodyText({
	children,
	className,
}: { children: ReactNode; className?: string }) {
	return (
		<p className={cn("text-base leading-relaxed", colors.textBody, className)}>
			{children}
		</p>
	);
}

// ─── Bullet Point ────────────────────────────────────────────────
export function BulletPoint({
	children,
	color,
}: { children: ReactNode; color?: "green" | "gold" }) {
	const { isHiringManager } = useViewMode();
	const resolved = color ?? (isHiringManager ? "gold" : "green");
	return (
		<div className="flex items-start gap-3">
			<div
				className={cn(
					"w-1.5 h-1.5 rounded-full mt-2 shrink-0",
					resolved === "green" ? "bg-green-400" : "bg-amber-400",
				)}
			/>
			<BodyText>{children}</BodyText>
		</div>
	);
}
