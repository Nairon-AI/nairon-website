import { useState, useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/contexts/view-mode-context";
import {
	ENGINEER_NAV,
	HIRING_MANAGER_NAV,
	isDropdownItem,
	type NavConfig,
} from "@/data/landing";
import { NavLink } from "./nav/nav-link";
import { NavCtaButton } from "./nav/nav-cta-button";
import { MegaDropdown } from "./nav/mega-dropdown";
import { MobileMenu } from "./nav/mobile-menu";

// ─── NavFadeWrapper ─────────────────────────────────────────────
// 200ms opacity crossfade mirroring the DigitalText pattern:
// 100ms fade out → swap content → 100ms fade in.

function NavFadeWrapper({
	nav,
	children,
}: {
	nav: NavConfig;
	children: (currentNav: NavConfig) => ReactNode;
}) {
	const [displayNav, setDisplayNav] = useState(nav);
	const [visible, setVisible] = useState(true);
	const prevNav = useRef(nav);

	useEffect(() => {
		if (nav === prevNav.current) return;

		// Fade out
		setVisible(false);

		const timeout = setTimeout(() => {
			setDisplayNav(nav);
			setVisible(true);
			prevNav.current = nav;
		}, 100);

		return () => clearTimeout(timeout);
	}, [nav]);

	return (
		<div
			className="transition-opacity duration-100"
			style={{ opacity: visible ? 1 : 0 }}
		>
			{children(displayNav)}
		</div>
	);
}

// ─── Navbar ─────────────────────────────────────────────────────

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { viewMode } = useViewMode();
	const location = useLocation();

	const nav = viewMode === "engineer" ? ENGINEER_NAV : HIRING_MANAGER_NAV;
	const variant = viewMode === "engineer" ? "green" : "gold" as const;
	const isNBenchPage = location.pathname === "/nbench";

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	useEffect(() => {
		if (isNBenchPage) {
			setDropdownOpen(false);
		}
	}, [isNBenchPage]);

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				dropdownOpen
					? "bg-[#0a0a0c]"
					: scrolled && "backdrop-blur-xl bg-white/[0.03]",
			)}
		>
			<div className="relative z-50 max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
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
							<span className="font-inter text-[12px] tracking-[0.02em] text-white/48">by</span>
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

				{/* Desktop nav — crossfade on view mode change */}
				<NavFadeWrapper nav={nav}>
					{(currentNav) => (
						<div className="hidden md:flex items-center gap-6">
							<div className="flex items-center gap-2">
								{currentNav.items.map((item) =>
									isDropdownItem(item) ? (
										isNBenchPage ? (
											<NavLink
												key={item.label}
												label={item.label}
												href={item.columns[0]?.items[0]?.href ?? "/program"}
												variant={variant}
											/>
										) : (
											<MegaDropdown
												key={item.label}
												item={item}
												variant={variant}
												onOpenChange={setDropdownOpen}
											/>
										)
									) : (
										<NavLink
											key={item.label}
											label={item.label}
											href={item.href}
											variant={variant}
										/>
									),
								)}
							</div>

							<NavCtaButton cta={currentNav.cta} />
						</div>
					)}
				</NavFadeWrapper>

				{/* Mobile menu */}
				<MobileMenu nav={nav} />
			</div>
		</nav>
	);
}
