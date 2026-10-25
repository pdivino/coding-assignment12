// Imports the standard properties available to an HTML paragraph.
import type { HTMLAttributes } from 'react';

// Defines the properties that our Text component can receive.
export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  // The written content displayed by the component.
  content?: string;

  // Allows the background colour to be changed in Storybook.
  backgroundColor?: string;

  // Determines whether the text should appear disabled.
  disabled?: boolean;
}