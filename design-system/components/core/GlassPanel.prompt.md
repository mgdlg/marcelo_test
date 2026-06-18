The signature liquid-glass surface — the container for nearly every card, aside, and panel in the system. Translucent in dark theme, frosted near-white in light theme; a luminous masked hairline runs the vertical edges.

```jsx
<GlassPanel>
  <Eyebrow>Instrumentation</Eyebrow>
  <h3>Spatial measurement</h3>
  <p>ArcGIS Pro, ModelBuilder, multispectral remote sensing…</p>
</GlassPanel>

<GlassPanel strong radius="var(--radius-md)" padding="28px">…</GlassPanel>
```

`strong` adds a heavier blur (use for floating/overlay panels). Requires the design system's `styles.css` linked so the `.liquid-glass` rules + ::before hairline apply. Don't nest a GlassPanel directly inside another — the hairlines compound.
