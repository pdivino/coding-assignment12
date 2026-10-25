// Imports the standard properties available to an HTML label.
import type { LabelHTMLAttributes } from 'react';

// Defines the properties that our Label component can receive.
export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  // Text displayed by the label.
  text?: string;

  // Allows the background colour to be changed in Storybook.
  backgroundColor?: string;

  // Connects the label to an input with a matching id.
  htmlFor?: string;

  // Determines whether the label should appear disabled.
  disabled?: boolean;
}