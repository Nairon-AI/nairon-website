import { ArrowUpRight } from "lucide-react";
import { colors } from "./primitives";
import { FOOTER_LINKS } from "@/data/landing";

function SocialLinks() {
	return (
		<div>
			<p className={`text-base mb-4 ${colors.text}`}>Social</p>
			<div className="flex gap-3">
				<a
					href="https://www.linkedin.com/company/nairon-ai"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-landing-text hover:bg-white/5 transition-colors"
					aria-label="LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
						className="w-5 h-5"
						fill="currentColor"
					>
						<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
					</svg>
				</a>
				<a
					href="https://x.com/nairon__ai"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-landing-text hover:bg-white/5 transition-colors"
					aria-label="X / Twitter"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
						className="w-5 h-5"
						fill="currentColor"
					>
						<path d="M218.12,209.56l-61-95.8,59.72-69.36a12,12,0,1,0-18.2-15.64L142.82,93.08,99.56,25.16A12,12,0,0,0,89.13,20H48a12,12,0,0,0-10.12,18.44l61,95.8L39.16,203.6a12,12,0,0,0,18.2,15.64l55.82-64.88L156.44,222.84A12,12,0,0,0,166.87,228H208a12,12,0,0,0,10.12-18.44ZM97.29,44l55.22,88-20.67,24L68.83,44ZM158.71,204l-55.22-88,20.67-24L187.17,204Z" />
					</svg>
				</a>
			</div>
		</div>
	);
}

function FooterNavLink({ label, href }: { label: string; href: string }) {
	return (
		<a
			href={href}
			className="group relative flex items-center justify-center h-10 px-4 rounded-full bg-white/12 overflow-hidden transition-colors"
		>
			<span className="text-base text-white transition-transform duration-300 group-hover:-translate-y-10">
				{label}
			</span>
			<span className="absolute inset-x-[-1px] top-full h-[45px] rounded-full bg-brand transition-all duration-300 group-hover:top-[-3px]" />
			<span className="absolute text-base text-white top-12 transition-all duration-300 group-hover:top-2">
				{label}
			</span>
		</a>
	);
}

function FooterNav() {
	return (
		<nav className="flex flex-wrap gap-3">
			{FOOTER_LINKS.map((item) => (
				<FooterNavLink key={item.label} label={item.label} href={item.href} />
			))}
		</nav>
	);
}

function FooterBottom() {
	return (
		<div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
			<div className="flex items-center gap-6">
				<p className={`text-base ${colors.text}`}>All copyrights @naironai</p>
				<a
					href="/terms-and-conditions"
					className="text-xs text-landing-text hover:text-white/70 transition-colors"
				>
					Terms and Conditions
				</a>
			</div>
			<button
				type="button"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="flex items-center gap-2 text-landing-text hover:text-white transition-colors"
				aria-label="Back to top"
			>
				<span className="w-20 h-px bg-white/30" />
				<ArrowUpRight className="w-4 h-4" />
			</button>
		</div>
	);
}

function LargeLogoBackground() {
	return (
		<div className="relative h-[500px] overflow-hidden">
			{/* Green gradient background image (contains nairon logo square) */}
			<img
				src="https://framerusercontent.com/images/enyh4nWMxHyEude0e3qPKlPss.png"
				alt=""
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>

			{/* Black gradient overlay from top - creates smooth transition */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 40%)",
				}}
			/>

			{/* Large "nairon." text overlay with mask for fade effect */}
			<img
				src="https://framerusercontent.com/images/VHRAdVMCwEE6Q9afizgYDgxitUU.png"
				alt=""
				className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-none translate-y-[20%]"
				style={{
					width: "min(126%, 1920px)",
					maskImage:
						"linear-gradient(to top, white 0%, white 60%, transparent 100%)",
					WebkitMaskImage:
						"linear-gradient(to top, white 0%, white 60%, transparent 100%)",
				}}
			/>
		</div>
	);
}

export function Footer() {
	return (
		<footer
			className={`${colors.pageBg} border-t border-white/5 relative overflow-hidden`}
		>
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
