import { MessageSquare, GitBranch, Wrench, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
	{
		number: "1",
		title: "Interview",
		description: "Clarify requirements before writing code. The agent asks questions, you answer. No more scope drift.",
		command: "/nbench:interview Add user notifications",
		icon: MessageSquare,
		color: "text-blue-400",
	},
	{
		number: "2",
		title: "Plan",
		description: "Break features into atomic tasks (30-90 min each). Dependencies mapped. Progress tracked.",
		command: "/nbench:plan Add user notifications",
		icon: GitBranch,
		color: "text-purple-400",
	},
	{
		number: "3",
		title: "Build",
		description: "Execute tasks one by one. Context reloaded automatically. Human checkpoints maintained.",
		command: "/nbench:work fn-1.1",
		icon: Wrench,
		color: "text-amber-400",
	},
	{
		number: "4",
		title: "Review",
		description: "Catch issues before they compound. Implementation review, then epic-level verification.",
		command: "/nbench:impl-review",
		icon: CheckCircle2,
		color: "text-emerald-400",
	},
	{
		number: "5",
		title: "Improve",
		description: "Analyze your sessions. Detect friction patterns. Get personalized tool recommendations.",
		command: "/nbench:improve",
		icon: Sparkles,
		color: "text-cyan-400",
	},
];

export function NBenchWorkflow() {
	return (
		<section id="workflow" className="bg-background @container py-16 md:py-24 lg:py-32">
			<div className="mx-auto max-w-6xl px-6">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center mb-16">
					<div className="bg-primary/10 text-primary w-fit mx-auto rounded-full px-4 py-1.5 text-sm font-medium mb-6">
						Structured Workflow
					</div>
					<h2 className="text-foreground text-3xl font-semibold md:text-4xl lg:text-5xl">
						Interview → Plan → Build → Review → Improve
					</h2>
					<p className="text-muted-foreground mt-6 text-lg">
						A compressed SDLC designed for the age of agents. Human checkpoints that maintain understanding as your system evolves.
					</p>
				</div>

				{/* Steps grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
					{steps.map((step) => {
						const Icon = step.icon;
						return (
							<div
								key={step.number}
								className="group relative rounded-2xl border border-white/10 bg-card/50 p-6 hover:border-white/20 hover:bg-card transition-all duration-300"
							>
								{/* Step number */}
								<div className="flex items-center gap-3 mb-4">
									<div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${step.color}`}>
										<Icon className="h-5 w-5" />
									</div>
									<span className="text-muted-foreground font-mono text-sm">{step.number}.</span>
								</div>

								{/* Title */}
								<h3 className="text-foreground text-lg font-semibold mb-2">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-muted-foreground text-sm mb-4">
									{step.description}
								</p>

								{/* Command */}
								<code className="block rounded-lg bg-black/30 px-3 py-2 font-mono text-xs text-emerald-400/80 overflow-x-auto">
									{step.command}
								</code>
							</div>
						);
					})}
				</div>

				{/* Bottom note */}
				<p className="text-muted-foreground text-center mt-12 text-sm">
					That's it. Interview → Plan → Build → Review → Improve. Repeat.
				</p>
			</div>
		</section>
	);
}
