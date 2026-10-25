// Imports the standard properties available to a table footer section.
import type { HTMLAttributes } from 'react';

// Defines the properties that our TableFooter can receive.
export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  // Text displayed in the footer.
  content?: string;

  // Number of table columns covered by the footer cell.
  columnSpan?: number;

  // Allows the footer background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the footer should appear disabled.
  disabled?: boolean;
}