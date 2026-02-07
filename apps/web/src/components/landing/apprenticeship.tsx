import { ArrowRight } from "lucide-react";
import { GlassCard, CardTitle, BodyText, colors } from "./primitives";
import { APPRENTICESHIP_CONTENT } from "@/data/landing";
import { useViewMode } from "@/contexts/view-mode-context";

export function Apprenticeship() {
	const { isEngineer } = useViewMode();
	const view = isEngineer ? "engineer" : "hiringManager";
	const data = APPRENTICESHIP_CONTENT[view];
	const hoverColor = isEngineer ? "hover:text-green-400" : "hover:text-amber-400";

	return (
		<section className="py-12 md:py-16">
			<div className="max-w-7xl mx-auto px-6">
				<GlassCard className="p-6 md:p-8">
					<div className="flex flex-col md:flex-row md:items-center gap-6">
						{/* Left — title + description */}
						<div className="flex-1 min-w-0">
							<CardTitle className="mb-1">{data.title}</CardTitle>
							<BodyText>{data.description}</BodyText>
						</div>

						{/* Center — pills */}
						<div className="flex flex-wrap gap-2">
							{data.pills.map((pill) => (
								<span
									key={pill}
									className={`px-3 py-1 rounded-full text-sm font-medium border ${colors.border} ${colors.textBody}`}
								>
									{pill}
								</span>
							))}
						</div>

						{/* Right — CTA link */}
						<a
							href={data.cta.href}
							className={`inline-flex items-center gap-1.5 text-white font-semibold text-sm ${hoverColor} transition-colors shrink-0`}
						>
							{data.cta.label}
							<ArrowRight className="w-4 h-4" />
						</a>
					</div>
				</GlassCard>
			</div>
		</section>
	);
}
