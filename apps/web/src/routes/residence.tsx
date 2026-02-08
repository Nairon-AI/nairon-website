import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program/program-page";
import { RESIDENCE_DATA } from "@/data/programs";
import { seoHead, courseJsonLd } from "@/lib/seo";

const courseData = JSON.stringify(
	courseJsonLd({
		name: "AI Residence Program",
		description:
			"12-week immersive AI engineering residency in Dubai. Build production AI systems, receive mentorship, and launch your AI career.",
		path: "/residence",
	}),
);

export const Route = createFileRoute("/residence")({
	component: ResidencePage,
	head: () => ({
		...seoHead({
			title: "AI Residence Program — Nairon AI",
			description:
				"12-week immersive AI engineering residency in Dubai. Build production AI systems, receive mentorship, and launch your AI career.",
			path: "/residence",
		}),
		scripts: [
			{
				type: "application/ld+json",
				children: courseData,
			},
		],
	}),
});

function ResidencePage() {
	return <ProgramPage data={RESIDENCE_DATA} />;
}
