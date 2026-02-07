import { CERTIFICATE_SECTION } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function CertificateSection() {
	const { isEngineer } = useViewMode();
	const data = CERTIFICATE_SECTION[isEngineer ? "engineer" : "hiringManager"];
	const orbAsset = isEngineer ? "/nairon-orb.jpg" : "/nairon-orb-gold.jpg";
	const headlineOffset = data.description ? "" : "-mb-6 md:-mb-8";
	const topGlowClass = isEngineer ? "via-emerald-600/6" : "via-amber-400/12";
	const cardBorderClass = isEngineer ? "border-emerald-200/10" : "border-amber-200/22";
	const tintLinearClass = isEngineer
		? "bg-[linear-gradient(124deg,rgba(255,255,255,0.012),rgba(255,255,255,0.002)_34%,rgba(16,185,129,0.03)_64%,rgba(255,255,255,0.01))]"
		: "bg-[linear-gradient(124deg,rgba(255,255,255,0.02),rgba(255,255,255,0.004)_34%,rgba(245,158,11,0.06)_64%,rgba(255,255,255,0.015))]";
	const tintRadialClass = isEngineer
		? "bg-[radial-gradient(circle_at_14%_18%,rgba(34,197,94,0.07),transparent_36%),radial-gradient(circle_at_84%_82%,rgba(52,211,153,0.06),transparent_34%)]"
		: "bg-[radial-gradient(circle_at_14%_18%,rgba(245,158,11,0.12),transparent_36%),radial-gradient(circle_at_84%_82%,rgba(251,191,36,0.1),transparent_34%)]";
	const glowLeftClass = isEngineer ? "bg-green-600/12" : "bg-amber-500/18";
	const glowRightClass = isEngineer ? "bg-emerald-900/10" : "bg-amber-700/14";
	const badgeClass = isEngineer
		? "border-emerald-200/30 bg-emerald-300/10 text-emerald-100/85"
		: "border-amber-100/45 bg-amber-300/16 text-amber-50/95";
	const badgeDotClass = isEngineer
		? "bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
		: "bg-amber-200 shadow-[0_0_14px_rgba(251,191,36,0.95)]";
	const trackClass = isEngineer ? "text-emerald-200/95" : "text-amber-100/95";
	const dividerClass = isEngineer ? "border-emerald-100/20" : "border-amber-100/28";
	const jobOfferClass = isEngineer ? "text-emerald-100/92" : "text-amber-50/95";

	return (
		<section className="py-14 md:py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-0 text-center">
					<div className="text-xs uppercase tracking-[0.24em] text-white/55">{data.eyebrow}</div>
					<h2
						className={`mx-auto mt-4 max-w-4xl font-serif text-[2.2rem] leading-[1.03] tracking-[-0.02em] text-landing-text md:text-[3.8rem] ${headlineOffset}`}
					>
						{data.title}
					</h2>
					{data.description ? (
						<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-landing-text-body md:text-lg">
							{data.description}
						</p>
					) : null}
				</div>

				<div className="relative mx-auto max-w-6xl">
					<div
						className={`pointer-events-none absolute inset-x-20 -top-10 h-36 rounded-full bg-gradient-to-r from-transparent ${topGlowClass} to-transparent blur-3xl`}
					/>
					<img
						src="/nairon-certificate.png"
						alt="Hands holding a tablet displaying a Nairon certificate"
						className="relative z-[1] w-full"
						loading="lazy"
					/>

					<div className="pointer-events-none absolute left-1/2 top-[43.5%] z-[2] w-[82%] -translate-x-1/2 -translate-y-1/2 sm:w-[74%] md:w-[62%]">
						<div
							className={`relative flex min-h-[304px] flex-col overflow-hidden rounded-2xl border ${cardBorderClass} bg-[#000100]/92 px-4 py-8 text-white shadow-[0_40px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:min-h-[360px] sm:px-6 sm:py-9 md:min-h-[468px] md:rounded-3xl md:px-8 md:py-12`}
						>
							<img
								src={orbAsset}
								alt=""
								aria-hidden="true"
								className="absolute -right-40 -top-40 h-[430px] w-[430px] max-w-none object-contain opacity-22 mix-blend-screen"
							/>
							<img
								src={orbAsset}
								alt=""
								aria-hidden="true"
								className="absolute -left-20 bottom-[-110px] h-[240px] w-[240px] max-w-none object-contain opacity-14 mix-blend-screen"
							/>
							<div className={`absolute inset-0 ${tintLinearClass}`} />
							<div className={`absolute inset-0 ${tintRadialClass}`} />
							<div className={`absolute -left-14 -top-12 h-40 w-40 rounded-full ${glowLeftClass} blur-3xl`} />
							<div className={`absolute -right-12 bottom-5 h-32 w-32 rounded-full ${glowRightClass} blur-2xl`} />
							<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
							<div className="relative">
								<div className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] sm:text-[10px] ${badgeClass}`}>
									<span className={`h-1.5 w-1.5 rounded-full ${badgeDotClass}`} />
									Nairon Certificate
								</div>
								<div className="mt-2 font-serif text-[1.1rem] leading-tight text-white sm:text-[1.35rem] md:text-[1.85rem]">
									{data.certificateTitle}
								</div>
								<div className={`mt-2 text-[10px] uppercase tracking-[0.18em] sm:text-[11px] ${trackClass}`}>
									{data.track}
								</div>
							</div>
							<div className="relative mt-4 text-[10px] leading-relaxed text-white/72 sm:text-xs md:mt-5">
								{data.certificateBody}
							</div>
							<div className={`relative mt-auto border-t pt-6 md:pt-7 ${dividerClass}`}>
							<div
								className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[120%] text-[2.45rem] leading-none md:text-[3.1rem] ${jobOfferClass}`}
								style={{ fontFamily: "'Snell Roundhand', 'Brush Script MT', cursive" }}
							>
								Job Offer
							</div>
								<div className="flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[0.16em] text-white/58 sm:text-[10px]">
									<span>Recipient: {data.recipientName}</span>
									<span>Total Compensation: $100k USD</span>
									<span>ID: {data.credentialId}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
