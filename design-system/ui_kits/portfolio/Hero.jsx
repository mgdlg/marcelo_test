// Hero.jsx — portfolio hero with floating portrait + skill ticker
const NS = window.MarceloGuzmNGISDesignSystem_344c90;

function Hero() {
  const { Button, Eyebrow } = NS;
  const ticker = ['NDVI · Multispectral', 'UAV Photogrammetry', 'ArcGIS Pro · ModelBuilder',
    'R · Python · SQL', 'Hyperspectral RS', 'DEM / DSM', 'Quantitative Ecology', 'Urban Biodiversity'];

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', padding: '180px 0 90px', overflow: 'hidden' }}>
      <div className="aura">
        <span style={{ width: '520px', height: '520px', left: '-8%', top: '8%', background: 'var(--spec-amber)' }}></span>
        <span style={{ width: '380px', height: '380px', right: '-6%', top: '40%', background: 'var(--spec-magenta)', animationDelay: '-9s' }}></span>
        <span style={{ width: '280px', height: '280px', left: '30%', bottom: '-10%', background: 'var(--spec-azure)', animationDelay: '-15s', opacity: 0.4 }}></span>
      </div>

      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '70px', alignItems: 'center' }}>
          <div>
            <Eyebrow>GIS · Remote Sensing · Environmental Intelligence</Eyebrow>
            <h1 style={{ fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: 0.92, letterSpacing: '-0.02em', margin: 0 }}>
              <span style={{ display: 'block', color: 'var(--ink)' }}>Marcelo</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(120deg, oklch(0.96 0.006 60) 0%, oklch(0.80 0.14 68) 45%, oklch(0.68 0.10 52) 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Guzmán</span>
            </h1>
            <p style={{ margin: '28px 0 8px', fontSize: 'clamp(18px, 1.7vw, 22px)', fontWeight: 300, lineHeight: 1.5, maxWidth: '52ch', color: 'var(--ink-dim)' }}>
              Biologist &amp; GIS specialist translating complex geospatial and ecological signals
              into clear, actionable environmental intelligence.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--ink-faint)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '34px' }}>
              A single-page atlas of fieldwork, models, and instruments.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', fontSize: '13px', letterSpacing: '0.06em', color: 'var(--ink-dim)', marginBottom: '34px' }}>
              {['Monterrey, Mexico', 'marcelo.guzmandlg@gmail.com', 'Available · 2026'].map((m) => (
                <span key={m} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <i style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-warm)', boxShadow: '0 0 10px var(--accent-warm)' }}></i>{m}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Button href="#featured">Begin the journey</Button>
              <Button variant="ghost" arrow={false}>LinkedIn</Button>
              <Button variant="ghost" arrow={false}>Contact</Button>
            </div>
          </div>

          <figure className="media-frame media-kenburns" style={{
            position: 'relative', width: '100%', aspectRatio: '3 / 4', borderRadius: '26px',
            overflow: 'hidden', margin: 0, transform: 'rotate(1.2deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.20), 0 28px 60px rgba(0,0,0,0.32), 0 56px 100px -20px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.09)',
          }}>
            <img src="../../assets/imagery/portrait.jpg" alt="Marcelo Guzmán"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', filter: 'contrast(1.04) saturate(0.88)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, oklch(0.07 0.004 255 / 0.72) 100%)' }}></div>
            <figcaption style={{
              position: 'absolute', bottom: '16px', left: '20px', right: '20px',
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'flex', justifyContent: 'space-between',
            }}>
              <span>MGDLG · 26°N, −100°W</span><span>GIS · 2026</span>
            </figcaption>
          </figure>
        </div>

        <div style={{
          marginTop: '70px', borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)',
          overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}>
          <div style={{
            display: 'flex', gap: '60px', padding: '18px 0', whiteSpace: 'nowrap',
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--ink-faint)', width: 'max-content',
            animation: 'kit-ticker 50s linear infinite',
          }}>
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i}><span style={{ color: 'var(--accent-warm)', marginRight: '18px' }}>◇</span>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
