import { useState } from "react";
import {
	Section,
	SectionTag,
	SectionHeading,
	DimText,
	OutlineButton,
	BodyText,
	colors,
} from "./primitives";
import { FAQ_ITEMS } from "@/data/landing";

function PlusIcon({ open }: { open: boolean }) {
	return (
		<div className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center shrink-0 relative">
			<div className="w-0.5 h-5 bg-landing-text rounded-full" />
			<div
				className="absolute w-0.5 h-5 bg-landing-text rounded-full transition-transform duration-300"
				style={{ transform: open ? "rotate(0deg)" : "rotate(90deg)" }}
			/>
		</div>
	);
}

function FAQItem({
	question,
	answer,
	defaultOpen = false,
}: { question: string; answer: string; defaultOpen?: boolean }) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div className="rounded-3xl bg-landing-card overflow-hidden">
			<button
				type="button"
				className="w-full flex items-center justify-between p-6 cursor-pointer text-left gap-2.5"
				onClick={() => setOpen(!open)}
			>
				<h4 className={`text-lg font-normal ${colors.text}`}>{question}</h4>
				<PlusIcon open={open} />
			</button>
			{open && (
				<div className="px-6 pb-6 pt-0">
					<BodyText>{answer}</BodyText>
				</div>
			)}
		</div>
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
				<div className="flex flex-col gap-4">
					{FAQ_ITEMS.map((faq, i) => (
						<FAQItem
							key={faq.question}
							question={faq.question}
							answer={faq.answer}
							defaultOpen={i === 0}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}
