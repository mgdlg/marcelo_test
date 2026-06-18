// ProjectsSection.jsx — interactive tabbed "projects lab" with media showcase
const NS = window.MarceloGuzmNGISDesignSystem_344c90;

const KIT_PROJECTS = [
  {
    title: 'Drone Photogrammetry for Environmental Compensation',
    meta: 'IRCA Consultants · 2025–Present · Project Manager',
    body: 'Designed and managed the firm\u2019s first drone-based photogrammetry analyses to monitor forest cover, soil recovery, and ecological restoration in compensation projects.',
    points: ['Captured and processed UAV imagery to generate DSMs and orthomosaics.', 'ArcGIS Pro ModelBuilder workflows with Python and R integrations.', 'QA/QC of spatial datasets aligned with regulatory standards.'],
    media: ['../../assets/imagery/droneagro.jpeg', '../../assets/imagery/lidar-drone.jpeg', '../../assets/imagery/biodiversity-workflow.png'],
  },
  {
    title: 'Riparian Forests & Urban Bird Diversity',
    meta: 'UANL · 2024 · Researcher & GIS Analyst',
    body: 'Used multispectral remote sensing and land-cover data to quantify how riparian forests along an urban river influence bird diversity and community structure.',
    points: ['Mapped vegetation structure along riparian corridors.', 'Integrated point-count bird surveys with spatial layers.', 'Findings supported post-storm planning after tropical storm Alberto.'],
    media: ['../../assets/imagery/bird-diversity.png', '../../assets/imagery/nest-graphs.png', '../../assets/imagery/dataton-certificate.png'],
  },
  {
    title: 'Urbanization Index & Blackbird Phenotypes',
    meta: 'University of Debrecen · 2025 · GIS Analyst',
    body: 'Integrated geospatial analyses into the project\u2019s Urbanization Index (PCA) to quantify urban gradients affecting Turdus merula populations.',
    points: ['Spatial layers of land cover, built-up density, and green space.', 'Linked geospatial metrics to phenotypic measurements.', 'Authored reproducible tutorials for replication.'],
    media: ['../../assets/imagery/blackbird-model.png', '../../assets/imagery/models-in-gis.png', '../../assets/imagery/corine-hungary.png'],
  },
  {
    title: 'Reforestation & Vegetation Monitoring',
    meta: 'IRCA Consultants · 2024 · GIS Analyst',
    body: 'Remote-sensing workflows tracking NDVI, NWI, and water-surface change to verify reforestation commitments and historical vegetation recovery.',
    points: ['Multi-sensor NDVI / NWI time series.', 'GBIF biodiversity baselines via Shiny + R.', 'iNaturalist community observation integration.'],
    media: ['../../assets/imagery/ndvi.jpg', '../../assets/imagery/nwi.jpeg', '../../assets/imagery/r-gbif.jpeg', '../../assets/imagery/inaturalist.jpeg'],
  },
];

function ProjectsSection() {
  const { Card, Pill, InstrumentLabel, Button } = NS;
  const [active, setActive] = React.useState(0);
  const [shot, setShot] = React.useState(0);
  const p = KIT_PROJECTS[active];

  const pick = (i) => { setActive(i); setShot(0); };

  return (
    <section id="projects" style={{ position: 'relative', padding: '120px 0' }}>
      <span style={{ position: 'absolute', top: '50px', left: '32px' }}>
        <InstrumentLabel num="05">Casework</InstrumentLabel>
      </span>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          title="Selected projects"
          intro="A curated set where geospatial analysis, ecology, and fieldwork converge — supporting conservation, urban planning, and environmental compliance."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '48px', alignItems: 'start' }}>
          {/* tabs */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', margin: '0 0 4px' }}>Explore</p>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--ink-faint)', margin: '0 0 18px' }}>Select a project to reveal its case card.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid var(--rule-soft)', paddingTop: '16px' }}>
              {KIT_PROJECTS.map((pr, i) => (
                <button key={i} onClick={() => pick(i)} style={{
                  display: 'grid', gridTemplateColumns: '38px 1fr', gap: '14px', textAlign: 'left',
                  padding: '14px', borderRadius: '14px', border: 'none', cursor: 'pointer',
                  background: i === active ? 'rgba(255,255,255,0.06)' : 'transparent',
                  transition: 'background var(--t-fast)',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: i === active ? 'var(--accent-warm)' : 'var(--ink-faint)', paddingTop: '3px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', lineHeight: 1.2, color: i === active ? 'var(--ink)' : 'var(--ink-dim)' }}>
                    {pr.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* panel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '32px', alignItems: 'start' }}>
            <Card title={p.title} padding="36px">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', margin: '-8px 0 20px' }}>{p.meta}</p>
              <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.6, margin: '0 0 14px' }}>{p.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0' }}>
                {p.points.map((pt) => (
                  <li key={pt} style={{ position: 'relative', paddingLeft: '22px', marginBottom: '10px', fontSize: '14.5px', fontWeight: 300, color: 'var(--ink-dim)' }}>
                    <span style={{ position: 'absolute', left: 0, top: '10px', width: '12px', height: '1px', background: 'var(--accent-warm)' }}></span>{pt}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="liquid-glass" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', padding: '14px' }}>
              <div className="media-frame" style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '18px', overflow: 'hidden', background: 'rgba(0,0,0,0.25)' }}>
                <img src={p.media[shot]} alt="" key={p.media[shot]} className="fx-fade" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                {p.media.map((m, i) => (
                  <button key={m} onClick={() => setShot(i)} style={{
                    width: '70px', height: '54px', borderRadius: '10px', overflow: 'hidden', padding: 0, cursor: 'pointer',
                    border: i === shot ? '1px solid var(--accent-warm)' : '1px solid var(--rule)', background: 'none',
                    transform: i === shot ? 'translateY(-2px)' : 'none', transition: 'all var(--t-fast)',
                  }}>
                    <img src={m} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProjectsSection = ProjectsSection;
