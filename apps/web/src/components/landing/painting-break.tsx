// Full-bleed painting section — like Warp's art interludes between content blocks.
// The painting is the star — content is minimal, centered in a glass card.

interface PaintingBreakProps {
	src: string;
	quote?: string;
	attribution?: string;
	attributionRole?: string;
}

export function PaintingBreak({
	src,
	quote,
	attribution,
	attributionRole,
}: PaintingBreakProps) {
	return (
		<section className="relative h-[500px] md:h-[600px] overflow-hidden">
			{/* Full-bleed painting — barely tinted so the art is the focus */}
			<img
				src={src}
				alt=""
				className="absolute inset-0 w-full h-full object-cover"
				loading="lazy"
			/>
			{/* Subtle vignette — just enough to keep edges blending into dark bg */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(to bottom, rgba(12,12,12,0.4) 0%, rgba(12,12,12,0.15) 30%, rgba(12,12,12,0.15) 70%, rgba(12,12,12,0.4) 100%)",
				}}
			/>

			{/* Optional glass card with quote — like Warp's Yelp testimonial */}
			{quote && (
				<div className="absolute inset-0 flex items-center justify-center px-6">
					<div className="max-w-2xl w-full rounded-2xl p-8 md:p-10 text-center"
						style={{
							background: "rgba(20, 20, 18, 0.55)",
							backdropFilter: "blur(20px)",
							border: "1px solid rgba(255, 255, 255, 0.08)",
						}}
					>
						<p className="text-[#E8E4DE] text-lg md:text-xl leading-relaxed font-serif italic mb-6">
							"{quote}"
						</p>
						{attribution && (
							<div>
								<p className="text-[#E8E4DE] text-sm font-medium">
									{attribution}
								</p>
								{attributionRole && (
									<p className="text-[#A39E96] text-sm">{attributionRole}</p>
								)}
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
