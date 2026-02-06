# Homepage Redesign Spec

## Design Principles

- **Hybrid depth**: Key value props told in full on homepage; program logistics (agenda, requirements) live on subpages with teasers
- **Dual-view**: Every section switches content based on Engineer vs Hiring Manager view mode
- **Same section order** for both views — only content changes
- **CTAs sprinkled** every 1-3 sections + final CTA at bottom
- **Problem-first narrative**: Lead with what's broken, then position Nairon as the answer
- **70/30 program ratio**: Residence gets prominent section, Apprenticeship gets smaller section

## Engineer 10-second takeaway

> "Only the top 1% get in." — Exclusivity, rigor, prestige.

## Hiring Manager 10-second takeaway

> "Access engineers you can't find elsewhere." — Exclusive talent pipeline.

## Design System (existing)

- **Theme**: Dark (black bg, green accent #22DB18)
- **Cards**: Glass morphism (bg-white/[0.03], border-white/8, backdrop-blur)
- **Typography**: Urbanist (display), Inter (body), massive display sizes with tight tracking
- **Buttons**: PrimaryButton (white bg, dark text), OutlineButton (border, hover:bg-white/5), both rounded-full
- **Spacing**: Sections py-24 md:py-32, max-w-7xl container, px-6
- **Animations**: Animated gradient (WebGL), digital text transitions, spotlight sweep for view mode

## Design Inspirations

- **Linear**: Clean editorial splits, massive headlines, logo grids
- **Aset**: Bento grids with mixed-size cards, gradient accents on dark
- **LanderX**: Dark glass cards with icons, bento features, scrolling marquee
- **Nubien**: Purple glow effects (→ green for us), centered headlines, 3-column feature cards, dark glass
- **Landa**: Green accent on dark (closest match), 2x2 feature grids, 3-step flows, wireframe illustrations

---

## Section-by-Section Spec

### 1. HERO

**Layout**: Keep existing implementation (animated gradient, Nairon logo, countdown timer, location badge).
**Changes**: Add subtext line, ensure prominent CTA per view.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Tagline** | "AI Bootcamp for the [Founder / AI Enthusiast / 1% Engineer]" (existing rotating text) | "Where top companies hire the 1% Engineer" |
| **Subtext** | Brief line about what Nairon is — the world's most selective AI engineering program | Brief line — the only pipeline producing verified AI-native engineers |
| **CTA** | "Apply Now" → /residence (or application flow) | "Submit a Role" → /approach or role submission |
| **Countdown** | Deadline countdown (keep) | Could show "Next cohort starts in X" or keep deadline |
| **Location** | Q1 2026, Dubai (keep) | Keep or adapt to "Operating from Dubai" |

---

### 2. PROBLEM → SOLUTION: "Hiring is Broken"

**Layout: LANDA DUAL CARDS** — Two large glass cards side-by-side. Left card = problem (dark glass, red/warning tint or subtle destructive accent). Right card = solution (glass with green accent border/glow). Each card has headline + body text.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Problem headline** | "The best engineers are invisible" | "Hiring engineering talent is broken" |
| **Problem body** | Traditional hiring filters out great engineers. Resumes, leetcode, and credentials don't measure what matters — ownership, systems thinking, and the ability to ship. | You're drowning in applications but starving for quality. Resume screening, generic coding tests, and recruiter pipelines keep delivering engineers who can't deliver. |
| **Solution headline** | "Nairon proves what you're worth" | "Nairon solves hiring at the source" |
| **Solution body** | We don't care about your resume. We test ownership, AI-native thinking, systems design, and the ability to deliver under pressure. If you pass, the best companies come to you. | We don't send you resumes. We put engineers through 8 weeks of real-world AI projects, hackathons, and pressure tests. You only see the ones who survived. |

**CTA**: None after this section (let the narrative build).

---

### 3. PROBLEM → SOLUTION: "The AI Talent Gap"

**Layout: LANDA DUAL CARDS** — Same pattern as section 2 for visual consistency.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Problem headline** | "AI is rewriting the rules — most engineers aren't ready" | "There aren't enough AI-native engineers" |
| **Problem body** | The industry is shifting faster than careers. Engineers who don't become AI-native in the next 2 years will be left behind. Frameworks change, but the engineers who think in systems and own outcomes will always be in demand. | Every company needs AI-native engineers. Almost none exist. The ones who do are already employed and not looking. Traditional training programs produce engineers who know tools, not engineers who think differently. |
| **Solution headline** | "Become the engineer companies fight over" | "We produce what the market can't" |
| **Solution body** | Nairon doesn't teach you a framework. We rewire how you think — AI-native from day one, systems-level thinking, CTO-level communication. You leave as the kind of engineer who gets recruited, not the kind who applies. | Nairon engineers are trained through live projects, AI-native workflows, and intense evaluation. They don't just know AI — they think in systems, communicate like CTOs, and deliver under pressure. |

**CTA**: "Apply Now" (Eng) / "See Our Approach" (HM) — first sprinkled CTA after the problem/solution narrative.

---

### 4. OUTCOME METRICS

**Layout: ASET BENTO** — Asymmetric bento grid. One large card (spanning 2 columns) with a visual element (chart, funnel graphic, or animated counter). 2-3 smaller cards beside it, each with a single bold stat. All glass cards with green accent numbers.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Large card** | Acceptance funnel visual: 10,000 applicants → 12 selected | Placement pipeline visual: trained → matched → hired |
| **Metric 1** | `<3%` — Acceptance Rate | `100%` — Placement Rate (target) |
| **Metric 2** | `12` — Engineers per Cohort | `<14 days` — Average Time to Hire (target) |
| **Metric 3** | `8 weeks` — Program Duration | `8 weeks` — Training Before You Interview Them |
| **Metric 4** | `100%` — Placement Rate (every graduate gets hired) | `0` — Bad Hires (guaranteed) |

**Notes**: Mix of real numbers (cohort size, program duration, acceptance rate) and projected targets. Large card visual could be a simple animated counter or stylized funnel graphic.

---

### 5. HOW IT WORKS

**Layout: LANDA 3-STEPS** — Centered section headline, then 3 columns below. Each column: icon in a rounded glass container → step title (bold) → step description (body text). Clean vertical flow.

**Engineer View:**
1. **Apply** — Submit your profile and take the CCAT assessment
2. **Prove yourself** — Win a hackathon and survive 8 weeks of intense AI training
3. **Get hired** — Partner companies compete to hire you

**Hiring Manager View:**
1. **Submit a role** — Tell us what you need and your engineering requirements
2. **We match** — We select from our trained, vetted engineer pool
3. **You hire** — Interview pre-qualified candidates and hire with confidence

**CTA**: "Start Your Application" (Eng) / "Submit a Role" (HM)

---

### 6. RESIDENCE (Prominent — 70% focus)

**Layout: NUBIEN GLOW** — Full-width section with green glow/gradient effect (radial green glow behind centered content, similar to Nubien's purple glow hero). Could reuse the animated gradient component at reduced opacity. Centered headline + subtitle + 3-4 key bullet points + prominent CTA button. This is the visual showstopper of the page.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Section title** | "The Residence" | "The Residence: Our Flagship Pipeline" |
| **Subtitle** | "8 weeks. Dubai. Free. Only 12 spots." | "How we produce the top 1% of AI engineers" |
| **Key points** | - Free program (fully funded) | - 8-week intensive in Dubai |
| | - Fly to Dubai, full relocation | - Hackathons, live projects, peer pressure |
| | - Work on real AI projects with partners | - Only 12 per cohort — extreme selectivity |
| | - Direct intros to hiring partners | - Every graduate is verified by us |
| **CTA** | "Apply to Residence" → /residence | "Learn About Our Process" → /approach |

**Visual notes**: Green radial glow centered behind the text. Subtle particle or light-ray animation. This section should feel like a "moment" on the page — dramatic pause from the glass card sections above.

---

### 7. APPRENTICESHIP (Smaller — 30% focus)

**Layout: INLINE BANNER** — Horizontal banner strip. Left: program name + one-line description. Center: 2-3 key details as pill badges ("Remote", "$1,500", "Same Curriculum"). Right: CTA link with arrow. Single row, minimal height. Glass background, border-white/8.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Title** | "The Apprenticeship" | "The Apprenticeship" |
| **Description** | Remote. Flexible. Your path to standing out. | A broader pool of trained AI engineers. |
| **Pills** | Remote · $1,500 · Same Curriculum | Remote · Pre-Screened · Trained |
| **CTA** | "Learn More →" → /apprenticeship | "Access This Pool →" → /pricing |

**CTA after programs**: "Apply Now" (Eng) / "Submit a Role" (HM)

---

### 8. PARTNERS

**Layout: LINEAR LOGO GRID** — Centered subtext above ("Built with industry leaders" / "Trusted by leading companies"), then a 2-row or single-row logo grid below. Clean, static, trustworthy. Logos displayed at ~50% opacity, hovering to full. Optional: single rotating quote below the grid in a glass card.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Section title** | "Built with industry leaders" | "Trusted by leading companies" |
| **Partner logos** | Keylead, Question Base, CodeGPT, NEOM | Same logos |
| **Quote example** | "The engineers who came through Nairon were the most prepared we've ever worked with." | "We hired 3 engineers from Cohort 1. All of them shipped production features in week 1." |

---

### 9. FAQ

**Layout**: Keep existing accordion pattern (2-column: heading left, questions right). Glass card background per item. Different question sets per view.

**Engineer FAQ examples:**
- What are the eligibility requirements?
- Is the Residence really free?
- What happens if I don't get into the Residence?
- What does the selection process look like?
- Where is the program based?
- What happens after graduation?

**Hiring Manager FAQ examples:**
- How are Nairon engineers different from other candidates?
- What does the matching process look like?
- What does it cost to hire through Nairon?
- Do you offer a hiring guarantee?
- How quickly can I hire an engineer?
- Can I specify technical requirements for my role?

---

### 10. CTA (Final)

**Layout: NUBIEN GLOW CTA** — Full-width section with green glow/gradient effect (mirrors Residence section). Centered headline + subtext + primary CTA button + secondary text link. Creates bookend effect with the Residence glow section.

| | Engineer View | Hiring Manager View |
|---|---|---|
| **Headline** | "Ready to prove you're in the 1%?" | "Ready to hire engineers who actually deliver?" |
| **Subtext** | Applications for Q1 2026 are open. [X] spots remaining. | Submit your role requirements. We'll match you with verified AI-native engineers. |
| **Primary CTA** | "Apply Now" | "Submit a Role" |
| **Secondary CTA** | "Learn about the Residence" → /residence | "See Pricing" → /pricing |

---

### 11. FOOTER

Keep existing footer. No view-mode changes needed (or minimal — update CTA link in footer).

---

## Section Order Summary

```
1.  HERO                          [CTA: Apply / Submit Role]
2.  PROBLEM→SOLUTION: Hiring      [no CTA]                    Layout: Landa Dual Cards
3.  PROBLEM→SOLUTION: AI Gap      [CTA: Apply / See Approach] Layout: Landa Dual Cards
4.  OUTCOME METRICS               [no CTA]                    Layout: Aset Bento Grid
5.  HOW IT WORKS                  [CTA: Apply / Submit Role]  Layout: Landa 3-Steps
6.  RESIDENCE                     [CTA: Apply / Learn Process] Layout: Nubien Glow
7.  APPRENTICESHIP                [CTA: Learn More / Access]  Layout: Inline Banner
8.  PARTNERS                      [no CTA]                    Layout: Linear Logo Grid
9.  FAQ                           [no CTA]                    Layout: Existing Accordion
10. CTA (Final)                   [CTA: Apply / Submit Role]  Layout: Nubien Glow CTA
11. FOOTER
```

## Visual Rhythm

The page alternates between layout types to maintain visual interest:
- **Hero** → immersive, full-screen
- **Problem×2** → structured dual cards (glass)
- **Metrics** → asymmetric bento grid (glass)
- **How It Works** → clean 3-column (open)
- **Residence** → DRAMATIC GLOW (full-width break)
- **Apprenticeship** → compact banner (glass)
- **Partners** → logo grid (minimal)
- **FAQ** → accordion (glass)
- **Final CTA** → DRAMATIC GLOW (bookend)

This creates a wave: structured → structured → open → DRAMATIC → compact → minimal → structured → DRAMATIC

## Implementation Notes

- All view-mode switching uses existing `ViewModeContext` (`isEngineer` / `isHiringManager`)
- Content data should live in `apps/web/src/data/landing.ts` (extend existing structure)
- Each section should be a separate component in `apps/web/src/components/landing/`
- CTAs should use consistent button components with view-aware text and links
- Reuse existing primitives: `Section`, `SectionTag`, `SectionHeading`, `GlassCard`, `PrimaryButton`, `OutlineButton`
- Green glow effect for Residence/CTA: radial-gradient with #22DB18 at low opacity + blur
- Sections killed from current site: Philosophy, About (5 cards), Qualifies, Team, Agenda, Marquee
- Current CTA dual-row section replaced by sprinkled CTAs + final CTA
- Existing components to reuse: `animated-gradient.tsx` (for glow sections), `faq.tsx` (accordion pattern), `partners.tsx` (logo grid base), `footer.tsx`
- New components needed: `problem-solution.tsx`, `outcome-metrics.tsx`, `how-it-works.tsx`, `residence.tsx`, `apprenticeship.tsx`, `final-cta.tsx`
