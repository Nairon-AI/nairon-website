# Nairon Website

Full-stack TypeScript monorepo for the Nairon website.

## Structure

```
nairon-website/
├── apps/web/              → TanStack Start frontend (React 19, Vite 7, TailwindCSS 4)
├── packages/backend/      → Convex backend + Better-Auth authentication
├── packages/env/           → Runtime environment variable validation (t3-env + Zod)
├── packages/config/        → Shared TypeScript configuration
├── scripts/                → Dev utility scripts
```

## Tech Stack

- **Frontend**: TanStack Start (SSR), React 19, TailwindCSS 4, shadcn/ui (new-york)
- **Backend**: Convex (reactive BaaS), Better-Auth (email/password auth)
- **Build**: Turborepo, Bun, Vite 7
- **Deployment**: Vercel (Nitro preset)
- **Code Quality**: Biome (linting, formatting, import sorting)

## Commands

```bash
bun run dev          # Start all services (Turborepo)
bun run dev:web      # Start web app only
bun run dev:server   # Start Convex backend only
bun run build        # Build all packages
bun run check-types  # Type-check all packages
```

## Environment Variables

### Root (.env)
- `ANTHROPIC_API_KEY` — Anthropic API key

### Web (apps/web/.env)
- `VITE_CONVEX_URL` — Convex deployment URL (required)
- `VITE_CONVEX_SITE_URL` — Convex site URL for auth (required)
- `NODE_ENV` — development | production
- `PORT` — Dev server port (default: 3001)

## Setup

```bash
./scripts/setup-env.sh   # Create .env files
bun install               # Install dependencies
bun run dev               # Start development
```
