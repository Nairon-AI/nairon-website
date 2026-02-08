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
			title: "Contact Us — Nairon AI",
			description:
				"Get in touch with Nairon AI. Questions about our AI bootcamp, hiring, or partnerships? We'd love to hear from you.",
			path: "/contact",
		}),
});

function ContactPage() {
	return (
		<div className="bg-black text-white min-h-screen font-urbanist">
			<Navbar />
			<ContactHero />
			<ContactSection />
			<CTA />
			<Footer />
		</div>
	);
}
