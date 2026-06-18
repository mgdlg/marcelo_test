The brand's pill action button — uppercase Barlow with a sliding trailing arrow; use `primary` (filled amber→rust gradient) for the main CTA and `ghost` (glass) for secondary actions.

```jsx
<Button href="#featured">Begin the journey</Button>
<Button variant="ghost" arrow={false}>LinkedIn</Button>
```

Variants: `variant` = `primary` | `ghost`. Sizes: `size` = `sm` | `md` | `lg`. Set `arrow={false}` to drop the → glyph. Pass `href` to render an `<a>`. Inherits accent + ink from CSS vars, so it recolours automatically in light theme (amber → cool blue handled by `--on-accent`).
