# Suyog Mule's portfolio

A personal portfolio built with Astro 6 and content collections. It is styled as an AEM repository open in a code editor: each part of the CV is a JCR node with a Preview tab and a `.model.json` tab. See [DESIGN.md](DESIGN.md).

## Development

Requires Node.js 24 or newer.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server at localhost:4321 |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run brand` | Re-render the icons and OG image (needs Google Chrome) |

## Editing the site

- `src/lib/portfolio.ts` holds the profile, skills, certifications and résumé text, and builds the content tree and each node's model JSON.
- `src/content/` holds experience, projects and extensions. Adding a JSON file adds a node to the tree.
- `src/pages/[...path].astro` renders every node's Preview.
- `src/layouts/Layout.astro` contains metadata, the editor shell and client behaviour.
- `src/styles/global.css` defines the tokens and layout.
- `public/favicon.svg` and `design/og-image.html` are the sources for the icons and OG image. Edit them, then run `npm run brand`.
- `public/` contains the rendered icons, web manifest, OG image and résumé PDF.

The extension loader fetches public VS Code Marketplace metadata at build time, with GitHub and local metadata as fallbacks. Contact links open email or the linked public profiles. There is no contact form backend.

The production URL defaults to `https://shipsolo.xyz`, matching the repository homepage. Set `PUBLIC_SITE_URL` at build time to use a different domain. Canonical and social image URLs use this setting.
