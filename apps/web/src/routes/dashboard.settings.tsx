import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/dashboard/settings")({
	component: SettingsPage,
});

function SettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold">Settings</h2>
				<p className="text-muted-foreground">
					Manage your account settings and preferences.
				</p>
			</div>
			<Separator />
			<Card>
				<CardHeader>
					<CardTitle>Notifications</CardTitle>
					<CardDescription>
						Configure how you receive notifications.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between">
						<Label htmlFor="email-notifications">Email notifications</Label>
						<Switch id="email-notifications" />
					</div>
					<div className="flex items-center justify-between">
						<Label htmlFor="push-notifications">Push notifications</Label>
						<Switch id="push-notifications" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
