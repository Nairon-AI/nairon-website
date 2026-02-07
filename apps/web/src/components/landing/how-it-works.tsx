import {
	ClipboardList,
	Trophy,
	Briefcase,
	Send,
	Search,
	Handshake,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
	Section,
	SectionTag,
	SectionHeading,
	GlassCard,
	CardTitle,
	BodyText,
	PrimaryButton,
	colors,
} from "./primitives";
import { STEPS, STEPS_CTA } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

const ICON_MAP: Record<string, typeof ClipboardList> = {
	ClipboardText: ClipboardList,
	Trophy: Trophy,
	Briefcase: Briefcase,
	PaperPlaneTilt: Send,
	MagnifyingGlass: Search,
	Handshake: Handshake,
};

export function HowItWorks() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const steps = STEPS[view];
	const cta = STEPS_CTA[view];
	const iconColor = isEngineer ? "text-green-400" : "text-amber-400";
	const gridClassName =
		steps.length === 4
			? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
			: "grid grid-cols-1 md:grid-cols-3 gap-6";
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [visibleCount, setVisibleCount] = useState(0);

	useEffect(() => {
		setVisibleCount(0);
	}, [view]);

	useEffect(() => {
		const sectionNode = sectionRef.current;
		if (!sectionNode) {
			return;
		}

		if (typeof window !== "undefined") {
			const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			if (reducedMotion) {
				setVisibleCount(steps.length);
				return;
			}
		}

		let observer: IntersectionObserver | null = null;
		const timeoutIds: number[] = [];

		observer = new IntersectionObserver(
			(entries) => {
				const isVisible = entries.some((entry) => entry.isIntersecting);
				if (!isVisible) {
					return;
				}

				for (let i = 0; i < steps.length; i += 1) {
					const timeoutId = window.setTimeout(() => {
						setVisibleCount((current) => Math.max(current, i + 1));
					}, i * 180);
					timeoutIds.push(timeoutId);
				}

				observer?.disconnect();
			},
			{ threshold: 0.35 },
		);

		observer.observe(sectionNode);

		return () => {
			observer?.disconnect();
			for (const timeoutId of timeoutIds) {
				window.clearTimeout(timeoutId);
			}
		};
	}, [steps.length]);

	return (
		<Section>
			<div ref={sectionRef}>
				<div className="text-center mb-16">
					<SectionTag label="Process" />
					<SectionHeading className="mt-4">How it works</SectionHeading>
					{isEngineer ? (
						<p className={`mt-4 text-base ${colors.textBody}`}>
							Stop drifting. In 1-2 weeks, you know where you stand. Hackathons run twice a month.
						</p>
					) : null}
				</div>

				<div className={gridClassName}>
					{steps.map((step, i) => {
						const Icon = ICON_MAP[step.icon] ?? ClipboardList;
						const isVisible = i < visibleCount;
						return (
							<div
								key={step.title}
								className="flex flex-col items-center text-center transition-all duration-500"
								style={{
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? "translateY(0px)" : "translateY(14px)",
								}}
							>
								<GlassCard className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
									<Icon className={`w-7 h-7 ${iconColor}`} />
								</GlassCard>
								<span className={`text-sm font-medium mb-2 ${colors.textMuted}`}>
									Step {i + 1}
								</span>
								<CardTitle className="mb-3">{step.title}</CardTitle>
								<BodyText>{step.description}</BodyText>
							</div>
						);
					})}
				</div>

				<div className="mt-12 flex justify-center">
					<PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
				</div>
			</div>
		</Section>
	);
}
