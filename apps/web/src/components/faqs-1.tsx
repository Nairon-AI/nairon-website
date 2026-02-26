import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqItems = [
    {
        group: 'Product',
        items: [
            {
                id: 'item-1',
                question: 'Is Flux a standalone CLI?',
                answer: 'No. Flux is a Claude Code plugin. You run slash commands like /flux:setup and /flux:improve directly inside the agent workflow.',
            },
            {
                id: 'item-2',
                question: 'What does /flux:improve actually do?',
                answer: 'It analyzes your recent sessions, detects friction patterns (for example shallow prompts or blind acceptance), and recommends the best tools/process fixes for your workflow.',
            },
            {
                id: 'item-3',
                question: 'What is the default workflow?',
                answer: 'Interview -> Plan -> Build/Work -> Review -> Improve. The workflow keeps humans in control while agents execute quickly.',
            },
        ],
    },
    {
        group: 'Security & rollout',
        items: [
            {
                id: 'item-1',
                question: 'Does session data leave the machine?',
                answer: 'Core analysis is local-first. Data is only shared when teams explicitly export or publish reports.',
            },
            {
                id: 'item-2',
                question: 'Which platforms are supported?',
                answer: 'Claude Code is first-class. The same scoring and recommendation model is being applied across Factory Droid and OpenAI Codex environments.',
            },
            {
                id: 'item-3',
                question: 'Can enterprise teams run this across multiple engineers?',
                answer: 'Yes. Enterprise mode adds observability views, capability trend tracking, and shared recommendations to standardize high-quality agent collaboration.',
            },
        ],
    },
]
export default function FAQs() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-1 md:px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="max-w-lg max-md:px-6 md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Answers for engineers and engineering leaders</p>
                        <p className="text-muted-foreground mt-6 max-md:hidden">
                            Can't find what you're looking for? Contact our{' '}
                            <a
                                href="#"
                                className="text-primary font-medium hover:underline">
                                docs and support threads
                            </a>
                        </p>
                    </div>

                    <div className="space-y-12 md:col-span-3">
                        {faqItems.map((item) => (
                            <div
                                className="space-y-4"
                                key={item.group}>
                                <h3 className="text-foreground pl-6 text-lg font-semibold">{item.group}</h3>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="-space-y-1">
                                    {item.items.map((item) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=open]:bg-card data-[state=open]:ring-border data-[state=open]:shadow-black/6.5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1">
                                            <AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">{item.question}</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-muted-foreground text-base">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-muted-foreground mt-12 px-6 md:hidden">
                    Can't find what you're looking for? Contact our{' '}
                    <a
                        href="#"
                        className="text-primary font-medium hover:underline">
                        docs and support threads
                    </a>
                </p>
            </div>
        </section>
    )
}
