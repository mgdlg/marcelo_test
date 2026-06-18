import React from 'react';

/**
 * Tag — a small rounded chip used in clusters (skill lists, filters).
 * Subtle translucent fill with a hairline; lifts slightly on hover.
 */
export function Tag({ children, active = false, style, ...rest }) {
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
    cursor: 'default',
  };
  return (
    <span
      style={{ ...base, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </span>
  );
}

/**
 * TagList — flex-wrap container that lays out Tags with consistent gap.
 */
export function TagList({ children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', ...style }} {...rest}>
      {children}
    </div>
  );
}
