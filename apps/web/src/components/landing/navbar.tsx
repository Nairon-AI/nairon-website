import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/landing";

function NavLink({ label, href }: { label: string; href: string }) {
	return (
		<a
			href={href}
			className="group relative flex items-center justify-center h-10 px-4 rounded-full bg-white/12 overflow-hidden transition-colors"
		>
			{/* Default label */}
			<span className="text-base text-white transition-transform duration-300 group-hover:-translate-y-10">
				{label}
			</span>

			{/* Green pill background (slides up on hover) */}
			<span className="absolute inset-x-[-1px] top-full h-[45px] rounded-full bg-[#22DB18] transition-all duration-300 group-hover:top-[-3px]" />

			{/* Hover label (slides up with green pill) */}
			<span className="absolute text-base text-white top-12 transition-all duration-300 group-hover:top-2">
				{label}
			</span>
		</a>
	);
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			className={`w-full h-full ${className}`}
			fill="currentColor"
		>
			<path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
		</svg>
	);
}

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/80 backdrop-blur-md border-b border-white/5"
					: ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
				{/* Logo */}
				<a href="/" className="flex items-center">
					<img
						src="https://framerusercontent.com/images/VHRAdVMCwEE6Q9afizgYDgxitUU.png"
						alt="nairon."
						className="h-9"
					/>
				</a>

				{/* Links + Apply grouped on right */}
				<div className="hidden md:flex items-center gap-6">
					{/* Nav links */}
					<nav className="flex items-center gap-2">
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.label}
								label={link.label}
								href={link.href}
							/>
						))}
					</nav>

					{/* Apply button - Green pill with white text and white circle with green arrow */}
					<a
						href="https://apply.naironai.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2.5 bg-[#22DB18] text-white font-semibold text-base pl-4 pr-1.5 py-1.5 rounded-full hover:bg-[#1fc516] transition-colors"
					>
						Apply
						<span className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
							<span className="w-4 h-4 block text-[#22DB18]">
								<ArrowRightIcon />
							</span>
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
