import { useState } from "react";
import { Check, Copy, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FluxCTA() {
	const [copied, setCopied] = useState(false);

	const installPrompt = `I want to install and set up Flux for structured AI development.
The plugin is at: https://github.com/Nairon-AI/flux

Help me:
1. Install the plugin
2. Run /flux:setup to initialize
3. Explain the core workflow (scope → build → review)

Guide me step by step.`;

	const handleCopy = async () => {
		await navigator.clipboard.writeText(installPrompt);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id="flux-cta" className="bg-background relative overflow-hidden py-16 md:py-24">
			{/* Background effects */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_60%)]" />

			<div className="relative mx-auto max-w-3xl px-6 text-center">
				<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mx-auto rounded-full px-4 py-1.5 text-sm font-medium mb-6">
					Get Started
				</div>

				<h2 className="text-foreground text-3xl font-semibold md:text-4xl lg:text-5xl">
					Find your gaps. Fix them.
				</h2>

				<p className="text-muted-foreground mt-6 text-lg max-w-xl mx-auto">
					Copy this prompt into your AI agent to get started with Flux.
				</p>

				{/* Install prompt card */}
				<div 
					onClick={handleCopy}
					className="bg-card/50 ring-border rounded-2xl p-8 ring-1 cursor-pointer transition-all hover:bg-card/70 hover:ring-muted-foreground/50 max-w-2xl mx-auto mt-8 text-left"
				>
					<p className="text-muted-foreground text-sm mb-2">Install Flux in Claude Code</p>
					<h3 className="text-foreground text-xl md:text-2xl font-semibold mb-6">
						{copied ? "Copied to clipboard!" : "Copy this prompt and paste it in your agent"}
					</h3>
					
					<div className="bg-card ring-border rounded-xl px-6 py-4 font-mono text-sm ring-1 relative">
						<pre className="text-muted-foreground whitespace-pre-wrap text-left">{installPrompt}</pre>
						<span className="absolute top-4 right-4 size-5">
							<Copy
								className={`absolute inset-0 size-5 text-muted-foreground transition-all duration-300 ${
									copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
								}`}
							/>
							<Check
								className={`absolute inset-0 size-5 text-emerald-500 transition-all duration-300 ${
									copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
								}`}
							/>
						</span>
					</div>
				</div>

				{/* Requirements note */}
				<p className="text-muted-foreground text-sm mt-4">
					Requires{" "}
					<a href="https://claude.ai/pro" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-muted-foreground">Claude Pro</a>
					{" "}and{" "}
					<a href="https://chatgpt.com/plus" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-muted-foreground">ChatGPT Plus</a>
					{" "}($20/mo each) for cross-model review.
				</p>

				{/* CTAs */}
				<div className="flex flex-wrap justify-center gap-4 mt-8">
					<Button asChild size="lg" variant="secondary">
						<a href="https://github.com/Nairon-AI/flux" target="_blank" rel="noopener noreferrer">
							<Github className="mr-2 h-5 w-5" />
							Star on GitHub
						</a>
					</Button>
					<Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
						<a
							href="https://discord.gg/CEQMd6fmXk"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle className="mr-2 h-5 w-5" />
							Join Discord
						</a>
					</Button>
				</div>

				{/* Philosophy quote */}
				<div className="mt-16 pt-8 border-t border-white/10">
					<blockquote className="text-muted-foreground italic text-lg">
						"Stop hoping AI makes you better. Start measuring it."
					</blockquote>
				</div>
			</div>
		</section>
	);
}
