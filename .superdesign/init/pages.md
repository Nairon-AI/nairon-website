# Page Dependency Trees

## /flux (`routes/flux.tsx`)
```
routes/flux.tsx
  components/landing/navbar.tsx
    components/landing/modal-provider.tsx
    components/landing/hire-modal.tsx
  components/landing/footer.tsx
  components/hero-section.tsx          <-- HERO (Tailark Pro)
    components/ui/illustrations/image-illustration.tsx
    components/ui/button.tsx
    components/ui/text-animate.tsx
  components/expandable-features-10.tsx
  components/bento-7.tsx
  components/how-it-works-1.tsx
  components/comparator-7.tsx
  components/stats-4.tsx
  components/integrations-6.tsx
  components/testimonials-7.tsx
  components/faqs-1.tsx
  lib/seo.ts
  data/flux.ts (copy/data)
  styles/globals.css
  styles/nbench.css (flux-specific animations)
```

## / (`routes/index.tsx`)
```
routes/index.tsx
  components/landing/navbar.tsx
  components/landing/footer.tsx
  components/landing/hero-new.tsx
  components/landing/what-we-do.tsx
  components/landing/partners.tsx
  components/landing/testimonials.tsx
  ...more landing sections
```
