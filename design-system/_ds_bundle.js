/* @ds-bundle: {"format":3,"namespace":"MarceloGuzmNGISDesignSystem_344c90","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"InstrumentLabel","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TagList","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"64cc6a3c80fc","components/core/Card.jsx":"4d31e3de9f72","components/core/Eyebrow.jsx":"05c6e29e9100","components/core/GlassPanel.jsx":"bf0c6b846590","components/core/Pill.jsx":"00a436ef9593","components/core/Tag.jsx":"b5f93ecbe3e4","ui_kits/portfolio/Hero.jsx":"119d82adbcb3","ui_kits/portfolio/Nav.jsx":"fd400967c6d1","ui_kits/portfolio/ProjectsSection.jsx":"09eaeb135473","ui_kits/portfolio/SkillsSection.jsx":"14343ef08b87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarceloGuzmNGISDesignSystem_344c90 = window.MarceloGuzmNGISDesignSystem_344c90 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's pill action. Two variants: a filled amber→rust
 * gradient `primary` and a glass `ghost`. Renders an animated trailing
 * arrow by default. Uppercase, wide-tracked Barlow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = true,
  href,
  onClick,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '11px 18px' : size === 'lg' ? '16px 30px' : '14px 24px';
  const fs = size === 'sm' ? '11px' : size === 'lg' ? '14px' : '13px';
  const base = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: pad,
    borderRadius: 'var(--radius-pill, 9999px)',
    fontFamily: 'var(--font-body, "Barlow", sans-serif)',
    fontSize: fs,
    fontWeight: 400,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--t-fast, 220ms cubic-bezier(.2,.7,.2,1)), box-shadow var(--t-fast, 220ms cubic-bezier(.2,.7,.2,1))',
    isolation: 'isolate'
  };
  const variants = {
    primary: {
      background: 'linear-gradient(180deg, oklch(0.78 0.13 75 / 0.92), oklch(0.62 0.18 30 / 0.92))',
      color: 'var(--on-accent, oklch(0.16 0.04 250))',
      boxShadow: '0 8px 32px -10px oklch(0.78 0.13 75 / 0.5), inset 0 1px 0 rgba(255,255,255,0.4)'
    },
    ghost: {
      background: 'rgba(255,255,255,0.04)',
      color: 'var(--ink, #fff)',
      border: '1px solid rgba(255,255,255,0.16)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)'
    }
  };
  const arrowColor = variant === 'primary' ? 'var(--on-accent, oklch(0.16 0.04 250))' : 'inherit';
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "ds-btn-arrow",
    style: {
      fontSize: '14px',
      letterSpacing: 0,
      color: arrowColor,
      transition: 'transform var(--t-fast, 220ms cubic-bezier(.2,.7,.2,1))'
    }
  }, "\u2192"));
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    const a = e.currentTarget.querySelector('.ds-btn-arrow');
    if (a) a.style.transform = 'translateX(4px)';
  };
  const onLeave = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    const a = e.currentTarget.querySelector('.ds-btn-arrow');
    if (a) a.style.transform = 'translateX(0)';
  };
  const props = {
    className: 'btn-shine',
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    ...rest
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled
  }, props), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a wide-tracked uppercase mono label with a leading gradient
 * rule. Sits above headings to categorise a section.
 */
function Eyebrow({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-mono, "Barlow", monospace)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint, #888)',
      margin: '0 0 28px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '36px',
      height: '1px',
      background: 'linear-gradient(90deg, var(--accent-warm), transparent)'
    }
  }), children);
}

/**
 * InstrumentLabel — a numbered section marker ("01 · Orientation"), styled
 * like an instrument readout. A short rule precedes the number.
 */
