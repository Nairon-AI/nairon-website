import { ImageIllustration } from "@/components/ui/illustrations/image-illustration"
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Brain, Workflow, Rocket } from 'lucide-react'

const features = [
    {
        title: 'Intent',
        description: 'Describe what you want to build. Flux interviews you to deeply understand requirements before writing a single line of code.',
        icon: <Brain className="stroke-foreground fill-violet-500/15" />,
    },
    {
        title: 'Agentic Workflow',
        description: 'Specialized agents plan, implement, and review autonomously. Each step is verified against your original intent.',
        icon: <Workflow className="stroke-foreground fill-blue-500/15" />,
    },
    {
        title: 'Shipped Feature',
        description: 'Production-ready code that matches your spec. Tests pass, types check, and the feature works exactly as described.',
        icon: <Rocket className="stroke-foreground fill-emerald-500/15" />,
    },
]

export default function HeroSection() {
    return (
        <main
                role="main"
                className="overflow-hidden">
                <section>
                    <div className="bg-background pt-32 lg:pt-44">
                        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
                            <div className="text-center">
                                <h1 className="text-foreground mx-auto text-balance text-5xl font-semibold lg:text-6xl xl:text-7xl xl:tracking-tight">
                                    The <span>Agentic SDLC</span> that ships features, not tokens
                                </h1>

                                <div className="mx-auto mb-20 mt-4 max-w-xl">
                                    <p className="text-muted-foreground mb-6 text-balance text-lg lg:text-xl">From intent to shipped feature. Flux orchestrates AI agents that understand what you want, plan the implementation, and ship production-ready code.</p>

                                    <div className="flex items-center justify-center gap-3">
                                        <div className="bg-foreground/5 ring-border-illustration rounded-lg p-1 ring-1">
                                            <Button
                                                asChild
                                                className="[--color-primary:var(--color-violet-500)]">
                                                <Link to="/flux">Get Started</Link>
                                            </Button>
                                        </div>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            className="text-muted-foreground">
                                            <a href="https://docs.flux.nairon.ai" target="_blank" rel="noopener noreferrer">Read the Docs</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ImageIllustration />
                        </div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 lg:px-12">
                        <div className="grid gap-6 pt-12 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12 lg:px-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="space-y-3">
                                    <div className="bg-card ring-border flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">{feature.icon}</div>
                                    <h2 className="text-lg font-medium">{feature.title}</h2>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
    )
}