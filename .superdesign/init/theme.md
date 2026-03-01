# Theme & Design Tokens

## Framework
- TailwindCSS 4 with `@theme inline` syntax
- CSS custom properties (OKLCh color space)
- `tw-animate-css` for animation utilities

## Typography
- **Display**: `Urbanist` (--font-display) — headings, stats
- **Body**: `Inter` (--font-body, --font-sans) — body text, UI
- **Serif**: `Instrument Serif` — accent headings on landing

### Font Utilities
```css
.font-urbanist { font-family: var(--font-display); }
.font-inter { font-family: var(--font-body); }
.font-serif { font-family: "Instrument Serif", serif; }
```

### Type Scale (custom)
- `--text-display-sm`: 34px
- `--text-display-md`: 60px
- `--text-display-lg`: 80px
- `--text-display-xl`: 102px
- `--text-display-2xl`: 120px
- `--text-heading-md`: 2.35rem
- `--text-heading-lg`: 3.7rem
- `--text-heading-xl`: 4.4rem
- `--text-body-fine`: 15px
- `--text-micro`: 11px

### Tracking
- `--tracking-hero`: -0.12em
- `--tracking-serif`: -0.02em
- `--tracking-label`: 0.16em
- `--tracking-label-wide`: 0.22em

## Colors (Dark theme — default for landing/Flux)

### Brand
- `--brand`: #C9A96E (gold)
- `--brand-hover`: #B8944F
- `--brand-green`: #BEFF00

### Landing Semantic
- `--landing-text`: #E8E4DE
- `--landing-text-body`: #A39E96
- `--landing-card`: #161614
- `--landing-card-border`: #2A2824

### Dark Mode (applied by default on landing)
- `--background`: oklch(0.145 0 0) — near-black
- `--foreground`: oklch(0.985 0 0) — near-white
- `--muted-foreground`: oklch(0.708 0 0) — gray
- `--border`: oklch(0.269 0 0)

## Gradient Utilities
```css
.text-gradient-linear {
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 56%, rgba(255,255,255,0.58) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-gold {
  background: linear-gradient(135deg, #D4B87A, #C9A96E, #A67A0D);
  /* ... clip text */
}
.glass-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(16px);
}
```

## Radius
- `--radius`: 0.625rem
- `--radius-card`: 28px
- `--radius-card-lg`: 36px
