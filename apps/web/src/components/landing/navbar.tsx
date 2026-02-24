import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useModals } from "./modal-provider";

const NAV_ITEMS = [
	{ label: "About", href: "/#what-we-do" },
	{ label: "Process", href: "/#process" },
	{ label: "NBench", href: "/nbench" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const { openHireModal } = useModals();
	const location = useLocation();
	const isNBenchPage = location.pathname === "/nbench";

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
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
					{isNBenchPage ? (
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
					{NAV_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="px-4 py-2 rounded-full text-sm text-[#A39E96] hover:text-[#E8E4DE] hover:bg-white/5 transition-colors"
						>
							{item.label}
						</a>
					))}
					<a
						href="https://github.com/nairon-ai/nbench"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm text-[#A39E96] hover:text-[#E8E4DE] hover:bg-white/5 transition-colors border border-white/10"
					>
						<svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
						<span className="text-xs font-medium tabular-nums">1.2k</span>
					</a>
					<button
						type="button"
						onClick={openHireModal}
						className="ml-2 inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
					>
						Hire engineers
						<ArrowUpRight className="w-3.5 h-3.5" />
					</button>
				</div>

				{/* Mobile: GitHub stars + menu button */}
				<div className="md:hidden flex items-center gap-2">
					<a
						href="https://github.com/nairon-ai/nbench"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[#A39E96] border border-white/10"
					>
						<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
						<span className="text-xs font-medium tabular-nums">1.2k</span>
					</a>
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

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden bg-[#0C0C0C] border-t border-white/6 px-6 py-6 space-y-1">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="block px-4 py-3 rounded-xl text-base text-[#A39E96] hover:text-[#E8E4DE] hover:bg-white/5 transition-colors"
							onClick={() => setMobileOpen(false)}
						>
							{item.label}
						</a>
					))}
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
