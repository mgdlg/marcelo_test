import * as React from 'react';

/** A small rounded chip, used in clusters for skills, keywords, or filters. */
export interface TagProps {
  children?: React.ReactNode;
  /** Render in the highlighted (selected) state. @default false */
  active?: boolean;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;

/** Flex-wrap container that spaces a group of Tags. */
export interface TagListProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TagList(props: TagListProps): JSX.Element;
