# Suyog Mule portfolio

An evidence-first portfolio for an AEM full-stack developer. The interface uses Swiss editorial composition, direct technical language, and real project imagery to help recruiters and engineering leads understand the work quickly.

## Design system

- Design variance 5, motion intensity 3, visual density 4.
- Geist is the primary typeface. JetBrains Mono is limited to architecture terms, technology labels, and tool glyphs.
- A warm neutral background, charcoal text, and vermilion accent form the complete palette. Dark mode uses the same hierarchy and accent.
- Images and controls use a 12px radius. Sections use borders and whitespace instead of elevated cards.
- The homepage follows one sequence: introduction, proof, selected work, AEM capability map, developer tools, and contact.
- Motion is limited to entrance, section reveal, hover, focus, and pressed-state feedback. Reduced-motion preferences disable it.
- The transparent portrait cutout is the only hero image. Project artwork represents engineering work without exposing confidential client interfaces.

## Accessibility and performance

- Semantic heading order, labeled navigation, a skip link, visible keyboard focus, and Escape support for the mobile menu are required.
- Text, muted copy, accent text, and buttons meet WCAG AA contrast in both themes.
- Astro generates responsive WebP variants. The hero portrait is prioritized and below-the-fold project images are lazy-loaded.
- PostHog loads only when a project token is configured.
- No custom pointer, canvas background, parallax, 3D effect, or animation library is used.

## References

[Lusion's projects](https://lusion.co/projects/) informed the image hierarchy and spacing. [A1's typographic portfolio gallery](https://www.a1.gallery/websites/typographic-portfolio) informed the typography and restrained navigation. The final layout is original and follows the approved mockups in `mocks/`.

## Assets

- `public/images/developer-portrait-editorial.webp`: identity-preserving editorial portrait generated from the supplied portrait.
- `public/images/developer-portrait-cutout.webp`: transparent hero cutout derived from the editorial portrait.
- `public/images/developer-workspace.webp`: Oona project artwork.
- `public/images/jpmc-skyscraper.webp`: Chase project artwork.
- `public/images/og-image.png`: existing social-sharing card.
- `mocks/`: approved section-level design references.

Image generation used the built-in ImageGen tool. The final prompt is recorded in `design/image-prompts.md`.
