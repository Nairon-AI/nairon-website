// ─── Application deadline ────────────────────────────────────────
export const APPLICATION_DEADLINE = new Date("2026-02-12T00:00:00");

// ─── Rotating hero words ─────────────────────────────────────────
export const HERO_WORDS = ["Founder", "AI Enthusiast", "1% Engineer"];

// ─── Navigation links (legacy — used by footer) ────────────────
export const NAV_LINKS = [
	{ label: "Hire", href: "/hire" },
	{ label: "Team", href: "/team" },
	{ label: "Program", href: "/program" },
	{ label: "Contact", href: "/contact" },
	{ label: "Careers", href: "/careers" },
] as const;

// ─── View-mode navigation config ────────────────────────────────
export interface NavLinkSimple {
	kind: "link";
	label: string;
	href: string;
}

export interface NavDropdownItem {
	label: string;
	href: string;
	description?: string;
	icon?: string;
}

export interface NavDropdownColumn {
	heading: string;
	items: NavDropdownItem[];
}

export interface NavDropdownCta {
	headline: string;
	description: string;
	href: string;
	buttonLabel: string;
}

export interface NavLinkDropdown {
	kind: "dropdown";
	label: string;
	columns: NavDropdownColumn[];
	cta?: NavDropdownCta;
}

export type NavItem = NavLinkSimple | NavLinkDropdown;

export interface NavConfig {
	items: NavItem[];
	cta: {
		label: string;
		href: string;
		color: "green" | "gold";
		external?: boolean;
	};
}

export function isDropdownItem(item: NavItem): item is NavLinkDropdown {
	return item.kind === "dropdown";
}

export const ENGINEER_NAV: NavConfig = {
	items: [
		{
			kind: "dropdown",
			label: "Programs",
			columns: [
				{
					heading: "Programs",
					items: [
						{
							label: "Residence",
							href: "/program",
							description: "8-week intensive AI engineering program in Dubai",
							icon: "building",
						},
						{
							label: "Apprenticeship",
							href: "/apprenticeship",
							description: "Remote apprenticeship with top AI startups",
							icon: "laptop",
						},
					],
				},
				{
					heading: "Resources",
					items: [
						{ label: "Blog", href: "/blog" },
						{ label: "FAQ", href: "/faq" },
						{ label: "Alumni", href: "/alumni" },
						{ label: "Design by Nairon", href: "/design" },
						{ label: "Podcast", href: "/podcast" },
						{ label: "Events", href: "/events" },
					],
				},
			],
			cta: {
				headline: "Join Cohort 2",
				description: "Applications close Feb 12. Limited to 20 engineers.",
				href: "https://apply.naironai.com",
				buttonLabel: "Apply Now",
			},
		},
		{ kind: "link", label: "Team", href: "/team" },
		{ kind: "link", label: "Alumni", href: "/alumni" },
		{ kind: "link", label: "Careers", href: "/careers" },
		{ kind: "link", label: "Contact", href: "/contact" },
	],
	cta: {
		label: "Apply",
		href: "https://apply.naironai.com",
		color: "green",
		external: true,
	},
};

export const HIRING_MANAGER_NAV: NavConfig = {
	items: [
		{ kind: "link", label: "Our Approach", href: "/hire" },
		{ kind: "link", label: "Pricing", href: "/pricing" },
		{ kind: "link", label: "Success Stories", href: "/success-stories" },
		{ kind: "link", label: "Team", href: "/team" },
		{ kind: "link", label: "Contact", href: "/contact" },
	],
	cta: {
		label: "Find Talent",
		href: "/find-talent",
		color: "gold",
	},
};

