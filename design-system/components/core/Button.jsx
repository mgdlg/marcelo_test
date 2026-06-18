import React from 'react';

/**
 * Button — the brand's pill action. Two variants: a filled amber→rust
 * gradient `primary` and a glass `ghost`. Renders an animated trailing
 * arrow by default. Uppercase, wide-tracked Barlow.
 */
export function Button({
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
    isolation: 'isolate',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(180deg, oklch(0.78 0.13 75 / 0.92), oklch(0.62 0.18 30 / 0.92))',
      color: 'var(--on-accent, oklch(0.16 0.04 250))',
      boxShadow: '0 8px 32px -10px oklch(0.78 0.13 75 / 0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
    },
    ghost: {
      background: 'rgba(255,255,255,0.04)',
      color: 'var(--ink, #fff)',
      border: '1px solid rgba(255,255,255,0.16)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
    },
  };

  const arrowColor = variant === 'primary' ? 'var(--on-accent, oklch(0.16 0.04 250))' : 'inherit';

  const inner = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="ds-btn-arrow" style={{ fontSize: '14px', letterSpacing: 0, color: arrowColor, transition: 'transform var(--t-fast, 220ms cubic-bezier(.2,.7,.2,1))' }}>→</span>
      )}
    </>
  );

  const onEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    const a = e.currentTarget.querySelector('.ds-btn-arrow');
    if (a) a.style.transform = 'translateX(4px)';
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    const a = e.currentTarget.querySelector('.ds-btn-arrow');
    if (a) a.style.transform = 'translateX(0)';
  };

  const props = {
    className: 'btn-shine',
    style: { ...base, ...variants[variant], ...style },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    ...rest,
  };

  if (href && !disabled) {
    return <a href={href} {...props}>{inner}</a>;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>{inner}</button>
  );
}
