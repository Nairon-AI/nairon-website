import { Quote, EyeOff } from 'lucide-react'

// Stealth logo component
const StealthLogo = () => (
    <div className="flex items-center gap-2.5">
        <div className="size-9 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#333] flex items-center justify-center">
            <EyeOff className="size-4 text-[#555]" />
        </div>
        <span className="text-[#555] font-semibold tracking-wider text-sm">STEALTH</span>
    </div>
)

export default function TestimonialsSection() {
    return (
        <section className="bg-[#0C0C0C] py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl">
                    <Quote
                        aria-hidden
                        className="size-8 text-[#C9A96E]/40"
                    />
                    <div className="mt-10">
                        <p className='text-xl md:text-3xl md:leading-[1.4] font-normal text-[#E8E4DE] before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>
                            I'm mostly a product person — not an engineer. But with Flux guiding my Claude Code sessions, I've been able to ship real features and help build a <span className="font-serif italic text-[#C9A96E]">6-figure ARR startup</span>. The workflow loops keep me from making dumb mistakes.
                        </p>

                        <div className="mt-12 flex items-center gap-6">
                            <StealthLogo />
                            <div className="border-[#333] space-y-0.5 border-l pl-6">
                                <p className="text-sm font-medium text-[#E8E4DE]">Luka Eric</p>
                                <p className="text-[#A39E96] text-xs">Co-founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
