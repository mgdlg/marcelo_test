# Portfolio — UI Kit

A high-fidelity recreation of the **Marcelo Guzmán · GIS & Environmental Intelligence** single-page portfolio, the one product this design system is drawn from.

## Run it
Open `index.html`. It links the design system (`../../styles.css`), loads the compiled component bundle (`../../_ds_bundle.js`), then mounts the page from the screen files below. A theme toggle in the nav flips the whole page between the warm-dark and achromatic-light themes.

## Screens / parts
| File | What it is |
|---|---|
| `index.html` | Page shell — substrate + grain backdrop, mounts the app, footer |
| `Nav.jsx` | Floating liquid-glass nav pill + theme toggle (`window.Nav`) |
| `Hero.jsx` | Name lockup with gradient accent, portrait card, meta, skill ticker (`window.Hero`) |
| `SkillsSection.jsx` | Three skill-domain glass cards built from `Card` + `Tag` (`window.SkillsSection`, `window.SectionHeader`) |
| `ProjectsSection.jsx` | Interactive "projects lab" — tab a project, browse its media showcase (`window.ProjectsSection`) |

## Composition notes
- Screens **compose the system's primitives** — `Button`, `Card`, `Tag`/`TagList`, `Pill`, `Eyebrow`, `InstrumentLabel`, `GlassPanel` — pulled from `window.MarceloGuzmNGISDesignSystem_344c90`. They are not re-implemented here.
- The atmospheric backdrop (`.substrate`, `.grain`, `.aura`) and `.liquid-glass` surfaces come straight from the shipped base CSS.
- Imagery lives in `../../assets/imagery/` — real project visuals (NDVI maps, drone captures, ModelBuilder workflows, bird-diversity charts) imported from the source repository.

## Fidelity / omissions
This is a cosmetic recreation, not the production site. Intentionally omitted: the Leaflet portfolio map, the LinkedIn embeds, the 3D image belt, the awards/education/references long-form sections, and the per-project detail pages. The hero, skills, and projects surfaces capture the system's visual vocabulary; extend from these patterns for the rest.
