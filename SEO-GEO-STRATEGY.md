# SEO + GEO Strategy: Ranking in SF for AI Engineer Hiring

## Target Keyword Universe

### Primary keywords (high intent, high competition)
- "hire AI engineers" / "hire AI engineers SF"
- "AI engineer recruiting" / "AI recruiting agency"
- "AI-native engineers"

### Secondary keywords (medium intent, lower competition)
- "AI nativeness benchmark"
- "AI engineer assessment tool"
- "how to evaluate AI engineers"
- "AI-native vs traditional developer"
- "AI engineer hiring process"

### Long-tail keywords (low competition, high conversion)
- "how to tell if an engineer is AI-native"
- "AI engineer skills assessment 2026"
- "benchmarking AI coding skills"
- "difference between AI-native and AI-assisted development"
- "NBench AI benchmark"
- "agent-first engineering hiring"
- "token efficiency engineering"
- "eval discipline in AI development"

---

## Phase 1: Foundation (Weeks 1-4)

### 1. Google Search Console + Analytics
- Verify site ownership in Google Search Console
- Submit sitemap
- Set up GA4 with conversion tracking on:
  - Hire modal opens
  - Candidate modal opens
  - Form submissions
  - NBench GitHub clicks
- Set target country to US in GSC (International Targeting)

### 2. Google Business Profile
- If you have or plan any SF presence (even a coworking desk), create a GBP listing
- Category: "Employment Agency" + "IT Recruiting"
- This alone can get you into local pack results for "AI recruiting SF"

### 3. Launch the Blog
Blog infrastructure is ready (`blogPostJsonLd`, `seoHead` for articles). Content plan for month one:

| Week | Title | Target Keyword | Type |
|---|---|---|---|
| 1 | "What AI-Native Actually Means (And Why Most Engineers Aren't)" | ai native engineer, ai native development | Definitional / thought leadership |
| 1 | "We Benchmarked 500 Engineers. Here's What Separates the Top 4%." | ai engineer benchmark, ai coding assessment | Data-driven / original research |
| 2 | "The 3 Dimensions of AI-Nativeness: Agent-First Thinking, Eval Discipline, Token Efficiency" | ai engineer skills, how to evaluate AI engineers | Educational / framework |
| 2 | "Why Your 'AI Engineer' Job Post Attracts the Wrong Candidates" | hire ai engineers, ai engineer job description | Pain-point / how-to |
| 3 | "NBench: How We Built an Open-Source AI-Nativeness Benchmark" | nbench, ai benchmark tool, ai assessment open source | Product / SEO + GitHub traffic |
| 3 | "AI-Native vs AI-Assisted: The Hiring Mistake Costing Companies $200K" | ai native vs ai assisted, ai engineer hiring mistakes | Comparison / high intent |
| 4 | "How to Interview AI-Native Engineers (Questions That Actually Work)" | ai engineer interview questions, how to interview ai engineers | Tactical / SEO magnet |
| 4 | "From Manual Coding to Agent Orchestration: The Developer Evolution" | agent orchestration, ai development workflow | Thought leadership |

**Each blog post should include:**
- `blogPostJsonLd` structured data
- Proper `seoHead` with unique OG image
- Internal links to homepage and `/nbench`
- A CTA (hire modal or candidate modal)
- 1500-2500 words minimum

---

## Phase 2: Authority Building (Months 2-4)

### 4. NBench as an SEO Flywheel
NBench is the most powerful SEO asset. It's a unique, brandable, linkable tool.

- **Create a public leaderboard page** (`/nbench/leaderboard`) — engineers share their scores, driving organic links
- **Create a "Get Your Score" landing page** (`/nbench/assess`) — captures emails and generates shareable score cards
- **Publish monthly "State of AI-Nativeness" reports** — original data that tech press will cite and link to
- **GitHub README should link back to naironai.com/nbench** — GitHub is a massive referral and authority source

### 5. Programmatic SEO Pages
Create template-based pages at scale:

- `/hire/ai-engineer-[city]` — "Hire AI-Native Engineers in San Francisco", "...in New York", etc.
- `/roles/[role-type]` — "AI-Native Frontend Engineers", "AI-Native Backend Engineers", "AI-Native Full-Stack Engineers"
- `/benchmark/[technology]` — "AI-Nativeness Benchmark for React Engineers", "...for Python Engineers"

