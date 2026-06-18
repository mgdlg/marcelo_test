import * as React from 'react';

/** Compact outlined accent label — years, "Featured" markers, statuses. */
export interface PillProps {
  children?: React.ReactNode;
  /** Fill with the accent colour instead of outlining. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}
export function Pill(props: PillProps): JSX.Element;
