// Imports the standard properties available to an HTML table row.
import type { HTMLAttributes } from 'react';

// Defines the properties that our TableRow can receive.
export interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement> {
  // Values displayed across the row.
  cells?: string[];

  // Allows the row background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the row should appear disabled.
  disabled?: boolean;
}