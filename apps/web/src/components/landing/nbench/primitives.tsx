import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function NBenchSection({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<section className={cn("relative py-28 md:py-40", className)}>
			<div className="mx-auto w-full max-w-7xl px-6">{children}</div>
		</section>
	);
}

export function SectionDivider({ className }: { className?: string }) {
	return <div className={cn("mx-auto h-px w-full max-w-7xl bg-white/[0.06]", className)} />;
}

export function GradientHeading({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<h1
			className={cn(
				"text-gradient-linear text-5xl font-[510] leading-[0.98] tracking-[-0.022em] md:text-7xl lg:text-8xl",
				className,
			)}
		>
			{children}
		</h1>
	);
}

export function LinearGlassCard({
	children,
	className,
	innerClassName,
}: {
	children?: ReactNode;
	className?: string;
	innerClassName?: string;
}) {
	return (
		<div
			className={cn(
				"rounded-[10px] bg-gradient-to-b from-white/[0.12] via-white/[0.07] to-white/[0.02] p-px",
				className,
			)}
		>
			<div
				className={cn(
					"rounded-[9px] border border-white/[0.05] bg-[rgba(14,14,14,0.98)] backdrop-blur-xl",
					innerClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

export function TerminalWindow({
	title,
	lines,
	className,
}: {
	title: string;
	lines: readonly string[];
	className?: string;
}) {
	return (
		<LinearGlassCard
			className={cn("relative shadow-[0_42px_120px_rgba(0,0,0,0.72)]", className)}
			innerClassName="overflow-hidden"
		>
			<div className="flex items-center justify-between border-b border-white/[0.07] bg-black/30 px-6 py-4">
				<div className="flex items-center gap-2.5">
					<span className="size-3.5 rounded-full bg-[#ff5f57]" />
					<span className="size-3.5 rounded-full bg-[#febc2e]" />
					<span className="size-3.5 rounded-full bg-[#28c840]" />
				</div>
				<p className="font-inter text-[13px] text-white/45">{title}</p>
				<div className="w-12" />
			</div>
			<div className="bg-[linear-gradient(180deg,#0b0b0b_0%,#090909_100%)] px-7 py-6 font-mono text-[16px] leading-[1.7] text-[#d2d2d2] md:text-[18px]">
				{lines.map((line, index) => (
					<div
						key={`${line}-${index}`}
						className={cn(
							"terminal-line",
							(line.startsWith("$") || line.startsWith("  nb") || line.includes("Overall Score")) &&
								"text-[#84ef95]",
						)}
						style={{ animationDelay: `${index * 65}ms` }}
					>
						{line || "\u00a0"}
					</div>
				))}
				<div className="terminal-cursor mt-1 h-4 w-2 rounded-[2px] bg-[#71ff6b]/80" />
			</div>
		</LinearGlassCard>
	);
}
