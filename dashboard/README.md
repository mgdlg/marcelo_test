# Impact dashboard

A single-file, static dashboard summarising 39 regulatory and consulting deliverables owned
end-to-end as Environmental Project Manager and Environmental Compliance Coordinator
(Sep 2025 – Aug 2026).

- **`impact-dashboard.html`** — the whole thing: inline CSS, inline JS, data baked in.
- **`dashboard_data.json`** — the source of truth the page is built from (also embedded in the HTML).

It renders standalone and inside an `<iframe>`. It makes **no API calls and carries no credential**:
the ClickUp data was snapshotted once and inlined, so the page keeps working after workspace access
ends. The only external request is Chart.js from cdnjs; if that request fails the page degrades to
its legends, stat strips and data tables, which carry every number.

---

## Embedding it in the portfolio

Drop this where the dashboard should appear:

```html
<iframe
  src="dashboard/impact-dashboard.html"
  title="Marcelo Guzmán — environmental compliance impact dashboard"
  loading="lazy"
  style="width:100%;border:0;display:block;background:transparent;height:7400px"
></iframe>
```

### Recommended: auto-height + theme sync

The page posts its own height to the parent and accepts the parent's light/dark choice, so it
never scrolls internally and never fights the portfolio's theme toggle. Add this after the iframe:

```html
<script>
(function () {
  var f = document.querySelector('iframe[src*="impact-dashboard"]');

  // the page tells us how tall it is
  addEventListener('message', function (e) {
    if (e.source === f.contentWindow && e.data && e.data.type === 'impact-dashboard:height') {
      f.style.height = e.data.height + 'px';
    }
  });

  // and we tell it which theme is showing
  function sync() {
    var t = document.documentElement.getAttribute('data-theme'); // 'light' | 'dark' | null
    f.contentWindow.postMessage({ type: 'impact-dashboard:theme', theme: t || 'auto' }, '*');
  }
  f.addEventListener('load', sync);
  new MutationObserver(sync).observe(document.documentElement,
    { attributes: true, attributeFilter: ['data-theme'] });
})();
</script>
```

With the theme sync in place the fixed `height` above is only a pre-load placeholder — trim it to
something like `1200px` so the page doesn't jump.

### Query parameters

| Parameter | Values | Effect |
|---|---|---|
| `theme` | `light` · `dark` | Forces a mode. Omit it to follow `prefers-color-scheme`. |
| `bg` | `transparent` | Drops the page background so the host page's own background shows through. |

Example: `dashboard/impact-dashboard.html?theme=dark&bg=transparent`

---

## How to update

Re-run the snapshot script with a valid `CLICKUP_TOKEN` in the environment to regenerate
`dashboard_data.json`, then paste its contents over the block between
`<script type="application/json" id="dashboard-data">` and its closing tag in
`impact-dashboard.html` — every figure, chart and table on the page is rendered from that block.

Two figures come from the row-level export rather than `dashboard_data.json`, so they need editing
by hand if the snapshot changes:

- the six-way ClickUp status split behind the delivery-status donut, in the adjacent
  `id="status-detail"` block (it reconciles exactly to the 35 delivered / 4 in progress in
  `status_mix`);
- the **14** deliverables completed after the Jun 2026 window close, in the footnote under monthly
  throughput.

**Never commit the token or the row-level export.** `.gitignore` already excludes
`clickup_raw_snapshot*.json` and `.env`; the token is read from the environment only and stops
working at offboarding anyway.

---

## Notes on the numbers

- **On-time (82%)** — delivered on or before target + 15 calendar days, measured by the true
  delivery date (the first `done`-type entry in ClickUp's status history, not the close or invoice
  date). Items on hold or without a target date are excluded, leaving 34 of 39. `seguimiento` items
  are counted as delivered: they are with the authority, not late. Business-adjusted read is
  roughly 90–95%.
- **Portfolio value (~$170K USD / ~$3.1M MXN)** — a modeled estimate: published reference unit
  prices × delivered counts. Not billed revenue, and labelled `estimated` wherever it appears.
- **Survey coverage vs site footprint** — ~556 acres flown and ~507 acres of managed client polygons
  are separate measurements and are not additive.
- Client names appear at roster level only. Delay figures are stated against internal target dates,
  without client attribution.

## Accessibility & performance

- Every canvas carries `role="img"` and a descriptive `aria-label`; every chart has an HTML legend
  or a "View data table" disclosure, so nothing is conveyed by colour alone.
- The categorical and ordinal palettes were validated for colour-vision separation and surface
  contrast in both light and dark modes.
- One HTML file (~62 KB), one CDN script, no fonts, no images, no trackers.
