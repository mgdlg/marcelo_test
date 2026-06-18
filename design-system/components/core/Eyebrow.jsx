import React from 'react';

/**
 * Eyebrow — a wide-tracked uppercase mono label with a leading gradient
 * rule. Sits above headings to categorise a section.
 */
export function Eyebrow({ children, style, ...rest }) {
  return (
    <p
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, var(--accent-warm), transparent)' }}></span>
      {children}
    </p>
  );
}

/**
 * InstrumentLabel — a numbered section marker ("01 · Orientation"), styled
 * like an instrument readout. A short rule precedes the number.
 */
export function InstrumentLabel({ num, children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        fontFamily: 'var(--font-mono, "Barlow", monospace)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--ink-faint, #888)',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ width: '32px', height: '1px', background: 'currentColor', opacity: 0.7 }}></span>
      {num != null && (
        <span style={{ color: 'var(--accent-warm)', fontVariantNumeric: 'tabular-nums' }}>{num}</span>
      )}
      {children}
    </span>
  );
}
