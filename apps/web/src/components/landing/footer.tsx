import { colors } from "./primitives";
import { FOOTER_LINKS } from "@/data/landing";

function SocialLinks() {
	return (
		<div>
			<p className={`text-sm mb-4 ${colors.textMuted}`}>Social</p>
			<div className="flex gap-3">
				<a
					href="https://linkedin.com/company/naironai"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
					aria-label="LinkedIn"
				>
					<span className="text-white/70 text-sm font-bold">in</span>
				</a>
				<a
					href="https://x.com/naironai"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
					aria-label="X / Twitter"
				>
					<span className="text-white/70 text-sm font-bold">X</span>
				</a>
			</div>
		</div>
	);
}

function FooterNav() {
	return (
		<nav className="flex flex-wrap gap-3">
			{FOOTER_LINKS.map((item) => (
				<a
					key={item.label}
					href={item.href}
					className={`px-4 py-2 text-sm hover:text-white border border-white/10 rounded-full transition-colors hover:bg-white/5 ${colors.textMuted}`}
				>
					{item.label}
				</a>
			))}
		</nav>
	);
}

function FooterBottom() {
	return (
		<div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p className="text-white/30 text-sm">All copyrights @naironai</p>
			<a
				href="/terms-and-conditions"
				className="text-white/30 text-sm hover:text-white/50 transition-colors"
			>
				Terms and Conditions
			</a>
		</div>
	);
}

function LargeLogoBackground() {
	return (
		<div className="relative h-[300px] md:h-[400px] overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden">
				<img
					src="https://framerusercontent.com/images/VHRAdVMCwEE6Q9afizgYDgxitUU.png"
					alt=""
					className="w-full max-w-none opacity-[0.07] translate-y-[20%]"
					style={{ minWidth: "150%" }}
				/>
			</div>
		</div>
	);
}

export function Footer() {
	return (
		<footer className={`${colors.pageBg} border-t border-white/5 relative overflow-hidden`}>
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="flex flex-col md:flex-row justify-between gap-12">
					<SocialLinks />
					<FooterNav />
				</div>
				<FooterBottom />
			</div>
			<LargeLogoBackground />
		</footer>
	);
}
