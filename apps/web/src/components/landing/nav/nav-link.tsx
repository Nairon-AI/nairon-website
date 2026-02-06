import { cn } from "@/lib/utils";

interface NavLinkProps {
	label: string;
	href: string;
	variant?: "green" | "gold";
	className?: string;
}

export function NavLink({ label, href, variant = "green", className }: NavLinkProps) {
	const pillColor = variant === "gold" ? "bg-brand-gold" : "bg-brand";

	return (
		<a
			href={href}
			className={cn(
				"group relative flex items-center justify-center h-10 px-4 rounded-full bg-white/12 overflow-hidden transition-colors",
				className,
			)}
		>
			{/* Default label */}
			<span className="text-base text-white transition-transform duration-300 group-hover:-translate-y-10">
				{label}
			</span>

			{/* Pill background (slides up on hover) */}
			<span className={cn("absolute inset-x-[-1px] top-full h-[45px] rounded-full transition-all duration-300 group-hover:top-[-3px]", pillColor)} />

			{/* Hover label (slides up with pill) */}
			<span className="absolute text-base text-white top-12 transition-all duration-300 group-hover:top-2">
				{label}
			</span>
		</a>
	);
}
