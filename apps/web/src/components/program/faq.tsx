import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	BodyText,
	colors,
} from "@/components/landing/primitives";
import type { FAQItem } from "@/data/programs";

function FAQItemComponent({ item }: { item: FAQItem }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-white/8">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full py-6 flex items-center justify-between gap-4 text-left"
			>
				<h3
					className={`text-lg md:text-xl font-medium ${colors.text}`}
				>
					{item.question}
				</h3>
				{isOpen ? (
					<Minus className="w-5 h-5 text-white/40 shrink-0" />
				) : (
					<Plus className="w-5 h-5 text-white/40 shrink-0" />
				)}
			</button>
			<div className="faq-answer" data-open={isOpen}>
				<div>
					<div className="pb-6">
						<BodyText>{item.answer}</BodyText>
					</div>
				</div>
			</div>
		</div>
	);
}

export function ProgramFAQ({ items }: { items: FAQItem[] }) {
	return (
		<Section className={colors.pageBg}>
			<SectionTag label="FAQ" />
			<SectionHeading>
				Common <DimText>Questions</DimText>
			</SectionHeading>

			<div className="mt-12 max-w-3xl mx-auto">
				{items.map((item) => (
					<FAQItemComponent key={item.question} item={item} />
				))}
			</div>
		</Section>
	);
}
