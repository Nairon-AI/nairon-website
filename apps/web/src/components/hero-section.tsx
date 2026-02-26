import { useState } from 'react'
import { ImageIllustration } from '@/components/ui/illustrations/image-illustration'
import { Button } from '@/components/ui/button'
import { TextAnimate } from '@/components/ui/text-animate'
import { Check, Copy, ShieldCheck, Sparkles, Waypoints } from 'lucide-react'

const installCommand = '/plugin marketplace add Nairon-AI/n-bench'

const highlights = [
  {
    title: 'Structured SDLC loop',
    description: 'Interview -> Plan -> Work -> Review -> Improve for disciplined AI delivery.',
    icon: <Waypoints className="stroke-foreground fill-cyan-500/15" />,
  },
  {
    title: 'Friction intelligence',
    description: 'Detects shallow prompts, blind acceptance, and context-loss patterns from sessions.',
    icon: <Sparkles className="stroke-foreground fill-emerald-500/15" />,
  },
  {
    title: 'Local-first analysis',
    description: 'Keeps workflow analysis close to engineering execution with explicit sharing controls.',
    icon: <ShieldCheck className="stroke-foreground fill-indigo-500/15" />,
  },
]

export default function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  const scrollToArchitecture = () => {
    const node = document.getElementById('nbench-architecture')
    if (!node) return
    node.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main role="main" className="overflow-hidden">
      <section>
          <div className="bg-background pt-36 lg:pt-44">
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
              <div className="text-center">
                <div className="mx-auto max-w-5xl">
                  <TextAnimate
                    as="h1"
                    by="word"
                    animation="blurInUp"
                    duration={0.45}
                    className="text-foreground text-balance text-5xl font-semibold lg:text-6xl xl:text-7xl xl:tracking-tight">
                    AI changes weekly, but your engineering system still has to ship every week.
                  </TextAnimate>
                </div>

                <div className="mx-auto mb-20 mt-4 max-w-2xl">
                  <TextAnimate
                    as="p"
                    by="word"
                    animation="blurInUp"
                    delay={0.2}
                    duration={0.35}
                    className="text-muted-foreground mb-6 text-balance text-lg lg:text-xl">
                    N-bench gives your team a structured loop to build with intent, stay aligned as tools evolve, and benchmark real AI efficiency over time.
                  </TextAnimate>

                  <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-3">
                    <Button variant="secondary" disabled>
                      <TextAnimate as="span" by="word" animation="blurIn" duration={0.25}>Closed source (private beta)</TextAnimate>
                    </Button>
                    <Button variant="outline" onClick={scrollToArchitecture}>
                      <TextAnimate as="span" by="word" animation="blurIn" duration={0.25}>See architecture</TextAnimate>
                    </Button>
                  </div>

                  <div className="bg-card ring-border mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg px-3 py-2 ring-1">
                    <TextAnimate as="code" by="word" animation="blurIn" duration={0.3} className="text-sm">{installCommand}</TextAnimate>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCopy}
                      className="h-8 px-2">
                      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
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
              {highlights.map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="bg-card ring-border flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">
                    {item.icon}
                  </div>
                  <TextAnimate as="h2" by="word" animation="blurIn" duration={0.25} className="text-lg font-medium">{item.title}</TextAnimate>
                  <TextAnimate as="p" by="word" animation="blurIn" duration={0.3} className="text-muted-foreground text-sm">{item.description}</TextAnimate>
                </div>
              ))}
            </div>
          </div>
      </section>
    </main>
  )
}
