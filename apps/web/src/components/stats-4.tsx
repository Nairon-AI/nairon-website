import { cn } from '@/lib/utils'

export default function StatsSection() {
    return (
        <section className="bg-background @container py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold lg:text-4xl">Metrics that move engineering behavior</h2>
                <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-pretty text-center text-lg">
                    Flux benchmarks the habits that separate AI-native teams from prompt-and-pray workflows.
                </p>

                <div className="relative mt-12">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

                    <div className="**:text-center bg-card *:hover:bg-foreground/2 @xl:grid-cols-3 grid grid-cols-2 divide-x border *:p-8">
                        <div className="space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl">3x</div>
                            <p className="text-muted-foreground text-sm">Higher pushback ratio in top performers</p>
                        </div>
                        <div className="@max-xl:border-0 space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl">30+</div>
                            <p className="text-muted-foreground text-sm">Curated tools mapped to friction patterns</p>
                        </div>
                        <div className="@max-xl:hidden space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl">5</div>
                            <p className="text-muted-foreground text-sm">Scoring dimensions across collaboration quality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
