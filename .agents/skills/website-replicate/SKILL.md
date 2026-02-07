---
name: website-replicate
description: Use when replicating pages from naironai.com Framer site into this TanStack Start project. Provides a systematic process — inspect live site with browser automation, extract content/styles/assets, build components using design system primitives, and iteratively compare local vs live screenshots until pixel-perfect match.
---

# Website Replication — naironai.com → TanStack Start

You are replicating pages from the live **naironai.com** Framer site into this TanStack Start project. Follow this exact process for every page or section replication task.

---

## CORE METHODOLOGY: Observe → Compare → Fix Differences

**This is the single most important principle of this entire skill.** Every step you take must be driven by **observing the live site first**, then **comparing your local implementation against it**, then **fixing every visible difference** one at a time.

### The Loop

```
1. OBSERVE the live site — screenshot it, extract its exact content, styles, and layout
2. BUILD a first pass of the section/component
3. COMPARE — screenshot your local version at the same scroll position as the live site
4. IDENTIFY EVERY DIFFERENCE — layout, spacing, typography, colors, content, images, borders, alignment
5. FIX ONE DIFFERENCE at a time
6. RE-SCREENSHOT and RE-COMPARE after each fix
7. REPEAT steps 4-6 until zero differences remain
8. Move to next section
```

**You must never consider a section "done" until a side-by-side screenshot comparison shows zero visible differences from the live site.**

### What to Look For When Comparing

**Layout & Structure (CRITICAL):**
- How many columns? How are they arranged?
- What is the exact grid structure?
- Are elements left-aligned, centered, or right-aligned?
- What is the vertical stacking order of sub-elements within a card/section?
- Are there multiple rows?
- What is the aspect ratio of images/cards?
- How wide is the content area? Full-width or max-width?
- Is there a sidebar layout?

**Spacing:**
- Padding inside cards (check all 4 sides)
- Margins between sections
- Gaps between grid items
- Space between heading and content below it

**Typography:**
- Font size (exact px values)
- Font weight (medium, semibold, bold)
- Letter-spacing (many headings use -2.4px)
- Line height
- Text color (use design tokens)

**Colors & Effects:**
- Background colors/gradients
- Border colors and widths
- Glass/blur effects
- Opacity values

**Content:**
- Every single word must match
- Image URLs must be the actual framerusercontent.com URLs
- Link hrefs must match
- Icon types must match

---

## Project Context

```
nairon-website/
├── apps/web/                → TanStack Start frontend (React 19, Vite 7, TailwindCSS 4)
│   └── src/
│       ├── components/landing/  → All landing page components
│       │   ├── primitives.tsx   → Design system (tokens, shared components)
│       │   └── *.tsx            → Section components
│       ├── data/landing.ts      → Centralized data/content
│       ├── hooks/               → Custom hooks
│       └── styles/globals.css   → Global CSS (gradients, animations, glass effects)
├── packages/backend/        → Convex backend
```

- **Dev server:** `http://localhost:3001`
- **Font:** Urbanist (loaded via Google Fonts in root layout)
- **Package manager:** Bun
- **Type checking:** `bun run check-types`

---

## Phase 1: Inspect the Live Site

Use browser automation to systematically extract everything from the live Framer site. Do NOT guess — always verify against the source.

### 1.1 — Take Full-Page Screenshots

Navigate to the target page and scroll through in ~700px increments, taking screenshots at each position. Document every section you find, in order.

### 1.2 — Extract Text Content

Get all headings, paragraphs, button labels, and link texts from the page.

### 1.3 — Extract CSS / Computed Styles

For any element, extract its exact styles: background, color, fontSize, fontWeight, letterSpacing, lineHeight, padding, borderRadius, border, opacity.

### 1.4 — Extract Image/Asset URLs

Get all image sources, alt text, and dimensions. Use framerusercontent.com URLs directly — they are CDN-hosted and publicly accessible.

### 1.5 — Extract Gradients and Special Backgrounds

Search for radial/linear gradients in computed styles.

### 1.6 — Extract Link URLs and External References

Get all anchor hrefs and their text content.

---

## Phase 2: Architecture and Design System

### 2.1 — Design Token System

ALL colors must use the centralized `colors` token object from `primitives.tsx`. Never hardcode colors.

### 2.2 — Shared Primitive Components

Use these instead of raw HTML. All are in `primitives.tsx`:

| Component | Usage |
|-----------|-------|
| `Section` | Wraps every page section |
| `SectionTag` | Line + label above section headings |
| `SectionHeading` | Large section titles |
| `DimText` | Wraps words in headings that should be dimmed |
| `GlassCard` | Rounded card with glass effect |
| `CardTitle` | Card heading |
| `BodyText` | Body paragraphs |
| `BulletPoint` | Colored dot + text |
| `OutlineButton` | Ghost button with border + arrow icon |
| `PrimaryButton` | White filled button + arrow icon |

### 2.3 — Data-Driven Architecture

ALL content goes in `apps/web/src/data/landing.ts`. Section components import and map over this data. **Never hardcode content strings in component files.**

---

## Phase 3: Build Components

Each visual section is its own file in `components/landing/`. Every section component follows the pattern:

```tsx
import { Section, SectionTag, SectionHeading, DimText, colors } from "./primitives";
import { SECTION_DATA } from "@/data/landing";

export function SectionName() {
  return (
    <Section className={colors.pageBg}>
      <SectionTag label="Section Label" />
      <SectionHeading>
        Heading Text <DimText>Dimmed Part</DimText>
      </SectionHeading>
      {/* Section content */}
    </Section>
  );
}
```

---

## Phase 4: Visual Comparison & Iteration (THE CORE LOOP)

**This is the MOST IMPORTANT phase. Do NOT skip it.**

After building each section, compare it visually with the live site by taking screenshots of both at the same scroll positions. List EVERY difference, fix the most visible one first, re-screenshot, and repeat until zero differences remain.

---

## Phase 5: Verification

1. Run type checking: `bun run check-types`
2. Full page scroll-through comparison
3. Component checklist (content, images, colors, tokens, data centralization, responsive)

---

## Key Principles

1. **Observe first, build second**
2. **Layout is king** — get grid structure right FIRST
3. **Every difference matters**
4. **Fix one thing at a time**
5. **Never guess content** — extract from live site
6. **Never hardcode colors** — use design tokens
7. **Never put content in components** — centralize in data files
8. **Use framerusercontent URLs directly**
9. **Keep components simple**
10. **Run type checks** after every round of changes

---

## Quick Reference: Live Site URLs

- **Homepage:** `https://naironai.com`
- **Apply:** `https://apply.naironai.com`
- **LinkedIn:** `https://linkedin.com/company/naironai`
- **Twitter/X:** `https://x.com/naironai`
