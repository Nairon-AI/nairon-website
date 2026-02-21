import { ArrowUpRight } from "lucide-react";

export function AudienceSplit() {
	return (
		<section className="py-24 md:py-32 bg-[#0C0C0C]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Eyebrow */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
					<span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
						Who we serve
					</span>
				</div>

				<h2 className="text-4xl md:text-[48px] md:leading-[57.6px] font-normal tracking-[-0.48px] text-[#E8E4DE] max-w-3xl mb-16">
					Two paths,{" "}
					<span className="text-[#E8E4DE]/55">one mission</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* For Companies */}
					<div className="glass-card rounded-2xl p-8 md:p-10 group hover:bg-white/[0.05] transition-colors">
						<span className="text-[#C9A96E] text-xs font-medium uppercase tracking-[0.16em]">
							For Companies
						</span>
						<h3 className="text-2xl md:text-3xl font-normal text-[#E8E4DE] mt-4 mb-4">
							Hire a technical leader who ships
						</h3>
						<p className="text-[#A39E96] text-base leading-relaxed mb-8">
							Stop gambling on resumes. We benchmark every CTO candidate
							on real-world AI-nativeness, architecture quality, and team
							leadership — so you hire with confidence.
						</p>
						<ul className="space-y-3 mb-8">
							{[
								"NBench-scored candidate shortlist",
								"Culture & leadership style matching",
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
					</div>

					{/* For Candidates */}
					<div className="glass-card rounded-2xl p-8 md:p-10 group hover:bg-white/[0.05] transition-colors">
						<span className="text-[#C9A96E] text-xs font-medium uppercase tracking-[0.16em]">
							For Candidates
						</span>
						<h3 className="text-2xl md:text-3xl font-normal text-[#E8E4DE] mt-4 mb-4">
							Land your next CTO role
						</h3>
						<p className="text-[#A39E96] text-base leading-relaxed mb-8">
							Join our network of technical leaders. Get benchmark-scored,
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
					</div>
				</div>
			</div>
		</section>
	);
}
