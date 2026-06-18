// SkillsSection.jsx — three concentric skill domains as glass cards
const NS = window.MarceloGuzmNGISDesignSystem_344c90;

function SectionHeader({ title, intro }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '60px', alignItems: 'end', marginBottom: '70px' }}>
      <h2 style={{ margin: 0, fontSize: 'clamp(40px, 5vw, 76px)' }}>{title}</h2>
      {intro && <p className="section-intro" style={{ margin: 0 }}>{intro}</p>}
    </div>
  );
}
window.SectionHeader = SectionHeader;

function SkillsSection() {
  const { Card, Tag, TagList, InstrumentLabel } = NS;
  const groups = [
    { num: '01 / GIS & Remote Sensing', title: 'Spatial measurement',
      tags: ['ArcGIS Pro', 'ModelBuilder', 'QGIS', 'ENVI', 'Pix4Denterprise', 'Multispectral', 'DEM / DSM', 'NDVI / NWI', 'UAV photogrammetry'] },
    { num: '02 / Data Science & Statistics', title: 'Computational fluency',
      tags: ['R', 'Python', 'SQL', 'HTML', 'CSS', 'Geospatial modeling', 'Statistical analysis', 'Reproducible workflows'] },
    { num: '03 / Field & Environmental Work', title: 'Ecological practice',
      tags: ['Impact assessments', 'Quantitative ecology', 'Land cover', 'Large mammal surveys', 'Ornithology', 'Community engagement'] },
  ];

  return (
    <section id="skills" style={{ position: 'relative', padding: '120px 0' }}>
      <span style={{ position: 'absolute', top: '50px', left: '32px' }}>
        <InstrumentLabel num="03">Instrumentation</InstrumentLabel>
      </span>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          title="Technical skills"
          intro="Three concentric domains — spatial measurement, computational analysis, and field ecology — that compound into a single environmental practice."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {groups.map((g) => (
            <Card key={g.num} kicker={g.num} title={g.title} interactive style={{ minHeight: '300px', '--fx-delay': (groups.indexOf(g) * 110) + 'ms' }}>
              <TagList>
                {g.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </TagList>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SkillsSection = SkillsSection;
