import * as React from 'react';

/**
 * Content card on the liquid-glass surface: accent mono kicker + Syne title + body.
 */
export interface CardProps {
  /** Small uppercase mono label in accent colour, above the title. */
  kicker?: React.ReactNode;
  /** Syne display title. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Lift on hover with a spectral glow halo (use for clickable cards). @default false */
  interactive?: boolean;
  /** Inner padding. @default "36px 32px 32px" */
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
