// ─── Application deadline ────────────────────────────────────────
export const APPLICATION_DEADLINE = new Date("2026-02-12T00:00:00");

// ─── Rotating hero words ─────────────────────────────────────────
export const HERO_WORDS = ["Founder", "AI Enthusiast", "1% Engineer"];

// ─── Navigation links ────────────────────────────────────────────
export const NAV_LINKS = [
	{ label: "Hire", href: "/hire" },
	{ label: "Team", href: "/team" },
	{ label: "Program", href: "/program" },
	{ label: "Contact", href: "/contact" },
	{ label: "Careers", href: "/careers" },
] as const;

// ─── About section features ─────────────────────────────────────
export const FEATURES = [
	{
		iconName: "check" as const,
		title: "They Own the Outcome",
		description:
			"Our engineers do not wait for a spec. They talk to users, find the real problem, and ship the solution.",
	},
	{
		iconName: "brain" as const,
		title: "They are AI-Native",
		description:
			"While others prompt engineer, they design full AI systems. They know when to use RAG, fine-tuning, or agents, and how to make them work in production.",
	},
	{
		iconName: "cog" as const,
		title: "They Think in Systems",
		description:
			"They don't just ask if something works; they ask how it scales, what it costs, and what happens when it breaks.",
	},
	{
		iconName: "message" as const,
		title: "They Communicate like CTOs",
		description:
			"They speak product, business, and engineering in one language. They can explain technical debt and architecture decisions to investors and founders.",
	},
	{
		iconName: "zap" as const,
		title: "They Deliver Under Pressure",
		description:
			"Real founders. Real deadlines. Real consequences. After 8 weeks of shipping under these conditions, your startup's pace will not faze them.",
	},
] as const;

// ─── Requirements ────────────────────────────────────────────────
export const REQUIREMENTS = [
	{ iconName: "code" as const, text: "3+ years of software engineering experience" },
	{ iconName: "brain" as const, text: "95th percentile or higher on the CCAT" },
	{ iconName: "award" as const, text: "Win a Hackathon" },
	{ iconName: "mic" as const, text: "Strong written and verbal communication skills" },
] as const;

// ─── Team members ────────────────────────────────────────────────
export const TEAM_MEMBERS = [
	{
		name: "Luka Erić",
		role: "CEO",
		image: "https://framerusercontent.com/images/SSmGx1bjs3koY1aPdILAeuc.jpeg",
		linkedin: "https://www.linkedin.com/in/lukaeric/",
	},
	{
		name: "Obaid Ur-Rahmaan",
		role: "CTO / Head of Product",
		image: "https://framerusercontent.com/images/Xse9UYp1XHtcxoFdIq5x3WbveBc.png",
		linkedin: "https://www.linkedin.com/in/obaid-ur-rahmaan-5bb29814b/",
	},
	{
		name: "Abdulrahman Abdi",
		role: "Serial Founding Engineer / Advisor",
		image: "https://framerusercontent.com/images/VkXk2rDNGzBySnbTZ9H4v4dMdE.jpeg",
		linkedin: "https://www.linkedin.com/in/ar-abdi/",
	},
];

// ─── Program phases ──────────────────────────────────────────────
export interface WeekData {
	week: string;
	title: string;
	description: string;
	guest?: string;
	guestRole?: string;
}

export interface PhaseData {
	phase: string;
	title: string;
	gradient: string;
	weeks: WeekData[];
}

