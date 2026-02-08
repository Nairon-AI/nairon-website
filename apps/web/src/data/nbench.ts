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
