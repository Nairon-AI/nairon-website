import { Bot, ClipboardList, Gauge, GitCompareArrows, Hammer, SearchCode } from 'lucide-react'

const steps = [
    {
        id: '01',
        title: 'Interview',
        description: 'Clarify requirements, constraints, and edge-cases before implementation starts.',
        icon: ClipboardList,
    },
    {
        id: '02',
        title: 'Plan',
        description: 'Break work into executable tasks with explicit quality and verification checkpoints.',
        icon: GitCompareArrows,
    },
    {
        id: '03',
        title: 'Work',
        description: 'Ship in tight loops while keeping context, tool selection, and diffs intentional.',
        icon: Hammer,
    },
    {
        id: '04',
        title: 'Review',
        description: 'Validate outputs with tests, pushback, and specification checks before merging.',
        icon: SearchCode,
    },
    {
        id: '05',
        title: 'Improve',
        description: 'Run /flux:improve to detect friction patterns and install recommendation upgrades.',
        icon: ClipboardList,
    },
]

const snapshots = [
    {
        title: 'Intent Layer',
        subtitle: 'Clarify system goals before tasks',
        lines: ['Goal: Multi-agent release workflow', 'Constraints: test gates + rollback plan', 'Success: stable deploy with score increase'],
        metric: 'Clarity +31%',
    },
    {
        title: 'Orchestration Layer',
        subtitle: 'Coordinate agents with explicit roles',
        lines: ['Planner -> Executor -> Verifier', 'Parallel research + focused implementation', 'Structured checkpoints per phase'],
        metric: 'Cycle time -24%',
    },
    {
        title: 'Observability Layer',
        subtitle: 'Measure collaboration quality',
        lines: ['Track pushback and edge-case depth', 'Detect context-loss and rework loops', 'Recommend tool/process upgrades'],
        metric: 'Score 52 -> 78',
    },
]

export default function FeaturesSection() {
    return (
        <section className="bg-background @container py-16 md:py-24 lg:py-32">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="mb-10 max-w-2xl">
                    <h2 className="text-3xl font-semibold lg:text-4xl">How Flux fits your delivery loop</h2>
                    <p className="text-muted-foreground mt-4 text-lg">A process-first workflow that keeps engineers in sync while AI agents execute quickly.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-5">
                    {steps.map((step) => {
                        const Icon = step.icon
                        return (
                            <article
                                key={step.id}
                                className="bg-card ring-border rounded-2xl p-5 ring-1">
                                <p className="text-muted-foreground font-mono text-xs">{step.id}</p>
                                <Icon className="text-muted-foreground mt-4 size-4" />
                                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground mt-2 text-sm">{step.description}</p>
                            </article>
                        )
                    })}
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {snapshots.map((snapshot) => (
                        <IllustrationPerspective key={snapshot.title}>
                            <div className="bg-background ring-border space-y-3 rounded-xl p-4 ring-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium">{snapshot.title}</span>
                                    <Bot className="text-muted-foreground size-3.5" />
                                </div>
                                <p className="text-muted-foreground text-xs">{snapshot.subtitle}</p>
                                <div className="space-y-1.5">
                                    {snapshot.lines.map((line) => (
                                        <div
                                            key={line}
                                            className="text-muted-foreground/90 border-border/70 rounded-md border px-2 py-1 text-[11px]">
                                            {line}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 border-t pt-2">
                                    <Gauge className="text-primary size-3.5" />
                                    <span className="text-xs font-medium">{snapshot.metric}</span>
                                </div>
                            </div>
                        </IllustrationPerspective>
                    ))}
                </div>
            </div>
        </section>
    )
}

const IllustrationPerspective = ({ children }: { children: React.ReactNode }) => (
    <div className="perspective-dramatic bg-card mask-radial-from-70% mask-radial-at-top-left mask-radial-[100%_100%] rounded-2xl border p-3">
        <div className="rotate-y-3 -skew-y-2">{children}</div>
    </div>
)
