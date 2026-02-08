const SITE_URL = "https://naironai.com";
const SITE_NAME = "Nairon AI";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoConfig {
	title: string;
	description: string;
	path: string;
	ogImage?: string;
	type?: "website" | "article";
	noindex?: boolean;
}

/**
 * Generates head() meta tags for a route, including Open Graph and Twitter Card tags.
 */
export function seoHead(config: SeoConfig) {
	const {
		title,
		description,
		path,
		ogImage = DEFAULT_OG_IMAGE,
		type = "website",
		noindex = false,
	} = config;
	const url = `${SITE_URL}${path}`;

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
			// Open Graph
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: url },
			{ property: "og:site_name", content: SITE_NAME },
			{ property: "og:type", content: type },
			{ property: "og:image", content: ogImage },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			// Twitter Card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: ogImage },
			{ name: "twitter:site", content: "@nairon__ai" },
		],
		links: [{ rel: "canonical", href: url }],
	};
}

/**
 * JSON-LD Organization schema for Nairon AI.
 */
export function organizationJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Nairon AI",
		url: SITE_URL,
		logo: `${SITE_URL}/og-image.jpg`,
		sameAs: [
			"https://www.linkedin.com/company/nairon-ai",
			"https://x.com/nairon__ai",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer support",
			url: `${SITE_URL}/contact`,
		},
	};
}

/**
 * JSON-LD WebSite schema with search action.
 */
export function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
	};
}

/**
 * JSON-LD Course schema for a program page.
 */
export function courseJsonLd(config: {
	name: string;
	description: string;
	path: string;
	provider?: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Course",
		name: config.name,
		description: config.description,
		url: `${SITE_URL}${config.path}`,
		provider: {
			"@type": "Organization",
			name: config.provider ?? SITE_NAME,
			url: SITE_URL,
		},
		courseMode: "onsite",
		locationCreated: {
			"@type": "Place",
			name: "Dubai, United Arab Emirates",
		},
	};
}

/**
 * JSON-LD FAQPage schema from an array of Q&A pairs.
 */
export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}
