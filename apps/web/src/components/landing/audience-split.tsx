import { ArrowUpRight } from "lucide-react";
import { GridSection, GridCell, CornerNotches } from "./grid-system";

export function AudienceSplit() {
	return (
		<div>
			{/* Heading row */}
			<GridSection columns="1fr" border>
				<GridCell className="px-12 pt-12 pb-10">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
						<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
							Who we serve
						</span>
					</div>
					<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl">
						Two paths,{" "}
						<span className="text-[#E8E4DE]/55">one mission</span>
					</h2>
				</GridCell>
			</GridSection>

			{/* Two cards side by side with divider */}
			<GridSection columns="1fr 1fr" border>
				{/* For Companies */}
				<GridCell borderRight className="p-10 md:p-12">
					<CornerNotches size={12} />
					<span className="text-[#C9A96E] text-xs font-medium uppercase tracking-[0.16em]">
						For Companies
					</span>
					<h3 className="text-2xl md:text-3xl font-normal text-[#E8E4DE] mt-4 mb-4">
						Hire AI-native engineers who build
					</h3>
					<p className="text-[#A39E96] text-base leading-relaxed mb-8">
						Stop gambling on resumes. We benchmark every candidate
						on real-world AI-nativeness, architecture quality, and
						engineering velocity — so you hire with confidence.
					</p>
					<ul className="space-y-3 mb-8">
						{[
							"NBench-scored candidate shortlist",
							"Culture & team-fit matching",
							"90-day placement guarantee",
						].map((item) => (
							<li key={item} className="flex items-start gap-3">
								<div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2.5 shrink-0" />
								<span className="text-[#A39E96] text-sm">{item}</span>
							</li>
						))}
					</ul>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8944F] text-[#0C0C0C] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
					>
						Start hiring
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
				</GridCell>

				{/* For Candidates */}
				<GridCell className="p-10 md:p-12">
					<CornerNotches size={12} />
					<span className="text-[#C9A96E] text-xs font-medium uppercase tracking-[0.16em]">
						For Candidates
					</span>
					<h3 className="text-2xl md:text-3xl font-normal text-[#E8E4DE] mt-4 mb-4">
						Land your next AI-native role
					</h3>
					<p className="text-[#A39E96] text-base leading-relaxed mb-8">
						Join our network of AI-native engineers. Get benchmark-scored,
						matched with the right companies, and skip the noise of
						traditional job boards.
					</p>
					<ul className="space-y-3 mb-8">
						{[
							"Free NBench assessment & score",
							"Matched to companies that fit your style",
							"Confidential process, always",
						].map((item) => (
							<li key={item} className="flex items-start gap-3">
								<div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2.5 shrink-0" />
								<span className="text-[#A39E96] text-sm">{item}</span>
							</li>
						))}
					</ul>
					<a
						href="/candidates"
						className="inline-flex items-center gap-2 border border-white/10 text-[#E8E4DE] font-medium text-sm px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors"
					>
						Join the network
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
				</GridCell>
			</GridSection>
		</div>
	);
}
