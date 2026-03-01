import { WorkflowDiagram } from './workflow-diagram'

export const ImageIllustration = () => {
    return (
        <>
            <div className="max-lg:hidden">
                <div className="relative [--color-border-illustration:--alpha(var(--color-foreground)/12.5%)] [--color-border:--alpha(var(--color-foreground)/10%)]">
                    <div className="mask-t-from-65% mask-t-to-85% absolute inset-0">
                        <img
                            src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757918054/16-bg_kkevzx.webp"
                            alt="tailark hero section background"
                            className="opacity-7.5 dark:opacity-2.5 size-full -scale-100 object-bottom"
                            loading="lazy"
                        />
                    </div>
                    <div className="border-b">
                        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl py-16 lg:px-8">
                            {/* Background circuit patterns - top left */}
                            <div className="absolute left-8 top-8">
                                <div className="**:rounded-full flex w-28 flex-wrap gap-1 rounded border p-4 opacity-50">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="size-3 border p-0.5">
                                            <div className="bg-linear-to-b to-card/50 size-full rounded-full border"></div>
                                        </div>
                                    ))}
                                    <span className="w-full pt-4 font-mono text-[9px] uppercase">Intent first.</span>
                                </div>
                            </div>
                            
                            {/* Background circuit patterns - top right */}
                            <div className="absolute right-8 top-8">
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-xl border p-2 opacity-50">
                                    <div className="bg-linear-to-b to-card/75 ring-border size-10 rounded-lg ring-1"></div>
                                    <div className="bg-linear-to-b to-card/75 ring-border size-10 rounded-lg ring-1"></div>
                                    <div className="bg-linear-to-b to-card/75 ring-border size-10 rounded-lg ring-1"></div>
                                    <div className="bg-linear-to-b to-card/75 ring-border size-10 rounded-lg ring-1"></div>
                                </div>
                            </div>
                            
                            {/* Background circuit patterns - bottom left */}
                            <div className="absolute bottom-8 left-8">
                                <div className="h-24 w-28 bg-[repeating-linear-gradient(45deg,var(--color-border-illustration),var(--color-border-illustration)_1px,transparent_1px,transparent_6px)] opacity-50"></div>
                            </div>
                            
                            {/* Background circuit patterns - bottom right */}
                            <div className="absolute bottom-8 right-8">
                                <div className="**:rounded-full flex w-28 flex-wrap gap-1 rounded border p-4 opacity-50">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="size-3 border p-0.5">
                                            <div className="bg-linear-to-b to-card/50 size-full rounded-full border"></div>
                                        </div>
                                    ))}
                                    <span className="w-full pt-4 font-mono text-[9px] uppercase">Agents execute.</span>
                                </div>
                            </div>
                            
                            {/* Decorative lines - top */}
                            <div className="absolute left-[28%] top-6 h-1 w-24 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_2px,transparent_2px,transparent_6px)] opacity-40" />
                            <div className="absolute right-[28%] top-6 h-1 w-20 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_2px,transparent_2px,transparent_6px)] opacity-40" />
                            
                            {/* Decorative lines - bottom */}
                            <div className="absolute bottom-6 left-[32%] h-1 w-28 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_2px,transparent_2px,transparent_6px)] opacity-40" />
                            <div className="absolute bottom-6 right-[32%] h-1 w-24 bg-[repeating-linear-gradient(90deg,var(--color-border-illustration),var(--color-border-illustration)_2px,transparent_2px,transparent_6px)] opacity-40" />
                            
                            {/* Animated Workflow Diagram */}
                            <WorkflowDiagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aspect-72/41 lg:hidden">
                <img
                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757917121/hero-illustration_nl1gdn.png"
                    alt="tailark hero section"
                    className="size-full object-cover"
                />
            </div>
        </>
    )
}


