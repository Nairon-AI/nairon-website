# Shared UI Components

## Button (`components/ui/button.tsx`)
Variants: default, destructive, outline, secondary, ghost, link
Sizes: default (h-9), sm (h-8), lg (h-10), icon (h-9 w-9)
Uses CVA + Radix Slot.

## TextAnimate (`components/ui/text-animate.tsx`)
Framer Motion text animation component.
Props: `as`, `by` (text/word/character), `animation` (blurInUp, blurIn, fadeIn, etc.), `delay`, `duration`, `startOnView`.
Used extensively in hero sections.

## Badge, Card, Dialog, Tabs, etc.
Standard shadcn/ui (new-york) components in `components/ui/`.

## LinearGlassCard (`components/landing/flux/primitives.tsx`)
Glass morphism card: gradient border from white/12 -> white/02, dark inner bg.

## TerminalWindow (`components/landing/flux/primitives.tsx`)
Terminal UI: traffic-light dots header, monospace content area, animated line reveal.

## GradientHeading (`components/landing/flux/primitives.tsx`)
Uses `.text-gradient-linear` class for white gradient text effect.
