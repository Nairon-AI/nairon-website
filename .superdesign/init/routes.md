# Routes

Framework: TanStack Start (file-based routing)

| Path | File | Description |
|------|------|-------------|
| `/` | `routes/index.tsx` | Homepage / landing |
| `/flux` | `routes/flux.tsx` | Flux product page |
| `/universe` | `routes/universe.tsx` | Universe page |
| `/privacy` | `routes/privacy.tsx` | Privacy policy |
| `/terms-and-conditions` | `routes/terms-and-conditions.tsx` | Terms |
| `*` | `routes/$.tsx` | Catch-all 404 |

Root layout: `routes/__root.tsx` — wraps with ConvexProvider, ThemeProvider, sidebar (non-landing only).

Landing pages (`/`, `/flux`, `/universe`) use Navbar + Footer from `components/landing/`.