export const PROGRAM_PHASES: PhaseData[] = [
	{
		phase: "Phase 1",
		title: "Remote Evaluation",
		gradient: "phase-gradient-1",
		weeks: [
			{
				week: "Week 1",
				title: "48-Hour Web App Hackathon + Full-Week Engineering Challenges",
				description:
					"Ship a production-ready web application with an integrated AI feature. You'll kick off with a competitive 48-hour hackathon, then spend the remainder of the week improving architecture, debugging, adding new feature requests, and polishing your demo for final evaluation. Top engineers advance.",
			},
			{
				week: "Week 2",
				title: "72-Hour Mobile AI App Hackathon + Full-Week Product Work",
				description:
					"Build a complete mobile application with integrated AI in 72 hours, then continue the week with code reviews, performance upgrades, added feature requests, and stakeholder-style feedback. The highest-performing engineers secure a direct invite to the on-site Dubai intensive.",
				guest: "Special Guest",
				guestRole: "Head of Product at Series C AI Startup",
			},
		],
	},
	{
		phase: "Phase 2",
		title: "On-Site Dubai Intensive",
		gradient: "phase-gradient-2",
		weeks: [
			{
				week: "Week 3",
				title: "Developer Tooling & AI-First Startup Workshop",
				description:
					"Your introduction to AI-First engineering where you'll master cutting-edge Developer tooling, establish optimal workflows, and build enterprise-grade applications at accelerated speeds.",
			},
			{
				week: "Week 4",
				title: "Advanced RAG, Agent Systems & Observability",
				description:
					"You'll build a production web application with embedded RAG and Agents, mastering agent workflows, evaluation frameworks, and monitoring systems for production reliability.",
				guest: "Guest mentor",
				guestRole: "Staff ML Engineer at Unicorn Startup",
			},
			{
				week: "Week 5",
				title: "Fine-Tuning and Custom Models",
				description:
					"Your focus shifts to custom model development and real-world validation as you launch public projects, acquire users, and iterate based on market feedback.",
				guest: "Guest mentor",
				guestRole: "ML Engineer at Hugging Face",
			},
		],
	},
	{
		phase: "Phase 3",
		title: "Partner Intros",
		gradient: "phase-gradient-3",
		weeks: [
			{
				week: "Week 6",
				title: "Hiring Partner Projects Sprint",
				description:
					"Real-world client briefs test your professional delivery capabilities as you build production MVPs under enterprise constraints demonstrating your adaptability and stakeholder communication skills.",
				guest: "Special Guest",
				guestRole: "Head of AI at Growth-Stage SaaS Company",
			},
			{
				week: "Week 7",
				title: "Interview Preparation & Technical Portfolio Sprint",
				description:
					"Intensive preparation combining mock technical interviews, system design sessions, and portfolio refinement as you prepare to demonstrate your capabilities to our partner companies.",
			},
			{
				week: "Week 8",
				title: "Demo Day & Graduation",
				description:
					"Final pass on your portfolio and demo. Refine your case studies, clean up repos, and rehearse how you present your work to founders and hiring partners.",
			},
		],
	},
];

// ─── Partners ────────────────────────────────────────────────────
export const PARTNERS = ["Keylead", "Question Base", "CodeGPT", "NEOM"] as const;

// ─── FAQ items ───────────────────────────────────────────────────
export const FAQ_ITEMS = [
	{
		question: "Who is the program for?",
		answer:
			"Developers with 1–3+ years of experience who want to break into AI engineering. You should be a strong builder who can handle intensity: 12-hour days, 6 days a week, for 8 weeks.",
	},
	{
		question: "What makes Nairon different from a coding bootcamp?",
		answer:
			"We don't teach you to code. We take experienced engineers and train them to build production AI systems under real startup pressure. Think of it as an elite finishing school for engineers who already know how to build.",
	},
	{
		question: "What are the eligibility requirements?",
		answer:
			"3+ years of software engineering experience, 95th percentile or higher on the CCAT, strong written and verbal communication skills, and a hackathon win or equivalent demonstration of building under pressure.",
	},
	{
		question: "What does the program include?",
		answer:
			"8 weeks of intensive AI engineering training, direct access to our mentor network, full relocation to Dubai, and guaranteed hiring positions at leading AI startups.",
	},
	{
		question: "Is there a cost to join?",
		answer:
			"No. The program is completely free for engineers. We make money when our hiring partners hire you.",
	},
	{
		question: "What is the selection process like?",
		answer:
			"After applying, you'll go through a multi-stage evaluation including a cognitive assessment, technical interview, and a timed hackathon challenge. We accept fewer than 2% of applicants.",
	},
] as const;

// ─── Footer links ────────────────────────────────────────────────
export const FOOTER_LINKS = [
	{ label: "Hire", href: "/hire" },
	{ label: "Team", href: "/team" },
	{ label: "Program", href: "/program" },
	{ label: "Careers", href: "/careers" },
	{ label: "Contact", href: "/contact" },
	{ label: "Blog", href: "/blog" },
] as const;

// ─── Engineer benefits ───────────────────────────────────────────
export const ENGINEER_BENEFITS = [
	"8 Weeks free AI engineering training",
	"Direct access to our mentor network",
	"Full Relocation to Dubai",
	"Guaranteed hiring positions at leading AI Startups",
] as const;

// ─── Client benefits ─────────────────────────────────────────────
export const CLIENT_BENEFITS = [
	"Priority access to top 1% engineers",
	"One-on-one talent matching calls",
	"Dedicated partnership manager",
	"100% success guarantee",
] as const;
