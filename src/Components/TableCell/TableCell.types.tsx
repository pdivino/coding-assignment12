// Imports the standard properties available to an HTML table cell.
import type { TdHTMLAttributes } from 'react';

// Defines the properties that our TableCell can receive.
export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  // Text displayed inside the cell.
  content?: string;

  // Allows the cell background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the cell should appear disabled.
  disabled?: boolean;
}