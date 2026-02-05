import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import {
	JobDetailPage,
	JobDetailNotFound,
} from "@/components/careers";
import { getJobDetail } from "@/data/careers";

export const Route = createFileRoute("/careers/$jobId")({
	component: JobPositionPage,
});

function JobPositionPage() {
	const { jobId } = Route.useParams();

	// Get job detail from mock data (will be replaced with API call)
	const job = getJobDetail(jobId);

	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			{job ? <JobDetailPage job={job} /> : <JobDetailNotFound />}
			<Footer />
		</div>
	);
}
