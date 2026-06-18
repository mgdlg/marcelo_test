import React from 'react';

/**
 * Pill — a compact outlined accent label. Used for years on award rows,
 * "Featured" markers, and status tags. Outlined by default; `solid` fills it.
 */
export function Pill({ children, solid = false, style, ...rest }) {
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
    lineHeight: 1.4,
  };
  const skin = solid
    ? { background: 'var(--accent-warm)', color: 'var(--on-accent, oklch(0.16 0.04 250))', border: '1px solid var(--accent-warm)' }
    : { color: 'var(--accent-warm)', border: '1px solid var(--accent-warm)', background: 'transparent' };
  return (
    <span style={{ ...base, ...skin, ...style }} {...rest}>{children}</span>
  );
}
