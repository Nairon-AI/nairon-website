import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems: {
  group: string;
  items: { id: string; question: string; answer: ReactNode }[];
}[] = [
  {
    group: "Product",
    items: [
      {
        id: "item-1",
        question: "Is Flux a standalone CLI?",
        answer:
          "No. Flux is a Claude Code plugin. You run slash commands like /flux:setup and /flux:improve directly inside the agent workflow.",
      },
      {
        id: "item-2",
        question: "What does /flux:improve actually do?",
        answer:
          "It analyzes your recent sessions, detects friction patterns (for example shallow prompts or blind acceptance), and recommends the best tools/process fixes for your workflow.",
      },
      {
        id: "item-3",
        question: "What is the default workflow?",
        answer:
          "Scope -> Interview -> Plan -> Build/Work -> Review -> Improve. The workflow keeps humans in control while agents execute quickly.",
      },
    ],
  },
  {
    group: "Security & rollout",
    items: [
      {
        id: "item-1",
        question: "Does session data leave the machine?",
        answer:
          "Core analysis is local-first. Data is only shared when teams explicitly export or publish reports.",
      },
      {
        id: "item-2",
        question: "Which agents are supported?",
        answer: (
          <>
            Claude Code is first-class, but it works in Factory Droid and OpenAI's Codex agent. The{" "}
            <a
              href="https://github.com/Nairon-AI/flux-opencode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] underline underline-offset-2 hover:text-[#E8E4DE]"
            >
              OpenCode port
            </a>{" "}
            is currently experimental.
          </>
        ),
      },
      {
        id: "item-3",
        question: "Can enterprise teams run this across multiple engineers?",
        answer:
          "Coming soon. Enterprise mode will add observability dashboards, team-wide capability tracking, and shared recommendations to help standardize high-quality agent collaboration across your org.",
      },
      {
        id: "item-4",
        question: "When is the Observability Layer launching?",
        answer:
          "We're actively building it. Join the waitlist above to get early access when it's ready. The CLI Runtime and Recommendation Engine are available now.",
      },
    ],
  },
];
export default function FAQs() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-1 md:px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="max-w-lg max-md:px-6 md:col-span-2">
            <h2 className="text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] font-normal tracking-[-1px] text-[#E8E4DE]"><span className="font-serif italic text-[#C9A96E]">FAQs</span></h2>
            <p className="text-[#A39E96] mt-4 text-balance text-lg">
              Answers for engineers and engineering leaders
            </p>
          </div>

          <div className="space-y-12 md:col-span-3">
            {faqItems.map((item) => (
              <div className="space-y-4" key={item.group}>
                <h3 className="text-[#E8E4DE] pl-6 text-lg font-medium">
                  {item.group}
                </h3>
                <Accordion type="single" collapsible className="-space-y-1">
                  {item.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="data-[state=open]:bg-card data-[state=open]:ring-border data-[state=open]:shadow-black/6.5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1"
                    >
                      <AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-[#A39E96] text-base">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
