import { Card } from '@/components/ui/card'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Primevideo } from '@/components/ui/svgs/prime'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useCallback, useRef } from 'react'
import { ChevronDown, ChevronRight, ChevronUp, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { cn } from '@/lib/utils'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

const testimonialsData = [
    {
        id: 'stripe' as const,
        LogoComponent: Stripe,
        cardLogoProps: { className: 'h-7 w-16' },
        buttonLogoProps: { height: 20, width: 56 },
        text: 'Flux changed how our team works with Claude Code. We stopped jumping straight into implementation and now run interview, plan, and review loops that catch misses early.',
        avatar: BERNARD_AVATAR,
        name: 'Platform Team Lead',
        title: 'Fintech Scale-up',
        brandColor: '#635bff',
        resultText: '34% fewer rework loops per feature',
        resultText2: '2.7x higher pushback quality in reviews',
    },
    {
        id: 'hulu' as const,
        LogoComponent: Hulu,
        cardLogoProps: { className: 'h-7 w-16' },
        buttonLogoProps: { height: 20, width: 44 },
        text: 'The /flux:improve recommendations were practical, not generic. We installed two MCPs and immediately saw better context retention across long sessions.',
        avatar: MESCHAC_AVATAR,
        name: 'Staff Engineer',
        title: 'Developer Productivity',
        brandColor: '#1CE783',
        resultText: '41% reduction in context reset events',
        resultText2: '22% faster story completion',
    },
    {
        id: 'prime' as const,
        LogoComponent: Primevideo,
        cardLogoProps: { className: 'h-7 w-20' },
        buttonLogoProps: { height: 24, width: 64 },
        text: 'For leadership, Flux gives a clear picture of AI collaboration maturity. We can now coach teams using data instead of anecdotes.',
        avatar: GLODIE_AVATAR,
        name: 'VP Engineering',
        title: 'B2B SaaS',
        brandColor: '#00A8E1',
        resultText: 'Score improved from 52 -> 78 in 4 weeks',
        resultText2: 'Shared workflow adopted by 5 squads',
    },
]

const animationVariants = {
    exit: { opacity: 0, scale: 1, y: -18 },
    initial: { opacity: 0, scale: 0.95, y: 18 },
    animate: { opacity: 1, scale: 1, y: 0 },
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const touchStartY = useRef<number | null>(null)
    const touchEndY = useRef<number | null>(null)
    const savedScrollY = useRef<number>(0)

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length)
    }, [])

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }, [])

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        e.preventDefault()
        touchEndY.current = null
        touchStartY.current = e.targetTouches[0].clientY

        const documentElement = document.documentElement
        const body = document.body
        savedScrollY.current = window.scrollY

        documentElement.style.overflow = 'hidden'
        body.style.overflow = 'hidden'
        documentElement.style.position = 'fixed'
        documentElement.style.top = `-${savedScrollY.current}px`
        documentElement.style.width = '100%'
        body.style.position = 'fixed'
        body.style.width = '100%'
    }, [])

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        e.preventDefault()
        e.stopPropagation()
        touchEndY.current = e.targetTouches[0].clientY
    }, [])

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            if (touchStartY.current === null) return
            touchEndY.current = e.changedTouches[0].clientY

            const distance = touchStartY.current - touchEndY.current
            const isSwipeUp = distance > 50

            if (isSwipeUp) {
                handleNext()
            }

            const documentElement = document.documentElement
            const body = document.body

            documentElement.style.overflow = 'auto'
            documentElement.style.position = 'static'
            documentElement.style.top = '0'
            documentElement.style.width = 'auto'

            body.style.overflow = 'auto'
            body.style.position = 'static'
            body.style.width = 'auto'

            window.scrollTo(0, savedScrollY.current)
        },
        [handleNext]
    )

    return (
        <section className="bg-background relative py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative mx-auto max-w-xl">
                    <Button
                        onClick={handlePrevious}
                        size="icon"
                        variant="outline"
                        aria-label="Previous testimonial"
                        className="absolute inset-y-0 -left-16 my-auto rounded-full max-md:hidden">
                        <ChevronUp className="-translate-y-px" />
                    </Button>

                    <Button
                        onClick={handleNext}
                        size="icon"
                        variant="outline"
                        aria-label="Next testimonial"
                        className="absolute inset-y-0 -right-16 my-auto rounded-full max-md:hidden">
                        <ChevronDown className="translate-y-px" />
                    </Button>
                    <AnimatePresence
                        initial={false}
                        mode="popLayout">
                        <motion.div
                            key={`layer-1-${testimonialsData[currentIndex].id}`}
                            variants={animationVariants}
                            exit={{ scale: 0.5, y: -32 }}
                            initial={{ opacity: 0, scale: 1.025, y: -32 }}
                            animate={{ opacity: 1, scale: 0.9, y: 0, transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut' } }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="ring-border bg-card shadow-black/6.5 absolute inset-0 origin-bottom translate-y-6 rounded-2xl border border-transparent shadow-md ring-1"
                        />
                        <motion.div
                            key={`layer-2-${testimonialsData[currentIndex].id}`}
                            variants={animationVariants}
                            exit="exit"
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="ring-border bg-card shadow-black/6.5 absolute inset-0 origin-bottom translate-y-3 scale-95 rounded-2xl border border-transparent shadow-md ring-1"
                        />
                        {(() => {
                            const currentTestimonialData = testimonialsData[currentIndex]
                            if (!currentTestimonialData) return null
                            const { LogoComponent, cardLogoProps, text, avatar, name, title, id } = currentTestimonialData
                            return (
                                <motion.div
                                    key={id}
                                    variants={animationVariants}
                                    exit="exit"
                                    initial="initial"
                                    animate="animate"
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="relative z-10 origin-bottom">
                                    <Card
                                        className="relative space-y-8 rounded-2xl p-10 shadow-lg shadow-black/10"
                                        style={{ touchAction: 'none' }}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                        onTouchCancel={handleTouchEnd}>
                                        <div>
                                            <LogoComponent {...cardLogoProps} />
                                        </div>
                                        <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"]'>{text}</p>
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                            <div className="ring-foreground/10 aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-md shadow-black/15 ring-1">
                                                <img
                                                    src={avatar}
                                                    alt={`Avatar of ${name}`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="space-y-0.5 text-base *:block">
                                                <span className="text-foreground font-medium">{name}</span>
                                                <span className="text-muted-foreground text-sm">{title}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            )
                        })()}
                    </AnimatePresence>
                </div>

                <div className="relative mx-auto mb-9 mt-20 w-fit max-w-xl">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <div className="relative grid grid-cols-2 border py-6">
                        <span className="bg-foreground/10 border-background pointer-events-none absolute inset-y-4 left-1/2 w-0.5 rounded border-r"></span>

                        <div className="space-y-4 px-6">
                            <div
                                aria-hidden
                                className="flex justify-center gap-1 dark:opacity-75">
                                <Star className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Star className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Star className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Star className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Star className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                            </div>
                            <TextEffect
                                preset="fade"
                                per="char"
                                delay={0.25}
                                speedReveal={5}
                                key={testimonialsData[currentIndex].id}
                                className="text-muted-foreground text-balance text-center text-sm font-medium">
                                {testimonialsData[currentIndex].resultText}
                            </TextEffect>
                        </div>
                        <div className="space-y-4 px-6">
                            <div
                                aria-hidden
                                className="flex justify-center gap-1 dark:opacity-75">
                                <Zap className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Zap className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Zap className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Zap className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                                <Zap className="fill-card dark:fill-muted-foreground stroke-card dark:stroke-muted-foreground size-5 drop-shadow" />
                            </div>
                            <TextEffect
                                preset="fade"
                                per="char"
                                delay={0.25}
                                speedReveal={5}
                                key={testimonialsData[currentIndex].id}
                                className="text-muted-foreground text-balance text-center text-sm font-medium">
                                {testimonialsData[currentIndex].resultText2}
                            </TextEffect>
                        </div>
                    </div>
                </div>

                <Button
                    variant="link"
                    className="mx-auto flex w-fit"
                    disabled>
                    Private beta stories <ChevronRight />
                </Button>
            </div>
        </section>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