// ─── About section features ─────────────────────────────────────
export const FEATURES = [
	{
		icon: "https://framerusercontent.com/images/4UluxPGUnuHGRTAiDCLlXAout4.png",
		title: "They Own the Outcome",
		description:
			"Our engineers do not wait for a spec. They talk to users, find the real problem, and ship the solution.",
	},
	{
		icon: "https://framerusercontent.com/images/RQID0uOGeWqF21qgFLskUbILQ.png",
		title: "They are AI-Native",
		description:
			"While others prompt engineer, they design full AI systems. They know when to use RAG, fine-tuning, or agents, and how to make them work in production.",
	},
	{
		icon: "https://framerusercontent.com/images/kB9SzsGVhcw6S54lxC5CMmP9d5o.png",
		title: "They Think in Systems",
		description:
			"They don't just ask if something works; they ask how it scales, what it costs, and what happens when it breaks.",
	},
	{
		icon: "https://framerusercontent.com/images/vE5Nw48WnSWq4GMj8gJryzGDxWg.png",
		title: "They Communicate like CTOs",
		description:
			"They speak product, business, and engineering in one language. They can explain technical debt and architecture decisions to investors and founders.",
	},
	{
		icon: "https://framerusercontent.com/images/NT0VTDsDN6iltFr3iwAKmpltg.png",
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

// ─── Team members (for homepage section) ────────────────────────
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

// ─── Team page: Full team grid ──────────────────────────────────
export const TEAM_PAGE_MEMBERS = [
	{
		name: "Abdulrahman Abdi",
		role: "Founding AI Engineer",
		image: "https://framerusercontent.com/images/VkXk2rDNGzBySnbTZ9H4v4dMdE.jpeg",
		linkedin: "https://www.linkedin.com/in/ar-abdi",
	},
	{
		name: "Luka Eric",
		role: "CEO | Serial Founder",
		image: "https://framerusercontent.com/images/SSmGx1bjs3koY1aPdILAeuc.jpeg",
		linkedin: "https://www.linkedin.com/in/lukaeric",
	},
	{
		name: "Obaid Ur-Rahmaan",
		role: "CTO / Head of Product",
		image: "https://framerusercontent.com/images/Xse9UYp1XHtcxoFdIq5x3WbveBc.png",
		linkedin: "https://www.linkedin.com/in/obaid-ur-rahmaan-5bb29814b",
	},
	{
		name: "Special Guest",
		role: "AI Engineer",
		image: "https://framerusercontent.com/images/47jhKH0AA1f2ZNcovBPcmjTlLM.png",
		linkedin: "https://www.linkedin.com/in/jitendra-raut/",
	},
] as const;

// ─── Team page: Featured member ─────────────────────────────────
export const FEATURED_MEMBER = {
	name: "Luka Eric",
	title: "Serial Founder",
	image: "https://framerusercontent.com/images/SSmGx1bjs3koY1aPdILAeuc.jpeg",
	linkedin: "https://www.linkedin.com/in/lukaeric/",
	twitter: "https://x.com/founderLuka",
	bio: [
		"Luka Eric is the founder of Abundance AI and a consultant who has led product, marketing, and innovation work across the UAE, U.S., and Europe. He has designed and scaled ventures in AI, education, real estate, logistics, and e-commerce, partnering with both startups and established brands.",
		"Luka previously built Rhetora AI, a Techstars-backed company developing conversational AI models for call centers. His work blends strategic clarity with hands-on execution. Luka helps companies turn ideas into real products, strong funnels, and measurable growth — from product design and hiring to branding, go-to-market, and operational systems. He enjoys building alongside ambitious teams and tackling complex problems where technology, business, and creativity intersect.",
	],
	logos: [
		{ name: "Techstars", src: "https://framerusercontent.com/images/pUNtUdgSwe33FoYh1m5LpqWPnCg.png" },
		{ name: "Rhetora AI", src: "https://framerusercontent.com/images/fh0BAFiSLjGHDRpCleZIUYZsuD8.png" },
		{ name: "Question Base", src: "https://framerusercontent.com/images/gCoRIliVPUssDE4xI8Sgarcds.png" },
		{ name: "CodeGPT", src: "https://framerusercontent.com/images/Ubzltin4ACP1ExeTGTyxOMVLg4.png" },
		{ name: "Smartsy", src: "https://framerusercontent.com/images/8qMWlLSlx0NOdAKU6xzxJx8w6dk.png" },
	],
} as const;

// ─── Program phases ──────────────────────────────────────────────
export interface GuestData {
	name: string;
	role: string;
}

export interface WeekData {
	week: string;
	title: string;
	description: string;
	guest?: string;
	guestRole?: string;
	guests?: GuestData[];
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
				title: "AI-First Enterprise Development",
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
				guests: [
					{ name: "Special Guest", role: "Head of AI at Growth-Stage SaaS Company" },
					{ name: "Special Guest", role: "Research Engineer at AI Lab" },
				],
			},
			{
				week: "Week 7",
				title: "Enterprise AI & Multi-Agent Coordination",
				description:
					"You'll explore enterprise-scale systems where you architect coordinated agent teams, modernise legacy codebases, and implement production-scale AI infrastructure.",
				guest: "Special Guest",
				guestRole: "Principal Data Scientist at Unicorn Fintech",
			},
			{
				week: "Week 8",
				title: "Portfolio Polish & Hiring Partner Showcase",
				description:
					"Your final sprint, built to refine projects to production standards, demoing on the spot, and presenting to hiring partners.",
			},
		],
	},
];

