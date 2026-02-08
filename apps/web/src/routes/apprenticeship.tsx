import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program/program-page";
import { APPRENTICESHIP_DATA } from "@/data/programs";
import { seoHead, courseJsonLd } from "@/lib/seo";

const courseData = JSON.stringify(
	courseJsonLd({
		name: "AI Apprenticeship Program",
		description:
			"Hands-on AI apprenticeship combining real-world projects with expert mentorship. Transform your engineering career with practical AI skills.",
		path: "/apprenticeship",
	}),
);

export const Route = createFileRoute("/apprenticeship")({
	component: ApprenticeshipPage,
	head: () => ({
		...seoHead({
			title: "AI Apprenticeship Program — Nairon AI",
			description:
				"Hands-on AI apprenticeship combining real-world projects with expert mentorship. Transform your engineering career with practical AI skills.",
			path: "/apprenticeship",
		}),
		scripts: [
			{
				type: "application/ld+json",
				children: courseData,
			},
		],
	}),
});

function ApprenticeshipPage() {
	return <ProgramPage data={APPRENTICESHIP_DATA} />;
}
