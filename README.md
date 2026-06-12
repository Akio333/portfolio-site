# AEM Full-Stack Developer Portfolio

A modern, high-performance, and pixel-perfect personal portfolio site designed and optimized specifically for an **Adobe Experience Manager (AEM) Full-Stack Developer**. Built using **Astro v6**, **Tailwind CSS v4**, and **Zod** schema validations.

This site showcases professional experience, featured client projects (Oona Insurance, JP Morgan Chase, Vanguard), customized VS Code extensions, and certifications. It features a decoupled, headless-ready data layer and satisfies modern web design best practices (glassmorphism, vibrant neon-glow accents, fluid micro-interactions, and 100/100 Core Web Vitals speed optimization).

---

## 🚀 Key Features

*   **Decoupled Content Layer (Headless-Ready):** Built on top of **Astro Content Collections** using local JSON schemas. This architecture is future-proofed, allowing you to easily swap local JSON data files with a headless CMS (such as AEM Content Fragments via GraphQL) in the future without modifying layout components.
*   **Aesthetics & Premium UI:** Implements a strict, curated glassmorphic dark mode styling system outlined in [DESIGN.md](file:///Users/akio/Developer/portfolio-site/DESIGN.md) featuring deep spaces, neon purple glows, teal indicators, and fine-tuned geometric typography.
*   **Fluid Animations & Responsiveness:** Fluid mobile responsiveness with a custom-engineered, animated overlay hamburger navigation dropdown. Micro-interactions include interactive project cards, contact forms with dynamic state handling, and a navigation shrink effect on scroll.
*   **Core Web Vitals & SEO Optimized:** Achieves maximum PageSpeed scores using optimized local assets, self-hosted fonts (via `@fontsource` variables), semantic HTML5 structure, and inline SVG icons to eliminate render-blocking fonts/icon libraries.
*   **Accessibility (WCAG 2.1 Compliant):** Formulated with keyboard navigation support (such as `focus-visible` states, skip links, and semantic landmark roles) to meet high-level accessibility standards.

---

## 🛠️ Tech Stack

*   **Core Framework:** [Astro v6](https://astro.build/) (Static Site Generation / SSG)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the next-gen `@tailwindcss/vite` compiler)
*   **Type Safety & Schemas:** [Zod](https://zod.dev/) (Strict type-validation for collections data)
*   **Typography:** [Geist Variable](https://fontsource.org/fonts/geist-variable) (headlines), [Inter](https://fontsource.org/fonts/inter) (body text), and [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono) (monospaced code/technical tags).

---

## 📂 Project Structure

```text
/
├── public/                  # Static assets (images, logos, favicon, resume.pdf)
├── src/
│   ├── content/             # Decoupled JSON data files
│   │   ├── experience/      # Timelines and professional career content
│   │   ├── extensions/      # Technical tool & VS Code extensions metadata
│   │   └── projects/        # Client AEM projects & achievements (Oona, JPMC, Vanguard)
│   ├── layouts/
│   │   └── Layout.astro     # Global HTML scaffolding, header, footer, & mobile nav menu
│   ├── pages/
│   │   ├── index.astro      # Home Page (Hero, Tech Stack Bento, Clients)
│   │   ├── projects.astro   # Projects & Extensions Grid
│   │   ├── experience.astro # Interactive timeline & Expertise categories
│   │   └── contact.astro    # Contact Form & Footprints
│   ├── styles/
│   │   └── global.css       # Tailwind CSS v4 directives and custom scroll/glow classes
│   └── content.config.ts    # Astro Zod collection definitions and glob loaders
├── DESIGN.md                # Strict UI brand rules, color guides, & spacing configs
├── astro.config.mjs         # Astro configurations & Tailwind Vite integration
└── package.json             # Scripts and dependencies
```

---

## 🧞 Commands

All commands are run from the root of the project, using your preferred terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts the local development server at `http://localhost:4321` |
| `npm run build` | Compiles your production-ready static site to `./dist/` |
| `npm run preview` | Previews your production build locally |
| `npm run astro ...` | Runs CLI commands like `astro add` or `astro check` |

---
