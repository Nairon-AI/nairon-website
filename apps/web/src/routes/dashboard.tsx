import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { useSession } from "@/lib/auth-client";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
	component: DashboardLayout,
});

function DashboardLayout() {
	const { data: session, isPending } = useSession();

	if (isPending) {
		return (
			<div className="flex flex-1 items-center justify-center p-6">
				<Loader />
			</div>
		);
	}

	if (!session) {
		return (
			<div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
				<p className="text-muted-foreground">
					You need to sign in to access the dashboard.
				</p>
				<Button asChild>
					<Link to="/">Sign In</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="flex flex-1 flex-col p-6">
			<h1 className="text-3xl font-bold">Dashboard</h1>
			<p className="mt-2 text-muted-foreground">
				Welcome back, {session.user.name || session.user.email}
			</p>
			<div className="mt-6">
				<Outlet />
			</div>
		</div>
	);
}
