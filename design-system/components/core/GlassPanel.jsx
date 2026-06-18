import React from 'react';

/**
 * GlassPanel — the signature liquid-glass surface. Translucent fill with a
 * luminous masked hairline (from the `.liquid-glass` utility shipped in the
 * design-system CSS). Use as the container for cards, asides, and panels.
 *
 * Requires the design system's styles.css to be linked (provides the
 * `.liquid-glass` / `.liquid-glass-strong` rules + their ::before hairline).
 */
export function GlassPanel({
  children,
  strong = false,
  radius = 'var(--radius, 28px)',
  padding = '36px',
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  return (
    <Tag
      className={`${strong ? 'liquid-glass-strong' : 'liquid-glass'} ${className}`.trim()}
      style={{ borderRadius: radius, padding, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