function InstrumentLabel({
  num,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-mono, "Barlow", monospace)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint, #888)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '32px',
      height: '1px',
      background: 'currentColor',
      opacity: 0.7
    }
  }), num != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-warm)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), children);
}
Object.assign(__ds_scope, { Eyebrow, InstrumentLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassPanel — the signature liquid-glass surface. Translucent fill with a
 * luminous masked hairline (from the `.liquid-glass` utility shipped in the
 * design-system CSS). Use as the container for cards, asides, and panels.
 *
 * Requires the design system's styles.css to be linked (provides the
 * `.liquid-glass` / `.liquid-glass-strong` rules + their ::before hairline).
 */
function GlassPanel({
  children,
  strong = false,
  radius = 'var(--radius, 28px)',
  padding = '36px',
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `${strong ? 'liquid-glass-strong' : 'liquid-glass'} ${className}`.trim(),
    style: {
      borderRadius: radius,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a content card built on GlassPanel, following the skill/project
 * card pattern: an optional mono `kicker` in accent, a Syne title, and body
 * content. Lifts subtly on hover when `interactive`.
 */
function Card({
  kicker,
  title,
  children,
  interactive = false,
  padding = '36px 32px 32px',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassPanel, _extends({
    padding: padding,
    className: `fx-rise ${interactive ? 'card-glow' : ''} ${className}`.trim(),
    style: style
  }, rest), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono, "Barlow", monospace)',
      fontSize: '11px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--accent-warm)',
      marginBottom: '24px'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display, "Syne", sans-serif)',
      fontWeight: 600,
      fontSize: 'clamp(24px, 2vw, 30px)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, title), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — a compact outlined accent label. Used for years on award rows,
 * "Featured" markers, and status tags. Outlined by default; `solid` fills it.
 */
function Pill({
  children,
  solid = false,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-mono, "Barlow", monospace)',
    fontSize: '11px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill, 9999px)',
    padding: '4px 11px',
    textAlign: 'center',
    width: 'fit-content',
    lineHeight: 1.4
  };
  const skin = solid ? {
    background: 'var(--accent-warm)',
    color: 'var(--on-accent, oklch(0.16 0.04 250))',
    border: '1px solid var(--accent-warm)'
  } : {
    color: 'var(--accent-warm)',
    border: '1px solid var(--accent-warm)',
    background: 'transparent'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small rounded chip used in clusters (skill lists, filters).
 * Subtle translucent fill with a hairline; lifts slightly on hover.
 */
function Tag({
  children,
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-body, "Barlow", sans-serif)',
    fontSize: '12.5px',
    fontWeight: 400,
    letterSpacing: '0.04em',
    padding: '7px 13px',
    borderRadius: 'var(--radius-pill, 9999px)',
    background: active || hover ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.10)',
    color: active || hover ? 'var(--ink, #fff)' : 'var(--ink-dim, #ccc)',
    transform: hover ? 'translateY(-1px)' : 'none',
    transition: 'background var(--t-fast, 220ms), color var(--t-fast, 220ms), transform var(--t-fast, 220ms)',
    cursor: 'default'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}

/**
 * TagList — flex-wrap container that lays out Tags with consistent gap.
 */
function TagList({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag, TagList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero.jsx — portfolio hero with floating portrait + skill ticker
const NS = window.MarceloGuzmNGISDesignSystem_344c90;
function Hero() {
  const {
    Button,
    Eyebrow
  } = NS;
  const ticker = ['NDVI · Multispectral', 'UAV Photogrammetry', 'ArcGIS Pro · ModelBuilder', 'R · Python · SQL', 'Hyperspectral RS', 'DEM / DSM', 'Quantitative Ecology', 'Urban Biodiversity'];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '100vh',
      padding: '180px 0 90px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aura"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '520px',
      height: '520px',
      left: '-8%',
      top: '8%',
      background: 'var(--spec-amber)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '380px',
      height: '380px',
      right: '-6%',
      top: '40%',
      background: 'var(--spec-magenta)',
      animationDelay: '-9s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '280px',
      height: '280px',
      left: '30%',
      bottom: '-10%',
      background: 'var(--spec-azure)',
      animationDelay: '-15s',
      opacity: 0.4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: '70px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "GIS \xB7 Remote Sensing \xB7 Environmental Intelligence"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(56px, 9vw, 132px)',
      lineHeight: 0.92,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--ink)'
    }
  }, "Marcelo"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      background: 'linear-gradient(120deg, oklch(0.96 0.006 60) 0%, oklch(0.80 0.14 68) 45%, oklch(0.68 0.10 52) 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "Guzm\xE1n")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 8px',
      fontSize: 'clamp(18px, 1.7vw, 22px)',
      fontWeight: 300,
      lineHeight: 1.5,
      maxWidth: '52ch',
      color: 'var(--ink-dim)'
    }
  }, "Biologist & GIS specialist translating complex geospatial and ecological signals into clear, actionable environmental intelligence."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: 'var(--ink-faint)',
      fontWeight: 300,
      letterSpacing: '0.04em',
      marginBottom: '34px'
    }
  }, "A single-page atlas of fieldwork, models, and instruments."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px 28px',
      fontSize: '13px',
      letterSpacing: '0.06em',
      color: 'var(--ink-dim)',
      marginBottom: '34px'
    }
  }, ['Monterrey, Mexico', 'marcelo.guzmandlg@gmail.com', 'Available · 2026'].map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--accent-warm)',
      boxShadow: '0 0 10px var(--accent-warm)'
    }
  }), m))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#featured"
  }, "Begin the journey"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: false
  }, "LinkedIn"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: false
  }, "Contact"))), /*#__PURE__*/React.createElement("figure", {
    className: "media-frame media-kenburns",
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '3 / 4',
      borderRadius: '26px',
      overflow: 'hidden',
      margin: 0,
      transform: 'rotate(1.2deg)',
      boxShadow: '0 2px 6px rgba(0,0,0,0.20), 0 28px 60px rgba(0,0,0,0.32), 0 56px 100px -20px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.09)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/portrait.jpg",
    alt: "Marcelo Guzm\xE1n",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block',
      filter: 'contrast(1.04) saturate(0.88)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 50%, oklch(0.07 0.004 255 / 0.72) 100%)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      bottom: '16px',
      left: '20px',
      right: '20px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "MGDLG \xB7 26\xB0N, \u2212100\xB0W"), /*#__PURE__*/React.createElement("span", null, "GIS \xB7 2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '70px',
      borderTop: '1px solid var(--rule-soft)',
      borderBottom: '1px solid var(--rule-soft)',
      overflow: 'hidden',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      padding: '18px 0',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      width: 'max-content',
      animation: 'kit-ticker 50s linear infinite'
    }
  }, [...ticker, ...ticker].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-warm)',
      marginRight: '18px'
    }
  }, "\u25C7"), t))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Nav.jsx — floating liquid-glass pill + theme toggle (portfolio UI kit)
