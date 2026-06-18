// Nav.jsx — floating liquid-glass pill + theme toggle (portfolio UI kit)
const NS = window.MarceloGuzmNGISDesignSystem_344c90;

function Nav() {
  const [theme, setTheme] = React.useState(
    document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };
  const links = ['About', 'Skills', 'Featured', 'Projects', 'Contact'];

  return (
    <div style={{
      position: 'fixed', top: '22px', left: 0, right: 0, zIndex: 80,
      display: 'flex', justifyContent: 'center', pointerEvents: 'none',
    }}>
      <nav className="liquid-glass" style={{
        pointerEvents: 'auto', borderRadius: '9999px', padding: '4px 6px',
        display: 'flex', alignItems: 'center', gap: '4px',
      }}>
        {links.map((l) => (
          <a key={l} href={'#' + l.toLowerCase()} style={{
            display: 'inline-flex', alignItems: 'center', padding: '10px 16px',
            borderRadius: '9999px', fontFamily: 'var(--font-body)', fontSize: '12.5px',
            letterSpacing: '0.06em', color: 'var(--ink-dim)', whiteSpace: 'nowrap',
            transition: 'color var(--t-fast), background var(--t-fast)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-dim)'; }}
          >{l}</a>
        ))}
      </nav>

      <button onClick={flip} style={{
        pointerEvents: 'auto', position: 'fixed', top: '26px', right: '28px',
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        padding: '10px 16px 10px 12px', border: 'none', borderRadius: '9999px',
        background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(18px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.4)', color: 'var(--ink)',
        fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em',
        cursor: 'pointer', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
      }}>
        <span style={{
          width: '10px', height: '10px', borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, var(--accent-warm), oklch(0.45 0.16 30) 70%)',
          boxShadow: '0 0 12px var(--accent-warm)',
        }}></span>
        {theme === 'dark' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
window.Nav = Nav;
