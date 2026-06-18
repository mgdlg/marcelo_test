import * as React from 'react';

/** Wide-tracked uppercase mono label with a leading gradient rule; sits above a heading. */
export interface EyebrowProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;

/** Numbered instrument-style section marker, e.g. num="01" children="Orientation". */
export interface InstrumentLabelProps {
  /** The accented index, e.g. "01". */
  num?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function InstrumentLabel(props: InstrumentLabelProps): JSX.Element;
