The standard content card — a liquid-glass panel with an accent mono `kicker`, a Syne `title`, and arbitrary body content. This is the skill-card / project-card pattern used throughout the portfolio.

```jsx
<Card kicker="01 / GIS & Remote Sensing" title="Spatial measurement">
  <TagList>
    <Tag>ArcGIS Pro</Tag><Tag>QGIS</Tag><Tag>NDVI / NWI</Tag>
  </TagList>
</Card>

<Card title="Riparian Forests & Urban Bird Diversity" interactive>
  <p>Multispectral remote sensing along an urban river…</p>
</Card>
```

Set `interactive` for clickable cards (adds a hover lift). Compose with `Tag`, `Pill`, `Button` inside. Built on `GlassPanel`, so it needs the system's `styles.css`.
