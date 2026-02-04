# Website Replication — naironai.com → TanStack Start

You are replicating pages from the live **naironai.com** Framer site into this TanStack Start project. Follow this exact process for every page or section replication task.

**Target URL (if not specified):** `$ARGUMENTS`

---

## ⚠️ CORE METHODOLOGY: Observe → Compare → Fix Differences

**This is the single most important principle of this entire skill.** Every step you take must be driven by **observing the live site first**, then **comparing your local implementation against it**, then **fixing every visible difference** one at a time.

### The Loop

```
1. OBSERVE the live site — screenshot it, extract its exact content, styles, and layout
2. BUILD a first pass of the section/component
3. COMPARE — screenshot your local version at the same scroll position as the live site
4. IDENTIFY EVERY DIFFERENCE — layout, spacing, typography, colors, content, images, borders, alignment
5. FIX ONE DIFFERENCE at a time
6. RE-SCREENSHOT and RE-COMPARE after each fix
7. REPEAT steps 4–6 until zero differences remain
8. Move to next section
```

**You must never consider a section "done" until a side-by-side screenshot comparison shows zero visible differences from the live site.**

### What to Look For When Comparing

**Layout & Structure (CRITICAL):**
- How many columns? How are they arranged? (e.g., 2-column grid, 3-column grid, stacked)
- What is the exact grid structure? (e.g., `grid-cols-2` vs `grid-cols-3`, gap sizes)
- Are elements left-aligned, centered, or right-aligned?
- What is the vertical stacking order of sub-elements within a card/section?
- Are there multiple rows? (e.g., CTA has TWO rows of 2-column cards, not just one)
- What is the aspect ratio of images/cards?
- How wide is the content area? Does it span full-width or have a max-width?
- Is there a sidebar layout (e.g., FAQ: heading on left, questions on right)?

**Spacing:**
- Padding inside cards (check all 4 sides)
- Margins between sections
- Gaps between grid items
- Space between heading and content below it
- Space between label/tag and heading

**Typography:**
- Font size (exact px values — extract with getComputedStyle)
- Font weight (medium, semibold, bold)
- Letter-spacing (many headings use -2.4px, subheads use -0.72px)
- Line height
- Text color (use design tokens, verify exact opacity/hex)

**Colors & Effects:**
- Background colors/gradients (extract exact gradient strings)
- Border colors and widths
- Glass/blur effects
- Text colors at different hierarchy levels
- Opacity values

**Content:**
- Every single word must match — names, descriptions, labels, button text
- Image URLs must be the actual framerusercontent.com URLs, never placeholders
- Link hrefs must match
- Icon types must match (Plus/Minus not ChevronDown, Linkedin icon overlays, etc.)

**Interactive Elements:**
- Button styles (filled vs outline, icon placement)
- Hover states
- Accordion expand/collapse behavior
- Link targets (_blank vs same window)

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
│       ├── hooks/               → Custom hooks (countdown, rotating text, etc.)
│       └── styles/globals.css   → Global CSS (gradients, animations, glass effects)
├── packages/backend/        → Convex backend
```

- **Dev server:** `http://localhost:3001`
- **Font:** Urbanist (loaded via Google Fonts in root layout)
- **Package manager:** Bun
- **Type checking:** `bun run check-types`

---

## Phase 1: Inspect the Live Site

Use **Playwriter** to systematically extract everything from the live Framer site. Do NOT guess — always verify against the source.

### 1.1 — Take Full-Page Screenshots

```js
// Navigate to target page
state.livePage = await context.newPage();
await state.livePage.goto('https://naironai.com', { waitUntil: 'domcontentloaded' });
await waitForPageLoad({ page: state.livePage, timeout: 5000 });
```

Scroll through the entire page in ~700px increments, taking screenshots at each position:

```js
await state.livePage.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 1000));
await screenshotWithAccessibilityLabels({ page: state.livePage });
```

Document every section you find, in order.

### 1.2 — Extract Text Content

```js
// Get all headings, paragraphs, button labels
const content = await state.livePage.evaluate(() => {
  const els = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, button, span');
  return Array.from(els).map(el => ({
    tag: el.tagName,
    text: el.textContent?.trim().slice(0, 200),
    href: el.href || undefined
  })).filter(e => e.text);
});
```

### 1.3 — Extract CSS / Computed Styles

For any element, extract its exact styles:

```js
const styles = await state.livePage.evaluate(() => {
  const el = document.querySelector('.target-selector');
  const s = getComputedStyle(el);
  return {
    background: s.backgroundImage || s.backgroundColor,
    color: s.color,
    fontSize: s.fontSize,
    fontWeight: s.fontWeight,
    letterSpacing: s.letterSpacing,
    lineHeight: s.lineHeight,
    padding: s.padding,
    borderRadius: s.borderRadius,
    border: s.border,
    opacity: s.opacity
  };
});
```

