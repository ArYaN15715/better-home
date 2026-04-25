# Design Brief

**Purpose** | Premium real estate pitch demo for "Better Home" — local Ahmedabad consultant. Lead generation + visual impact priority.
**Tone** | Confident, minimal luxury. Clean, fast, conversion-focused. Zero clutter.
**Differentiation** | Orange (#FF5A2C) + white (FFFFFF) only. Cinematic animations (parallax hero, card lift, stagger text, ripple buttons). Premium real estate feel without blacks/greys.

## Color Palette (OKLCH)

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary | 62 0.22 32 | Orange CTAs, highlights, interactive elements |
| Background | 1.0 0 0 | Pure white page background |
| Card | 1.0 0 0 | White card surfaces |
| Accent | 55 0.18 30 | Deeper orange for badges, tags, secondary accents |
| Muted | 0.95 0.02 32 | Light orange tints, subtle backgrounds |
| Border | 0.93 0.01 32 | Thin orange-tinted borders, input edges |
| Foreground | 0.18 0 0 | Dark text (near black) |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk 700 | Headings, hero title, section titles (bold, modern) |
| Body | Plus Jakarta Sans 400 | Body text, description, microcopy |
| Mono | System monospace | Code, edge cases (minimal usage) |

## Structural Zones

| Zone | Treatment | Details |
|------|-----------|---------|
| Hero | Full-width image + orange gradient overlay | Parallax zoom on scroll, low-opacity orange gradient (0.15 alpha) |
| Header | Minimal, white bg | Logo/brand name, minimal navigation (mobile: hidden) |
| Trust Bar | Horizontal scroll badges | 5.0 rating, 500+ deals, Bopal expert, verified listings |
| Content Sections | Card-based, white cards | Featured properties, why-choose-us, filter bar, lead form |
| Bottom CTA Bar | Sticky mobile footer | Call, WhatsApp, Get Options (always visible on mobile) |
| Footer | Minimal white bg | Short about text, contact, copyright |

## Shape & Spacing

- **Border radius**: `rounded-lg` (8px) for cards, `rounded-md` (6px) for buttons/inputs, `rounded-full` for badges
- **Spacing density**: Generous vertical padding (px-4 py-6+), tight horizontal gutters (mobile-first 16px margin)
- **Elevation**: Subtle shadows — `shadow-soft` (8% orange rgba), `shadow-lift` (12% orange rgba) on hover

## Component Patterns

| Component | Style | Animation |
|-----------|-------|-----------|
| CTA Button | Bold orange, white text, rounded-md | Hover: scale-105, shadow-lift, transition-smooth |
| Property Card | White bg, orange badge, image top | Hover: card-lift (-translate-y-1), shadow-lift |
| Badge/Tag | Orange accent bg, white text, rounded-full | Subtle, no animation |
| Input | White bg, orange border, rounded-md | Focus: ring-primary |
| Hero Headline | Space Grotesk Bold, 32px+ mobile | Fade-in stagger on load |

## Motion & Animations

| Animation | Keyframes | Duration | Curve |
|-----------|-----------|----------|-------|
| fade-in | opacity 0→1, translateY(8px)→0 | 400ms | ease-out |
| slide-in | opacity 0→1, translateX(-16px)→0 | 300ms | ease-out |
| zoom-in | scale(0.95)→1, opacity 0→1 | 300ms | ease-out |
| hero-zoom | Slow parallax scroll effect on bg image | Continuous on scroll | linear |
| card-lift | translateY(0)→-4px on hover | 200ms | ease-out |
| ripple | CTA button press effect (optional) | 300ms | ease-out |

**Key:** Stagger text elements on hero (delay each line 100ms). Parallax hero background at 0.3x scroll speed. Smooth transitions everywhere — no snapping.

## Constraints & Guardrails

- No blacks, no greys as main colors — orange + white only
- No gradients except orange overlay on hero + subtle accent gradient (15% alpha)
- No decorative patterns or noise textures
- No heavy shadows — keep shadows orange-tinted, low opacity
- Mobile-first: design for 375px width first, scale up gracefully
- Sticky bottom bar on mobile is CRITICAL for lead capture
- Fast load (<2.5s) — optimize images, minimize animations on first paint

## Signature Detail

Orange (#FF5A2C) accent on text, buttons, and badges creates recognition. Combined with pure white + cinematic animations, it feels premium and approachable — neither corporate nor playful. The strictness of the 2-color palette (orange + white) is the differentiator.
