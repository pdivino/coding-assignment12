// Imports the standard properties available to an HTML table.
import type { TableHTMLAttributes } from 'react';

// Defines the properties that our Table component can receive.
export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  // Headings displayed across the top of the Table.
  headers?: string[];

  // Table data, organized as an array of rows.
  // Each row is another array containing its cell values.
  rows?: string[][];

  // Text displayed across the bottom of the Table.
  footerText?: string;

  // Allows the Table background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the Table should appear disabled.
  disabled?: boolean;
}