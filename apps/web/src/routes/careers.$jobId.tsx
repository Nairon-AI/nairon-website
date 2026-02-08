import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import {
	JobDetailPage,
	JobDetailNotFound,
} from "@/components/careers";
import { getJobDetail } from "@/data/careers";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/$jobId")({
	component: JobPositionPage,
	head: ({ params }) => {
		const job = getJobDetail(params.jobId);
		if (!job) {
			return seoHead({
				title: "Job Not Found — Nairon AI",
				description: "This job position could not be found.",
				path: `/careers/${params.jobId}`,
				noindex: true,
			});
		}
		return seoHead({
			title: `${job.title} — Careers at Nairon AI`,
			description: `Apply for ${job.title} at Nairon AI. ${job.location ? `Location: ${job.location}.` : ""} Join our team and help build the future of AI engineering education.`,
			path: `/careers/${params.jobId}`,
		});
	},
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
