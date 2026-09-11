# Suyog’s portfolio

A spacious developer portfolio built around a sculptural orange S, generous sans-serif typography, and image-led project previews. Native Astro and CSS retain the existing five routes and content collections.

## Direction

- Design variance 7, motion intensity 5, visual density 3. The brief calls for an individual identity and less supporting copy.
- Self-hosted Geist for all typography. JetBrains Mono appears only in the developer tool symbols.
- Neutral off-white or charcoal backgrounds, with vermilion as the single identity accent. Text and controls use accessible theme-specific colors. The system theme is respected, with a persistent manual switch.
- No section numbers, little subtitles, decorative status text, or repeated explanatory captions. Project descriptions and career details remain on their relevant pages.
- Images have 16px corners. Buttons and compact controls are round. Small mobile tool symbols use 12px corners.
- The hero S responds to pointer movement. Entrance motion establishes hierarchy, section reveals introduce content, and hover transitions provide feedback. Reduced-motion preferences disable movement. Content stays visible without JavaScript; mobile navigation has a no-script fallback.
- The homepage uses two staggered project images and one compact project link. Work details use expandable native disclosure controls.
- Project photos are representative artwork, not screenshots of confidential client products.

## References

[Lusion’s projects](https://lusion.co/projects/) informed the emphasis on artwork and generous spacing. [A1’s typographic portfolio gallery](https://www.a1.gallery/websites/typographic-portfolio) informed the restrained navigation and large type. These are visual references, not copied layouts or assets.

## Identity assets

- `public/favicon.svg`: custom geometric S, drawn as a native vector for crisp rendering at favicon sizes.
- `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png`: raster exports of the same mark.
- `public/images/suyog-sculpture.webp`: generated orange metallic ribbon S with transparency, optimized to 960 × 960.
- `public/images/og-image.png`: generated social card, exported at 1200 × 630.
- Image generation used the built-in ImageGen tool. Prompts are recorded in `design/image-prompts.md`.

All routes share the OG image and use the configured production domain for absolute metadata URLs.
