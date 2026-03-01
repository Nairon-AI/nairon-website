import { GridSection, GridCell } from "./grid-system";
import { ArrowRight } from "lucide-react";

export function FluxSection() {
  return (
    <GridSection columns="1fr" border>
      <GridCell className="px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="text-[#A39E96] text-xs font-medium uppercase tracking-[0.16em]">
                Open Source Plugin
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-normal tracking-[-0.02em] text-[#E8E4DE] mb-3">
              Your AI workflow has gaps.{" "}
              <span className="font-serif italic text-[#C9A96E]">Flux</span>{" "}
              finds them.
            </h2>
            <p className="text-[#A39E96] text-sm md:text-base max-w-xl">
              Structured scoping, execution, and review for AI-augmented
              development. Analyze your sessions, detect friction patterns, and
              get recommendations that actually work.
            </p>
          </div>
          <a
            href="/flux"
            className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#D4B87A] text-[#0C0C0C] font-medium text-sm px-6 py-3 rounded-full shrink-0 transition-colors"
          >
            Learn more about Flux
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </GridCell>
    </GridSection>
  );
}
