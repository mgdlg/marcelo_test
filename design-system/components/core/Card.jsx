import React from 'react';
import { GlassPanel } from './GlassPanel.jsx';

/**
 * Card — a content card built on GlassPanel, following the skill/project
 * card pattern: an optional mono `kicker` in accent, a Syne title, and body
 * content. Lifts subtly on hover when `interactive`.
 */
export function Card({
  kicker,
  title,
  children,
  interactive = false,
  padding = '36px 32px 32px',
  className = '',
  style,
  ...rest
}) {
  return (
    <GlassPanel
      padding={padding}
      className={`fx-rise ${interactive ? 'card-glow' : ''} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {kicker && (
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-mono, "Barlow", monospace)',
          fontSize: '11px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--accent-warm)',
          marginBottom: '24px',
        }}>{kicker}</span>
      )}
      {title && (
        <h3 style={{
          fontFamily: 'var(--font-display, "Syne", sans-serif)',
          fontWeight: 600,
          fontSize: 'clamp(24px, 2vw, 30px)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          margin: '0 0 16px',
        }}>{title}</h3>
      )}
      {children}
    </GlassPanel>
  );
}
