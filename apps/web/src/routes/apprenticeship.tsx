import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program/program-page";
import { APPRENTICESHIP_DATA } from "@/data/programs";

export const Route = createFileRoute("/apprenticeship")({
	component: ApprenticeshipPage,
});

function ApprenticeshipPage() {
	return <ProgramPage data={APPRENTICESHIP_DATA} />;
}