### 1.4 — Extract Image/Asset URLs

```js
const images = await state.livePage.evaluate(() => {
  return Array.from(document.querySelectorAll('img')).map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height
  }));
});
```

Use framerusercontent.com URLs directly — they are CDN-hosted and publicly accessible.

### 1.5 — Extract Gradients and Special Backgrounds

Search for radial/linear gradients in computed styles:

```js
const gradients = await state.livePage.evaluate(() => {
  const results = [];
  document.querySelectorAll('div, section').forEach(el => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none' && bg.includes('gradient')) {
      results.push({ bg, text: el.textContent?.trim().slice(0, 50) });
    }
  });
  return results;
});
```

### 1.6 — Extract Link URLs and External References

```js
const links = await state.livePage.evaluate(() => {
  return Array.from(document.querySelectorAll('a[href]')).map(a => ({
    href: a.href,
    text: a.textContent?.trim()
  }));
});
```

### 1.7 — Advanced: Extract WebGL Shaders (if canvas elements exist)

If you find `<canvas>` elements (like the animated gradient), look for the shader source in the page's JS bundles:

```js
// List all JS resources
const resources = await state.livePage.evaluate(() =>
  performance.getEntriesByType('resource')
    .filter(r => r.name.endsWith('.mjs') || r.name.endsWith('.js'))
    .map(r => r.name)
);
```

Then fetch the relevant module and search for GLSL shader strings (`gl_FragColor`, `precision mediump float`, `void main`).

---

## Phase 2: Architecture and Design System

### 2.1 — Design Token System

ALL colors must use the centralized `colors` token object from `primitives.tsx`. Never hardcode colors.

```tsx
// apps/web/src/components/landing/primitives.tsx
export const colors = {
  text: "text-[#ededed]",           // Primary text — near-white
  textDim: "text-white/55",         // Dimmed heading text
  textBody: "text-[#bfbfbf]",      // Body / secondary text
  textMuted: "text-white/40",       // Muted text
  border: "border-white/8",         // Card/glass border
  borderInteractive: "border-white/12", // Interactive borders
  glassBg: "bg-white/[0.03]",      // Glass background
  pageBg: "bg-black",              // Page background
} as const;
```

**Rules:**
- Every component imports `colors` from `./primitives`
- Use `colors.text` not `text-white` or `text-[#ededed]` directly
- Use `colors.pageBg` not `bg-black` directly
- Use `colors.border` for all card/glass borders
- Use `colors.glassBg` for glass card backgrounds

### 2.2 — Shared Primitive Components

Use these instead of raw HTML. All are in `primitives.tsx`:

