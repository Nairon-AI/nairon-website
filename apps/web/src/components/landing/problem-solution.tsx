import { useEffect, useState } from "react";
import { CircleAlert, Radar, Sparkles, TrendingUp } from "lucide-react";
import { PrimaryButton, Section } from "./primitives";
import { PROBLEM_SECTION } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

const AI_LOGOS = [
	{ name: "ChatGPT", src: "https://openai.com/favicon.ico", x: "12%", y: "22%" },
	{ name: "Claude", src: "https://www.anthropic.com/favicon.ico", x: "40%", y: "14%" },
	{ name: "OpenCode", src: "https://opencode.ai/favicon-96x96-v3.png", x: "66%", y: "26%" },
	{ name: "Clawbot", src: "https://clawbot.ai/favicon.svg", x: "22%", y: "56%" },
	{ name: "LangChain", src: "https://www.langchain.com/favicon.ico", x: "54%", y: "48%" },
	{ name: "Gemini", src: "https://www.gstatic.com/lamda/images/gemini_icon_v2_1f9f5f08e8f6c8f4a1d0.png", x: "78%", y: "60%" },
] as const;

function LogoDot({
	name,
	src,
	x,
	y,
}: {
	name: string;
	src: string;
	x: string;
	y: string;
}) {
	return (
		<div className="absolute flex items-center gap-2" style={{ left: x, top: y }}>
			<div className="h-8 w-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center">
				<img src={src} alt={`${name} logo`} className="h-4 w-4 object-contain" loading="lazy" />
			</div>
			<span className="text-xs text-white/65">{name}</span>
		</div>
	);
}

function ProblemVisual({
	index,
	items,
	highlight,
}: {
	index: number;
	items: readonly string[];
	highlight: string;
}) {
	if (index === 0) {
		return (
			<div className="relative h-full min-h-[320px] md:min-h-[360px] overflow-hidden">
				<div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
				<div className="absolute -left-24 top-20 h-52 w-52 rounded-full blur-3xl" style={{ background: `${highlight}26` }} />
				<div className="absolute right-4 top-10 text-sm text-white/60">{items[0]}</div>
				<div className="absolute left-4 top-28 text-sm text-white/60">{items[1]}</div>
				<div className="absolute left-10 top-44 text-sm text-white/60">{items[2]}</div>
				<div className="absolute left-6 bottom-8 right-6">
					<div className="text-micro uppercase tracking-label-wide text-white/50">What matters</div>
					<div className="mt-2 text-2xl md:text-3xl text-landing-text leading-tight">{items[3]}</div>
					<div className="mt-3 h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${highlight}00, ${highlight}a6, ${highlight}00)` }} />
				</div>
			</div>
		);
	}

	if (index === 1) {
		return (
			<div className="relative h-full min-h-[320px] md:min-h-[360px] overflow-hidden">
				<div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12) 0, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0, transparent 30%)" }} />
				{AI_LOGOS.map((logo) => (
					<LogoDot key={logo.name} name={logo.name} src={logo.src} x={logo.x} y={logo.y} />
				))}
				<div className="absolute left-6 right-6 bottom-8">
					<div className="text-micro uppercase tracking-label-wide text-white/50">Clear signal</div>
					<div className="mt-2 text-2xl md:text-3xl text-landing-text leading-tight">{items[3]}</div>
					<div className="mt-3 h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${highlight}00, ${highlight}a6, ${highlight}00)` }} />
				</div>
			</div>
		);
	}

	return (
		<div className="relative h-full min-h-[320px] md:min-h-[360px] overflow-hidden">
			<div className="absolute inset-x-0 bottom-14 h-px bg-white/10" />
			<svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 360" fill="none" preserveAspectRatio="none">
				<path d="M30 300C140 292 230 287 320 282C410 278 490 272 560 265" stroke="rgba(255,255,255,0.34)" strokeWidth="2" />
				<path d="M30 318C130 320 190 308 250 282C330 246 430 180 560 98" stroke={highlight} strokeWidth="3" opacity="0.95" />
			</svg>
			<div className="absolute left-4 top-10 text-sm text-white/55">Stagnation</div>
			<div className="absolute right-4 top-8 text-sm text-white/55">Slow growth</div>
			<div className="absolute left-6 bottom-8 text-sm text-landing-text" style={{ color: highlight }}>
				AI-native engineer
			</div>
			<div className="absolute right-6 bottom-12 text-sm md:text-base text-white/85">Exponential trajectory</div>
		</div>
	);
}

export function ProblemSolution() {
	const { isEngineer, isHiringManager } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const section = PROBLEM_SECTION[view];
	const [activeTab, setActiveTab] = useState(0);
	const accent = isHiringManager ? "#CF9611" : "#22DB18";

	useEffect(() => {
		setActiveTab(0);
	}, [view]);

	const current = section.tabs[activeTab];
	const visualIcon =
		activeTab === 0 ? <Radar className="h-4 w-4" /> : activeTab === 1 ? <Sparkles className="h-4 w-4" /> : activeTab === 2 ? <TrendingUp className="h-4 w-4" /> : <CircleAlert className="h-4 w-4" />;

	return (
		<Section className="py-12 md:py-16">
			<div className="glass-card mx-auto max-w-6xl rounded-card-lg px-5 py-8 md:px-10 md:py-10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
				<div className="mx-auto max-w-3xl text-center">
					<div className="mb-3 text-xs md:text-sm font-semibold tracking-label-wide text-white/55">Problem</div>
					<h2 className="font-serif text-heading-md leading-serif tracking-serif text-landing-text md:text-heading-lg">
						{section.observation}
					</h2>
					<div className="mt-6 flex justify-center">
						<div className="grid w-full max-w-[640px] grid-cols-3 gap-1 rounded-full border border-white/12 bg-black/25 p-1.5">
							{section.tabs.map((tab, idx) => (
								<button
									key={tab.tab}
									type="button"
									onClick={() => setActiveTab(idx)}
									className={`relative rounded-full px-2 py-2.5 text-center text-xs md:text-sm font-medium transition-all duration-300 ${
										activeTab === idx
											? "bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
											: "text-white/70 hover:bg-white/10"
									}`}
								>
									{tab.tab}
								</button>
							))}
						</div>
					</div>
				</div>

				<div key={current.tab} className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 problem-panel-enter">
					<div className="relative rounded-3xl border border-white/8 bg-white/[0.02] p-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
						<ProblemVisual index={activeTab} items={current.visualItems} highlight={accent} />
					</div>

					<div className="flex flex-col justify-center lg:pl-6">
						<div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-label text-white/55">
							{visualIcon}
							<span>{current.visualTag}</span>
						</div>
						<h3 className="mt-4 text-subheading leading-[1.1] tracking-tight text-landing-text md:text-heading-md">
							{current.title}
						</h3>
						<p className="mt-4 max-w-[48ch] text-body-fine leading-relaxed text-landing-text-body md:text-base">
							{current.description}
						</p>
						<div className="mt-7">
							<PrimaryButton href={current.button.href} className="hover:-translate-y-0.5 transition-transform duration-300">
								{current.button.label}
							</PrimaryButton>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
