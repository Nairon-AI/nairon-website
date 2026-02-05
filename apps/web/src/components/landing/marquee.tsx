export function Marquee() {
	return (
		<section className="py-2.5 bg-black overflow-hidden">
			<div className="animate-marquee flex whitespace-nowrap">
				{[1, 2, 3].map((i) => (
					<span
						key={i}
						className="text-[102px] font-urbanist font-semibold text-[#ededed] whitespace-pre"
						style={{ letterSpacing: "-7.14px", lineHeight: "1.7" }}
					>
						Innovation. Obsession. Discipline. Intelligence. Passion.{" "}
					</span>
				))}
			</div>
		</section>
	);
}