| Component | Usage |
|-----------|-------|
| `Section` | Wraps every page section (`py-24 md:py-32`, `max-w-7xl mx-auto px-6`) |
| `SectionTag` | Line + label above section headings (e.g., `── Our Philosophy`) |
| `SectionHeading` | Large section titles (60px, -2.4px letter-spacing) |
| `DimText` | Wraps words in headings that should be dimmed (white/55) |
| `GlassCard` | Rounded card with glass effect (3% white bg, 8% border, blur) |
| `CardTitle` | Card heading (24px, semibold, -0.72px tracking) |
| `BodyText` | Body paragraphs (#bfbfbf) |
| `BulletPoint` | Colored dot + text (supports `green` and `gold` variants) |
| `OutlineButton` | Ghost button with border + arrow icon |
| `PrimaryButton` | White filled button + arrow icon |

**If a new primitive is needed**, add it to `primitives.tsx` — never define one-off styled components in section files.

### 2.3 — Data-Driven Architecture

ALL content goes in `apps/web/src/data/landing.ts` (or a new data file for other pages):

```tsx
// Example: data/landing.ts
export const FAQ_ITEMS = [
  { question: "Who is the program for?", answer: "..." },
] as const;
```

Section components import and map over this data. **Never hardcode content strings in component files.** This separation keeps components reusable and content centralized.

### 2.4 — CSS Classes in globals.css

Custom CSS that can't be expressed as Tailwind utilities goes in `globals.css`:

```css
/* Gradient backgrounds */
.pricing-gradient-green {
  background: radial-gradient(78.6% 118% at -9.8% 112.1%, rgb(32, 140, 27) 0%, rgb(10, 26, 9) 100%);
}

/* Glass effect */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

/* Animations */
.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

---

## Phase 3: Build Components

### 3.1 — Component Structure

Each visual section is its own file in `components/landing/`:

```
components/landing/
├── primitives.tsx        → Design tokens + shared components
├── animated-gradient.tsx → WebGL shader background
├── navbar.tsx
├── hero.tsx
├── philosophy.tsx
├── about.tsx
├── qualifies.tsx
├── team.tsx
├── marquee.tsx
├── agenda.tsx
├── partners.tsx
├── faq.tsx
├── cta.tsx
└── footer.tsx
```

### 3.2 — Component Template

Every section component follows this pattern:

```tsx
import { Section, SectionTag, SectionHeading, DimText, colors } from "./primitives";
import { SECTION_DATA } from "@/data/landing";

// Internal sub-components (not exported)
function SubComponent({ ... }: { ... }) {
  return ( ... );
}

// Single named export
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

### 3.3 — Key Patterns

**Live site heading style:** Most headings use `-2.4px` letter-spacing, `font-medium`. Sub-headings use `-0.72px`.

**Glass cards:** The live site uses `background: rgba(255,255,255,0.03)` with `border: 1px solid rgba(255,255,255,0.08)` and `backdrop-filter: blur(12px)`. Use the `GlassCard` primitive.

**Button styles:**
- Apply CTA: White bg, dark text, rounded-full, with circular dark icon button containing ArrowUpRight
- Outline buttons: Transparent bg, white/12 border, rounded-full, ArrowUpRight icon

**Section spacing:** `py-24 md:py-32` between sections. `mb-16` between heading and content.

**Grid layouts:** Use Tailwind grid — `grid grid-cols-1 md:grid-cols-3 gap-6` for 3-column layouts.

---

## Phase 4: Visual Comparison & Iteration (THE CORE LOOP)

**This is the MOST IMPORTANT phase. Do NOT skip it. This is where quality comes from.**

The entire replication process is fundamentally about **observing differences and eliminating them one by one**. Building a first pass is just scaffolding — the real work is the iterative comparison loop.

### 4.1 — Side-by-Side Screenshots

After building each section, you MUST compare it visually with the live site. Open BOTH pages:

```js
// Keep both pages open throughout the session
state.livePage = state.livePage || await context.newPage();
state.localPage = state.localPage || context.pages().find(p => p.url().includes('localhost'));

// Screenshot local section
await state.localPage.evaluate(() => window.scrollTo(0, TARGET_Y));
await new Promise(r => setTimeout(r, 500));
await screenshotWithAccessibilityLabels({ page: state.localPage });

// Screenshot live site at SAME section
await state.livePage.evaluate(() => window.scrollTo(0, TARGET_Y));
await new Promise(r => setTimeout(r, 500));
await screenshotWithAccessibilityLabels({ page: state.livePage });
```

**Look at both screenshots carefully. List EVERY difference you see.** Do not gloss over small differences — they accumulate into a clearly different-looking page.

### 4.2 — Layout Comparison Checklist

Layout is the #1 source of visual mismatch. For EVERY section, verify:

- [ ] **Grid structure** — Exact same number of columns at each breakpoint (mobile, tablet, desktop)
- [ ] **Column widths** — Equal columns vs unequal? (e.g., `grid-cols-2` vs `lg:grid-cols-[2fr_1fr]`)
- [ ] **Row count** — Are there multiple rows of cards? (CTA has 2 rows of 2 cards each)
- [ ] **Alignment** — Left-aligned heading vs centered? Cards aligned to top vs stretched?
- [ ] **Content area width** — `max-w-7xl` matches? Or is a section full-width?
- [ ] **Sidebar layouts** — Some sections split into 2 columns with heading on one side, content on the other (e.g., FAQ)
- [ ] **Card internal layout** — How content is arranged INSIDE each card: top-to-bottom stacking order, flex direction, justify-between for spacing
- [ ] **Aspect ratios** — Image/card proportions (3:4 for team photos, specific widths for partner logos)
- [ ] **Responsive breakpoints** — Does the layout change at `md:` or `lg:`? Match exact breakpoints

### 4.3 — Full Comparison Checklist

After layout, check everything else:

- [ ] **Typography** — Font sizes, weights, letter-spacing, line-height
- [ ] **Colors** — Text color, background, borders (use design tokens)
- [ ] **Spacing** — Padding, margins, gaps between elements
- [ ] **Content** — Every word, name, description, number must be identical
- [ ] **Icons** — Same icon type (Plus/Minus not ChevronDown, Linkedin overlays on photos)
- [ ] **Images** — Actual framerusercontent URLs, correct aspect ratios
- [ ] **Interactive elements** — Button styles, hover states, accordion behavior
- [ ] **Background effects** — Gradients, glass effects, animated backgrounds
- [ ] **Borders** — Present/absent, color, width, radius

### 4.4 — Common Layout & Content Mistakes

| Issue | Live Site | Common Mistake |
|-------|-----------|---------------|
| CTA section | **2 rows**: engineer row + client row | Only building 1 row |
| FAQ layout | **2-column**: heading left, questions right | Single column stacked |
| Section tag | `── Label` with horizontal line | Missing the line element |
| Heading dimming | Specific words dimmed, others bright | Dimming wrong words |
| Card borders | Some cards have NO visible border | Adding borders everywhere |
| FAQ icons | Plus/Minus toggle | ChevronDown |
| Team photos | LinkedIn icon overlay at bottom-left | No overlay |
| Partner logos | Actual company logo images | Gray placeholder boxes |
| Button icons | ArrowUpRight inside circular button | Missing icon entirely |
| Grid gaps | Specific gap sizes (gap-6, gap-3) | Using wrong gap sizes |
| Card padding | `p-8 md:p-10` on most cards | Using too much/little padding |

### 4.5 — The Iteration Loop (MANDATORY)

```
1. Screenshot LOCAL section at specific scroll position
2. Screenshot LIVE section at the SAME scroll position
3. Place them side-by-side mentally and list EVERY difference
4. Fix the MOST VISIBLE difference first
5. Reload the local page
6. Re-screenshot at the same position
7. Compare again — is the difference gone? Any new issues?
8. Repeat steps 3–7 until ZERO differences remain
9. ONLY THEN move to the next section
```

**Never batch multiple fixes without re-verifying.** Each fix can introduce new issues or reveal previously hidden differences.

---

## Phase 5: Verification

### 5.1 — Type Check

Always run after making changes:

```bash
bun run check-types
```

Fix any TypeScript errors before moving on.

### 5.2 — Full Page Scroll-Through

After all sections are done, scroll through the entire local page top-to-bottom, taking screenshots every 800px, and compare each with the live site at the same position.

### 5.3 — Component Checklist

Before considering a page done:
- [ ] All content matches live site exactly (names, descriptions, numbers)
- [ ] All images use actual framerusercontent URLs from the live site
- [ ] All colors use the `colors` design token system
- [ ] All sections use `Section`, `SectionTag`, `SectionHeading` primitives
- [ ] No hardcoded color strings in component files
- [ ] Data is centralized in `data/*.ts` files
- [ ] TypeScript passes (`bun run check-types`)
- [ ] No unused imports or dead code
- [ ] CSS classes for custom effects are in `globals.css`
- [ ] Responsive: Components use `md:` breakpoints for desktop

---

## Phase 6: Extracting Complex Assets

### 6.1 — Animated Gradient Background

The hero uses a WebGL2 shader. The implementation lives in `animated-gradient.tsx`. It renders a full-screen `<canvas>` with the extracted GLSL shader, plus a checks-pattern overlay:

```tsx
// Checks pattern overlay (on top of canvas)
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
    backgroundSize: "200px",
    opacity: 0.25,
  }}
/>
```

Key shader parameters (extracted from Framer's production bundle):
- Colors: `#192613` (dark green), `#22DB18` (bright green), `#FFFFFF` (white)
- Speed: 10 (slowed from original 53)
- Scale: 0.45, Swirl: 0.31, Iterations: 10
- Shape: Checks, Shape Size: 0.1

### 6.2 — Signature Images

The philosophy section uses a handwritten signature image loaded from framerusercontent. Always extract the actual URL from the live site.

### 6.3 — Team Photos & Social Links

Each team member has:
- A photo URL from framerusercontent
- A LinkedIn profile URL (extracted from `<a href>` elements)
- Name and role text

---

## Key Principles

1. **Observe first, build second** — always screenshot and inspect the live site BEFORE writing any code
2. **Layout is king** — get the grid structure, column count, row count, and alignment right FIRST before worrying about colors/typography
3. **Every difference matters** — if you can see ANY visual difference between local and live, it must be fixed
4. **Fix one thing at a time** — compare → fix → re-screenshot → compare again. Never batch fixes blindly
5. **Never guess content** — always extract exact text, URLs, and assets from the live site using Playwriter
6. **Never hardcode colors** — always use the `colors` token system from primitives.tsx
7. **Never put content in components** — always centralize in data files
8. **Use framerusercontent URLs directly** — they're CDN-hosted and permanent
9. **Keep components simple** — use the primitive components, avoid over-engineering
10. **Run type checks** — `bun run check-types` after every round of changes

---

## Quick Reference: Live Site URLs

- **Homepage:** `https://naironai.com`
- **Apply:** `https://apply.naironai.com`
- **Logo image:** `https://framerusercontent.com/images/VHRAdVMCwEE6Q9afizgYDgxitUU.png`
- **Checks pattern:** `https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png`
- **LinkedIn:** `https://linkedin.com/company/naironai`
- **Twitter/X:** `https://x.com/naironai`
