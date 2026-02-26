import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
	{
		group: "Getting Started",
		items: [
			{
				id: "install",
				question: "How do I install Flux?",
				answer: "Run `/plugin marketplace add Nairon-AI/flux` in Claude Code, then `/flux:setup` to initialize. For other platforms, check our GitHub README.",
			},
			{
				id: "prereqs",
				question: "What are the prerequisites?",
				answer: "Python 3.9+, jq, and git. Flux checks for these during execution and tells you what's missing.",
			},
			{
				id: "first-feature",
				question: "How do I build my first feature with Flux?",
				answer: "Start with `/flux:interview Add user notifications` to clarify requirements, then `/flux:plan` to break it into tasks, then `/flux:work fn-1.1` to execute each task.",
			},
		],
	},
	{
		group: "Privacy & Data",
		items: [
			{
				id: "data-read",
				question: "What data does Flux read?",
				answer: "Repo structure (package.json, configs), installed MCPs from ~/.mcp.json, and optionally Claude Code session files (with your consent).",
			},
			{
				id: "data-sent",
				question: "Is any data sent externally?",
				answer: "Analysis runs locally. Network is only used to fetch recommendations from our public GitHub repo. No session data leaves your machine unless you explicitly export it.",
			},
			{
				id: "recommendations",
				question: "Where do recommendations come from?",
				answer: "From Nairon-AI/flux-recommendations on GitHub — 30+ curated tools, community-driven. You can browse and contribute.",
			},
		],
	},
	{
		group: "How It Works",
		items: [
			{
				id: "improve",
				question: "What does /flux:improve do?",
				answer: "It analyzes your actual coding sessions to find friction patterns (shallow prompts, blind acceptance, etc.), then recommends specific tools that would help. The agent handles installation.",
			},
			{
				id: "score",
				question: "How is the score calculated?",
				answer: "Five dimensions: interview depth, pushback ratio, prompt quality, iteration efficiency, and tool breadth. Each is measured from your session data and compared to top performers.",
			},
			{
				id: "profile",
				question: "Can I share my Flux profile?",
				answer: "Yes. Run `/flux:profile --publish` to generate a shareable link showing your score, tools, and workflow. Great for hiring, hackathons, or helping teammates.",
			},
		],
	},
];

export function FluxFAQ() {
	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-1 md:px-6">
				<div className="grid gap-8 md:grid-cols-5 md:gap-12">
					{/* Left: Header */}
					<div className="max-w-lg max-md:px-6 md:col-span-2">
						<h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
						<p className="text-muted-foreground mt-4 text-balance text-lg">
							Common questions about Flux
						</p>
						<p className="text-muted-foreground mt-6 max-md:hidden">
							Can't find what you're looking for? Join our{" "}
							<a
								href="https://discord.gg/CEQMd6fmXk"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary font-medium hover:underline"
							>
								Discord community
							</a>
						</p>
					</div>

					{/* Right: FAQ items */}
					<div className="space-y-12 md:col-span-3">
						{faqItems.map((group) => (
							<div className="space-y-4" key={group.group}>
								<h3 className="text-foreground pl-6 text-lg font-semibold">{group.group}</h3>
								<Accordion type="single" collapsible className="-space-y-1">
									{group.items.map((item) => (
										<AccordionItem
											key={item.id}
											value={item.id}
											className="data-[state=open]:bg-card data-[state=open]:ring-border data-[state=open]:shadow-black/6.5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1"
										>
											<AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">
												{item.question}
											</AccordionTrigger>
											<AccordionContent>
												<p className="text-muted-foreground text-base">{item.answer}</p>
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						))}
					</div>
				</div>

				<p className="text-muted-foreground mt-12 px-6 md:hidden">
					Can't find what you're looking for? Join our{" "}
					<a
						href="https://discord.gg/CEQMd6fmXk"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary font-medium hover:underline"
					>
						Discord community
					</a>
				</p>
			</div>
		</section>
	);
}
