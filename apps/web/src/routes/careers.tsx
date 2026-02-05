import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
	component: CareersLayout,
});

function CareersLayout() {
	return <Outlet />;
}
