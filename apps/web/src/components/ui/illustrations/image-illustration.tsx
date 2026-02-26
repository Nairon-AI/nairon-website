import { CheckCircle2 } from 'lucide-react'

const CYCLE_DURATION = 15

const beamStyles = `
@keyframes trace-path {
    0% { stroke-dashoffset: 2200; }
    100% { stroke-dashoffset: 0; }
}
`

export const ImageIllustration = () => {
    return (
        <>
            <style>{beamStyles}</style>
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
                            
                            {/* Pipeline Animation with Circuit Board Design */}
                            <div className="w-full max-w-5xl mx-auto px-4 py-12">
                                <svg viewBox="0 0 1000 120" className="w-full h-auto">
                                    <defs>
                                        {/* Dotted line pattern */}
                                        <pattern id="dots" width="6" height="2" patternUnits="userSpaceOnUse">
                                            <rect width="2" height="2" fill="var(--color-border)"/>
                                        </pattern>
                                    </defs>
                                    
                                    {/* Chip 1 - INTENT */}
                                    <g>
                                        <rect x="50" y="25" width="110" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        {/* Corner dots */}
                                        <circle cx="62" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="148" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="62" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="148" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        {/* Dotted lines */}
                                        <rect x="70" y="36" width="70" height="2" fill="url(#dots)"/>
                                        <rect x="70" y="82" width="70" height="2" fill="url(#dots)"/>
                                        <text x="105" y="64" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">INTENT</text>
                                    </g>
                                    
                                    {/* Chip 2 - INTERVIEW */}
                                    <g>
                                        <rect x="210" y="25" width="110" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        <circle cx="222" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="308" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="222" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="308" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <rect x="230" y="36" width="70" height="2" fill="url(#dots)"/>
                                        <rect x="230" y="82" width="70" height="2" fill="url(#dots)"/>
                                        <text x="265" y="58" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">INTERVIEW</text>
                                        <text x="265" y="72" textAnchor="middle" className="fill-muted-foreground text-[9px]">Deep understanding</text>
                                    </g>
                                    
                                    {/* Chip 3 - PLAN */}
                                    <g>
                                        <rect x="370" y="25" width="110" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        <circle cx="382" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="468" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="382" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="468" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <rect x="390" y="36" width="70" height="2" fill="url(#dots)"/>
                                        <rect x="390" y="82" width="70" height="2" fill="url(#dots)"/>
                                        <text x="425" y="58" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">PLAN</text>
                                        <text x="425" y="72" textAnchor="middle" className="fill-muted-foreground text-[9px]">Architecture</text>
                                    </g>
                                    
                                    {/* Chip 4 - IMPLEMENT */}
                                    <g>
                                        <rect x="530" y="25" width="110" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        <circle cx="542" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="628" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="542" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="628" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <rect x="550" y="36" width="70" height="2" fill="url(#dots)"/>
                                        <rect x="550" y="82" width="70" height="2" fill="url(#dots)"/>
                                        <text x="585" y="58" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">IMPLEMENT</text>
                                        <text x="585" y="72" textAnchor="middle" className="fill-muted-foreground text-[9px]">Agents execute</text>
                                    </g>
                                    
                                    {/* Chip 5 - REVIEW */}
                                    <g>
                                        <rect x="690" y="25" width="110" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        <circle cx="702" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="788" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="702" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="788" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <rect x="710" y="36" width="70" height="2" fill="url(#dots)"/>
                                        <rect x="710" y="82" width="70" height="2" fill="url(#dots)"/>
                                        <text x="745" y="58" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">REVIEW</text>
                                        <text x="745" y="72" textAnchor="middle" className="fill-muted-foreground text-[9px]">Tests seal spec</text>
                                    </g>
                                    
                                    {/* Chip 6 - DONE */}
                                    <g>
                                        <rect x="850" y="25" width="100" height="70" rx="10" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1"/>
                                        <circle cx="862" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="938" cy="37" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="862" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <circle cx="938" cy="83" r="2" fill="currentColor" className="text-foreground"/>
                                        <rect x="870" y="36" width="60" height="2" fill="url(#dots)"/>
                                        <rect x="870" y="82" width="60" height="2" fill="url(#dots)"/>
                                        {/* Checkmark */}
                                        <circle cx="885" cy="60" r="8" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                                        <path d="M881 60 L884 63 L889 57" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <text x="915" y="64" textAnchor="middle" className="fill-foreground text-[12px] font-mono font-medium">DONE</text>
                                    </g>
                                    
                                    {/* Connector lines in middle with diamonds */}
                                    <line x1="0" y1="60" x2="50" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="160" y1="60" x2="210" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <rect x="181" y="56" width="8" height="8" transform="rotate(45 185 60)" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="320" y1="60" x2="370" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <rect x="341" y="56" width="8" height="8" transform="rotate(45 345 60)" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="480" y1="60" x2="530" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <rect x="501" y="56" width="8" height="8" transform="rotate(45 505 60)" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="640" y1="60" x2="690" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <rect x="661" y="56" width="8" height="8" transform="rotate(45 665 60)" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="800" y1="60" x2="850" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    <rect x="821" y="56" width="8" height="8" transform="rotate(45 825 60)" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1"/>
                                    <line x1="950" y1="60" x2="1000" y2="60" stroke="var(--color-border)" strokeWidth="1"/>
                                    
                                    {/* Animated pulse - enters middle-left, goes up-across-down to middle-right, exits to next */}
                                    <path 
                                        d="M 0 60 
                                           H 50 V 25 H 160 V 60
                                           H 210 V 25 H 320 V 60
                                           H 370 V 25 H 480 V 60
                                           H 530 V 25 H 640 V 60
                                           H 690 V 25 H 800 V 60
                                           H 850 V 25 H 950 V 60
                                           H 1000"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDasharray="60 1600"
                                        style={{ animation: `trace-path ${CYCLE_DURATION}s linear infinite` }}
                                    />
                                </svg>
                            </div>
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


