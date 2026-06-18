---
name: marcelo-guzman-gis-design
description: Use this skill to generate well-branded interfaces and assets for Marcelo Guzmán's GIS & Environmental Intelligence portfolio brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the "Futuristic Organic Gradient Modernist" style (dual warm-dark / achromatic-light theme, liquid-glass surfaces, Syne + Barlow + Instrument Serif).
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key entry points:
- `styles.css` — link this one file to inherit all tokens, base styles, fonts, and the liquid-glass / atmosphere utilities.
- `README.md` — the full design guide: content voice, visual foundations, iconography, and a file index.
- `components/core/` — React primitives (Button, Card, Tag, Pill, Eyebrow, InstrumentLabel, GlassPanel); see each `.prompt.md`.
- `ui_kits/portfolio/` — a working recreation of the portfolio to copy patterns from.
- `assets/imagery/` — real GIS project visuals.

House rules in brief: dark theme by default; one accent per theme (amber in dark, cool blue in light); sentence-case headings, UPPERCASE wide-tracked labels; ` · ` middot separators; no emoji; geometric/typographic icons only; liquid-glass cards with masked hairlines (never solid colored borders or left-accent stripes); smooth fades on one easing curve, never bouncy.
