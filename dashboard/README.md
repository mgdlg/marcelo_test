# Impact dashboard

A single-file, static dashboard summarising 39 regulatory and consulting deliverables owned
end-to-end as Environmental Project Manager and Environmental Compliance Coordinator
(Sep 2025 – Aug 2026).

- **`impact-dashboard.html`** — the whole thing: inline CSS, inline JS, data baked in.
- **`dashboard_data.json`** — the source of truth the page is built from (also embedded in the HTML).

It renders standalone and inside an `<iframe>`. It makes **no API calls and carries no credential**:
the source data was exported once and inlined, so the page keeps working after workspace access
ends. External requests are Chart.js from cdnjs and the same Google Fonts stylesheet the portfolio
already loads (Syne + Barlow); if the Chart.js request fails the page degrades to its legends, stat
strips and data tables, which carry every number.

Styling mirrors the portfolio's `styles.css` — the same tokens, radii, card treatment and
typography — so the embed reads as one of its pages. Deep teal is kept as the accent for data marks.

---

## Embedding it in the portfolio

`project-impact-dashboard.html` at the repo root is the live wrapper — it is reached from the first
card of the **Full portfolio** grid on `index.html` and already does everything below (full-bleed
embed, auto-height, theme sync). The rest of this section is the recipe, for embedding it somewhere
else.

Drop this where the dashboard should appear:

```html
<iframe
  src="dashboard/impact-dashboard.html"
  title="Marcelo Guzmán — environmental compliance impact dashboard"
  loading="lazy"
  style="width:100%;border:0;display:block;background:transparent;height:5000px"
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

Regenerate `dashboard_data.json` from a fresh export of the project-management workspace, then paste
its contents over the block between `<script type="application/json" id="dashboard-data">` and its
closing tag in `impact-dashboard.html`. Every figure, chart and table on the page renders from that
block, so nothing else needs touching.

**Never commit a credential or the row-level export.** `.gitignore` already excludes the raw
snapshot files and `.env`; any API token belongs in the environment only.

---

## Notes on the numbers

- **On-time (90%)** — the headline is the business-adjusted read: **28 of 31** deliverables that
  carry a fixed hand-off date, measured on the true hand-off date (the first `completed` entry in
  the status history, not the close or invoice date, which run weeks later and overstate lateness)
  with a 15-day grace window. Three of the 34 dated deliverables are set aside because they have no
  fixed hand-off date — an extended-scope legal matrix, open-ended field supervision, and an annual
  federal filing gated on client-supplied data. Counting all 34 including those, the rate is **82%**,
  which the page states in its footnote and keeps in the JSON as `rate_pct_strict`. Items filed and
  awaiting an authority's response count as delivered: the wait is with the agency, not the
  deliverable.
- **Portfolio value (~$410K USD / ~$7.4M MXN)** — a modeled estimate from reference unit pricing and
  the value of recent contracted engagements. Not billed revenue, and labelled `estimated` wherever
  it appears.
- **Largest engagement ($5.3M MXN)** — the multi-phase UDEM regularization contracts.
- **Survey coverage vs site footprint** — ~556 acres flown and ~507 acres of managed client polygons
  are separate measurements and are not additive.
- Client names appear at roster level only. Delay figures are stated against internal target dates,
  without client attribution.

## Accessibility & performance

- Every canvas carries `role="img"` and a descriptive `aria-label`; every chart has an HTML legend
  or a "View data table" disclosure, so nothing is conveyed by colour alone.
- The categorical and ordinal palettes were validated for colour-vision separation and surface
  contrast against the portfolio's own light and dark card surfaces.
- One HTML file (~60 KB), one CDN script, one font stylesheet, no images, no trackers.
