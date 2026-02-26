import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useModals } from "./modal-provider";

const UNIVERSE_EXPLORE = [
	{
		label: "Universe Home",
		description: "Your AI-native hub",
		href: "/universe",
		disabled: false,
		icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
	},
	{
		label: "Daily Feed",
		description: "Curated AI trends",
		href: "/universe#feed",
		disabled: false,
		icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
	},
	{
		label: "Blog",
		description: "Long-form insights",
		href: "/universe#feed",
		disabled: false,
		icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
	},
];

const UNIVERSE_TOOLS = [
	{
		label: "AI Tool Directory (Coming Soon)",
		description: "Browse by SDLC phase",
		href: "#",
		disabled: true,
		icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
	},
	{
		label: "Flux (Coming Soon)",
		description: "AI-nativeness benchmark",
		href: "#",
		disabled: true,
		icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
	},
];

function UniverseDropdown() {
	return (
		<div className="absolute top-full left-0 right-0 w-screen bg-[#111110]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-8 grid grid-cols-[1fr_1fr_280px] gap-12">
				{/* Explore column */}
				<div>
					<h4 className="text-[#A39E96] text-[11px] font-medium uppercase tracking-[0.16em] mb-5">
						Explore
					</h4>
					<div className="space-y-1">
						{UNIVERSE_EXPLORE.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="flex items-start gap-3.5 py-3 group"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-[#A39E96]/50 group-hover:text-[#C9A96E] transition-colors mt-0.5 shrink-0"
								>
									<path d={item.icon} />
								</svg>
								<div>
									<span className="text-[#E8E4DE] text-sm font-medium block leading-tight group-hover:text-[#C9A96E] transition-colors">
										{item.label}
									</span>
									<span className="text-[#A39E96]/50 text-[13px]">
										{item.description}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>

				{/* Tools & Data column */}
				<div>
					<h4 className="text-[#A39E96] text-[11px] font-medium uppercase tracking-[0.16em] mb-5">
						Tools & Data
					</h4>
					<div className="space-y-1">
						{UNIVERSE_TOOLS.map((item) => (
							<a
								key={item.label}
								href={item.href}
								aria-disabled={item.disabled ? "true" : undefined}
								className={cn(
									"flex items-start gap-3.5 py-3 group",
									item.disabled && "pointer-events-none opacity-55"
								)}
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-[#A39E96]/50 group-hover:text-[#C9A96E] transition-colors mt-0.5 shrink-0"
								>
									<path d={item.icon} />
								</svg>
								<div>
									<span className="text-[#E8E4DE] text-sm font-medium block leading-tight group-hover:text-[#C9A96E] transition-colors">
										{item.label}
									</span>
									<span className="text-[#A39E96]/50 text-[13px]">
										{item.description}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>

				{/* CTA card */}
				<div className="rounded-xl p-6 bg-gradient-to-br from-[#C9A96E]/[0.08] to-[#C9A96E]/[0.02] border border-[#C9A96E]/10 flex flex-col justify-between">
					<div>
						<h3 className="text-[#E8E4DE] text-lg font-medium leading-snug mb-2">
							Explore the AI-native engineering landscape.
						</h3>
						<p className="text-[#A39E96] text-[13px] leading-relaxed">
							Tools, trends, and benchmarks — curated for engineers who build with AI.
						</p>
					</div>
					<span className="mt-5 inline-flex items-center gap-2 bg-[#C9A96E]/55 text-[#0C0C0C] font-semibold text-sm px-5 py-2.5 rounded-full w-fit opacity-90 cursor-not-allowed">
						Universe (Coming Soon)
					</span>
				</div>
			</div>
		</div>
	);
}

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [universeOpen, setUniverseOpen] = useState(false);
	const { openHireModal } = useModals();
	const location = useLocation();
	const isFluxPage = location.pathname === "/flux";
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	// Close dropdown on route change
	useEffect(() => {
		setUniverseOpen(false);
		setMobileOpen(false);
	}, [location.pathname]);

	const handleMouseEnter = useCallback(() => {
		if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		setUniverseOpen(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		closeTimeoutRef.current = setTimeout(() => {
			setUniverseOpen(false);
		}, 150);
	}, []);

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled
					? "backdrop-blur-xl bg-[#0C0C0C]/80 border-b border-white/6"
					: "bg-transparent",
			)}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
				{/* Logo */}
				<a href="/" className="flex items-center shrink-0">
					{isFluxPage ? (
						<div className="flex items-center gap-3">
							<img
								src="/bench-logo.svg"
								alt="bench."
								width={190}
								height={60}
								className="h-9 w-auto self-center translate-y-[9px]"
							/>
							<span className="font-inter text-[12px] tracking-[0.02em] text-white/48">
								by
							</span>
							<span className="group/nairon relative inline-flex items-center overflow-hidden rounded-[5px]">
								<img
									src="/nairon-logo.png"
									alt="Nairon"
									width={600}
									height={120}
									className="h-6 w-auto"
								/>
								<span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover/nairon:bg-black/20" />
							</span>
						</div>
					) : (
						<img
							src="/nairon-logo.png"
							alt="nairon."
							width={600}
							height={120}
							className="h-7 md:h-9 w-auto"
						/>
					)}
				</a>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-1">
				<span className="px-4 py-2 rounded-full text-sm text-[#A39E96] cursor-not-allowed opacity-80">
					Flux (Coming Soon)
				</span>

					<span className="px-4 py-2 rounded-full text-sm text-[#A39E96] cursor-not-allowed opacity-80">
						Universe (Coming Soon)
					</span>

					<button
						type="button"
						onClick={openHireModal}
						className="ml-2 inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
					>
						Hire engineers
						<ArrowUpRight className="w-3.5 h-3.5" />
					</button>
				</div>

				<div className="md:hidden flex items-center gap-2">
					<button
						type="button"
						className="w-10 h-10 flex items-center justify-center text-[#E8E4DE]"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						{mobileOpen ? (
							<X className="w-5 h-5" />
						) : (
							<Menu className="w-5 h-5" />
						)}
					</button>
				</div>
			</div>

			{/* Full-width Universe dropdown intentionally disabled while coming soon */}

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden bg-[#0C0C0C] border-t border-white/6 px-6 py-6 space-y-1">
					<span className="block px-4 py-3 rounded-xl text-base text-[#A39E96] opacity-70 cursor-not-allowed">
						Flux (Coming Soon)
					</span>

					<span className="block px-4 py-3 rounded-xl text-base text-[#A39E96] opacity-70 cursor-not-allowed">
						Universe (Coming Soon)
					</span>

					<div className="pt-4">
						<button
							type="button"
							onClick={() => {
								setMobileOpen(false);
								openHireModal();
							}}
							className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-base px-6 py-3 rounded-full transition-colors"
						>
							Hire engineers
							<ArrowUpRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
