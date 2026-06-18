# Marcelo Guzmán · GIS & Environmental Intelligence — Design System

A design system distilled from the personal portfolio of **Marcelo Guzmán De la Garza**, a biologist and GIS specialist working at the intersection of geospatial analysis, ecology, and environmental policy (Monterrey, Mexico). The product it describes is a single-page portfolio "atlas" of fieldwork, models, and instruments — and the aesthetic it codifies is **"Futuristic Organic Gradient Modernist."**

This system gives a design agent everything needed to produce on-brand interfaces, slides, and assets: the dual-theme color system, the Syne/Barlow/Instrument-Serif type stack, the signature liquid-glass surfaces and atmospheric backdrop, reusable React primitives, and a recreation of the portfolio itself.

## Source

- **GitHub:** [`mgdlg/marcelo_test`](https://github.com/mgdlg/marcelo_test) — the portfolio website (`index.html`, `styles.css`) this system is reverse-engineered from. Explore it to recreate sections not yet covered here (Awards, Education, References, the Leaflet portfolio map, per-project detail pages).
- Related repos by the same author: [`mgdlg/marcelo`](https://github.com/mgdlg/marcelo) (GitHub Pages portfolio) and [`mgdlg/dataton2026-incendios`](https://github.com/mgdlg/dataton2026-incendios) (DATATON wildfire-susceptibility work).

Tokens, base CSS, and imagery were lifted directly from the source `styles.css`; the React components are simplified, token-driven recreations of its bespoke CSS patterns.

---

## CONTENT FUNDAMENTALS

How this brand writes.

- **Voice — first person, quietly confident.** Marcelo speaks as "I": *"I am a biologist working at the intersection of geospatial analysis, ecology, and environmental policy."* Claims are backed by specifics, never hyped. The signature register: *"…keep decisions current with real-time geospatial signals — quietly, precisely, and at scale."*
- **Precise but legible.** Technical terms (NDVI, DEM/DSM, PCA, ModelBuilder, multispectral) are used freely, but always anchored to outcomes — *what it enabled*, not jargon for its own sake.
- **Scientific / instrument metaphor.** Sections are framed as readings on an instrument: `01 Orientation`, `02 Recognition`, `03 Instrumentation`, `04 Featured work`, `05 Casework`. Eyebrows and labels read like dial markings.
- **Casing.** Headlines and prose use **sentence case** ("Featured projects", "Technical skills"), never Title Case. Labels, eyebrows, meta, and buttons are **UPPERCASE** with wide tracking.
- **Punctuation.** The middot ` · ` is the house separator everywhere ("GIS · Remote Sensing · Environmental Intelligence", "Monterrey, Mexico"). Em-dashes set off asides. Numbers are zero-padded (`01`, `02`, `09`).
- **Editorial flourish.** Occasional elegant statements are set in *Instrument Serif italic* — used for the awards summary and large figures ("2.9%"), never for body copy.
- **No emoji.** The brand never uses emoji. Iconography is geometric/typographic (see ICONOGRAPHY).
- **Measured numbers.** Stats appear sparingly and are real and sourced (e.g. the CENEVAL 2.9% award links to official statistics). Avoid invented metrics.

---

## VISUAL FOUNDATIONS

### Themes
Dual theme, **dark by default**. Set `data-theme="dark"` or `data-theme="light"` on `<html>`.
- **Dark — "warm dark":** a near-black warm base (`oklch(0.08 0.008 45)`), warm off-white ink, and a single **amber-gold** accent (`--accent-warm: oklch(0.74 0.12 65)`). Atmospheric, cinematic.
- **Light — achromatic + cool blue:** pure-white achromatic neutrals with a single **cool-blue** accent (`oklch(0.48 0.16 242)`). Crisp, editorial. The accent literally swaps hue family between themes; everything else is driven by the same token names.

### Color
- Defined entirely in **oklch** for perceptual consistency. One accent per theme — never two competing accent hues.
- Warm spectral aura hues (`--spec-azure/-magenta/-amber`) are *backdrop-only* — large, heavily blurred, screen-blended orbs at ~12% opacity. Never used as fills or text.
- The primary button is a single amber→rust **gradient** pill; otherwise gradients are reserved for the hero name lockup and the atmospheric aura. Avoid decorative gradients on cards.

### Type
- **Syne** (geometric grotesque) — all display & headings, weights 600/700/800, tight `-0.02em` tracking, line-height ~1.05. The hero name is `clamp(64px, 11vw, 168px)`.
- **Barlow** — body (light 300 for leads/intros, 400 for dense UI) and *also* the "mono" role: wide-tracked UPPERCASE labels, eyebrows, meta, instrument readouts.
- **Instrument Serif** — italic editorial figures and pull-quotes only.
- Body is 17px / 1.55. Leads are Syne semibold. Section intros are Barlow light at `clamp(17px, 1.4vw, 21px)`.

### Backgrounds
Full-viewport, fixed, layered: a **substrate** (warm radial wash → near-black in dark, flat white in light), a fine **grain** film (`feTurbulence` SVG, overlay-blend in dark / faint multiply in light), and per-hero **aura** orbs that slowly drift. There are no photographic page backgrounds; imagery lives inside cards and media frames. In light theme the auras are hidden and grain nearly vanishes.

### Surfaces, cards & borders
- The house surface is **liquid glass**: translucent fill + `backdrop-filter` blur/saturate + a luminous gradient **hairline drawn via a masked `::before`** (not a plain border). Two strengths: `.liquid-glass` (subtle, 4px blur) and `.liquid-glass-strong` (36px blur, for overlays/floating panels). In light theme glass becomes a near-opaque frosted white with a soft drop shadow.
- Cards do **not** use solid 1px colored borders or colored left-accent stripes. Edges are hairlines (`--rule` = white/black at ~10%) or the glass `::before`.
- Corner radii: `28px` large panels, `22px` media frames, `16px` small cards, `14px` media chips, `9999px` for all buttons/tags/nav. Generous rounding throughout.

### Shadows & elevation
- Glass panels carry an **inset top highlight** + soft outer shadow rather than hard drop shadows.
- The hero portrait uses a deep, stacked **float shadow** (`--shadow-float`) and a gentle 6s floating animation with a slight rotation.

### Motion
- One house easing curve: `cubic-bezier(.2, .7, .2, 1)`. Three durations: `--t-fast 220ms`, `--t-base 520ms`, `--t-slow 900ms`.
- Style is **smooth fades and slow drifts**, never bouncy. Auras drift over 22s; the skill ticker scrolls linearly over 50s; slides cross-fade.
- **Hover:** links/text shift toward the accent color; buttons lift `translateY(-2px)` and the trailing arrow slides `+4px`; tags lift `1px` and lighten; cards lift `4px`. **Press:** no shrink — emphasis is via color/translate, not scale-down.
- All decorative animation respects `prefers-reduced-motion`.

### Layout
- Centered content column, `max-width: 1240px`, `32px` side gutters.
- Vertical rhythm: `~120–140px` section padding.
- Sections carry a floating **instrument label** in the top-left gutter (`01 · Orientation`).
- Section headers are a two-column grid: large Syne `h2` left, light intro paragraph right.

### Transparency & blur
Used deliberately, not everywhere: the nav pill, all glass cards, media-nav capsules, and the theme toggle are translucent + blurred so the atmospheric backdrop reads through them. Solid fills are reserved for the primary button and (in light theme) frosted cards.

### Imagery character
GIS/scientific visuals — NDVI/land-cover maps, drone & LiDAR captures, ModelBuilder diagrams, biodiversity charts, field photos. They're treated cool and slightly desaturated (`saturate(0.85–0.9) contrast(1.05)`), framed in `18–22px` rounded media wells, often with a bottom protection gradient when text overlays.

---

## ICONOGRAPHY

**There is no icon font, icon library, or SVG icon set, and no emoji.** Iconography is entirely **geometric and typographic** — a deliberate, minimal vocabulary:

- `◇` (white diamond) — separator in the skill ticker.
- `→` — the trailing arrow baked into every primary button; slides right on hover.
- `‹ › ↑↓` — carousel / slideshow navigation chevrons.
- `↗` — "external link" mark (drawn as a CSS-masked SVG arrow on award links).
- **Glowing dots** — 6–8px accent circles with a soft `box-shadow` glow, used as meta bullets, map pins, and timeline nodes.
- **Short rules / dashes** — a `12×1px` accent line as the list-item marker; a `32–36px` gradient rule leads every eyebrow and instrument label.
- The brand identity is a **wordmark** ("Marcelo Guzmán", with "Guzmán" in the gradient accent) and a **monogram** ("MGDLG"); there is no logo image file in the source.

**Guidance for new work:** stay within this set. If a UI genuinely needs line icons (e.g. a settings screen), use a thin, single-weight stroked set — **Lucide** (1.5–2px stroke, rounded caps) is the closest CDN match to the brand's hairline/geometric feel — and keep them sparse. *(Substitution flag: Lucide is a suggested match, not used in the source; confirm before relying on it.)* Prefer the geometric marks above wherever they suffice.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `README.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts `@import` (Syne, Barlow, Instrument Serif).
- `colors.css` — dark (`:root`) + light (`[data-theme="light"]`) color tokens & semantic aliases.
- `typography.css` — family, weight, size, line-height, tracking tokens.
- `spacing.css` — layout, spacing scale, radii, shadows, motion tokens.

**Base** (`base/`)
- `elements.css` — element defaults (headings, body, links) + editorial helper classes (`.eyebrow`, `.lead`, `.serif-figure`, `.section-intro`).
- `atmosphere.css` — `.liquid-glass` / `.liquid-glass-strong`, `.substrate`, `.grain`, `.aura`.

**Components** (`components/core/`) — React primitives. Mount from `window.MarceloGuzmNGISDesignSystem_344c90`.
- `Button` · `Tag` + `TagList` · `Pill` · `Eyebrow` + `InstrumentLabel` · `GlassPanel` · `Card`
- Each has a `.d.ts` (props contract) and `.prompt.md` (usage). `core.card.html` is the live specimen.

**Guidelines** (`guidelines/`) — foundation specimen cards rendered in the Design System tab: type (display/body/serif/labels), colors (dark/accent/aura/light), spacing (radii/scale/elevation), brand (wordmark/atmosphere/iconography).

**UI Kit** (`ui_kits/portfolio/`) — interactive recreation of the portfolio: `index.html` + `Nav`, `Hero`, `SkillsSection`, `ProjectsSection`. See its own README.

**Assets** (`assets/imagery/`) — real GIS project visuals imported from the source repo.

---

## FONTS — substitution note
All three families (**Syne**, **Barlow**, **Instrument Serif**) are genuine **Google Fonts** and load via `@import` in `tokens/fonts.css` — no substitution was needed. If you need the binaries offline (e.g. PPTX export), download the matching weights from Google Fonts.
