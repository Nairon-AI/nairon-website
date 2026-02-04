import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Section, SectionTag, SectionHeading, DimText, colors } from "../landing/primitives";
import { HIRE_FAQ_ITEMS } from "@/data/hire";

function FAQItem({
	question,
	answer,
	isOpen,
	onToggle,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}) {
	return (
		<div
			className={`border ${colors.border} rounded-2xl overflow-hidden transition-colors ${
				isOpen ? "bg-white/[0.03]" : ""
			}`}
		>
			<button
				type="button"
				onClick={onToggle}
				className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
			>
				<h4
					className={`text-base font-medium ${colors.text} pr-4`}
					style={{ letterSpacing: "-0.3px" }}
				>
					{question}
				</h4>
				{isOpen ? (
					<Minus className="w-5 h-5 text-white/60 shrink-0" />
				) : (
					<Plus className="w-5 h-5 text-white/60 shrink-0" />
				)}
			</button>
			{isOpen && (
				<div className="px-6 pb-6">
					<p className={`text-sm leading-relaxed ${colors.textBody}`}>{answer}</p>
				</div>
			)}
		</div>
	);
}

export function HireFAQ() {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<Section className={colors.pageBg}>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
				{/* Left: Heading */}
				<div>
					<SectionTag label="Questions" />
					<SectionHeading className="mt-4">
						All the Important Details Before Hiring from{" "}
						<DimText>Nairon's AI Bootcamp in Dubai, UAE</DimText>
					</SectionHeading>
					<a
						href="/bookacall"
						className={`inline-flex items-center gap-2 text-sm ${colors.textBody} hover:text-white transition-colors mt-8`}
					>
						Got more questions? Speak to a Partnership Manager
						<ArrowUpRight className="w-4 h-4" />
					</a>
				</div>

				{/* Right: Accordion */}
				<div className="space-y-3">
					{HIRE_FAQ_ITEMS.map((item, i) => (
						<FAQItem
							key={item.question}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === i}
							onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}
