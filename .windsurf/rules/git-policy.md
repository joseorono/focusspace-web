---
trigger: always_on
description: Project rules — Git/GitHub, styling, performance, dependencies
---

# Git and GitHub policy

Do not stage, commit, or push anything in this repository. Specifically:

- Do not run `git add`, `git stage`, `git commit`, `git commit --amend`, `git push`, `git rebase`, `git merge`, or any other command that modifies the index, working tree history, or remote.
- Do not run any `gh` command that creates, updates, merges, or closes pull requests, issues, branches, releases, or comments.
- Read-only Git/GitHub commands are fine (`git status`, `git diff`, `git log`, `gh pr view`, etc.).

The user will handle all staging, committing, and pushing themselves. If you believe a commit is warranted, describe what you would commit and wait for the user to do it.

# Styling policy

Do not use shadcn/ui components, even though shadcn is installed and `components.json` exists in this repo. Build UI with raw Tailwind utility classes on plain HTML elements (or plain React components you write yourself).

- Do not run `npx shadcn add <component>` or otherwise generate files under `src/components/ui/`.
- Do not import from `@/components/ui/*`.
- If a shadcn primitive would be convenient (Button, Dialog, Input, etc.), write it as a plain element styled with Tailwind instead.
- The shadcn install is intentional — it is kept for its Tailwind theme tokens and CSS variables only, not for its components.

# Performance policy

Be mindful of SEO, Core Web Vitals (LCP, INP, CLS), and general web performance on every change. Concretely:

- Ship semantic HTML: correct landmarks, headings in order, meaningful `alt` text, descriptive link text, and per-route `<title>` / `<meta name="description">` where routing exists.
- Keep the critical path small. Avoid blocking scripts, oversized bundles, and unnecessary client-side state. Prefer CSS and static markup over JS when either would work.
- Images: set explicit `width`/`height` (or aspect-ratio) to prevent CLS, use modern formats (AVIF/WebP), and add `loading="lazy"` + `decoding="async"` for below-the-fold images. Never lazy-load the LCP image.
- Fonts: use `font-display: swap` (or `optional`), preload only the fonts actually used above the fold, and subset where possible.
- Avoid layout thrash: no unsized media, no late-injected banners/ads above existing content, and no animations on properties that trigger layout.
- Flag any change that would plausibly regress LCP, INP, CLS, or bundle size, and suggest the lighter alternative before implementing the heavier one.

# Dependencies policy

Do not install new dependencies (runtime or dev) without explicit approval from the CTO. This means:

- Do not run `npm install <pkg>`, `npm i <pkg>`, `yarn add`, `pnpm add`, `bun add`, or any equivalent that adds a package to `package.json`.
- Updating or removing existing dependencies also requires approval.
- If a task seems to need a new package, stop and ask the CTO first. Propose the package, why it's needed, its size/maintenance status, and whether a small amount of hand-written code would avoid it. Wait for an explicit "yes" before installing.
- Installing a package the CTO has already approved in the current conversation is fine; assume nothing across sessions.
