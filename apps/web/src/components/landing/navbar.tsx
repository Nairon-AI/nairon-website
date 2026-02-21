import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
	{ label: "About", href: "/#what-we-do" },
	{ label: "Process", href: "/#process" },
	{ label: "NBench", href: "/nbench" },
	{ label: "Team", href: "/team" },
	{ label: "Contact", href: "/contact" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
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
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
				{/* Logo */}
				<a href="/" className="flex items-center">
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
							className="h-9 w-auto"
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
						href="/contact"
						className="ml-4 inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
					>
						Hire a CTO
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
				</div>

				{/* Mobile menu button */}
				<button
					type="button"
					className="md:hidden w-10 h-10 flex items-center justify-center text-[#E8E4DE]"
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
						<a
							href="/contact"
							className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-base px-6 py-3 rounded-full transition-colors"
						>
							Hire a CTO
							<ArrowUpRight className="w-4 h-4" />
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
