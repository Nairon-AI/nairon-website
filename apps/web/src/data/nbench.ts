export const NBENCH_HERO = {
	badge: "NBench CLI - AI Nativeness Benchmark",
	headline:
		"NBench is a purpose-built tool for planning and building AI-native engineers",
	description:
		"Benchmark your AI stack, spot weak points, and track progress weekly.",
	placeholder: "you@company.com",
	cta: "Join Waitlist",
	note: "Private beta for product and engineering teams.",
} as const;

export const NBENCH_HERO_TERMINAL = {
	title: "terminal - my-startup-app",
	lines: [
		"$ nb scan",
		"",
		"[1/4] Analyzing git history...",
		"    Found 847 AI-assisted commits",
		"",
		"[2/4] Scanning session logs...",
		"    ! 12 compactions with context loss",
		"",
		"[3/4] Detecting frustration patterns...",
		"    x 8 sessions with repeated corrections",
		"",
		"[4/4] Checking MCP tooling...",
		"    x No docs server configured",
		"",
		"Your Score: 41/100 (Bottom 62%)",
		"",
		"Recommended fixes:",
		"  1. Context7 -> stops API hallucinations",
		"  2. Supermemory -> remembers test commands",
		"  3. Beads -> survives compaction",
		"",
		"Install these optimizations? [Y/n]",
		"> y",
		"",
		"Installing Context7 MCP...",
		"  + Live docs for Stripe, Convex, etc.",
		"Installing Supermemory...",
		"  + Persistent project memory",
		"Installing Beads...",
		"  + Compaction-safe task tracking",
		"",
		"+ Setup complete! Score: 41 -> 88",
		"",
		"$ claude",
		"  cwd: ~/dev/my-saas-app",
		"",
		"> Add Stripe webhook for subscription events",
		"",
		"  Fetching Stripe webhook docs...",
		"",
		"Creating handler with constructEvent()",
		"for customer.subscription.* events.",
		"",
		"  Write src/api/stripe-webhook.ts",
		"  Running bun test (from memory)",
		"",
		"+ Done. Tests passing.",
		"",
		"One-shot. No hallucinations.",
		"Context preserved.",
	],
} as const;

export const NBENCH_HERO_TERMINAL_BEFORE = {
	title: "claude - my-startup-app",
	lines: [
		"$ claude",
		"",
		"> its constructEvent not verify. do u",
		"> even have the stripe docs?",
		"⚠ Auto-compacting conversation...",
		"  Summarizing context...",
		"I'm ready to help! What would you like",
		"to work on today?",
		"",
	],
} as const;

export const NBENCH_MODELS = {
	badge: "AI benchmark orchestration",
	title: "AI-assisted benchmark operations",
	description:
		"Route scoring, diagnosis, and remediation work to the right model so your team can move from findings to fixes without losing context.",
	cta: "Explore model playbooks",
	placeholder: "Delegate benchmark run...",
	rows: [
		{ name: "Kimi K2.5", role: "Model", kind: "fast" },
		{ name: "Claude Sonnet 4.5", role: "Model", kind: "recommended" },
		{ name: "GPT-5", role: "Model", kind: "reasoning" },
		{ name: "Gemini 2.5 Flash", role: "Model", kind: "multimodal" },
		{ name: "DeepSeek V3.2", role: "Model", kind: "open" },
		{ name: "OpenCode", role: "Model", kind: "fast" },
	] as const,
} as const;

export const NBENCH_FEATURE_SPLIT = {
	left: {
		title: "Benchmark Your Weekly Workflow",
		description:
			"Measure requirements, implementation, testing, and review in one score. Get 3 concrete actions to improve this week.",
		panelTitle: "Benchmark Signals",
		suggestions: ["Requirements", "Implementation", "Testing", "Review"],
		duplicateOf: "Your score: 76/100 (Top 22%)",
		relatedTo: "Friction detected: context reload loops",
		popover: {
			headline: "Actions this week",
			description:
				"Run the two highest-impact fixes first, then rerun nb scan to validate score lift.",
			alternatives: ["stagehand-ai", "api-error-handling"],
			commands: [
				"nb tools setup stagehand-ai",
				"nb skills install api-error-handling",
			],
		},
		cta: "Apply 3 recommendations",
	},
	right: {
		title: "Token Efficiency Intelligence",
		description:
			"See cost per feature, wasted tokens, and model misuse before budget burn becomes normal.",
		dashboard: {
			score: { value: 76, max: 100, percentile: "Top 22%" },
			tokenEfficiency: {
				multiplier: "1.12x",
				note: "12% more efficient than avg",
			},
			categories: [
				{ name: "Requirements", score: 82, percentile: "Top 15%" },
				{ name: "Planning", score: 71, percentile: "Top 35%" },
				{ name: "Implementation", score: 84, percentile: "Top 10%" },
				{ name: "Testing", score: 63, percentile: "Top 48%" },
				{ name: "Review", score: 72, percentile: "Top 30%" },
			],
			footer: { tokens: "1.8M", waste: "12%", cost: "~$47" },
		},
	},
} as const;

