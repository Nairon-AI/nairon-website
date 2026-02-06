import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program/program-page";
import { RESIDENCE_DATA } from "@/data/programs";

export const Route = createFileRoute("/residence")({
	component: ResidencePage,
});

function ResidencePage() {
	return <ProgramPage data={RESIDENCE_DATA} />;
}
