import { createFileRoute } from "@tanstack/react-router";
import {
	Navbar,
	ContactHero,
	ContactSection,
	CTA,
	Footer,
} from "@/components/landing";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
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
