import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	ContactHero,
	ContactSection,
	CTA,
	Footer,
} from "@/components/landing";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
	head: () =>
		seoHead({
			title: "Contact Us — Nairon",
			description:
				"Get in touch with Nairon. Questions about AI-native recruiting, NBench, or partnerships? We'd love to hear from you.",
			path: "/contact",
		}),
});

function ContactPage() {
	return (
		<div className="bg-[#0C0C0C] text-[#E8E4DE] min-h-screen font-inter">
			<Navbar />
			<ContactHero />
			<ContactSection />
			<CTA />
			<Footer />
		</div>
	);
}
