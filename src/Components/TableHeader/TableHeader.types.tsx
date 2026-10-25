// Imports the standard properties available to a table header section.
import type { HTMLAttributes } from 'react';

// Defines the properties that our TableHeader can receive.
export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  // Headings displayed across the top of the table.
  headings?: string[];

  // Allows the background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the header should appear disabled.
  disabled?: boolean;
}