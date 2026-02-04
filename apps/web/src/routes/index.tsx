import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight">Nairon</h1>
				<p className="mt-2 text-lg text-muted-foreground">
					Welcome to Nairon
				</p>
			</div>
			<div className="flex gap-4">
				<Button asChild>
					<Link to="/dashboard">Go to Dashboard</Link>
				</Button>
			</div>
		</div>
	);
}
