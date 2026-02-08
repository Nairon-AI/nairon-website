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
		{ name: "NBench Analyst", role: "Model", kind: "core" },
		{ name: "Claude Code", role: "Model", kind: "recommended" },
		{ name: "GPT-5", role: "Model", kind: "fast" },
		{ name: "Gemini 2.0", role: "Model", kind: "multimodal" },
		{ name: "DeepSeek R1", role: "Model", kind: "reasoning" },
		{ name: "Llama 3.3", role: "Model", kind: "open" },
	] as const,
} as const;

export const NBENCH_FEATURE_SPLIT = {
	left: {
		title: "Self-driving benchmark operations",
		description:
			"Streamline benchmark triage, ownership, and follow-through with AI guidance for recurring team bottlenecks.",
		panelTitle: "Triage Intelligence",
		suggestions: ["alex", "Prompt Eval Gap", "CI Pipeline", "Token Alert"],
		duplicateOf: "NB-412 Eval checkpoints missing",
		relatedTo: "NB-377 Deployment baseline drift",
		popover: {
			headline: "Why this owner was suggested",
			description:
				"This teammate previously closed similar benchmark regressions across eval discipline and observability coverage.",
			alternatives: ["sam", "jules"],
			cta: "Accept suggestion",
		},
	},
	right: {
		title: "NBench MCP",
		description:
			"Connect NBench outputs to tools like Claude, Cursor, and ChatGPT so benchmark findings become next actions instantly.",
		endpoint: "//mcp.nbench.dev/sse",
		config: [
			'"mcpServers": {',
			'  "nbench": {',
			'    "command": "npx",',
			'    "args": ["-y", "@nairon/nbench-mcp"],',
			'    "env": { "NBENCH_API_KEY": "<key>" }',
			"  }",
			"}",
		],
		prompt: "Ask NBench what to improve next",
		actions: ["Attach", "Search", "Reason"],
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
			title: "Purpose-built for AI nativeness",
			copy: "Run a single benchmark that scores architecture, eval discipline, prompt observability, and token efficiency.",
			tag: "Benchmark model",
		},
		{
			title: "Designed to move fast",
			copy: "Surface the highest-impact bottlenecks in minutes and route teams directly to the next improvement step.",
			tag: "Fast diagnosis",
		},
		{
			title: "Crafted for iteration",
			copy: "Track score movement every week and build a measurable loop from insight to shipped capability.",
			tag: "Weekly delta",
		},
	],
} as const;

export const NBENCH_WHAT_WE_TRACK = {
	badge: "What we track",
	title: "Metrics that connect output to outcomes",
	description:
		"Measure both delivery impact and token efficiency so teams know where time and budget are actually spent.",
	cards: [
		{
			title: "Efficiency metrics",
			items: [
				"Tokens per feature delivered",
				"Wasted token loops",
				"Model selection efficiency",
			],
		},
		{
			title: "Delivery metrics",
			items: [
				"Cost per SDLC phase",
				"Eval discipline coverage",
				"Weekly score delta",
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