// ─── Partners ────────────────────────────────────────────────────
export const PARTNERS = [
	{
		name: "Keylead",
		logo: "https://framerusercontent.com/images/8iawpdspB7oNrbkg9yVbuNsT7lU.png",
	},
	{
		name: "Question Base",
		logo: "https://framerusercontent.com/images/3yRGTa8SbDMNcHD0Z9htHa4mti0.png",
	},
	{
		name: "CodeGPT",
		logo: "https://framerusercontent.com/images/XXv1BKrLDM97th8HhgjBiFfeeUo.png",
	},
	{
		name: "NEOM",
		logo: "https://framerusercontent.com/images/7c0S1a6D6BW6O548tD40fZDqDg.png",
	},
] as const;

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

// ─── Program page: About section quote ──────────────────────────
export const PROGRAM_QUOTE = {
	text: "Talent shouldn't be decided by resumes or interviews. Give an engineer a real problem, a deadline, and you'll know who they are.",
	author: "Luka",
	role: "Founder & CEO",
	image:
		"https://framerusercontent.com/images/dJLzlQGws846Nd571RpJg07iwfo.jpeg",
} as const;

// ─── Program page: Our mission paragraphs ───────────────────────
export const PROGRAM_MISSION = [
	"Traditional hiring is broken for engineers. Mass-applying into the void, endless recruiter screens, ghosted after six interviews, assignments, then being reduced to a ticket machine inside companies that don't ship fast.",
	{
		before:
			"We built Nairon as a place where engineers earn their value in one dimension only — ",
		bold: "can you ship reliable, production AI under pressure?",
		after:
			" No resume theater, no recruiter games, no endless take-homes.",
	},
	"If you're great, you don't need to beg for opportunity. You need one intense arena that proves it.",
] as const;

// ─── Program page: Our approach bullets ─────────────────────────
export const PROGRAM_APPROACH = [
	"One intense program, engineered for failure. Not everyone makes it, and that's the point.",
	"Ship under real ambiguity and deadlines.",
	"Production before theory.",
	"Collaborative, founder-level environment — Tight rooms, daily builds, async ownership, and no hand-holding.",
] as const;

// ─── Program page: Stats ────────────────────────────────────────
export const PROGRAM_STATS = {
	duration: { value: "8", suffix: "wks", label: "Intensive Program" },
	clients: { value: "17+", label: "Happy clients worldwide" },
	partners: { value: "10+", label: "Hiring Partners" },
	cohortSize: { value: "20+", label: "Elite Engineers" },
	workType: { value: "100", suffix: "%", label: "Remote Work" },
	avatars: [
		"https://framerusercontent.com/images/SSmGx1bjs3koY1aPdILAeuc.jpeg",
		"https://framerusercontent.com/images/Xse9UYp1XHtcxoFdIq5x3WbveBc.png",
		"https://framerusercontent.com/images/VkXk2rDNGzBySnbTZ9H4v4dMdE.jpeg",
	],
} as const;

// ─── Program page: How to get in ────────────────────────────────
export const PROGRAM_STEPS = [
	{ number: "(01)", title: "Submit Application" },
	{ number: "(02)", title: "CCAT Test" },
	{ number: "(03)", title: "Hackathon Challenge" },
	{ number: "(04)", title: "Join the Cohort" },
] as const;

export const PROGRAM_REVIEW = {
	intro: "We review your ",
	boldWords: ["background", "GitHub", "projects"],
	suffix: ", and ",
	boldEnd: "motivation",
	afterBold:
		" for joining a selective AI engineering cohort.",
	criteria: [
		"Strong execution mindset",
		"Proof of building real things",
		"Curiosity and problem-solving",
	],
	responseTime: "Within 24 Hours — By real human",
} as const;

// ─── Program page: Benefit cards ────────────────────────────────
export const PROGRAM_BENEFIT_CARDS = [
	{
		tag: "The Experience",
		heading:
			"Dubai is the experience — The opportunity is Global.",
		items: [
			{ icon: "home" as const, text: "Free housing during Dubai intensive weeks" },
			{ icon: "plane" as const, text: "Flights + transportation covered" },
			{ icon: "food" as const, text: "Food + laundry service included" },
		],
	},
	{
		tag: "Premium Access",
		heading: "Unlimited Resources for Success",
		items: [
			"Unlimited API credits for training & projects",
			"Premium AI tool access",
		],
	},
	{
		tag: "Community",
		heading: "Global Network Access",
		items: [
			"Slack community of global engineers",
			"Real projects from partner companies",
			"Priority for top ranks",
		],
	},
	{
		tag: "Guaranteed",
		heading: "$100k+",
		subtext: "Minimum earning potential",
	},
] as const;

// ─── Client benefits ─────────────────────────────────────────────
export const CLIENT_BENEFITS = [
	"Priority access to top 1% engineers",
	"One-on-one talent matching calls",
	"Dedicated partnership manager",
	"100% success guarrantee",
] as const;
