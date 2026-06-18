import * as React from 'react';

/**
 * The signature liquid-glass surface — translucent panel with a luminous masked hairline.
 */
export interface GlassPanelProps {
  children?: React.ReactNode;
  /** Use the heavier blur + double hairline. @default false */
  strong?: boolean;
  /** Corner radius (CSS length or token). @default "var(--radius, 28px)" */
  radius?: string;
  /** Inner padding. @default "36px" */
  padding?: string;
  /** Element/tag to render as. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}
export function GlassPanel(props: GlassPanelProps): JSX.Element;
