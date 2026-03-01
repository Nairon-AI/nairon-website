import { ImageIllustration } from "@/components/ui/illustrations/image-illustration";
import { Button } from "@/components/ui/button";
import { Anchor, Users, Eye } from "lucide-react";

const features = [
  {
    title: "Re-anchoring",
    description:
      "Every task loops back to original intent. Agents verify alignment before, during, and after execution—no silent drift.",
    icon: <Anchor className="stroke-foreground fill-violet-500/15" />,
  },
  {
    title: "Evidence-based",
    description:
      "Decisions are grounded in facts: test results, type checks, build outputs. Nothing merges without proof it works.",
    icon: <Eye className="stroke-foreground fill-blue-500/15" />,
  },
  {
    title: "Adversarial Review",
    description:
      "One model can't do it all. Multiple models critique each other's work. Catch blind spots, challenge assumptions, ship with confidence.",
    icon: <Users className="stroke-foreground fill-emerald-500/15" />,
  },
];

export default function HeroSection() {
  return (
    <main role="main" className="overflow-hidden">
      <section>
        <div className="bg-background pt-32 lg:pt-44">
          <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
            <div className="text-center">
              <h1 className="text-foreground mx-auto text-balance text-5xl font-semibold lg:text-6xl xl:text-7xl xl:tracking-tight">
                Stay AI-native, no matter how fast the industry evolves.
              </h1>

              <div className="mx-auto mb-12 mt-6 max-w-2xl">
                <p className="text-muted-foreground mb-8 text-balance text-lg lg:text-xl">
                  Flux gives your team the structure to ship with AI
                  reliably—while staying flexible enough to adopt better tools,
                  MCPs, and optimizations the moment they drop.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <Button 
                    onClick={() => document.getElementById('flux-architecture')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See architecture
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => document.getElementById('flux-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Install
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
              <div key={index} className="space-y-3">
                <div className="bg-card ring-border flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">
                  {feature.icon}
                </div>
                <h2 className="text-lg font-medium">{feature.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
