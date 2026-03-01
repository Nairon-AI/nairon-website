import { ImageIllustration } from "@/components/ui/illustrations/image-illustration"
import { Button } from '@/components/ui/button'
import { Brain, Workflow, Rocket, Copy, Check } from 'lucide-react'
import { useState } from 'react'

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

function CopyCommand() {
    const [copied, setCopied] = useState(false)
    const command = '/plugin marketplace add Nairon-AI/flux'
    
    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    
    return (
        <button
            onClick={handleCopy}
            className="bg-card ring-border flex items-center gap-3 rounded-lg px-4 py-2.5 font-mono text-sm ring-1 transition-colors hover:bg-card/80"
        >
            <span className="text-muted-foreground">{command}</span>
            <span className="relative size-4">
                <Copy 
                    className={`absolute inset-0 size-4 text-muted-foreground transition-all duration-300 ${
                        copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    }`} 
                />
                <Check 
                    className={`absolute inset-0 size-4 text-emerald-500 transition-all duration-300 ${
                        copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`} 
                />
            </span>
        </button>
    )
}

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
                                    Stay AI-native, no matter how fast the industry evolves.
                                </h1>

                                <div className="mx-auto mb-12 mt-6 max-w-2xl">
                                    <p className="text-muted-foreground mb-8 text-balance text-lg lg:text-xl">
                                        Flux gives your team the structure to ship with AI reliably—while staying flexible enough to adopt better tools, MCPs, and optimizations the moment they drop.
                                    </p>

                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <Button
                                            variant="outline"
                                            className="text-muted-foreground"
                                        >
                                            Closed source (private beta)
                                        </Button>
                                        <Button
                                            asChild
                                        >
                                            <a href="https://docs.flux.nairon.ai/architecture" target="_blank" rel="noopener noreferrer">See architecture</a>
                                        </Button>
                                    </div>
                                    
                                    <div className="flex justify-center">
                                        <CopyCommand />
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