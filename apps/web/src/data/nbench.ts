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
	title: "nbench session",
	lines: [
		"$ nb scan --project ./nairon-app --profile team",
		"",
		"NBench v0.3.1 :: Running AI-nativeness benchmark",
		"Checking architecture.................... ok",
		"Checking tooling freshness............... ok",
		"Checking prompt observability............ warn",
		"Checking eval discipline................. warn",
		"Checking token-cost control.............. ok",
		"",
		"Overall Score: 74 / 100",
		"Delta from last run: +11",
		"",
		"Suggested next action:",
		"  nb insights --focus evals --priority high",
		"",
		"    .----------------------------.",
		"   /   NBench | AI Nativeness   \\",
		"  |        __    __             |",
		"  |       / / /\\ \\ \\           |",
		"  |      / /_/  \\_\\ \\          |",
		"  |      \\___/\\___/ /           |",
		"  |          \\/_____/            |",
		"   \\   BENCHMARK. IMPROVE.     /",
		"    '----------------------------'",
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
		title: "Weekly Workflow Benchmark",
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