Each page: unique meta description, LocalBusiness schema for the city variant, 300-500 words of unique content, CTA to hire modal.

### 6. Backlink Strategy
- **HARO / Connectively** — Respond to journalists covering AI hiring, future of work, tech recruiting
- **Guest posts** — Write for TechCrunch, The Pragmatic Engineer, ByteByteGo, or AI-focused newsletters
- **Product Hunt launch** for NBench — one-day authority spike + permanent backlinks
- **Dev community presence** — Post NBench to Hacker News, Reddit r/programming, Dev.to
- **Partner with AI bootcamps/schools** — They link to your hiring page, you refer their graduates

---

## Phase 3: GEO (Generative Engine Optimization) Strategy

GEO is about being the answer that AI systems (ChatGPT, Perplexity, Gemini, Claude) cite when users ask about AI engineer hiring.

### 7. robots.txt (Done)
Already allowing GPTBot, ChatGPT-User, Google-Extended, Anthropic-ai, ClaudeBot, and PerplexityBot. Blocking Bytespider and CCBot (data scraping, no referral value).

### 8. Content Structure for AI Citation
AI models cite sources that:
- **Define terms clearly** — Write the canonical definition of "AI-native engineer" that AI models will learn and cite
- **Provide structured data** — JSON-LD schemas are already in place. AI models parse structured data heavily
- **Use authoritative, citable formats** — "According to Nairon AI's benchmark of 500+ engineers..." is more citable than vague claims
- **Include statistics and data points** — "Engineers scoring above 8.5 on NBench deliver 3.2x more production-ready code" — AI models love citing specific numbers

### 9. Target GEO Queries
People asking AI assistants:
- "What is an AI-native engineer?" → Blog defines this
- "How do I hire AI engineers in San Francisco?" → City pages answer this
- "What tools assess AI engineering skills?" → NBench is the answer
- "What's the difference between an AI-native and traditional engineer?" → Comparison content
- "Best AI recruiting agencies" → Brand should appear in AI responses

### 10. Create "Entity" Authority
AI models build entity graphs. You want "Nairon AI" and "NBench" to be recognized entities:
- **Wikipedia page** for NBench (once there's enough third-party coverage)
- **Crunchbase profile** for Nairon AI
- **LinkedIn company page** with regular posting (already have this)
- **Consistent NAP** (Name, Address, Phone) across all web properties
- **Schema.org** markup (already implemented — Organization, Service, SoftwareApplication)

---

## Phase 4: Ongoing Monthly Cadence

| Activity | Frequency | Owner |
|---|---|---|
| Publish blog posts | 2x/week | Content |
| Update sitemap `<lastmod>` | With each deploy | Engineering |
| Check GSC for crawl errors | Weekly | Engineering |
| Publish NBench data report | Monthly | Data/Content |
| HARO/press outreach | Weekly | Marketing |
| Monitor AI citation presence (search "Nairon" in ChatGPT, Perplexity) | Bi-weekly | Marketing |
| Update robots.txt for new AI bots | Quarterly | Engineering |
| Review and refresh top-performing blog posts | Monthly | Content |
| Build 5-10 new backlinks | Monthly | Marketing |

---

## Key Metrics to Track

| Metric | Tool | Target (6 months) |
|---|---|---|
| Organic impressions | GSC | 50K/month |
| Organic clicks | GSC | 3K/month |
| Domain Authority | Ahrefs/Moz | 30+ |
| Referring domains | Ahrefs | 100+ |
| AI citation rate | Manual checks in ChatGPT/Perplexity | Appear in top 3 results for "AI engineer hiring" |
| Blog traffic | GA4 | 40% of total traffic |
| Conversion rate (modal opens) | GA4 | 5%+ |
| NBench GitHub stars | GitHub | 1K+ |

---

## The Asymmetric Advantage

Competitors (Hired, Toptal, etc.) are generic recruiting platforms. Our edge:

1. **NBench is a moat** — No other recruiting agency has an open-source, verifiable assessment tool. This is the most linkable, citable, differentiating asset.
2. **"AI-native" is a term we can own** — It's not yet dominated by any brand in search. Be the first to rank for it.
3. **Data-driven content beats generic content** — "We benchmarked 500 engineers and found..." beats "Top 10 tips for hiring AI engineers" every time.
4. **GEO is a blue ocean** — Most recruiting agencies haven't even thought about AI citation optimization. Being early here compounds over time.
