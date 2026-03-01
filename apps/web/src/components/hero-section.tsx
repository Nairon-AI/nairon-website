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

const platforms = [
  { name: "Claude Code", shortName: "Claude", status: "primary", icon: "/icons/claude-code.png" },
  { name: "Factory Droid", shortName: "Factory", status: "supported", icon: "/icons/factory.png" },
  { name: "Codex", shortName: "Codex", status: "supported", icon: "/icons/codex.png" },
  { name: "OpenCode", shortName: "OpenCode", status: "beta", icon: "/icons/opencode.png" },
];

export default function HeroSection() {
  return (
    <main role="main" className="overflow-hidden">
      <section>
        <div className="bg-background pt-24 sm:pt-32 lg:pt-44">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <div className="text-center">
              {/* Platform pills */}
              <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {platforms.map((platform) => (
                  <span
                    key={platform.name}
                    className={`inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium ring-1 ring-inset ${
                      platform.status === "primary"
                        ? "bg-violet-500/10 text-violet-400 ring-violet-500/20"
                        : platform.status === "beta"
                          ? "bg-amber-500/10 text-amber-400 ring-amber-500/20"
                          : "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20"
                    }`}
                  >
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="size-3 sm:size-4 object-contain"
                    />
                    <span className="hidden sm:inline">{platform.shortName}</span>
                    <span className="sm:hidden">{platform.shortName}</span>
                    {platform.status === "beta" && (
                      <span className="ml-0.5 sm:ml-1 rounded bg-amber-500/20 px-1 py-0.5 text-[8px] sm:text-[10px] uppercase tracking-wide">
                        exp
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <h1 className="text-foreground mx-auto text-balance text-3xl sm:text-4xl md:text-5xl font-semibold lg:text-6xl xl:text-7xl xl:tracking-tight">
                Stay AI-native, no matter how fast the industry evolves.
              </h1>

              <div className="mx-auto mb-8 sm:mb-12 mt-4 sm:mt-6 max-w-2xl">
                <p className="text-muted-foreground mb-6 sm:mb-8 text-balance text-base sm:text-lg lg:text-xl px-2 sm:px-0">
                  Flux is the missing Claude Code plugin that gives you the
                  structure to ship with AI{" "}
                  <span className="relative inline-block text-emerald-400">
                    reliably
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-emerald-400/60" />
                  </span>
                  —while staying flexible enough to adopt better tools, MCPs,
                  and optimizations the moment they drop.
                </p>

                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Button
                    size="sm"
                    className="sm:size-default"
                    onClick={() =>
                      document
                        .getElementById("flux-architecture")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    See architecture
                  </Button>
                  <Button
                    size="sm"
                    className="sm:size-default"
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("flux-cta")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Install
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-0">
            <ImageIllustration />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24 lg:px-12">
          <div className="grid gap-6 pt-8 sm:pt-12 text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 lg:px-12">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div className="bg-card ring-border flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">
                  {feature.icon}
                </div>
                <h2 className="text-base sm:text-lg font-medium">{feature.title}</h2>
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
