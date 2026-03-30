## Quick context

This repo is a personal website built with React + TypeScript and Vite. The app mounts page components under `src/screens/*` and uses React Router (routes live in `src/App.tsx`). The production build is output to the `docs/` folder and the Vite `base` is set to `/asharweb/` in `vite.config.ts` — keep that in mind for asset paths and routing behavior.

## Primary workflows (commands)
- Local dev: `npm run dev` (starts Vite dev server)
- Build: `npm run build` — runs `tsc -b` then `vite build` and writes static site to `docs/` (used for GitHub Pages)
- Preview production build: `npm run preview` (vite preview)
- Lint: `npm run lint` (runs ESLint)

Files to check for changes when editing behavior:
- `vite.config.ts` — base path and `outDir: 'docs'` (important for deploy)
- `package.json` — scripts including `build` which runs `tsc -b` (TypeScript build step)

## Code layout & conventions (what to follow)
- Pages: `src/screens/<page>/` contains page components (e.g., `home`, `projects`, `blog`, `contact`).
- Page subcomponents: `src/screens/home/home-components/` holds reusable page parts (e.g., `TopHeader`, `MainHeader`).
- Small, reusable UI components live in `src/components/` (e.g., `BackgroundAnimation.tsx`).
- Styling: CSS Modules live under `src/styles/` (subfolders per feature). `vite.config.ts` sets `localsConvention: 'camelCase'` so class names are accessed in camelCase from TSX.
- Imports in the codebase regularly include file extensions (e.g., `import { TopHeader } from "./screens/home/home-components/TopHeader.tsx"`). Follow that import style when adding new files to avoid inconsistencies.

## Routing and assets
- Routes are declared in `src/App.tsx` using React Router v7 (`<Routes><Route .../></Routes>`). Match route paths there when adding pages.
- Static/public assets: `public/` contains files copied to the root at build time (profile_image, resume, etc.). Built output is placed in `docs/` and docs also contains an `assets/` folder — verify any path changes against `vite.config.ts` `base` option.

## Third-party libs & runtime notes
- UI libraries: Mantine components are used (`@mantine/core`, `@mantine/hooks`, etc.).
- Calendar and GitHub visualization libs are present (`react-github-calendar`, `react-contribution-calendar`). Check props and data shapes used in `src/screens/home/home-components/GithubGraph.tsx` when integrating.

## TypeScript & build cautions
- `npm run build` runs `tsc -b` before `vite build`. If adding new TS project references or changing tsconfig, ensure `tsc -b` remains satisfied.
- There are multiple tsconfig files: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`. When debugging type errors, check which config a path falls under.

## Editing & PR guidance for AI edits
- Prefer small focused changes. Update imports explicitly using the repository's observed pattern (include `.tsx` for component imports).
- When modifying public paths or base path, update `vite.config.ts` and verify `docs/` output shape.
- Lint with `npm run lint` after changes. No test suite exists in the repo; focus on local manual check via `npm run dev` and `npm run build` -> `npm run preview`.

## Files to inspect for examples
- `src/App.tsx` — app routing and top-level layout
- `vite.config.ts` — base path and build outDir
- `src/screens/home/home-components/TopHeader.tsx` — site header used across pages
- `src/styles/` — CSS module usage examples and naming conventions

If anything in this instruction file looks off or you want more detail (e.g., examples for a specific component pattern or how to run a specific debug scenario), tell me which area and I'll expand or update this file.
