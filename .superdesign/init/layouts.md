# Layouts

## Root Layout (`routes/__root.tsx`)
- ConvexProvider + ThemeProvider wrapping
- Landing pages: no sidebar, uses Navbar + Footer
- App pages: sidebar layout

## Landing Navbar (`components/landing/navbar.tsx`)
- Fixed top, z-50
- Scroll-aware: transparent -> blurred bg on scroll
- Flux page: shows bench logo + "by" + Nairon logo
- Other pages: shows Nairon logo only
- Desktop: nav links (Flux, Universe - both "Coming Soon"), "Hire engineers" CTA (gold button)
- Mobile: hamburger menu

## Landing Footer (`components/landing/footer.tsx`)
- Standard footer with links and branding
