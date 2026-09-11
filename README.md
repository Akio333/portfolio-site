# Suyog Mule's portfolio

A personal portfolio built with Astro 6, Tailwind CSS 4, and Astro content collections. Five pages cover selected projects, professional experience, open-source tools, contact information, and a native résumé.

The design uses self-hosted Geist and JetBrains Mono, system-aware light and dark themes, and custom sculptural artwork with mouse-driven perspective. Entrance animations and section reveals respect reduced-motion preferences. The content remains readable without JavaScript.

## Development

Requires Node.js 24 or newer.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server at localhost:4321 |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build |

## Editing the site

- `src/pages/` contains Home, Work, Experience, and Contact.
- `src/components/ProjectList.astro` renders projects on Home and Work.
- `src/layouts/Layout.astro` contains metadata, navigation, footer, theme controls, and motion behavior.
- `src/styles/global.css` defines themes, layouts, and responsive styles.
- `src/content/` contains project, experience, and extension data.
- `public/` contains the portrait, project imagery, custom favicon variants, OG image, and résumé.
- [DESIGN.md](DESIGN.md) describes the visual direction.

The extension loader fetches public VS Code Marketplace metadata at build time, with GitHub and local metadata as fallbacks. Contact links open email or the linked public profiles. There is no contact form backend.

The production URL defaults to `https://shipsolo.xyz`, matching the repository homepage. Set `PUBLIC_SITE_URL` at build time to use a different domain. Canonical and social image URLs use this setting.
