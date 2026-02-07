import { useEffect, useRef, useState } from "react";
import { Section, colors } from "./primitives";
import { VALUE_PROP_SECTION } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";
import { cn } from "@/lib/utils";

type ValuePropView = keyof typeof VALUE_PROP_SECTION;
type ValuePropStep = (typeof VALUE_PROP_SECTION)[ValuePropView]["steps"][number];

function ValuePropMedia({
	step,
	highlight,
}: {
	step: ValuePropStep;
	highlight: string;
}) {
	const hasSource = Boolean(step.asset.src);

	return (
		<div className="relative overflow-hidden rounded-card border border-white/12 bg-white/[0.03]">
			<div className="relative h-[360px] md:h-[430px] overflow-hidden">
				{hasSource ? (
					<img
						src={step.asset.src}
						alt={step.asset.alt}
						className="h-full w-full object-cover"
						loading="lazy"
					/>
				) : (
					<div className="h-full w-full bg-black" />
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
				<div
					className="absolute -bottom-24 -right-10 h-56 w-56 rounded-full blur-3xl"
					style={{ background: `${highlight}45` }}
				/>
			</div>

			<div className="p-6 md:p-7">
				<h3 className="text-subheading leading-[1.06] tracking-tight text-landing-text md:text-heading-md">{step.title}</h3>
				<p className="mt-4 max-w-[60ch] text-body-fine leading-relaxed text-landing-text-body md:text-base">{step.description}</p>
				<div className="mt-5 flex flex-wrap gap-2">
					{step.tags.map((tag: string) => (
						<span key={tag} className={`rounded-full border ${colors.borderEmphasis} bg-black/35 px-3 py-1 text-xs text-white/80`}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export function ValueProp() {
	const { isEngineer, isHiringManager } = useViewMode();
	const view: ValuePropView = isEngineer ? "engineer" : "hiringManager";
	const section = VALUE_PROP_SECTION[view];
	const [activeStep, setActiveStep] = useState(0);
	const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
	const accent = isHiringManager ? "#CF9611" : "#22DB18";

	useEffect(() => {
		setActiveStep(0);
	}, [view]);

	useEffect(() => {
		if (typeof window === "undefined" || window.innerWidth < 1024) {
			return;
		}

		const cards = cardRefs.current.filter(
			(node): node is HTMLDivElement => node !== null,
		);
		if (cards.length === 0) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible.length === 0) {
					return;
				}

				const index = Number(
					(visible[0].target as HTMLElement).dataset.valueStepIndex ?? "0",
				);
				if (!Number.isNaN(index)) {
					setActiveStep(index);
				}
			},
			{ threshold: [0.3, 0.5, 0.75], rootMargin: "-20% 0px -35% 0px" },
		);

		for (const card of cards) {
			observer.observe(card);
		}

		return () => observer.disconnect();
	}, [section.steps.length]);

	return (
		<Section className="py-10 md:py-14">
			<div className="mx-auto max-w-6xl px-1 md:px-2">
				<div className="hidden items-start gap-10 lg:grid lg:grid-cols-[0.72fr_1.28fr]">
					<div className="sticky top-36">
						<h2 className="font-serif text-heading-lg leading-[0.98] tracking-serif text-landing-text">
							{section.headline}
						</h2>
						<p className="mt-5 max-w-[45ch] text-body-fine leading-relaxed text-landing-text-body">
							{section.subline}
						</p>

						<div className="mt-11 space-y-5">
							{section.steps.map((step: ValuePropStep, index: number) => {
								const isActive = index === activeStep;

								return (
									<button
										key={step.title}
										type="button"
										onClick={() => {
											setActiveStep(index);
											cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
										}}
										className="group flex items-center gap-4 text-left"
									>
										<div className={cn("h-7 w-[2px] rounded-full transition-opacity", isActive ? "opacity-100" : "opacity-0")} style={{ background: accent }} />
										<div>
											<div className={cn("text-[1.45rem] leading-tight tracking-tight", isActive ? "text-landing-text" : "text-white/50")}>{step.title}</div>
										</div>
									</button>
								);
							})}
						</div>
					</div>

					<div className="relative pr-2">
						{section.steps.map((step: ValuePropStep, index: number) => (
							<div
								key={step.title}
								ref={(node) => {
									cardRefs.current[index] = node;
								}}
								data-value-step-index={index}
								className="relative min-h-[92vh]"
							>
								<div className="sticky top-36 pt-1">
									<ValuePropMedia step={step} highlight={accent} />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="lg:hidden">
					<h2 className="font-serif text-heading-md leading-serif tracking-serif text-landing-text">{section.headline}</h2>
					<p className="mt-4 text-sm leading-relaxed text-landing-text-body">{section.subline}</p>
					<div className="mt-8 space-y-3">
						{section.steps.map((step: ValuePropStep, index: number) => {
							const isActive = index === 0;
							return (
								<div key={`${step.title}-label`} className="flex items-center gap-3">
									<div className={cn("h-6 w-[2px] rounded-full", isActive ? "opacity-100" : "opacity-0")} style={{ background: accent }} />
									<div className={cn("text-[1.1rem]", isActive ? "text-landing-text" : "text-white/50")}>{step.title}</div>
								</div>
							);
						})}
					</div>
					<div className="mt-7 space-y-4">
						{section.steps.map((step: ValuePropStep) => (
							<ValuePropMedia key={step.title} step={step} highlight={accent} />
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
