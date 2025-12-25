# asharweb
Personal Website for Syed Ashar

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Magic UI ready (utility functions included)

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Magic UI Setup
The project is configured with Magic UI utilities. You can:
- Use the `cn()` utility function from `src/lib/utils.ts` for className merging
- Copy Magic UI components from [magicui.dev](https://magicui.dev) into your `src/components` directory
- All Magic UI components work out of the box with Tailwind CSS and Framer Motion (already installed)

## Project Structure
```
src/
  ├── lib/
  │   └── utils.ts      # Utility functions (cn for className merging)
  ├── App.tsx            # Main app component
  ├── main.tsx           # Entry point
  └── index.css          # Global styles with Tailwind directives
```