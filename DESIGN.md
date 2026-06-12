---
name: Lumina Code
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is engineered for a high-end Full-Stack Developer portfolio, balancing technical precision with a sophisticated aesthetic. The brand personality is "Expert-Modern"—it feels authoritative yet innovative, catering to high-value enterprise clients and tech-forward recruiters.

The visual style is **Sleek Tech-Minimalism** with **Glassmorphic** accents. It utilizes deep charcoal surfaces to provide a low-strain reading environment, accented by vibrant violet "neon" highlights that signify energy and execution. The emotional response should be one of trust, technical mastery, and forward-thinking creativity. Large, purposeful whitespace and high-contrast typography ensure that the developer's work remains the focal point.

## Colors

The palette is rooted in a "Deep Space" dark mode architecture. 

- **Primary (Vibrant Purple):** Used for key actions, active states, and glowing accents. It represents the "magic" of full-stack execution.
- **Secondary (Teal):** A technical "utility" color used sparingly for code highlights or success states to provide a professional contrast.
- **Tertiary (Indigo):** Used for subtle gradients and secondary buttons, bridging the gap between the primary purple and the background.
- **Neutral (Charcoal & Slate):** The foundational layer. Surface colors are built on #0F172A, while borders use a semi-transparent slate to maintain a soft, glass-like edge.
- **Text:** High-contrast White (#F8FAFC) for headlines and Silver-Gray (#94A3B8) for body copy to ensure long-form legibility.

## Typography

This design system uses **Geist** for headlines and labels to evoke a precise, developer-centric feel. Its geometric nature complements the modern grid. **Inter** is used for body copy to ensure maximum readability across different screen resolutions.

- **Headlines:** Should use tighter letter-spacing to feel impactful and "locked in."
- **Body:** Uses generous line-height to provide a comfortable reading experience for project case studies.
- **Labels:** Always use uppercase with slight tracking (letter-spacing) to differentiate from body text.
- **Code:** For AEM-specific snippets or technical details, use a monospaced font like JetBrains Mono for authenticity.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1200px. 

- **Desktop:** A 12-column grid with 24px gutters. Use large 120px vertical gaps between sections to allow the design to "breathe" and feel premium.
- **Tablet:** 8-column grid with 16px margins.
- **Mobile:** 4-column grid with 16px margins. Headlines scale down significantly to maintain visual hierarchy without overflowing.

Spacing should follow a strict 8px power-of-two scale. Use auto-layout patterns with consistent padding (e.g., 32px for card internals) to maintain a systematic rhythm.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Glassmorphism**, rather than traditional heavy shadows.

- **Level 0 (Background):** Deep charcoal (#0F172A).
- **Level 1 (Cards/Surfaces):** Semi-transparent background (RGBA 30, 41, 59, 0.5) with a `20px` backdrop blur and a thin `1px` border of white at 10% opacity.
- **Level 2 (Interactive):** When hovered, cards should display a subtle **Neon Glow**. This is a drop-shadow with the primary purple color, high blur (30px), and low opacity (0.3).
- **Overlays:** Modals use a darker backdrop blur (80% opacity) to completely isolate the content from the background.

## Shapes

The shape language is **Structured and Modern**. 

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius, providing a professional look that isn't too "bubbly."
- **Large Elements:** Project cards and container sections use 1rem (16px) for a softer, more inviting appearance.
- **Badges:** Skill badges and tags use a fully rounded (pill) shape to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid Purple gradient background with white text. High-contrast and bold.
- **Secondary:** Ghost style with a purple border and a subtle purple tint on hover.
- **Tertiary/Code:** Monospaced text with a small icon, used for "View Source" or "GitHub" links.

### Project Cards
Cards should feature a top-aligned image or a code-pattern background. The content area uses the glassmorphic style (backdrop-blur) with a title in Geist and a short description in Inter. On hover, the border color shifts from faint white to the primary purple.

### Skill Badges
Small, pill-shaped tags. They should have a subtle purple background at 10% opacity with a solid purple text color. This ensures they are visible but don't compete with the primary Call to Action.

### Hero Section
The Hero section uses "Display-LG" typography. A subtle background gradient (radial) of purple at 10% opacity should sit behind the text to create a "glow" effect that draws the eye to the developer's name and title.

### Input Fields
Darker than the background (#020617) with a 1px border. On focus, the border glows purple and the text label moves to a floating position.