export const NBENCH_SOCIAL_PROOF = {
	lead:
		"Powering AI readiness programs for modern engineering teams. From startup squads to global product organizations.",
	cta: "See benchmark outcomes",
	companies: [
		"Anthropic",
		"OpenAI",
		"Cursor",
		"Vercel",
		"Perplexity",
		"Replit",
		"Ramp",
		"Scale",
	],
} as const;

export const NBENCH_CAPABILITIES = {
	title: "Made for the modern engineer",
	description:
		"NBench reflects the standards that separate AI-native builders from teams that are still experimenting. Audit architecture, score execution quality, and lock in a weekly improvement cadence.",
	cards: [
		{
			title: "Measure real baseline",
			copy: "Benchmark your workflow across planning, coding, testing, and review so you know where performance actually stands.",
			tag: "Benchmark model",
		},
		{
			title: "Improve every week",
			copy: "Get practical, prioritized fixes you can apply immediately and track measurable gains sprint after sprint.",
			tag: "Fast diagnosis",
		},
		{
			title: "Control token spend",
			copy: "Find waste across prompts, context strategy, and model usage to reduce cost without slowing delivery.",
			tag: "Weekly delta",
		},
	],
} as const;

export const NBENCH_WHAT_WE_TRACK = {
	badge: "What we track",
	title: "Metrics that connect output to outcomes",
	description:
		"Score how users provide context, write prompts, and execute workflows so improvements are actionable week to week.",
	cards: [
		{
			title: "Context and prompting quality",
			items: [
				"Context relevance score",
				"Prompt clarity and specificity",
				"Instruction structure quality",
			],
		},
		{
			title: "Workflow improvement metrics",
			items: [
				"First-pass success rate",
				"Retry and rework reduction",
				"Recommendation adoption rate",
			],
		},
	],
} as const;

export const NBENCH_SHAREABLE_REPORTS = {
	badge: "Shareable reports",
	title: "Show off your AI workflow. Share your setup.",
	description:
		"Generate beautiful reports that showcase your effectiveness, tools, MCPs, and skills. Perfect for hackathon submissions, portfolios, or team retrospectives.",
	url: "nairon-bench.pages.dev/report/88yadbbqhl",
	report: {
		title: "nairon-bench",
		agent: "OpenCode",
		score: "60",
		maxScore: "100",
		grade: "Grade C",
		stats: [
			{ label: "Sessions", value: "25" },
			{ label: "Prompts", value: "447" },
			{ label: "Commits", value: "18" },
			{ label: "Tokens", value: "1.2M" },
		],
		metrics: [
			{ label: "SDLC Coverage", value: 55, tone: "bg-[#2e74d6]" },
			{ label: "Prompt Quality", value: 58, tone: "bg-[#1f9b55]" },
			{ label: "Tool Utilization", value: 69, tone: "bg-[#6e40bf]" },
			{ label: "Efficiency", value: 60, tone: "bg-[#bd6a0f]" },
		],
		mcp: ["context7", "supermemory", "nia", "browser"],
		skills: ["openui", "remotion", "release-cli"],
	},
	features: [
		{
			title: "Comprehensive Scoring",
			description:
				"Get scored across SDLC coverage, prompt quality, tool utilization, and efficiency. Know exactly where you stand.",
		},
		{
			title: "Share Your Setup",
			description:
				"Showcase your MCP servers, skills, and tools. Let others discover what works for you.",
		},
		{
			title: "Actionable Insights",
			description:
				"Get personalized recommendations based on your workflow patterns and friction points.",
		},
		{
			title: "Hackathon Ready",
			description:
				"Generate shareable links for hackathon submissions. Prove your AI-nativeness with data.",
		},
	],
	commandLabel: "Generate your report in seconds",
	command: "nb report --publish",
	cta: "View Example Report",
} as const;

export const NBENCH_TRUST_PLACEHOLDER = {
	badge: "Trust and security",
	title: "Built for teams that need control",
	description:
		"Placeholder section for local-first processing, explicit sharing controls, and enterprise-ready safeguards.",
	rows: [
		{
			title: "Local-first analysis",
			copy: "Benchmark data is computed locally before any optional sync or sharing.",
		},
		{
			title: "Privacy controls",
			copy: "Teams decide what gets shared and exported, with clear auditability.",
		},
		{
			title: "Team-ready foundation",
			copy: "Structured for governance, repeatability, and scale across engineering orgs.",
		},
	],
} as const;

export const NBENCH_CTA_PLACEHOLDER = {
	badge: "Ready to benchmark",
	title: "Start your first benchmark run",
	description:
		"Placeholder CTA section for install and waitlist actions.",
	primary: "Install NBench",
	secondary: "Join waitlist",
} as const;
