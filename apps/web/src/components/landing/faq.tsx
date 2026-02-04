import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	GlassCard,
	OutlineButton,
	BodyText,
	colors,
} from "./primitives";
import { FAQ_ITEMS } from "@/data/landing";

function FAQItem({ question, answer }: { question: string; answer: string }) {
	const [open, setOpen] = useState(false);

	return (
		<GlassCard className="overflow-hidden">
			<button
				type="button"
				className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
				onClick={() => setOpen(!open)}
			>
				<h4 className={`text-base font-medium pr-4 ${colors.text}`}>
					{question}
				</h4>
				{open ? (
					<Minus className="w-5 h-5 text-white/60 shrink-0" />
				) : (
					<Plus className="w-5 h-5 text-white/60 shrink-0" />
				)}
			</button>
			{open && (
				<div className="px-6 pb-6 pt-0">
					<BodyText>{answer}</BodyText>
				</div>
			)}
		</GlassCard>
	);
}

export function FAQ() {
	return (
		<Section className={colors.pageBg}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<div>
					<SectionTag label="Questions" />
					<SectionHeading>
						All the Important Details Before Attending{" "}
						<DimText>Nairon's AI Bootcamp in Dubai, UAE</DimText>
					</SectionHeading>
					<div className="mt-8">
						<OutlineButton href="/program">
							Got more questions? Join our office hours
						</OutlineButton>
					</div>
				</div>
				<div className="space-y-3">
					{FAQ_ITEMS.map((faq) => (
						<FAQItem
							key={faq.question}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}
