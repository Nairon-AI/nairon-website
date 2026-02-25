import { useState } from "react";
import { Check, Copy, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NBenchCTA() {
	const installCommand = "/plugin marketplace add Nairon-AI/n-bench";
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(installCommand);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="bg-background relative overflow-hidden py-16 md:py-24">
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
					Install the plugin, run <code className="text-emerald-400 font-mono">/nbench:improve</code>, and see what you're missing.
				</p>

				{/* Install command */}
				<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 max-w-lg mx-auto mt-8">
					<code className="flex-1 px-4 py-2.5 font-mono text-sm text-white/80 overflow-x-auto text-left">
						{installCommand}
					</code>
					<button
						onClick={handleCopy}
						className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors shrink-0"
						aria-label="Copy install command"
					>
						{copied ? (
							<Check className="h-4 w-4 text-emerald-400" />
						) : (
							<Copy className="h-4 w-4 text-white/60" />
						)}
					</button>
				</div>

				{/* CTAs */}
				<div className="flex flex-wrap justify-center gap-4 mt-8">
					<Button size="lg" variant="secondary" disabled>
						<Github className="mr-2 h-5 w-5" />
						Closed source (private beta)
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