const NS = window.MarceloGuzmNGISDesignSystem_344c90;
function Nav() {
  const [theme, setTheme] = React.useState(document.documentElement.getAttribute('data-theme') || 'dark');
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };
  const links = ['About', 'Skills', 'Featured', 'Projects', 'Contact'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '22px',
      left: 0,
      right: 0,
      zIndex: 80,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "liquid-glass",
    style: {
      pointerEvents: 'auto',
      borderRadius: '9999px',
      padding: '4px 6px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 16px',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '12.5px',
      letterSpacing: '0.06em',
      color: 'var(--ink-dim)',
      whiteSpace: 'nowrap',
      transition: 'color var(--t-fast), background var(--t-fast)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
      e.currentTarget.style.color = 'var(--ink)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--ink-dim)';
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: flip,
    style: {
      pointerEvents: 'auto',
      position: 'fixed',
      top: '26px',
      right: '28px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 16px 10px 12px',
      border: 'none',
      borderRadius: '9999px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(18px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      cursor: 'pointer',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, var(--accent-warm), oklch(0.45 0.16 30) 70%)',
      boxShadow: '0 0 12px var(--accent-warm)'
    }
  }), theme === 'dark' ? 'Dark' : 'Light'));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectsSection.jsx
try { (() => {
// ProjectsSection.jsx — interactive tabbed "projects lab" with media showcase
const NS = window.MarceloGuzmNGISDesignSystem_344c90;
const KIT_PROJECTS = [{
  title: 'Drone Photogrammetry for Environmental Compensation',
  meta: 'IRCA Consultants · 2025–Present · Project Manager',
  body: 'Designed and managed the firm\u2019s first drone-based photogrammetry analyses to monitor forest cover, soil recovery, and ecological restoration in compensation projects.',
  points: ['Captured and processed UAV imagery to generate DSMs and orthomosaics.', 'ArcGIS Pro ModelBuilder workflows with Python and R integrations.', 'QA/QC of spatial datasets aligned with regulatory standards.'],
  media: ['../../assets/imagery/droneagro.jpeg', '../../assets/imagery/lidar-drone.jpeg', '../../assets/imagery/biodiversity-workflow.png']
}, {
  title: 'Riparian Forests & Urban Bird Diversity',
  meta: 'UANL · 2024 · Researcher & GIS Analyst',
  body: 'Used multispectral remote sensing and land-cover data to quantify how riparian forests along an urban river influence bird diversity and community structure.',
  points: ['Mapped vegetation structure along riparian corridors.', 'Integrated point-count bird surveys with spatial layers.', 'Findings supported post-storm planning after tropical storm Alberto.'],
  media: ['../../assets/imagery/bird-diversity.png', '../../assets/imagery/nest-graphs.png', '../../assets/imagery/dataton-certificate.png']
}, {
  title: 'Urbanization Index & Blackbird Phenotypes',
  meta: 'University of Debrecen · 2025 · GIS Analyst',
  body: 'Integrated geospatial analyses into the project\u2019s Urbanization Index (PCA) to quantify urban gradients affecting Turdus merula populations.',
  points: ['Spatial layers of land cover, built-up density, and green space.', 'Linked geospatial metrics to phenotypic measurements.', 'Authored reproducible tutorials for replication.'],
  media: ['../../assets/imagery/blackbird-model.png', '../../assets/imagery/models-in-gis.png', '../../assets/imagery/corine-hungary.png']
}, {
  title: 'Reforestation & Vegetation Monitoring',
  meta: 'IRCA Consultants · 2024 · GIS Analyst',
  body: 'Remote-sensing workflows tracking NDVI, NWI, and water-surface change to verify reforestation commitments and historical vegetation recovery.',
  points: ['Multi-sensor NDVI / NWI time series.', 'GBIF biodiversity baselines via Shiny + R.', 'iNaturalist community observation integration.'],
  media: ['../../assets/imagery/ndvi.jpg', '../../assets/imagery/nwi.jpeg', '../../assets/imagery/r-gbif.jpeg', '../../assets/imagery/inaturalist.jpeg']
}];
function ProjectsSection() {
  const {
    Card,
    Pill,
    InstrumentLabel,
    Button
  } = NS;
  const [active, setActive] = React.useState(0);
  const [shot, setShot] = React.useState(0);
  const p = KIT_PROJECTS[active];
  const pick = i => {
    setActive(i);
    setShot(0);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      position: 'relative',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50px',
      left: '32px'
    }
  }, /*#__PURE__*/React.createElement(InstrumentLabel, {
    num: "05"
  }, "Casework")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Selected projects",
    intro: "A curated set where geospatial analysis, ecology, and fieldwork converge \u2014 supporting conservation, urban planning, and environmental compliance."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '28px',
      margin: '0 0 4px'
    }
  }, "Explore"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      fontWeight: 300,
      color: 'var(--ink-faint)',
      margin: '0 0 18px'
    }
  }, "Select a project to reveal its case card."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      borderTop: '1px solid var(--rule-soft)',
      paddingTop: '16px'
    }
  }, KIT_PROJECTS.map((pr, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => pick(i),
    style: {
      display: 'grid',
      gridTemplateColumns: '38px 1fr',
      gap: '14px',
      textAlign: 'left',
      padding: '14px',
      borderRadius: '14px',
      border: 'none',
      cursor: 'pointer',
      background: i === active ? 'rgba(255,255,255,0.06)' : 'transparent',
      transition: 'background var(--t-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: i === active ? 'var(--accent-warm)' : 'var(--ink-faint)',
      paddingTop: '3px'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '17px',
      lineHeight: 1.2,
      color: i === active ? 'var(--ink)' : 'var(--ink-dim)'
    }
  }, pr.title))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: '32px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: p.title,
    padding: "36px"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      margin: '-8px 0 20px'
    }
  }, p.meta), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, p.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '14px 0 0'
    }
  }, p.points.map(pt => /*#__PURE__*/React.createElement("li", {
    key: pt,
    style: {
      position: 'relative',
      paddingLeft: '22px',
      marginBottom: '10px',
      fontSize: '14.5px',
      fontWeight: 300,
      color: 'var(--ink-dim)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '10px',
      width: '12px',
      height: '1px',
      background: 'var(--accent-warm)'
    }
  }), pt)))), /*#__PURE__*/React.createElement("div", {
    className: "liquid-glass",
    style: {
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-frame",
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      borderRadius: '18px',
      overflow: 'hidden',
      background: 'rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.media[shot],
    alt: "",
    key: p.media[shot],
    className: "fx-fade",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px',
      flexWrap: 'wrap'
    }
  }, p.media.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setShot(i),
    style: {
      width: '70px',
      height: '54px',
      borderRadius: '10px',
      overflow: 'hidden',
      padding: 0,
      cursor: 'pointer',
      border: i === shot ? '1px solid var(--accent-warm)' : '1px solid var(--rule)',
      background: 'none',
      transform: i === shot ? 'translateY(-2px)' : 'none',
      transition: 'all var(--t-fast)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))))))));
}
window.ProjectsSection = ProjectsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/SkillsSection.jsx
try { (() => {
// SkillsSection.jsx — three concentric skill domains as glass cards
const NS = window.MarceloGuzmNGISDesignSystem_344c90;
function SectionHeader({
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: '60px',
      alignItems: 'end',
      marginBottom: '70px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(40px, 5vw, 76px)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "section-intro",
    style: {
      margin: 0
    }
  }, intro));
}
window.SectionHeader = SectionHeader;
function SkillsSection() {
  const {
    Card,
    Tag,
    TagList,
    InstrumentLabel
  } = NS;
  const groups = [{
    num: '01 / GIS & Remote Sensing',
    title: 'Spatial measurement',
    tags: ['ArcGIS Pro', 'ModelBuilder', 'QGIS', 'ENVI', 'Pix4Denterprise', 'Multispectral', 'DEM / DSM', 'NDVI / NWI', 'UAV photogrammetry']
  }, {
    num: '02 / Data Science & Statistics',
    title: 'Computational fluency',
    tags: ['R', 'Python', 'SQL', 'HTML', 'CSS', 'Geospatial modeling', 'Statistical analysis', 'Reproducible workflows']
  }, {
    num: '03 / Field & Environmental Work',
    title: 'Ecological practice',
    tags: ['Impact assessments', 'Quantitative ecology', 'Land cover', 'Large mammal surveys', 'Ornithology', 'Community engagement']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    style: {
      position: 'relative',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50px',
      left: '32px'
    }
  }, /*#__PURE__*/React.createElement(InstrumentLabel, {
    num: "03"
  }, "Instrumentation")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Technical skills",
    intro: "Three concentric domains \u2014 spatial measurement, computational analysis, and field ecology \u2014 that compound into a single environmental practice."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.num,
    kicker: g.num,
    title: g.title,
    interactive: true,
    style: {
      minHeight: '300px',
      '--fx-delay': groups.indexOf(g) * 110 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(TagList, null, g.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))))));
}
window.SkillsSection = SkillsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/SkillsSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.InstrumentLabel = __ds_scope.InstrumentLabel;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TagList = __ds_scope.TagList;

})();
